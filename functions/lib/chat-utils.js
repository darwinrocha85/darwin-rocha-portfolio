// Utilidad compartida por el backend del asistente del portfolio (index.js). Separado de
// ai-provider.js porque esto no tiene nada que ver con qué proveedor de IA se use — es
// sanitización de lo que manda el cliente. Mismo criterio y misma forma que
// spacecraftSystem-frontend/functions/lib/chat-utils.js (asistentes de admin/taller), portado
// a CommonJS porque este proyecto de Functions no usa ESM.

/**
 * Sanea el historial que manda el cliente a una forma neutral [{role: "user"|"assistant",
 * text}], sin nada específico de Gemini ni de Claude — ai-provider.js la adapta al formato de
 * cada proveedor.
 *
 * No confía en lo que mande el cliente (endpoint público, cors:true, sin auth): valida forma,
 * longitud y alternancia estricta user/assistant server-side, independientemente de lo que ya
 * recorte el widget (AgentWidget.jsx).
 */
function sanitizeHistory(historyRaw, maxTurns) {
  if (!Array.isArray(historyRaw)) return [];

  const cleaned = [];
  let expectedRole = "user";
  for (const item of historyRaw) {
    if (!item || typeof item.text !== "string") continue;
    const text = item.text.trim().slice(0, 500);
    if (!text) continue;
    const role = item.role === "assistant" ? "assistant" : item.role === "user" ? "user" : null;
    if (role !== expectedRole) continue; // fuerza que arranque en "user" y alterne estricto
    cleaned.push({ role, text });
    expectedRole = role === "user" ? "assistant" : "user";
  }

  // Si terminó esperando un turno "assistant" es porque el último elemento aceptado fue un
  // "user" sin respuesta todavía — se descarta para no romper la alternancia.
  if (expectedRole === "assistant" && cleaned.length) cleaned.pop();

  return cleaned.slice(-maxTurns * 2);
}

module.exports = { sanitizeHistory };
