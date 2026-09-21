# darwin-rocha-portfolio — ROADMAP

- [x] Portfolio + widget chat IA sobre el perfil
- [x] Optimización tokens IA (2026-09-21): prompt caching Claude, contexto por secciones con router por keywords (ahorro medido 31–93% por pregunta), 4→2 ejemplos, `usage` en respuesta
- [x] Simplificación Hero (2026-09-21, deploy commit 169608f): fuera sección Sobre mí y tira Highlights (el `summary` salía 2 veces); Hero a 2 columnas con Formación arriba a 0,5cm del menú + nota IA, botones y GitHub/LinkedIn/Email en línea en la columna lateral; ritmo entre secciones a ~2cm (40px); dark por defecto (sin elección guardada); `#sobre-mi` fuera del nav y del mapa del asistente; ejemplo de estudios del prompt ya no deriva a `#experiencia`; borrados `About/Highlights/RelatedProject/RelevantProject/SecondaryProjects` (muertos)
- [ ] Runtime functions en Node.js 20: deprecado, lo retiran el 2026-10-30 → subir a Node 22 antes de esa fecha
- [ ] Decidir ficha BankIn: destacado propio vs parte de naveSpace
- [ ] Pendiente que pidas: no empezar nada sin issue explícito
