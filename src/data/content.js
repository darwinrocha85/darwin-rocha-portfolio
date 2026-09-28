export const profile = {
  name: 'Darwin Rocha',
  role: 'Software Engineer — Backend Java & Python | IA Aplicada',
  location: 'Barcelona, España',
  email: 'Darwinrocha85@gmail.com',
  github: 'https://github.com/darwinrocha85',
  linkedin: 'https://linkedin.com/in/darwinrocha',
  cvUrl: '/cv/Darwin_Rocha_CV.pdf',
  summary:
    'Backend con Python y Java desde hace más de 10 años: APIs, microservicios y datos en producción. Trabajo a diario con IA (Claude, OpenCode) para analizar código y entregar más rápido.',
  aiNote:
    'Abajo hay un ejemplo directo: yo defino arquitectura y reglas con el cliente, y construyo, verifico y despliego cada fase con un agente de IA.',
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
      'Producto Java en microservicios: refactors y funcionalidades nuevas.',
      'Plataforma JSP en paralelo, sin cortar la operación.',
      'IA en el flujo diario para analizar código y responder más rápido.',
    ],
  },
  {
    company: 'Universidad Simón Bolívar',
    role: 'Prácticas de Máster en Inteligencia Artificial (Co-op)',
    place: 'Caracas, Venezuela · Remoto',
    period: '2024 — 2025',
    tech: ['Python', 'PyTorch', 'NumPy', 'scikit-learn', 'OpenCV', 'Pandas', 'Matplotlib'],
    bullets: [
      'ML multimodal (audio, video, texto): clasificación y reconocimiento de emociones con modelos simples e interpretables.',
      'Pipelines completos: preproceso, entrenamiento, validación cruzada y métricas (F1, matrices de confusión).',
      'Datasets grandes: limpieza, alineación de modalidades y scripts reproducibles.',
    ],
  },
  {
    company: 'Carver Advanced',
    role: 'Software Developer',
    place: 'Barcelona, España',
    period: '2025',
    tech: ['Java', 'MySQL', 'SQL Server', 'RabbitMQ', 'SOAP/REST', 'JUnit', 'Mockito', 'SonarQube'],
    bullets: [
      'Tests unitarios e integrados (JUnit, Mockito, Spring Test) contra servicios externos.',
      'Backend SOAP/REST entre módulos internos y externos.',
    ],
  },
  {
    company: 'Autolab SAS',
    role: 'Desarrollador Full Stack',
    place: 'Remoto, Colombia',
    period: '2021 — 2024',
    tech: ['Python', 'Kotlin', 'Flask', 'EmberJS', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS'],
    bullets: [
      'ERP/CRM: trabajos, incidencias y garantías.',
      'Apps Android para mecánicos y administradores.',
      'Python + EmberJS de baja latencia.',
    ],
  },
  {
    company: 'GlobalHitss',
    role: 'Desarrollador Java',
    place: 'Bogotá, Colombia',
    period: '2019 — 2021',
    tech: ['Java EE', 'PrimeFaces', 'JSF', 'JPA', 'Oracle 12c', 'WebLogic'],
    bullets: [
      'Agendamiento de técnicos: asignación y seguimiento.',
      'REST de inventarios entre áreas comerciales y técnicas.',
      'Ventas unificadas con microservicios.',
    ],
  },
  {
    company: 'PetCaribe CA',
    role: 'Coordinador de Tecnología',
    place: 'Mariara, Venezuela',
    period: '2018',
    tech: ['Gestión de proyectos', 'Infraestructura IT'],
    bullets: [
      'Proyectos e infraestructura IT: políticas, redes y equipos.',
      'Soporte a usuarios y áreas operativas.',
    ],
  },
  {
    company: 'Hecticus Inc',
    role: 'Developer App & Web',
    place: 'Caracas, Venezuela',
    period: '2016 — 2017',
    tech: ['PHP', 'Laravel', 'Java', 'Spring Boot', 'Angular', 'MySQL'],
    bullets: [
      'Módulos web con Laravel/PHP según requerimientos.',
      'Componentes Spring Boot y distribución a clientes corporativos.',
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
    'Empezó como un MVP para dar de alta naves y hoy es un sistema completo: venta de entradas con cobro real, taller aparte con presupuestos y panel con métricas. Todo desplegado y usable.',
    'Cada parte tiene su rol: la landing muestra qué hay para visitar, la tienda resuelve la compra, el panel gestiona la flota y el taller lleva el trabajo diario.',
    'Así trabajo un producto: reglas claras con el usuario, responsabilidades separadas y cada entrega verificada. El panel y el taller tienen su asistente con IA (detalle en IA Solutions).',
  ],
  techDescription: [
    'Backend en Java 17 + Spring Boot (Maven), sin DTOs, con Lombok; SQLite en archivo y seeder idempotente.',
    '3 frontends en React + Vite: landing de lo reservable con deep-link a la tienda, tienda que resuelve la compra y panel admin con dashboard de solo lectura (ingresos, ocupación, flota, top naves).',
    'Cobro real vía BankIn —nada se guarda hasta el 201— con email de compra y cancelación; el taller expone presupuestos con histórico visible.',
    'Taller extraído a Python 3.14 + FastAPI (SQLAlchemy 2.0) con su propia app de hangar. Los asistentes con IA viven en la sección IA Solutions.',
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
    'Tres asistentes reales, cada uno con su permiso: el panel opera la flota en vivo, el taller lleva el hangar y este portafolio responde solo con lo publicado.',
    'La regla en los tres: no inventar. Los dos primeros leen el dato real y confirman antes de actuar; el tercero deriva a la sección. Todo uso queda registrado.',
  ],
  techDescription: [
    'Function-calling propio en Cloud Functions 2.ª gen: Groq `qwen/qwen3.8-27b` (fallback Gemini ante 429, Claude soportado) según `AI_PROVIDER`; un JSON Schema por tool para los tres proveedores.',
    'Catálogo único (28 admin + 15 taller, 6 de lectura reusadas), MCP público de 20 solo lectura y `draft_budget_from_damage_description` en el taller; topes por pregunta (500 caracteres, 3 rondas, 6 turnos). Aprobar presupuestos no existe en ningún catálogo. El portafolio: contexto estático desde `content.js`, temperature 0.55 y mock sin API key.',
  ],
}

export const harnessCase = {
  id: 'harness',
  name: 'Harness — pagar menos tokens por la misma respuesta',
  tagline: 'Una capa previa al modelo que deriva a la ventanilla correcta y recuerda las repetidas: de 56.934 a 16.344 tokens en producción, un 71 % menos.',
  hrDescription: [
    'El problema: cada pregunta al chat mandaba al modelo todo —el prompt completo más las 28 herramientas del admin (o 15 del taller)— en cada vuelta de la conversación. Eso son ~5000 tokens por pregunta. Groq gratis te da 7000 por minuto: con 2 preguntas seguidas te corta (error 429). El harness es un peaje antes del modelo que recorta lo que se le manda.',
    'La idea en una frase: antes de llamar al modelo (caro), resolvemos por reglas baratas todo lo que no necesita inteligencia: qué herramientas mostrarle y si la pregunta ya se respondió antes.',
    'Router y caché L1 antes del modelo: keywords en español sin acentos detectan la familia ("cuánto recaudamos hoy" → dashboard, 4 herramientas en vez de 28; si no entiende, muestra todo y no rompe) y las repetidas ("dame las naves", "stock") ejecutan directo sin llamar al modelo: 0 tokens. No almacenamos datos —cada respuesta se pide actualizada—; lo que se evita es pagarle al modelo por algo trivial.',
    ],
  techDescription: [
    'El router aprende la intención sin IA: lee la pregunta con reglas simples —keywords en español, sin acentos—. Si preguntás "cuánto recaudamos hoy", detecta familia dashboard y al modelo le muestra solo 4 herramientas en vez de 28. Si no entiende la pregunta, le muestra todo como antes: nunca rompe nada, a lo sumo no ahorra esa vez.',
    'El caché L1 hace que las repetidas no paguen: preguntas como "dame las naves" o "stock" se responden siempre igual, así que la primera vez se guarda el mapeo de pregunta a herramienta y la próxima se ejecuta directo sin llamar al modelo: 0 tokens. No almacenamos datos —cada respuesta se pide actualizada—; lo que se evita es pagarle al modelo por algo trivial.',
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
    'Cada compra en naveSpace pasa por aquí: cobra, guarda y deja auditar. También cobra el taller.',
    'Panel de gerente con cada movimiento y su origen, sin pasos manuales.',
    'Hoy conecta naveSpace; más apps usan la misma API sin cambios.',
  ],
  techDescription: [
    'FastAPI hexagonal (antes Java/Spring): SQLite en archivo con SQLAlchemy 2.0 y Pydantic.',
    'Expone `POST /transactions/purchase`: tarjeta, monto y `note` de origen, con API key.',
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
