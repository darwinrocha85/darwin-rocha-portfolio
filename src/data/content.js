export const profile = {
  name: 'Darwin Rocha',
  role: 'Software Engineer — Backend Java & Python | IA Aplicada',
  location: 'Barcelona, España',
  email: 'Darwinrocha85@gmail.com',
  github: 'https://github.com/darwinrocha85',
  linkedin: 'https://linkedin.com/in/darwinrocha',
  cvUrl: '/cv/Darwin_Rocha_CV.pdf',
  summary:
    'Ingeniero en Computación con más de 10 años de experiencia en desarrollo backend con Python y Java: APIs REST, microservicios y sistemas de base de datos para plataformas en producción. En los últimos años integré herramientas de IA (Claude, OpenCode) directamente en mi flujo de trabajo para acelerar el análisis de código y reducir tiempos de entrega.',
  aiNote:
    'El proyecto destacado de abajo es un ejemplo directo de ese proceso: yo defino la arquitectura y las reglas de negocio con el cliente, y colaboro con un agente de IA para construir, verificar y desplegar cada fase — el mismo flujo que uso hoy en mi trabajo diario.',
}

export const highlights = [
  { value: '10+', label: 'años de experiencia en desarrollo backend' },
  { value: '4', label: 'apps de naveSpace en producción, de punta a punta' },
  { value: '7', label: 'empresas en 3 países, siempre en backend' },
  { value: 'ML', label: 'real con PyTorch — no solo prompts' },
]

export const experience = [
  {
    company: 'Clorian Ticketing',
    role: 'Java Backend',
    place: 'Barcelona, España',
    period: '2026',
    tech: ['Java', 'Spring Boot', 'JSP', 'MySQL', 'Jenkins', 'AWS', 'IA (Claude, OpenCode)'],
    bullets: [
      'Desarrollo y mantenimiento del producto en Java, refactorizando código existente y agregando funcionalidades a distintos microservicios.',
      'Mantenimiento de la plataforma en JSP en paralelo a los nuevos microservicios, asegurando continuidad operativa del sistema.',
      'Integración de herramientas de IA en el flujo de trabajo para acelerar el análisis de código y optimizar tiempos de respuesta en desarrollo.',
    ],
  },
  {
    company: 'Universidad Simón Bolívar',
    role: 'Prácticas de Máster en Inteligencia Artificial (Co-op)',
    place: 'Caracas, Venezuela · Remoto',
    period: '2024 — 2025',
    tech: ['Python', 'PyTorch', 'NumPy', 'scikit-learn', 'OpenCV', 'Pandas', 'Matplotlib'],
    bullets: [
      'Modelos de aprendizaje automático para clasificación y análisis multimodal (audio, video, texto), con arquitecturas de fusión de características para reconocimiento de emociones enfocadas en simplicidad e interpretabilidad.',
      'Pipelines completos de IA — preprocesamiento, extracción de características, entrenamiento, validación cruzada y métricas (F1-score, matrices de confusión) — experimentando con activación adaptativa y normalización para estabilidad numérica en modelos ligeros.',
      'Gestión de datasets a gran escala (limpieza, alineación de modalidades, scripts reproducibles) y documentación técnica siguiendo estándares de investigación reproducible.',
    ],
  },
  {
    company: 'Carver Advanced',
    role: 'Software Developer',
    place: 'Barcelona, España',
    period: '2025',
    tech: ['Java', 'MySQL', 'SQL Server', 'RabbitMQ', 'SOAP/REST', 'JUnit', 'Mockito', 'SonarQube'],
    bullets: [
      'Pruebas unitarias e integradas con JUnit, Mockito y Spring Test, reduciendo errores en integración con servicios externos.',
      'Funcionalidades backend para servicios SOAP/REST, ampliando la interacción entre módulos internos y externos.',
    ],
  },
  {
    company: 'Autolab SAS',
    role: 'Desarrollador Full Stack',
    place: 'Remoto, Colombia',
    period: '2021 — 2024',
    tech: ['Python', 'Kotlin', 'Flask', 'EmberJS', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS'],
    bullets: [
      'Funcionalidades críticas para un ERP/CRM de gestión de trabajos, incidencias y garantías, mejorando la eficiencia operativa.',
      'Apps Android para mecánicos y administradores de talleres, optimizando el registro de tareas y datos operativos.',
      'Arquitecturas de baja latencia en Python y EmberJS para mejorar tiempos de respuesta y escalabilidad.',
    ],
  },
  {
    company: 'GlobalHitss',
    role: 'Desarrollador Java',
    place: 'Bogotá, Colombia',
    period: '2019 — 2021',
    tech: ['Java EE', 'PrimeFaces', 'JSF', 'JPA', 'Oracle 12c', 'WebLogic'],
    bullets: [
      'Módulo de agendamiento de técnicos, optimizando asignación y seguimiento de visitas.',
      'APIs RESTful para inventarios y materiales, integrando áreas comerciales y técnicas.',
      'Unificación de operaciones comerciales en un flujo de ventas mediante microservicios.',
    ],
  },
  {
    company: 'PetCaribe CA',
    role: 'Coordinador de Tecnología',
    place: 'Mariara, Venezuela',
    period: '2018',
    tech: ['Gestión de proyectos', 'Infraestructura IT'],
    bullets: [
      'Gestión de proyectos tecnológicos, definiendo políticas de uso y mantenimiento de infraestructura.',
      'Coordinación de instalación de redes, equipos y sistemas críticos.',
      'Soporte técnico a usuarios y áreas operativas de la organización.',
    ],
  },
  {
    company: 'Hecticus Inc',
    role: 'Developer App & Web',
    place: 'Caracas, Venezuela',
    period: '2016 — 2017',
    tech: ['PHP', 'Laravel', 'Java', 'Spring Boot', 'Angular', 'MySQL'],
    bullets: [
      'Análisis de requerimientos de negocio e implementación de módulos web con Laravel/PHP.',
      'Desarrollo de componentes en Spring Boot para extender funcionalidades internas.',
      'Soluciones para la administración y distribución del producto entre clientes corporativos.',
    ],
  },
]

export const education = [
  { title: 'Licenciado en Ciencias de la Computación', place: 'Univ. de Carabobo (Venezuela)', year: '2013' },
  { title: 'Especialista en Desarrollo de Software', place: 'Univ. de Carabobo (Venezuela)', year: '2022' },
  { title: 'Certificación Scrum Master', place: '', year: '2024' },
]

export const featuredProject = {
  name: 'naveSpace',
  tagline:
    'Sistema de gestión de una flota de naves que opera como museo o teatro — con venta de entradas real, taller independiente y panel de administración con dashboard.',
  apps: [
    {
      label: 'Panel Admin',
      description:
        'Gestión de flota: alta de naves, configurar museo/teatro y dashboard de ingresos y ocupación. Si una nave está en taller no se puede editar; su estado se consulta haciendo click en “En taller”. Incluye un asistente de chat con IA que puede consultar y operar la flota, pidiendo confirmación antes de cualquier acción con impacto real.',
      url: 'https://spacecraft-system.web.app',
      repo: 'https://github.com/darwinrocha85/spacecraftSystem-frontend',
    },
    {
      label: 'Tienda de Entradas',
      description: 'App pública de compra de entradas para naves-museo y naves-teatro, con cobro real vía BankIn.',
      url: 'https://spacecraft-tickets.web.app',
      repo: 'https://github.com/darwinrocha85/spacecraft-tickets-frontend',
    },
    {
      label: 'Landing de Marketing',
      description: 'Vista pública que reúne todo lo reservable ahora mismo y enlaza directo a la compra.',
      url: 'https://spacecraft-events-landing.web.app',
      repo: 'https://github.com/darwinrocha85/spacecraft-events-landing',
    },
  ],
  backendRepo: 'https://github.com/darwinrocha85/spacecraftSystem',
  hrDescription: [
    'Empezó como un MVP para dar de alta naves y fue creciendo por partes hasta un sistema completo: venta de entradas con cobro real, un taller aparte que lleva presupuestos y aprobaciones, y un panel con métricas del negocio. Todo desplegado y usable hoy.',
    'Cada parte tiene su rol: la landing muestra qué hay para visitar, la tienda resuelve la compra, el panel de administración gestiona la flota sin tocar lo que está en reparación, y la app de taller lleva el trabajo diario y el historial de cada visita.',
    'Refleja cómo trabajo un producto: acordar reglas claras con el usuario, separar responsabilidades donde hace falta y verificar cada entrega antes de darla por lista.',
    'El panel de administración y el taller tienen, cada uno, su propio asistente de chat con IA: no da respuestas genéricas, lee los datos reales y hasta actúa (crear una nave, armar un horario, enviar a reparar) — siempre pidiendo confirmación antes de algo con impacto real.',
  ],
  techDescription: [
    'Backend en Java 17 + Spring Boot (Maven), sin capa DTO, con Lombok y `@ElementCollection` para asientos de teatro; ahora con SQLite en archivo y seeder idempotente para que el estado no se pierda al reiniciar.',
    '3 frontends en React + Vite sobre ese backend: landing que agrega lo reservable (museos y funciones con fecha) con deep-link a la tienda, tienda que resuelve la compra, y panel admin con dashboard de solo lectura (ingresos, ocupación del día, estado de flota, top naves) sin tocar esquema. Tabla sin scroll horizontal y columna Estado en lugar de Taller.',
    'Cobro real vía BankIn desde el backend — nada se guarda hasta que BankIn confirma con 201 y cancelar intenta revertir el cobro — con email de compra y cancelación. El taller expone presupuestos con histórico: lo enviado y, si hubo rechazo, lo anterior queda visible.',
    'Taller extraído a servicio propio en Python 3.14 + FastAPI con SQLAlchemy 2.0 y SQLite en archivo, con su propia app en React + Vite de estilo sobrio de hangar. El panel admin solo envía a taller y ve estado/historial; el flujo fino (recibir, avanzar, presupuesto) vive en la app de taller.',
    'El panel admin corre su propio motor de function-calling (lectura y escritura sobre la flota) sobre Groq (`qwen/qwen3.8-27b`, gratis sin tarjeta) con Gemini como fallback ante 429, según la variable `AI_PROVIDER` — un solo JSON Schema por tool sirve para los tres proveedores, y catálogo + prompts en inglés (las respuestas siguen en español) para gastar menos tokens. Ese mismo catálogo se expone además por un servidor MCP aparte (protocolo `@modelcontextprotocol/sdk`, sin pasar por el SDK de ningún modelo) para que cualquier cliente MCP externo, no solo el widget de chat, pueda consultarlo y operarlo. El taller comparte proyecto y deploy (`spacecraft-mcp`) con el panel admin, pero con catálogo y SYSTEM_PROMPT propios: sus 6 tools de lectura se reusan por referencia desde el catálogo admin —misma definición, cero duplicación— y el flujo fino (recibir, avanzar, presupuesto) vive en sus 9 tools propias.',
  ],
}

export const featuredAgent = {
  name: 'Asistentes IA — tres casos, un mismo oficio',
  tagline: 'Tres asistentes con el mismo motor y distinto alcance: el admin opera la flota en vivo, el del taller lleva el ciclo de reparación, y el de este portafolio responde solo con lo publicado.',
  apps: [
    {
      label: 'Caso 1 — Admin',
      description: 'Dueño de la flota: consulta ingresos, ocupación y entradas en vivo, y también actúa (crear naves, enviar a taller) pidiendo confirmación antes de cualquier impacto real.',
      url: 'https://spacecraft-system.web.app',
      repo: 'https://github.com/darwinrocha85/spacecraftSystem-frontend',
    },
    {
      label: 'Caso 2 — Taller',
      description: 'Staff del hangar: recepciones, avances de estado, presupuestos con stock y borradores desde texto libre. Nada destructivo, así que ejecuta directo sin fricción.',
      url: 'https://spacecraft-taller-frontend.web.app',
      repo: 'https://github.com/darwinrocha85/spacecraft-taller-frontend',
    },
    {
      label: 'Caso 3 — Portafolio (este widget)',
      description: 'Burbuja abajo a la derecha con historial corto y sugerencias. Sin datos en vivo: si no está en el portafolio, dice que no lo tiene y deriva a la sección.',
      url: '/#contact',
      repo: 'https://github.com/darwinrocha85/darwin-rocha-portfolio',
    },
  ],
  backendRepo: 'https://github.com/darwinrocha85/spacecraftSystem-frontend',
  compareTable: {
    caption: 'Tres casos, un mismo motor',
    head: ['', 'Admin', 'Taller', 'Portafolio'],
    rows: [
      ['Alcance', 'Dueño de la flota', 'Staff del hangar', 'Visitante del portafolio'],
      ['Datos', 'En vivo: flota y ventas', 'En vivo: ciclo de reparación', 'Estáticos: lo publicado'],
      ['Tools', '28 (lectura + escritura)', '15 (sin destructivas)', 'Ninguna'],
      ['Confirmación', 'Previa a impacto real', 'Solo borrador de presupuesto', 'No aplica'],
      ['Modelo', 'Groq qwen3.8-27b · fallback Gemini', 'Groq qwen3.8-27b · fallback Gemini', 'Gemini o Claude, solo texto'],
    ],
  },
  hrDescription: [
    'No son un chat de demo: son tres asistentes trabajando sobre casos reales, cada uno con su nivel de permiso. El del panel consulta y opera la flota en vivo, el del taller lleva el día a día del hangar, y el de este portafolio responde solo con lo que está publicado acá.',
    'La regla es la misma en los tres: no inventar. Los dos primeros leen el dato real antes de responder y piden confirmación antes de cualquier acción con impacto —crear una nave, enviarla a reparar—; el tercero prefiere decir que no lo tiene y llevarte a la sección correcta.',
    'Todo queda registrado —modelo, tokens y latencia de cada uso—. Y cada asistente ve solo su alcance: el taller no toca cobros y aprobar un presupuesto solo se hace desde el panel, nunca desde un chat.',
  ],
  techDescription: [
    'Motor de function-calling propio en Cloud Functions for Firebase 2.ª gen (Node 20, ESM): corre sobre Groq —`qwen/qwen3.8-27b` en producción, pisado por `GROQ_MODEL` porque el catálogo rota— con Gemini (`gemini-3.8-flash`) como fallback ante 429 y Claude (`claude-haiku-4-5`) soportado, todo según `AI_PROVIDER`. Un solo JSON Schema por tool sirve a los tres proveedores; a Groq se le pega por fetch directo a su endpoint OpenAI-compatible, sin SDK nuevo.',
    'Catálogo único en inglés (las respuestas siguen en español): 28 tools del admin y 15 del taller, con las 6 de lectura reusadas por referencia —misma definición, cero duplicación—. El MCP público expone 20 de solo lectura (denylist de 17 de escritura) por StreamableHTTP stateless (`@modelcontextprotocol/sdk` 1.30); `askAdmin` y `askTaller` consumen las tools en el mismo proceso, sin doble hop HTTP. Cada pregunta va acotada: 500 caracteres, 3 rondas de tools, 6 turnos de historial.',
    'El taller suma `draft_budget_from_damage_description` (matching exacto y fuzzy contra catálogo de daños y stock; lo ambiguo queda al criterio del modelo con confirmación previa a crear) y la confirmación previa a destructivas vive en el `SYSTEM_PROMPT` del admin. Aprobar presupuestos —cobra tarjeta real vía BankIn— no existe en ningún catálogo. El caso del portafolio no toca datos vivos: contexto estático generado desde `content.js` en cada build, temperature 0.55 y mock si falta la API key.',
  ],
}

export const harnessCase = {
  id: 'harness',
  name: 'Harness — pagar menos tokens por la misma respuesta',
  tagline: 'Una capa previa al modelo que deriva a la ventanilla correcta y recuerda las repetidas: de 56.934 a 16.344 tokens en producción, un 71 % menos.',
  hrDescription: [
    'El problema: cada pregunta al chat mandaba al modelo todo —el prompt completo más las 28 herramientas del admin (o 15 del taller)— en cada vuelta de la conversación. Eso son ~5000 tokens por pregunta. Groq gratis te da 7000 por minuto: con 2 preguntas seguidas te corta (error 429). El harness es un peaje antes del modelo que recorta lo que se le manda.',
    'La idea en una frase: antes de llamar al modelo (caro), resolvemos por reglas baratas todo lo que no necesita inteligencia: qué herramientas mostrarle y si la pregunta ya se respondió antes.',
    'El router adivina la intención sin IA: lee la pregunta con reglas simples —keywords en español, sin acentos—. Si preguntás "cuánto recaudamos hoy", detecta familia dashboard y al modelo le muestra solo 4 herramientas en vez de 28. Si no entiende la pregunta, le muestra todo como antes: nunca rompe nada, a lo sumo no ahorra esa vez.',
    'El caché L1 hace que las repetidas no paguen: preguntas como "dame las naves" o "stock" se responden siempre igual, así que la primera vez se guarda el mapeo de pregunta a herramienta y la próxima se ejecuta directo sin llamar al modelo: 0 tokens. No se guarda la respuesta vieja —el dato se vuelve a pedir actualizado cada vez—; lo que se evita es pagarle al modelo por algo trivial.',
  ],
  techDescription: [
    'Router y caché L1 antes del modelo: keywords en español sin acentos detectan la familia ("cuánto recaudamos hoy" → dashboard, 4 herramientas en vez de 28; si no entiende, muestra todo y no rompe) y las repetidas ("dame las naves", "stock") ejecutan directo sin llamar al modelo: 0 tokens. No almacenamos datos —cada respuesta se pide actualizada—; lo que se evita es pagarle al modelo por algo trivial.',
  ],
  stackTable: {
    caption: 'Con qué está construido',
    head: ['Pieza', 'Versión / detalle'],
    rows: [
      ['Modelo principal', 'Groq qwen/qwen3.8-27b (se pisa con GROQ_MODEL)'],
      ['Fallback ante 429', 'Gemini gemini-3.8-flash'],
      ['Runtime', 'Cloud Functions for Firebase 2.ª gen · Node 20 (ESM)'],
      ['Router', 'Reglas determinísticas en español (harness-router.js)'],
      ['Caché L1 local', 'SQLite vía node:sqlite — built-in, sin dependencias'],
      ['Caché L1 prod', 'Firestore, colección ai_cache'],
      ['Servidor MCP', '@modelcontextprotocol/sdk 1.30 · solo lectura'],
      ['Medición', 'bench.mjs + colección ai_usage'],
    ],
  },
  benchCaption: 'Bench en producción · 14 preguntas fijas en orden · Groq · 2026-09-27',
  benchHero: { value: '−71,3 %', label: 'menos tokens por las mismas 14 preguntas' },
  benchBars: [
    { label: 'Tokens totales', pre: '56.934', post: '16.344', preN: 56934, postN: 16344, save: '−71,3 %' },
    { label: 'Admin · 7 preguntas', pre: '35.002', post: '10.706', preN: 35002, postN: 10706, save: '−69,4 %' },
    { label: 'Taller · 7 preguntas', pre: '21.932', post: '5.638', preN: 21932, postN: 5638, save: '−74,3 %' },
  ],
  benchChips: [
    { label: 'Hit-rate caché L1', value: '0,43' },
    { label: 'Latencia p50 admin', value: '1310 → 1136 ms' },
    { label: 'Latencia p50 taller', value: '1010 → 1031 ms' },
    { label: 'Preguntas OK', value: '14/14' },
  ],
  flowSteps: [
    { title: 'L1: ¿ya la vi?', desc: 'Pregunta repetida → ejecuta directo, 0 tokens. El dato se pide actualizado; lo que se ahorra es el modelo.' },
    { title: 'Router: ¿qué familia es?', desc: 'Reglas en español sin IA → el modelo ve 4–12 tools en vez de 28. Si no entiende, ve todo: nunca rompe.' },
    { title: 'Modelo responde', desc: 'Con catálogo chico: menos tokens, misma respuesta. Groq con fallback a Gemini ante 429.' },
    { title: 'Aprende', desc: 'Si usó una sola tool de lectura, guarda el mapeo para la próxima. Se desactiva con pre-harness.' },
  ],
}

export const merlinCase = {
  id: 'merlin-decomp',
  name: 'Reconversión — legacy desconocido con IA',
  tagline: 'Un videojuego clásico (Homeworld 2) como banco de pruebas: reconstruir su C para que compile a bytes idénticos al original, sin conocer el dominio y con IA como copiloto.',
  hrDescription: [
    'Quise probarme fuera de mi dominio: elegí un producto legacy real y abierto —el videojuego Homeworld 2— donde no conocía ni el código ni las reglas del negocio, y me puse a reconstruirlo con IA como copiloto.',
    'El resultado se mide solo: 5 funciones de lógica real reconstruidas al 100 % byte a byte —el compilador original produce exactamente los mismos bytes—, más 2 piezas grandes llevadas al 66–81 % con su límite técnico explicado.',
    'Lo que me llevo y ofrezco: entrar rápido en código ajeno sin documentación, distinguir qué es reproducible de qué tiene techo, y dejar tooling propio para que el siguiente avance más rápido.',
  ],
  techDescription: [
    'Matching decompilation sobre Homeworld2Classic (MSVC): el C que escribo debe compilar a bytes idénticos al original —mismas instrucciones, registros y orden—. Medido con objdiff-cli: una función pequeña al 100 % (24 B), 4 de lógica real al 100 % (comparador de sonido de 441 B, contenedor de efectos, punto de envolvente y tabla de excepciones Windows de 387 B) y 2 piezas grandes al 66.75 % (test SAT de 15 ejes, 2718 B) y 81.28 % (despachador de 43 eventos, 6100 B).',
    'El aprendizaje duro: corregir una sola declaración guiándome por el diff exacto empeoró 66.75 % → 61.19 % —el compilador reprograma registros y scheduling de forma global—. Igual que un intento previo (60 % → 22 %). Esas piezas son difíciles de verdad, no solo largas: no convergen con arreglos locales.',
    'Mi loop: elegir candidata por barrido (tamaño, sin llamadas a imports crudos ni helpers con hash irreproducible), escribir C, compilar con ninja, medir, alinear diffs y repetir —con 22 scripts propios para ranking, visores de diff y aplicación de cambios—. Todo verificado localmente, con evidencia JSON por función.',
  ],
  tech: ['C', 'MSVC', 'ninja', 'objdiff-cli', 'Python', 'IA aplicada'],
  results: [
    { label: '5 funciones al 100 %', detail: '24–441 B · byte a byte', pct: 100 },
    { label: 'Despachador battle-chatter', detail: '6100 B · switch de 43 eventos', pct: 81.28 },
    { label: 'Test SAT de 15 ejes', detail: '2718 B · colisiones OBB', pct: 66.75 },
  ],
  loopSteps: [
    { title: 'Barrido', desc: 'Elegir candidata por tamaño y forma: sin calls a imports crudos ni helpers con hash irreproducible.' },
    { title: 'Escritura', desc: 'C que compile a bytes idénticos: mismas instrucciones, registros y orden.' },
    { title: 'Compilación', desc: 'ninja con el compilador original (MSVC) sobre el proyecto tal cual.' },
    { title: 'Medición', desc: 'objdiff-cli: match_percent por función; aligndiff para ver fila por fila.' },
    { title: 'Iteración', desc: 'Ajustar y repetir con 22 scripts propios; gateway GPT solo donde hizo falta.' },
  ],
}

export const relatedProject = {
  name: 'BankIn — sistema de pago del ecosistema',
  tagline: 'No es una demo suelta. BankIn es el sistema de pago del ecosistema.',
  hrDescription: [
    'Cada compra de entradas en naveSpace pasa por aquí: recibe los datos, hace el cobro y lo guarda para que se pueda auditar después. Los pagos al taller tambien usan esta apps.',
    'Tiene un panel de gerente donde se ve cada movimiento con su nota de origen, sin pasos manuales entre una app y otra.',
    'Hoy ya conecta naveSpace. Más adelante se podra conectar a otras apps con la misma API y sin cambios en BankIn.',
  ],
  techDescription: [
    'Backend en Python 3.14 con FastAPI y arquitectura hexagonal. Viene de una versión anterior en Java/Spring Boot y ahora persiste en SQLite en archivo con SQLAlchemy 2.0 y validación con Pydantic.',
    'Expone `POST /transactions/purchase` para apps externas: recibe tarjeta, monto y un campo `note` con el origen, protegido con API key por variable de entorno.',
    'naveSpace lo llama al confirmar una compra; el panel de gerente muestra el cargo con su nota para saber qué app y qué compra generó cada movimiento.',
  ],
  connectedTo: 'naveSpace',
  demoUrl: 'https://bankin-frontend.web.app',
  frontendRepo: 'https://github.com/darwinrocha85/Bankin-frontend',
  backendRepo: 'https://github.com/darwinrocha85/Bankin',
  upcoming: ['hotelDarwin — reservas de hotel — próximamente', 'Tienda de ropa — e-commerce — próximamente'],
}

export const secondaryProjects = [
 {
    id: 'taller',
    name: 'Taller de Reparación',
    tagline: 'Taller del ecosistema - donde se reparan las naves. Aquí entra una nave con daños y sale solo cuando el trabajo está terminado.',
    hrDescription: [
      'El taller es el hangar aparte donde entra una nave con daños. Mientras está dentro, el panel de administración no la puede editar; solo puede ver su estado entrando por “En taller”.',
      'Cada visita guarda qué se rompió, en qué estado está y qué presupuestos se enviaron.',
      'Está separado a propósito del resto del sistema para que el flujo de reparación no mezcle responsabilidades con la venta de entradas.',
      'Tiene su propio asistente de chat con IA, con el alcance del personal del taller: confirmar recepciones, avanzar el estado, armar presupuestos y consultar el stock de repuestos — aprobar o rechazar un presupuesto sigue siendo del panel de administración.',
    ],
    techDescription: [
      'Backend propio en Python 3.14 con FastAPI y arquitectura hexagonal, con SQLite en archivo vía SQLAlchemy 2.0. La máquina de estados y la lógica de presupuestos viven solo en el dominio.',
      'Frontend aparte en React + Vite con estilo sobrio de hangar. La tabla evita scroll horizontal y el detalle se abre haciendo click en “En taller”, mismo patrón que BankIn.',
      'Se conecta con naveSpace solo para crear la visita y avisar cuando vuelve a estar operativa. Fuera de eso, funciona por su cuenta.',
      'Su asistente de chat corre en el mismo proyecto y deploy de Cloud Functions que el panel admin (`spacecraft-mcp`), con el mismo motor de function-calling compartido (Groq `qwen/qwen3.8-27b` como principal, Gemini de fallback, según `AI_PROVIDER`), pero con catálogo y alcance propios: 15 tools acotadas a lo que le compete al taller —6 de lectura reusadas por referencia del catálogo admin más 9 propias, incluyendo un matcher de texto que arma un borrador de presupuesto desde una descripción libre del daño—. Como el admin, tampoco pasa por el servidor MCP: consume las tools directo en el mismo proceso.',
    ],
    tech: ['Python', 'FastAPI', 'SQLite', 'SQLAlchemy', 'React', 'Vite'],
    demoUrl: 'https://spacecraft-taller-frontend.web.app',
    frontendRepo: 'https://github.com/darwinrocha85/spacecraft-taller-frontend',
    backendRepo: 'https://github.com/darwinrocha85/spacecraft-taller-backend',
  },
  {
    id: 'contenthub',
    name: 'ContentHub',
    tagline: 'Marketplace pequeño donde cada compra es única y queda trazada.',
    hrDescription: [
      'Cualquiera puede publicar una foto, vídeo o pista con precio y ponerla a la venta en un feed.',
      'También se puede pedir lo que falta y otros usuarios responden ofreciendo piezas propias. En cuanto alguien paga, esa pieza deja de estar disponible para el resto.',
      'Sirve como ejemplo de flujo de compra con moderación y sin depender de lo que diga el navegador.',
    ],
    techDescription: [
      'Backend en Python con FastAPI y arquitectura hexagonal: dominio y casos de uso sin ataduras a framework, así cambiar SQLite por Postgres o el gateway de pago es solo un adaptador nuevo.',
      'Cada pieza se modera al publicarse con reglas o IA de OpenAI. El checkout usa Stripe en modo test con confirmación en servidor; nunca se confía en que el navegador diga “ya pagué”.',
      'Frontend en React + Vite con feed, detalle y flujo de solicitud/oferta. Operación única: una venta cierra la disponibilidad para los demás.',
    ],
    tech: ['Python', 'FastAPI', 'SQLite', 'Stripe', 'React', 'Vite'],
    demoUrl: 'https://contenthub-frontend.web.app',
    frontendRepo: 'https://github.com/darwinrocha85/ContentHub-frontend',
    backendRepo: 'https://github.com/darwinrocha85/ContentHub',
  },
]

export const otherProjects = [
  {
    name: 'Barrio Sonora',
    kind: 'Landing de conversión — productora urbana',
    description:
      'Productora musical en Villaverde (Madrid) enfocada en drill, reggaeton y trap: beatmaking, mezcla/máster, grabación, distribución y videoclip teaser. Copy directo de calle, planes de precio con urgencia y testimonios.',
    url: 'https://roybert33-cmd.github.io/Barrio-sonora-/',
    accent: '#E8541F',
    bg: '#231411',
    style: 'Calle / neón cálido',
  },
  {
    name: 'Casa Sonora',
    kind: 'Landing de conversión — atelier boutique',
    description:
      'Atelier de songwriting y producción para voces femeninas pop en Malasaña (Madrid): co-writing, producción boutique y camps privados para sellos. Tono editorial, tipografía serif, precios por encargo firmado.',
    url: 'https://roybert33-cmd.github.io/Casa-sonora-/',
    accent: '#C23B4E',
    bg: '#F6F3EE',
    style: 'Editorial / elegante',
  },
  {
    name: 'Sonora Labs',
    kind: 'Landing de conversión — productora premium',
    description:
      'Productora urbana en Gran Vía (Madrid): trap, reggaeton, drill y afro con enfoque "sonido de label". Comparativa antes/después, portafolio de streams y planes tipo Starter/Pro/Label.',
    url: 'https://roybert33-cmd.github.io/Sonora-labs/',
    accent: '#B9F227',
    bg: '#0D0D10',
    style: 'Dark / neón lima',
  },
]
