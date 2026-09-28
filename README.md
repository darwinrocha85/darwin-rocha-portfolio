# Darwin Rocha — Portafolio

Portafolio personal de **Darwin Rocha** — Software Engineer backend Java & Python, IA aplicada.
Presenta experiencia y proyectos propios, con un asistente de chat con IA embebido que
responde preguntas sobre el perfil.

**Demo:** https://darwin-rocha-portfolio.web.app

## Stack
React 18 + Vite 5, CSS propio (sin framework), Firebase Hosting + Cloud Functions (asistente IA).

## Cómo correr en local
```powershell
npm.cmd install
npm.cmd run dev      # http://localhost:5179 (strictPort)
```
El widget llama a `/api/ask` (rewrite a la Function `ask`; en local, proxy a `http://localhost:5002`
con el emulador `npm.cmd run serve` dentro de `functions/`). Sin `.env`.

## Build y verificación
```powershell
npm.cmd run build
npm.cmd run lint
npm.cmd run preview
```

## Contenido y estructura
Todo el contenido vive en `src/data/content.js` — se edita ese archivo, no hace falta tocar
componentes. Es también la fuente del contexto del asistente: `scripts/generate-agent-context.mjs`
lo serializa (barras, tablas, pasos incluidos) y el predeploy lo regenera solo. El CV
descargable está en `public/cv/`.

## Proyectos que muestra
Hero → Experiencia → Ecosistema (5 tabs: Admin/Taller/BankIn/Asistentes/Harness) →
IA Solutions (solo Merlin, lugar para 2 casos más) → Otros → Contacto.

## Deploy
```powershell
npm.cmd run build
firebase.cmd deploy --only hosting,functions
```
Proyecto de Firebase: `darwin-rocha-portfolio` (ya configurado en `.firebaserc`). Sin
`functions` los cambios del asistente IA no suben.
