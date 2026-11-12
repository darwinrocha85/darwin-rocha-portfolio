# darwin-rocha-portfolio — AGENTS.md

> Proyecto independiente. Abrir opencode con cwd en `darwin-rocha-portfolio/`, nunca en `Projects/`.
> Stack: React 18.3 + Vite 5 (fetch nativo, sin axios) + Cloud Functions (`functions/`, fn `ask`).

## Cómo correr
- `npm.cmd install` + `npm.cmd run dev` → `:5179` (puerto propio con `strictPort`, sin colisiones),
  proxy `/api` → `http://localhost:5002`, emuladores functions :5002 / hosting :5000
- Sin backend externo: la API propia es `/api/ask` (prod) o emulador (dev). Sin `.env`.
- Contenido: `src/data/content.js` es la única fuente — no duplicar contenido en otros archivos.
  Estructura actual: Hero → Experiencia → Ecosistema (5 tabs: Admin/Taller/BankIn/Asistentes/Harness)
  → IA Solutions (freemotionsLabs, lugar para más casos) → Contacto.
  Los visuales (barras, tablas, pasos) salen de datos estructurados en content.js
  (`results`, `compareTable`, `benchBars`, `flowSteps`…) y `scripts/generate-agent-context.mjs`
  los serializa al contexto del widget — si agregás un campo visual, agregalo al script.

## Deploy
- Proyecto propio `darwin-rocha-portfolio`: `npm.cmd run build` (corre `generate:agent-context`)
  + `firebase.cmd deploy --only hosting,functions` → `darwin-rocha-portfolio.web.app`
  (sin `functions` los cambios del asistente IA no suben)

## No hacer
- No romper el rewrite `/api/ask` → Function `ask` en `firebase.json`.
- No commitear `node_modules/`, `dist/`, `.firebase/` (ver `.gitignore`).
- BankIn y Taller son tabs del ecosistema, no secciones propias.

## LinkedIn (regla de publicación)
- Cada cambio que sume valor visible (nuevo tab, tabla, métrica, deep-link, caso) deja además un **post corto listo para pegar** (no se publica solo: el dueño lo pega en su cuenta).
- Si detectás una nueva funcionalidad o un nuevo proyecto/caso, agregá su post al historial local `docs/linkedin-posts.md` (archivo ignorado por git, no commitear) con estado `- [ ] Borrador`; al avisar que se publicó, marcar `- [x] Publicado (fecha)`.
- Formato: resultado primero en 1 línea (`71% menos…`), link profundo `https://darwin-rocha-portfolio.web.app/?tab=<id>#proyecto-destacado` (el `?tab=` sobrevive al redirect de LinkedIn; ids: `taller`, `bankin`, `asistentes`, `harness`; Admin es la URL base), pregunta final que invite comentarios, 3–5 hashtags.
- Tono RRHH (dinero/negocio, sin jerga), números solo si están en `content.js` (nada inventado), español por defecto.
- Cada post lleva además una **imagen-diagrama** (1080×1080 o 1200×627) que transmita la idea visualmente: cajas + flechas numeradas estilo diagrama de arquitectura (cliente a la izq., backend a la der.), máx. 5–6 pasos, etiquetas sin jerga. Formato en **dos columnas: pasos a la izq. + stack tecnológico a la der.** (conectados por color, stack solo de `content.js`). **Estilo (decidido 2026-11-08): cada post se entrega en DOS versiones y el dueño elige** — `sobrio` (fondo oscuro plano, líneas finas, Segoe UI en minúsculas, un solo acento esmeralda) y `color` (misma base, pero un color por tecnología unido al paso donde actúa, título en degradado y leyenda "cada color, una tecnología"). Se descartó el full color de bloques saturados y MAYÚSCULAS ("juego de niños"). Plantilla: `scripts/make-linkedin-bankin-modern.py` (`python scripts/make-linkedin-bankin-modern.py` genera `public/linkedin-<tema>-sobrio.*` y `-color.*`; para otro tema, copiar y cambiar pasos/tecnologías). Generar además un **GIF animado** (un punto recorre el flujo y enciende los pasos en orden) y la versión estática `.png`/`.jpg`. El stack solo sale de `content.js` o, si falta ahí, se verifica en el repo real. El diagrama sale de los datos de `content.js` (`techDescription`, `decisions`, `flowSteps`…) — nada inventado. La sobriedad con fondo claro + 1 acento queda para el banner del perfil.
- Deep-links: `FeaturedProject.jsx` lee `?tab=` y `#proyecto-destacado-<tab>` y activa la pestaña; al cambiar de tab se actualiza la URL con `replaceState`.
