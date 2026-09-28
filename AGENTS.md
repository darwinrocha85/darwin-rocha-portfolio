# darwin-rocha-portfolio — AGENTS.md

> Proyecto independiente. Abrir opencode con cwd en `darwin-rocha-portfolio/`, nunca en `Projects/`.
> Stack: React 18.3 + Vite 5 (fetch nativo, sin axios) + Cloud Functions (`functions/`, fn `ask`).

## Cómo correr
- `npm.cmd install` + `npm.cmd run dev` → `:5179` (puerto propio con `strictPort`, sin colisiones),
  proxy `/api` → `http://localhost:5002`, emuladores functions :5002 / hosting :5000
- Sin backend externo: la API propia es `/api/ask` (prod) o emulador (dev). Sin `.env`.
- Contenido: `src/data/content.js` es la única fuente — no duplicar contenido en otros archivos.
  Estructura actual: Hero → Experiencia → Ecosistema (5 tabs: Admin/Taller/BankIn/Asistentes/Harness)
  → IA Solutions (solo Merlin, lugar para 2 casos más) → Otros → Contacto.
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
- BankIn y Taller son tabs del ecosistema, no secciones propias; Merlin vive solo en IA Solutions.
