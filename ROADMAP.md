# darwin-rocha-portfolio — ROADMAP

- [x] Portfolio + widget chat IA sobre el perfil
- [x] Optimización tokens IA (2026-09-21): prompt caching Claude, contexto por secciones con router por keywords (ahorro medido 31–93% por pregunta), 4→2 ejemplos, `usage` en respuesta
- [x] Simplificación Hero (2026-09-21, deploy commit 169608f): fuera sección Sobre mí y tira Highlights (el `summary` salía 2 veces); Hero a 2 columnas con Formación arriba a 0,5cm del menú + nota IA, botones y GitHub/LinkedIn/Email en línea en la columna lateral; ritmo entre secciones a ~2cm (40px); dark por defecto (sin elección guardada); `#sobre-mi` fuera del nav y del mapa del asistente; ejemplo de estudios del prompt ya no deriva a `#experiencia`; borrados `About/Highlights/RelatedProject/RelevantProject/SecondaryProjects` (muertos)
- [ ] Runtime functions en Node.js 20: deprecado, lo retiran el 2026-10-30 → subir a Node 22 antes de esa fecha
- [x] Ficha BankIn (2026-09-21, cerrado): queda donde está — parte de la historia de naveSpace en "Más proyectos" (`relatedProject`), no destacado propio
- [x] IA Solutions visual + ecosistema 5 tabs (2026-09-28): Asistentes y Harness absorbidos al ecosistema (Admin/Taller/BankIn/Asistentes/Harness); IA Solutions solo Merlin con lugar para 2 casos más; barras/tablas/pasos desde datos estructurados; sección HARNESS cableada al widget; narrativa por audiencia (números PM / cómo técnico)
- [x] spacecraft-mcp (2026-09-26/28, repo aparte): MCP stateless solo-lectura (20 tools, denylist 17 writes) + askAdmin/askTaller + ai_usage en Firestore; widgets por URL directa; modelo prod gemini-3.8-flash (3.6 sin cupo, 2.5 retirado)
- [ ] 2 casos más en IA Solutions (lugar reservado en código)
- [x] Link demo freemotionsLabs (2026-10-02): demo publicada en `https://freemotionslabs.web.app/`, enlazada en la ficha de IA Solutions con botones demo/código + contexto del asistente
- [x] Link AppSeguimientoVisitas (2026-10-01, local): `https://app-seguimiento-visitas.vercel.app/ingresar` en experiencia del portfolio + CV Word/PDF
- [ ] Pendiente que pidas: no empezar nada sin issue explícito
