const { onRequest } = require("firebase-functions/v2/https");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const cors = require("cors")({ origin: true });

const portfolioContext = `
PERFIL:
Darwin Rocha — Software Engineer — Backend Java & Python | IA Aplicada — Barcelona, España — darwinrocha85@gmail.com — github darwinrocha85 — linkedin darwinrocha
Resumen: Ingeniero en Computación 10+ años backend Python/Java, APIs REST, microservicios. Integró IA (Claude, OpenCode) en flujo diario.
Highlights: 10+ años backend, 4 apps naveSpace prod, 7 empresas 3 países, ML real PyTorch
Secciones: #sobre-mi, #experiencia, #skills, #proyecto-destacado, #proyectos-backend, #otros-proyectos, #contacto

EXPERIENCIA (año solo):
- Clorian Ticketing 2026 Barcelona — Java Backend — Java Spring Boot JSP MySQL Jenkins AWS + IA
- Universidad Simón Bolívar 2024-2025 Prácticas Máster IA (Co-op) Caracas remoto — Python PyTorch etc — modelos multimodales, pipelines IA
- Carver Advanced 2025 Barcelona — Software Developer — Java MySQL RabbitMQ SOAP/REST JUnit Mockito SonarQube
- Autolab SAS 2021-2024 Remoto Colombia — Full Stack — Python Kotlin Flask EmberJS Postgres Docker K8s AWS — ERP/CRM talleres, apps Android
- GlobalHitss 2019-2021 Bogotá — Java EE PrimeFaces JSF JPA Oracle WebLogic — agendamiento técnicos, APIs REST
- PetCaribe 2018 Mariara — Coordinador Tecnología — Gestión proyectos infra
- Hecticus 2016-2017 Caracas — Developer App & Web — PHP Laravel Java Spring Boot Angular MySQL

EDUCACION: Lic Cs Computación 2013 Carabobo, Especialista Desarrollo Software 2022, Scrum Master 2024
SKILLS: Backend Java Spring Boot Python Flask PHP Laravel Kotlin — Frontend React Vite EmberJS JSF Angular — Datos MySQL Postgres SQLite Oracle H2 SQL Server — Infra Docker K8s AWS Jenkins Linux WebLogic — Testing JUnit Mockito — IA PyTorch scikit-learn OpenCV Pandas Claude OpenCode

PROYECTO DESTACADO naveSpace:
Tagline: Sistema gestión flota naves que opera como museo o teatro — venta entradas real, taller independiente, panel admin con dashboard
Apps: Panel Admin (gestión flota alta/config museo-teatro, dashboard, si nave en taller no editable, estado click En taller) https://spacecraft-system.web.app — Tienda Entradas https://spacecraft-tickets.web.app cobro BankIn — Landing Marketing https://spacecraft-events-landing.web.app
Backend: https://github.com/darwinrocha85/spacecraftSystem Java 17 Spring Boot SQLite file seeder idempotente, sin DTO, Lombok ElementCollection. 3 frontends React Vite + 1 app taller separada. Tabla sin scroll, Estado. Cobro BankIn backend 201, cancel revierte, email. Taller servicio Python FastAPI SQLAlchemy SQLite hangar sobrio.

MAS PROYECTOS:
- BankIn — sistema de pago del ecosistema (no demo suelta, cobra entradas naveSpace). HR: sistema pago ecosistema, panel gerente trazado, hoy naveSpace mañana hoteldarwin/tienda ropa sin tocar BankIn. Tech: Python 3.14 FastAPI hexagonal ex Java Spring Boot, SQLite SQLAlchemy Pydantic, POST /transactions/purchase con note + API key, naveSpace llama y gerente audita. Demo https://bankin-frontend.web.app repos Bankin/Bankin-frontend — Próximamente hoteldarwin, tienda ropa
- Taller de Reparación — Hangar aislado donde se reparan naves, caso aislado. HR: hangar aparte, mientras dentro panel no edita solo ve estado por En taller, cada visita guarda daños/estado/presupuestos, si rechazado anterior visible. Tech: Backend Python FastAPI hexagonal SQLite SQLAlchemy, estados, presupuestos, frontend React Vite sobrio, tabla sin scroll, Estado click En taller, mismo patrón BankIn. Demo https://spacecraft-taller-frontend.web.app repos spacecraft-taller-frontend/backend
- ContentHub — Marketplace independiente demo pagos reales. HR: publicar foto/video/pista con precio en feed, pedir lo que falta y otros ofrecen piezas, compra única cierra disponibilidad, con moderación. Tech: Python FastAPI hexagonal, SQLite, Stripe test server-side nunca confiar navegador, moderación reglas/OpenAI, React Vite. Demo https://contenthub-frontend.web.app

OTROS: Barrio Sonora (Villaverde drill trap), Casa Sonora (Malasaña atelier pop), Sonora Labs (Gran Vía premium) — landings conversión.

CV: /cv/Darwin_Rocha_CV.pdf
`;

const SYSTEM_PROMPT = `Eres el asistente del portfolio de Darwin Rocha. Respondes solo con lo que hay en PORTFOLIO_CONTEXT (estudios, experiencia, demos, skills). Si no está ahí, di exactamente: "No tengo esa información en el portfolio. Para más detalle mira la sección [elige: #sobre-mi, #experiencia, #skills, #proyecto-destacado, #proyectos-backend, #otros-proyectos, #contacto]".
No inventes. No hagas copy-paste del contexto: sintetiza con tus palabras, tono cercano y sencillo como el portfolio, sin sonar a IA ni a texto pegado. En español por defecto (si preguntan en inglés, responde en inglés). 2-3 frases cortas y deriva a la sección.

Ejemplos:
- Pregunta: ¿dónde estudió Darwin? -> Respuesta: Estudió Ciencias de la Computación en la Univ. de Carabobo (2013) y luego Especialista en Desarrollo de Software (2022). Para más detalle mira la sección #experience.
- Pregunta: ¿cuánto pides de salario? -> Respuesta: No tengo esa información en el portfolio. Para más detalle mira la sección #contact.

PORTFOLIO_CONTEXT:
${portfolioContext}
`;

exports.ask = onRequest(
  {
    region: "us-central1",
    cors: true,
    maxInstances: 5,
  },
  async (req, res) => {
    cors(req, res, async () => {
      if (req.method === "OPTIONS") {
        res.status(204).send("");
        return;
      }
      if (req.method !== "POST") {
        res.status(405).json({ error: "Method not allowed, use POST" });
        return;
      }

      const question = (req.body && req.body.question || "").toString().trim();
      if (!question) {
        res.status(400).json({ error: "Falta 'question' en el body" });
        return;
      }
      if (question.length > 500) {
        res.status(400).json({ error: "Pregunta demasiado larga (max 500)" });
        return;
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        // Mock local sin key — útil para probar widget sin gastar
        res.json({
          answer:
            "[mock sin GEMINI_API_KEY] Para más detalle mira la sección #proyecto-destacado. Configura GEMINI_API_KEY en Functions para respuesta real. Pregunta recibida: " +
            question.slice(0, 120),
          mock: true,
        });
        return;
      }

      try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
          model: "gemini-3.6-flash",
          systemInstruction: SYSTEM_PROMPT,
        });
        const result = await model.generateContent({
          contents: [{ role: "user", parts: [{ text: question }] }],
          generationConfig: { maxOutputTokens: 800, temperature: 0.3 },
        });
        const text = result.response.text() || "No tengo esa información en el portfolio. Para más detalle mira la sección #contact";
        res.json({ answer: text.trim() });
      } catch (err) {
        console.error("ask error", err);
        res.status(500).json({ error: "Error al consultar el modelo. Intenta de nuevo." });
      }
    });
  }
);
