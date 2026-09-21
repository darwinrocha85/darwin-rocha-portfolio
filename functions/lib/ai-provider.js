const { GoogleGenerativeAI } = require("@google/generative-ai");
const Anthropic = require("@anthropic-ai/sdk");

// Capa de abstracción para que index.js pueda responder con Gemini o con Claude cambiando UNA
// variable de entorno (AI_PROVIDER=gemini|claude) — mismo patrón y mismos nombres de variable
// que spacecraftSystem-frontend/functions/lib/ai-provider.js (asistentes de admin/taller,
// ver claude/fase11-1-estado.md en el proyecto), portado a CommonJS.
//
// A propósito NO tiene loop de tool-calling: el asistente del portfolio está deliberadamente
// acotado a texto grounded en PORTFOLIO_CONTEXT (perfil + proyectos tal como se muestran en el
// sitio), nunca datos operativos en vivo de naveSpace — esa es la diferencia de propósito con
// los asistentes de admin/taller, y por eso este archivo es mucho más chico que el original:
// solo arma el mensaje, llama al modelo una vez y devuelve el texto.

const DEFAULT_GEMINI_MODEL = "gemini-3.6-flash";
// Haiku 4.5 es el modelo de Anthropic en el mismo escalón de precio/velocidad que Gemini
// Flash — el que tiene sentido para un asistente de este tamaño (mismo criterio que admin/taller).
const DEFAULT_CLAUDE_MODEL = "claude-haiku-4-5-20251001";

/**
 * Qué proveedor usar. AI_PROVIDER se lee una vez por invocación de la Cloud Function.
 */
function resolveProvider() {
  const raw = (process.env.AI_PROVIDER || "gemini").trim().toLowerCase();
  if (raw !== "gemini" && raw !== "claude") {
    const err = new Error(`AI_PROVIDER inválido: "${raw}". Los valores válidos son "gemini" o "claude".`);
    err.isConfigError = true;
    throw err;
  }
  return raw;
}

async function runGemini({ apiKey, model, systemPrompt, history, question, temperature, maxOutputTokens }) {
  const genAI = new GoogleGenerativeAI(apiKey);
  const generativeModel = genAI.getGenerativeModel({ model, systemInstruction: systemPrompt });

  const contents = [
    ...history.map((h) => ({ role: h.role === "assistant" ? "model" : "user", parts: [{ text: h.text }] })),
    { role: "user", parts: [{ text: question }] },
  ];

  const result = await generativeModel.generateContent({
    contents,
    generationConfig: { maxOutputTokens, temperature },
  });

  // Nota de costo: el system prompt (instrucciones + PORTFOLIO_CONTEXT entero) es idéntico
  // en cada request, así que queda cubierto por el caché implícito de la API cuando el
  // modelo lo soporta. Este SDK (@google/generative-ai) no expone caché explícito.
  const text = (result.response.text() || "").trim();
  return {
    answer: text || "No tengo esa información en el portfolio. Para más detalle mira la sección #contacto",
    usage: result.response.usageMetadata || undefined,
  };
}

async function runClaude({ apiKey, model, systemPrompt, history, question, temperature, maxOutputTokens }) {
  const anthropic = new Anthropic({ apiKey });

  // Los roles neutrales ("user"/"assistant") ya coinciden con los de la Messages API de
  // Claude — no hace falta mapear nada, a diferencia de Gemini.
  const messages = [
    ...history.map((h) => ({ role: h.role, content: h.text })),
    { role: "user", content: question },
  ];

  // Prompt caching: el system prompt (instrucciones + contexto entero, idéntico siempre)
  // va con breakpoint de caché. Historial y pregunta cambian en cada request y quedan fuera.
  // El `usage` se devuelve para verificar cache hits en logs (cache_read_input_tokens).
  const response = await anthropic.messages.create({
    model,
    system: [{ type: "text", text: systemPrompt, cache_control: { type: "ephemeral" } }],
    max_tokens: maxOutputTokens,
    temperature,
    messages,
  });

  const text = response.content
    .filter((block) => block.type === "text")
    .map((block) => block.text)
    .join("\n")
    .trim();

  return {
    answer: text || "No tengo esa información en el portfolio. Para más detalle mira la sección #contacto",
    usage: response.usage || undefined,
  };
}

/**
 * Clasifica un error del SDK del proveedor como "cuota agotada" (429) de forma normalizada,
 * para que index.js responda con el mismo mensaje amigable sin importar qué proveedor estaba
 * activo.
 */
function classifyProviderError(err) {
  return (
    err?.status === 429 ||
    /\b429\b/.test(err?.message || "") ||
    /quota|resource_exhausted|too many requests|rate.?limit|overloaded/i.test(err?.message || "")
  );
}

/**
 * Punto de entrada único del asistente del portfolio. Devuelve { answer, provider, mock? } o
 * tira un Error con `.isQuotaError` (bool) y `.provider` seteados.
 */
async function runAssistant({ systemPrompt, history, question, temperature = 0.55, maxOutputTokens = 800 }) {
  const provider = resolveProvider();

  if (provider === "claude") {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return {
        mock: true,
        provider,
        answer:
          "[mock sin ANTHROPIC_API_KEY, AI_PROVIDER=claude] Configura ANTHROPIC_API_KEY en " +
          "esta Function para respuesta real. Pregunta recibida: " +
          question.slice(0, 120),
      };
    }
    const model = process.env.CLAUDE_MODEL || DEFAULT_CLAUDE_MODEL;
    try {
      const result = await runClaude({ apiKey, model, systemPrompt, history, question, temperature, maxOutputTokens });
      return { ...result, provider };
    } catch (err) {
      err.isQuotaError = classifyProviderError(err);
      err.provider = provider;
      throw err;
    }
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return {
      mock: true,
      provider,
      answer:
        "[mock sin GEMINI_API_KEY] Configura GEMINI_API_KEY en esta Function para " +
        "respuesta real. Pregunta recibida: " +
        question.slice(0, 120),
    };
  }
  const model = process.env.GEMINI_MODEL || DEFAULT_GEMINI_MODEL;
  try {
    const result = await runGemini({ apiKey, model, systemPrompt, history, question, temperature, maxOutputTokens });
    return { ...result, provider };
  } catch (err) {
    err.isQuotaError = classifyProviderError(err);
    err.provider = provider;
    throw err;
  }
}

module.exports = { resolveProvider, runAssistant };
