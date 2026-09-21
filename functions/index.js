const { onRequest } = require("firebase-functions/v2/https");
const cors = require("cors")({ origin: true });
const { runAssistant } = require("./lib/ai-provider.js");
const { sanitizeHistory } = require("./lib/chat-utils.js");

// Generado desde src/data/content.js — es la única fuente de verdad del contenido del
// portfolio (misma data que renderiza la UI). NO editar portfolioContext.generated.js a
// mano: correr `npm run generate:agent-context` en la raíz del repo tras cualquier cambio
// a content.js (firebase.json ya lo corre solo como predeploy de "hosting" y "functions").
const generated = require("./portfolioContext.generated.js");
// El generado nuevo exporta { ALL, sections } (ver scripts/generate-agent-context.mjs). Si el
// archivo en disco todavía es el formato viejo (string plano), se usa entero como antes.
const portfolioSections = generated && generated.sections ? generated.sections : null;
const portfolioFull = generated && generated.ALL ? generated.ALL : generated;

// Motor del asistente: Gemini o Claude según la variable de entorno AI_PROVIDER (default
// "gemini"; ver lib/ai-provider.js). Mismo patrón de switch que ya usan los asistentes del
// panel admin y del taller de naveSpace (spacecraftSystem-frontend/functions), pero SIN el
// loop de tool-calling de esos dos: este asistente responde solo con lo que ya está escrito
// en el portfolio, nunca datos operativos en vivo — alcance confirmado con el usuario, ver
// claude/fase4-estado.md.
const SYSTEM_HEAD = `Eres el asistente del portfolio de Darwin Rocha. Respondes SOLO sobre lo que hay en PORTFOLIO_CONTEXT: su perfil, experiencia, educación, skills, y los proyectos mostrados en este portfolio (naveSpace, este mismo asistente IA, BankIn, Taller de Reparación, ContentHub, y las landings de Sonora).

Si preguntan algo que no está en PORTFOLIO_CONTEXT (salario, disponibilidad, datos personales no listados, o cualquier tema sin relación con este portfolio — cultura general, matemáticas, noticias, o cualquier otro tema), no respondas ese tema. Responde exactamente: "No tengo esa información en el portfolio. Para más detalle mira la sección [elige la más relacionada: #experiencia, #skills, #proyecto-destacado, #proyectos-backend, #otros-proyectos, #contacto]".

No inventes, y no cites el PORTFOLIO_CONTEXT casi textual — es la fuente de datos, no el guion de tu respuesta. Contalo con tus propias palabras, como si le explicaras el trabajo de Darwin a alguien interesado: tono cercano y natural, variando cómo arrancás cada respuesta (no repitas siempre la misma estructura ni las mismas frases del contexto). Evitá sonar a folleto o a IA genérica. Si la pregunta hace referencia a algo dicho antes en la conversación ("y eso", "lo mismo", "por qué"), usá el historial para entender a qué se refiere. En español por defecto (si preguntan en inglés, responde en inglés). Entre 2 y 4 frases, y deriva a la sección cuando aplique.

Ejemplos:
- Pregunta: ¿dónde estudió Darwin? -> Respuesta: Estudió Ciencias de la Computación en la Univ. de Carabobo (2013) y después se especializó en Desarrollo de Software (2022). Lo verás arriba del todo, junto a su presentación.
- Pregunta: ¿cuánto pides de salario? -> Respuesta: No tengo esa información en el portfolio. Para más detalle mira la sección #contacto.
`;

// Secciones que viajan SIEMPRE (chicas: identidad + destacados + mapa del sitio).
const ALWAYS_SECTIONS = ["PERFIL", "DESTACADOS", "SECCIONES"];

// Palabras clave (ES/EN) → sección del contexto. Si la pregunta no matchea nada fuera de
// ALWAYS_SECTIONS, se manda el contexto COMPLETO (comportamiento anterior) — el router solo
// ahorra cuando está seguro, nunca deja afuera algo relevante por ahorrar.
const SECTION_RULES = [
  { key: "EXPERIENCIA", words: ["experiencia", "trabajo", "trabaja", "empleo", "empresa", "career", "work", "job", "company"] },
  { key: "EDUCACION", words: ["estudi", "educaci", "universidad", "carrera", "titulo", "título", "degree", "study", "studied", "university", "school", "college"] },
  { key: "SKILLS", words: ["skill", "stack", "tecnol", "herramienta", "lenguaje", "sabe", "tech"] },
  { key: "NAVESPACE", words: ["navespace", "nave", "museo", "teatro", "entrada", "flota", "ticket"] },
  { key: "ASISTENTE", words: ["asistente", "agente", "inteligencia", "chat", "widget", "modelo", "agent"] },
  { key: "BANKIN", words: ["bankin", "banco", "pago", "tarjeta", "cobro"] },
  { key: "SECUNDARIOS", words: ["taller", "reparaci", "contenthub", "contenido", "marketplace", "presupuesto"] },
  { key: "OTROS", words: ["landing", "freelance", "sonora", "otros proyectos", "other project"] },
];

const PROJECT_SECTIONS = ["NAVESPACE", "ASISTENTE", "BANKIN", "SECUNDARIOS"];

function pickContext(question) {
  if (!portfolioSections) return portfolioFull;
  const q = (question || "").toLowerCase();
  const matched = new Set(ALWAYS_SECTIONS);
  // "proyecto(s)" genérico = las 4 secciones de proyectos, no todo el contexto.
  if (q.includes("proyecto") || q.includes("project") || q.includes("portfolio") || q.includes("app")) {
    for (const k of PROJECT_SECTIONS) matched.add(k);
  }
  for (const { key, words } of SECTION_RULES) {
    if (words.some((w) => q.includes(w))) matched.add(key);
  }
  if (matched.size === ALWAYS_SECTIONS.length) {
    // Sin match: solo PERFIL + DESTACADOS + SECCIONES. El saludo y el rechazo ("no tengo
    // esa info, mirá #sección") no necesitan el resto, y los follow-ups ("y eso?") resuelven
    // por historial — la respuesta anterior ya trae el detalle. Nunca se manda de más por
    // las dudas: si el modelo necesita una sección, la pregunta suele nombrarla.
    return [...ALWAYS_SECTIONS].map((k) => portfolioSections[k]).filter(Boolean).join("\n\n");
  }
  const parts = [...matched].map((k) => portfolioSections[k]).filter(Boolean);
  return parts.length ? parts.join("\n\n") : portfolioFull;
}

function buildSystemPrompt(question) {
  return `${SYSTEM_HEAD}\nPORTFOLIO_CONTEXT:\n${pickContext(question)}\n`;
}

// Hook solo para test local (node): verifica el router sin desplegar.
exports._pickContext = pickContext;

// Máximo de turnos previos (usuario+asistente) que se reenvían al modelo. Acotado para
// que una conversación larga no infle el costo por request sin límite — 6 turnos = las
// últimas 3 idas y vueltas, de sobra para resolver un "¿y eso cuánto cuesta?".
const MAX_HISTORY_TURNS = 6;

exports.ask = onRequest(
  {
    region: "us-central1",
    cors: true,
    maxInstances: 5,
  },
  async (req, res) => {
    cors(req, res, async () => {
      if (req.method === "OPTIONS") {
        res.status(204).send("");
        return;
      }
      if (req.method !== "POST") {
        res.status(405).json({ error: "Method not allowed, use POST" });
        return;
      }

      const question = (req.body && req.body.question || "").toString().trim();
      if (!question) {
        res.status(400).json({ error: "Falta 'question' en el body" });
        return;
      }
      if (question.length > 500) {
        res.status(400).json({ error: "Pregunta demasiado larga (max 500)" });
        return;
      }

      const history = sanitizeHistory(req.body && req.body.history, MAX_HISTORY_TURNS);

      try {
        const result = await runAssistant({
          systemPrompt: buildSystemPrompt(question),
          history,
          question,
          temperature: 0.55,
          maxOutputTokens: 800,
        });
        res.json(result);
      } catch (err) {
        console.error("ask error", err);

        if (err.isQuotaError) {
          const providerLabel = err.provider === "claude" ? "Claude" : "Gemini";
          res.status(429).json({
            error:
              `Se agotó la cuota gratuita del asistente (${providerLabel}) por hoy. Probá de ` +
              "nuevo más tarde (la cuota se renueva a diario).",
          });
          return;
        }

        res.status(500).json({ error: "Error al consultar el modelo. Intenta de nuevo." });
      }
    });
  }
);
