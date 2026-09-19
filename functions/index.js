const { onRequest } = require("firebase-functions/v2/https");
const cors = require("cors")({ origin: true });
const { runAssistant } = require("./lib/ai-provider.js");
const { sanitizeHistory } = require("./lib/chat-utils.js");

// Generado desde src/data/content.js — es la única fuente de verdad del contenido del
// portfolio (misma data que renderiza la UI). NO editar portfolioContext.generated.js a
// mano: correr `npm run generate:agent-context` en la raíz del repo tras cualquier cambio
// a content.js (firebase.json ya lo corre solo como predeploy de "hosting" y "functions").
const portfolioContext = require("./portfolioContext.generated.js");

// Motor del asistente: Gemini o Claude según la variable de entorno AI_PROVIDER (default
// "gemini"; ver lib/ai-provider.js). Mismo patrón de switch que ya usan los asistentes del
// panel admin y del taller de naveSpace (spacecraftSystem-frontend/functions), pero SIN el
// loop de tool-calling de esos dos: este asistente responde solo con lo que ya está escrito
// en el portfolio, nunca datos operativos en vivo — alcance confirmado con el usuario, ver
// claude/fase4-estado.md.
const SYSTEM_PROMPT = `Eres el asistente del portfolio de Darwin Rocha. Respondes SOLO sobre lo que hay en PORTFOLIO_CONTEXT: su perfil, experiencia, educación, skills, y los proyectos mostrados en este portfolio (naveSpace, este mismo asistente IA, BankIn, Taller de Reparación, ContentHub, y las landings de Sonora).

Si preguntan algo que no está en PORTFOLIO_CONTEXT (salario, disponibilidad, datos personales no listados, o cualquier tema sin relación con este portfolio — cultura general, matemáticas, noticias, o cualquier otro tema), no respondas ese tema. Responde exactamente: "No tengo esa información en el portfolio. Para más detalle mira la sección [elige la más relacionada: #sobre-mi, #experiencia, #skills, #proyecto-destacado, #proyectos-backend, #otros-proyectos, #contacto]".

No inventes, y no cites el PORTFOLIO_CONTEXT casi textual — es la fuente de datos, no el guion de tu respuesta. Contalo con tus propias palabras, como si le explicaras el trabajo de Darwin a alguien interesado: tono cercano y natural, variando cómo arrancás cada respuesta (no repitas siempre la misma estructura ni las mismas frases del contexto). Evitá sonar a folleto o a IA genérica. Si la pregunta hace referencia a algo dicho antes en la conversación ("y eso", "lo mismo", "por qué"), usá el historial para entender a qué se refiere. En español por defecto (si preguntan en inglés, responde en inglés). Entre 2 y 4 frases, y deriva a la sección cuando aplique.

Ejemplos:
- Pregunta: ¿dónde estudió Darwin? -> Respuesta: Estudió Ciencias de la Computación en la Univ. de Carabobo (2013) y después se especializó en Desarrollo de Software (2022). Podés ver más en #experiencia.
- Pregunta: ¿qué hace naveSpace? -> Respuesta: naveSpace es su proyecto más grande: una flota de naves que funciona como museo o teatro, con venta de entradas real y un taller aparte que lleva presupuestos y reparaciones. Lo fue armando por partes hasta llegar a 4 apps funcionando hoy. Hay más detalle en #proyecto-destacado.
- Pregunta: ¿cuánto pides de salario? -> Respuesta: No tengo esa información en el portfolio. Para más detalle mira la sección #contacto.
- Pregunta: ¿cuánto es 5 más 5? -> Respuesta: No tengo esa información en el portfolio. Para más detalle mira la sección #contacto.

PORTFOLIO_CONTEXT:
${portfolioContext}
`;

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
          systemPrompt: SYSTEM_PROMPT,
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
