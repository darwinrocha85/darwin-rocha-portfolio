# Darwin Rocha — Portafolio

Portafolio personal de **Darwin Rocha** — Software Engineer backend Java & Python, IA aplicada.
Presenta experiencia, skills y varios proyectos propios, con un asistente de chat con IA
embebido que responde preguntas sobre el perfil.

**Demo:** https://darwin-rocha-portfolio.web.app

## Stack
React 18 + Vite 5, CSS propio (sin framework), Firebase Hosting + Cloud Functions (asistente IA).

## Cómo correr en local
```bash
npm install
npm run dev      # http://localhost:5176
```

## Build y verificación
```bash
npm run build
npm run lint
npm run preview
```

## Contenido y estructura
Todo el contenido del portafolio (perfil, experiencia, skills, proyectos) vive en
`src/data/content.js` — se edita ese archivo, no hace falta tocar componentes. El CV
descargable está en `public/cv/`.

## Proyectos que muestra
- **naveSpace** — proyecto destacado: gestión de una flota de naves (museo, teatro, venta de
  entradas), con 3 apps propias (panel admin, tienda de entradas, landing de marketing).
- **Asistente IA** — segundo proyecto destacado: el propio chat embebido de este portafolio.
- **Más proyectos** — BankIn (pagos), Taller de Reparación y ContentHub, presentados como
  proyectos en camino a independizarse.
- Landings freelance para productoras musicales.

## Deploy
```bash
npm run build
firebase deploy --only hosting
```
Proyecto de Firebase: `darwin-rocha-portfolio` (ya configurado en `.firebaserc`).
