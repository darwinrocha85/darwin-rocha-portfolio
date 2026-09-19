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

export const skillGroups = [
  { label: 'Backend', items: ['Java', 'Spring Boot', 'Python', 'Flask', 'PHP / Laravel', 'Kotlin'] },
  { label: 'Frontend', items: ['React', 'Vite', 'EmberJS', 'JSF / PrimeFaces', 'Angular'] },
  { label: 'Datos', items: ['MySQL', 'PostgreSQL', 'SQLite', 'Oracle 12c', 'H2', 'SQL Server'] },
  { label: 'Infraestructura', items: ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Linux', 'WebLogic'] },
  { label: 'Calidad & Testing', items: ['JUnit', 'Mockito', 'Spring Test', 'SonarQube'] },
  {
    label: 'IA aplicada',
    items: ['PyTorch', 'scikit-learn', 'OpenCV', 'Pandas', 'NumPy', 'Matplotlib', 'ClaudeCode', 'OpenCode',
    'MCP (Model Context Protocol)', 'Function-calling', 'Gemini API', 'Anthropic API (Claude)'],
  },
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
    'Los dos asistentes comparten un mismo motor de function-calling (36 tools en total, lectura y escritura) que corre sobre Gemini - gemini-3.6-flash - o Claude - claude-haiku-4-5 - según la variable `AI_PROVIDER` — un solo JSON Schema por tool sirve para los dos proveedores. Ese mismo catálogo se expone además por un servidor MCP aparte (protocolo `@modelcontextprotocol/sdk`, sin pasar por el SDK de ningún modelo) para que cualquier cliente MCP externo, no solo el widget de chat, pueda consultarlo y operarlo.',
  ],
}

export const featuredAgent = {
  name: 'Asistente IA del Portfolio',
  tagline: 'Widget embebido que responde solo con lo que hay en el portfolio y deriva a la sección correcta.',
  apps: [
    {
      label: 'Widget',
      description: 'Burbuja abajo a la derecha con historial corto y sugerencias. Llama a /api/ask del mismo Hosting.',
      url: '/#contact',
      repo: 'https://github.com/darwinrocha85/darwin-rocha-portfolio',
    },
    {
      label: 'Function',
      description: 'Cloud Function en el mismo proyecto Firebase, con contexto generado desde content.js y el mismo motor Gemini/Claude que usan los asistentes de naveSpace.',
      url: '/api/ask',
      repo: 'https://github.com/darwinrocha85/darwin-rocha-portfolio',
    },
  ],
  backendRepo: 'https://github.com/darwinrocha85/darwin-rocha-portfolio/tree/main/functions',
  hrDescription: [
    'Añade un atajo real al portfolio: en vez de navegar 4 proyectos, el visitante pregunta “¿qué hace el taller si rechazan un presupuesto?” y obtiene respuesta trazada.',
    'Solo responde con lo que hay en estudios, experiencia y demos. Si no está, dice que no lo tiene y deriva a la sección donde mirar.',
    'Muestra cómo integro IA sin humo: reglas claras, grounding y widget simple que no expone claves.',
  ],
  techDescription: [
    'Hosting + Functions en el mismo proyecto Firebase (darwin-rocha-portfolio). El widget hace POST /api/ask; la Function arma el system prompt con un contexto generado desde content.js en cada build — no es un import en caliente ni un texto mantenido a mano aparte.',
    'El panel admin y el taller de naveSpace tienen cada uno su propio asistente con una arquitectura distinta a la de este: un loop real de function-calling sobre Gemini o Claude, con ese mismo catálogo de tools expuesto además por un servidor MCP aparte para cualquier cliente externo — el detalle está en el proyecto naveSpace.',
    'Este asistente, en cambio, es deliberadamente más simple: corre sobre Gemini — gemini-3.6-flash — o Claude — claude-haiku-4-5 — según la variable AI_PROVIDER, pero solo arma el mensaje y devuelve texto — sin loop de tool-calling ni servidor MCP, porque no opera sobre datos en vivo, solo sobre lo que ya está escrito en el portfolio. Memoria de los últimos turnos, temperature 0.55, y cae a una respuesta mock si falta la API key del proveedor activo.',
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
      'Su asistente de chat comparte el mismo motor de function-calling que el del panel admin (Gemini - gemini-3.6-flash - o Claude `claude-haiku-4-5-20251001`, según `AI_PROVIDER`) pero con su propio catálogo de 14 tools (6 reusadas del admin + 8 propias), acotado a lo que le compete al taller — también servido por el mismo servidor MCP del panel admin.',
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
      'Productora urbana en Gran Vía (Madrid): trap, reggaeton, drill y afro con enfoque "sonido de label". Comparativa antes/después, portfolio de streams y planes tipo Starter/Pro/Label.',
    url: 'https://roybert33-cmd.github.io/Sonora-labs/',
    accent: '#B9F227',
    bg: '#0D0D10',
    style: 'Dark / neón lima',
  },
]
