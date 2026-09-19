// Genera functions/portfolioContext.generated.js a partir de src/data/content.js.
// content.js es la ÚNICA fuente de verdad para lo que dice el portfolio (UI y agente IA):
// este script la lee y arma el texto de contexto que usa el asistente, así ya no hay dos
// copias mantenidas a mano que puedan desalinearse.
//
// Por qué un script en vez de que functions/index.js importe content.js directo:
// functions/ es CommonJS (usa require) y content.js es ESM (usa export). En vez de mezclar
// module systems dentro de la Cloud Function, este script (ESM, corre en build time) lee
// content.js y escribe un .js plano en CommonJS con el texto ya armado — la Function solo
// hace `require('./portfolioContext.generated.js')`, sin parsing ni lógica en runtime.
//
// Correr manualmente con `npm run generate:agent-context` (en la raíz del repo) después de
// cualquier cambio a content.js. firebase.json ya lo corre solo como predeploy de "hosting"
// y "functions", y functions/package.json lo corre antes de "serve"/"shell" (emuladores).

import { writeFile } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const CONTENT_PATH = join(__dirname, '..', 'src', 'data', 'content.js')
const OUTPUT_PATH = join(__dirname, '..', 'functions', 'portfolioContext.generated.js')

function bulletList(items) {
  return items.map((b) => `  - ${b}`).join('\n')
}

// Arma el cuerpo de texto de un proyecto (BankIn, Taller, ContentHub, naveSpace, el propio
// asistente) a partir de la misma forma de objeto que ya usa content.js para renderizar la
// UI (tagline, hrDescription, techDescription, apps, demoUrl, repos, etc.) — sin inventar
// campos nuevos, solo reordenando lo que ya existe en texto plano para el modelo.
function renderProjectBody(project, { includeApps = false, includeDemo = false } = {}) {
  const lines = []
  if (project.tagline) lines.push(project.tagline)

  if (includeApps && Array.isArray(project.apps)) {
    lines.push('Apps:')
    for (const app of project.apps) {
      const links = [`demo: ${app.url}`]
      if (app.repo) links.push(`código: ${app.repo}`)
      lines.push(`  - ${app.label}: ${app.description} (${links.join(', ')})`)
    }
  }

  if (includeDemo && project.demoUrl) lines.push(`Demo: ${project.demoUrl}`)
  if (project.connectedTo) lines.push(`Conectado a: ${project.connectedTo}`)
  if (Array.isArray(project.tech)) lines.push(`Stack: ${project.tech.join(', ')}`)

  if (Array.isArray(project.hrDescription) && project.hrDescription.length) {
    lines.push('Para RRHH / negocio:')
    lines.push(bulletList(project.hrDescription))
  }
  if (Array.isArray(project.techDescription) && project.techDescription.length) {
    lines.push('Para perfil técnico:')
    lines.push(bulletList(project.techDescription))
  }
  if (Array.isArray(project.upcoming) && project.upcoming.length) {
    lines.push('Próximamente:')
    lines.push(bulletList(project.upcoming))
  }

  const repoLines = []
  if (project.backendRepo) repoLines.push(`backend: ${project.backendRepo}`)
  if (project.frontendRepo) repoLines.push(`frontend: ${project.frontendRepo}`)
  if (repoLines.length) lines.push(`Repos — ${repoLines.join(' · ')}`)

  return lines.join('\n')
}

async function main() {
  const {
    profile,
    highlights,
    experience,
    education,
    skillGroups,
    featuredProject,
    featuredAgent,
    relatedProject,
    secondaryProjects,
    otherProjects,
  } = await import(pathToFileURL(CONTENT_PATH).href)

  const sections = []

  sections.push(`PERFIL
${profile.name} — ${profile.role} — ${profile.location}
Email: ${profile.email} · GitHub: ${profile.github} · LinkedIn: ${profile.linkedin}
${profile.summary}
${profile.aiNote}
CV: ${profile.cvUrl}`)

  sections.push(`DESTACADOS
${highlights.map((h) => `${h.value} ${h.label}`).join(' · ')}`)

  sections.push(`EXPERIENCIA (de más reciente a más antigua)
${experience
    .map(
      (job) => `- ${job.company} — ${job.role} — ${job.place} — ${job.period}
  Stack: ${job.tech.join(', ')}
${bulletList(job.bullets)}`
    )
    .join('\n')}`)

  sections.push(`EDUCACIÓN
${education.map((e) => `- ${e.title}${e.place ? ` — ${e.place}` : ''} (${e.year})`).join('\n')}`)

  sections.push(`SKILLS
${skillGroups.map((g) => `- ${g.label}: ${g.items.join(', ')}`).join('\n')}`)

  sections.push(`PROYECTO DESTACADO 1 — naveSpace
${renderProjectBody(featuredProject, { includeApps: true })}`)

  sections.push(`PROYECTO DESTACADO 2 — el propio asistente IA (este mismo widget)
${renderProjectBody(featuredAgent, { includeApps: true })}`)

  sections.push(`PROYECTO RELACIONADO — BankIn
${renderProjectBody(relatedProject, { includeDemo: true })}`)

  sections.push(
    `MÁS PROYECTOS\n${secondaryProjects
      .map((p) => `${p.name}\n${renderProjectBody(p, { includeDemo: true })}`)
      .join('\n\n')}`
  )

  sections.push(`OTROS PROYECTOS (landings freelance de conversión, no negocios propios del usuario)
${otherProjects.map((p) => `- ${p.name} (${p.kind}): ${p.description} — ${p.url}`).join('\n')}`)

  sections.push(`SECCIONES DEL SITIO (para derivar cuando la respuesta no está en este contexto)
#sobre-mi, #experiencia, #skills, #proyecto-destacado, #proyectos-backend, #otros-proyectos, #contacto`)

  const output = sections.join('\n\n')

  const fileContents = `// AUTO-GENERADO por scripts/generate-agent-context.mjs a partir de src/data/content.js.
// NO EDITAR A MANO — se sobreescribe en el próximo build/deploy.
// Para actualizar lo que sabe el agente: editar src/data/content.js y correr
//   npm run generate:agent-context
// (firebase.json ya lo corre solo como predeploy de "hosting" y "functions").
// Generado: ${new Date().toISOString()}

module.exports = ${JSON.stringify(output)}
`

  await writeFile(OUTPUT_PATH, fileContents, 'utf8')
  console.log(`[generate-agent-context] escrito ${OUTPUT_PATH} (${output.length} caracteres)`)
}

main().catch((err) => {
  console.error('[generate-agent-context] fallo generando el contexto del agente:', err)
  process.exitCode = 1
})
