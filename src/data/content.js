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
    items: ['PyTorch', 'scikit-learn', 'OpenCV', 'Pandas', 'NumPy', 'Matplotlib', 'Claude', 'OpenCode'],
  },
]

export const featuredProject = {
  name: 'naveSpace',
  tagline:
    'Sistema de gestión de una flota de naves que opera como museo o teatro — con venta de entradas real, panel de administración con dashboard, y una landing pública de marketing.',
  apps: [
    {
      label: 'Panel Admin',
      description:
        'Gestión de flota: alta de naves, configurar museo/teatro, dashboard de ingresos y ocupación, enviar una nave a taller.',
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
    'Empezó como un MVP simple — dar de alta naves y controlar su estado — y fue creciendo pieza a pieza hasta un sistema completo: venta de entradas con cobro real, panel de administración con dashboard de ingresos y ocupación, y una landing pública de marketing. Las tres ya desplegadas y usables hoy.',
    'Se explora desde tres ángulos: la landing (qué hay para visitar o ver ahora mismo), la tienda de entradas (donde se completa la compra) y el panel de administración (gestión de la flota, ventas y métricas del negocio).',
    'Muestra cómo trabajo con un producto real: levanto las reglas de negocio junto al usuario, diseño la arquitectura de datos y permisos, verifico cada entrega antes de darla por lista y despliego a un entorno accesible en vivo.',
  ],
  techDescription: [
    'Backend en Java 17 + Spring Boot (Maven), sin capa DTO, con Lombok y `@ElementCollection` para modelar asientos de teatro; base H2 en memoria sembrada con datos de demo completos.',
    '3 frontends públicos en React + Vite sobre el mismo backend: una landing de marketing que agrega en una sola vista todo lo reservable de la flota (museos abiertos y funciones de teatro con fecha) con deep-link directo a un booking específico en la tienda, la tienda de entradas que resuelve la compra, y el panel de administración con un dashboard de solo lectura (ingresos, ocupación del día, estado de la flota, top naves) calculado al vuelo sin tocar el esquema de datos.',
    'Cobro real vía BankIn desde el backend (nunca desde el navegador): nada se persiste hasta que BankIn confirma, y cancelar una entrada intenta revertir el cobro automáticamente — con email de confirmación y de cancelación al comprador en ambos casos.',
    'El taller de reparación sigue construido junto a este backend hoy (permisos separados: el panel admin solo puede enviar una nave a taller y ver su historial en modo lectura), pero está pensado para independizarse como su propia app conectada — el mismo patrón que ya sigue BankIn como método de pago (ver "Más proyectos" abajo).',
  ],
}

export const relatedProject = {
  name: 'BankIn — el método de pago conectado a naveSpace',
  tagline:
    'Es un proyecto compacto, pero ya demuestra su eficacia en producción: BankIn es el método de pago real que usa naveSpace para cobrar sus entradas.',
  hrDescription: [
    'Demo de un backend bancario (clientes, tarjetas, transacciones) con un rol de gerente que supervisa toda la operación — y ya en uso real: es el método de pago que usa naveSpace para cobrar sus entradas.',
    'Aunque es un proyecto más compacto que naveSpace, ya demuestra su valor práctico: otra aplicación completamente distinta le pide un cobro y BankIn lo procesa y lo deja trazado, sin intervención manual.',
    'Es la primera pieza de una pequeña infraestructura de pagos que planeo seguir usando: hotelDarwin y una tienda de ropa (ambos por construir) se conectarán de la misma forma más adelante.',
  ],
  techDescription: [
    'Backend en Python 3.14 con FastAPI 0.141 (sobre Starlette y Uvicorn) y arquitectura hexagonal, migrado desde una versión original en Java/Spring Boot. Persistencia en SQLite en archivo vía SQLAlchemy 2.0 (ORM 2.0-style) y validación con Pydantic 2.13, con una migración simple automática para columnas nuevas.',
    'El endpoint `POST /transactions/purchase` está pensado para ser consumido por apps externas: recibe tarjeta, monto y un campo `note` que identifica la app de origen, protegible con una API key simple vía variable de entorno.',
    'naveSpace llama a ese endpoint al confirmar una compra de entradas; el panel de gerente de BankIn muestra el cargo con su nota, para auditar exactamente qué app y qué compra generó cada movimiento.',
    'El mismo endpoint quedará disponible para hotelDarwin y la tienda de ropa cuando se construyan, sin cambios en BankIn: solo una nueva app llamando con su propia nota y su propia API key.',
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
    kind: 'Parte de naveSpace — en camino a independizarse',
    tagline:
      'Gestiona el ciclo de reparación de una nave: daños por categoría, sub-estados, y el cierre del historial cuando vuelve a operar.',
    description: [
      'Hoy vive dentro del mismo backend de naveSpace (mismo repo, mismas reglas de negocio) — cuando una nave entra a reparación, el taller se encarga de la cascada de daños, el cambio de sub-estado, y de liberar la nave (y su historial) cuando termina.',
      'A futuro está pensado para independizarse como su propia app conectada a naveSpace — el mismo patrón que ya sigue BankIn como método de pago: una pieza más pequeña, con su propia razón de ser, que se conecta al sistema principal sin ser el centro de la demo.',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'Vite'],
    demoUrl: 'https://spacecraft-taller.web.app',
    frontendRepo: 'https://github.com/darwinrocha85/spacecraft-taller-frontend',
    backendRepo: 'https://github.com/darwinrocha85/spacecraftSystem',
  },
  {
    id: 'contenthub',
    name: 'ContentHub',
    kind: 'Proyecto con backend — marketplace de contenido',
    tagline:
      'Marketplace de contenido (fotos, vídeos, clips musicales) con pagos reales vía Stripe y moderación automática por IA.',
    description: [
      'Cualquiera puede publicar una pieza con precio, buscarla en un feed de contenido en venta, o pedir contenido que le falta — otros usuarios pueden ofrecer hasta 2 piezas propias como respuesta a esa solicitud. Comprar es una operación única: en cuanto se paga, la pieza deja de estar disponible para los demás.',
      'Backend en Python con arquitectura hexagonal: dominio y casos de uso sin dependencias de framework, así que cambiar SQLite por Postgres, el analizador de IA o el gateway de pago no toca la lógica de negocio, solo un adaptador nuevo. Cada pieza se modera automáticamente al publicarse (reglas o IA de OpenAI) y el checkout usa Stripe en modo test con confirmación server-side — nunca se confía en que el navegador diga "ya pagué".',
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
