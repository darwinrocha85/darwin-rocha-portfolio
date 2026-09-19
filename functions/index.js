const { onRequest } = require("firebase-functions/v2/https");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const cors = require("cors")({ origin: true });

// Generado desde src/data/content.js — es la única fuente de verdad del contenido del
// portfolio (misma data que renderiza la UI). NO editar portfolioContext.generated.js a
// mano: correr `npm run generate:agent-context` en la raíz del repo tras cualquier cambio
// a content.js (firebase.json ya lo corre solo como predeploy de "hosting" y "functions").
const portfolioContext = require("./portfolioContext.generated.js");

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

// Esta función NO confía en el historial tal cual lo manda el cliente: es un endpoint
// público (cors: true, sin auth), así que cualquiera podría mandar un array armado a
// mano. Se revalida forma, longitud y alternancia estricta user/model acá, server-side,
// independientemente de lo que ya recorte el widget.
function sanitizeHistory(historyRaw) {
  if (!Array.isArray(historyRaw)) return [];

  const cleaned = [];
  let expectedRole = "user";
  for (const item of historyRaw) {
    if (!item || typeof item.text !== "string") continue;
    const text = item.text.trim().slice(0, 500);
    if (!text) continue;
    const role = item.role === "assistant" ? "model" : item.role === "user" ? "user" : null;
    if (role !== expectedRole) continue; // fuerza que arranque en "user" y alterne estricto
    cleaned.push({ role, parts: [{ text }] });
    expectedRole = role === "user" ? "model" : "user";
  }

  // Si el historial queda esperando una respuesta ("model") que nunca llegó, esa última
  // pregunta suelta se descarta para no romper la alternancia que exige la API de Gemini.
  if (expectedRole === "model" && cleaned.length) cleaned.pop();

  return cleaned.slice(-MAX_HISTORY_TURNS * 2);
}

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

      const history = sanitizeHistory(req.body && req.body.history);

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        // Mock local sin key — útil para probar widget sin gastar
        res.json({
          answer:
            "[mock sin GEMINI_API_KEY] Para más detalle mira la sección #proyecto-destacado. Configura GEMINI_API_KEY en Functions para respuesta real. Pregunta recibida: " +
            question.slice(0, 120),
          mock: true,
        });
        return;
      }

      try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
          model: "gemini-3.6-flash",
          systemInstruction: SYSTEM_PROMPT,
        });
        const result = await model.generateContent({
          contents: [...history, { role: "user", parts: [{ text: question }] }],
          generationConfig: { maxOutputTokens: 800, temperature: 0.55 },
        });
        const text = result.response.text() || "No tengo esa información en el portfolio. Para más detalle mira la sección #contacto";
        res.json({ answer: text.trim() });
      } catch (err) {
        console.error("ask error", err);
        res.status(500).json({ error: "Error al consultar el modelo. Intenta de nuevo." });
      }
    });
  }
);
