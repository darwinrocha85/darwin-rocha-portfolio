import { otherProjects } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function OtherProjects() {
  const { ref, revealed } = useReveal()
  return (
    <section ref={ref} className={`section reveal${revealed ? ' is-visible' : ''}`} id="otros-proyectos">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Otros proyectos</span>
          <h2>Landings de conversión</h2>
          <p>
            Prototipos de sitio para clientes de la industria musical: copywriting orientado a
            venta, planes de precio y una identidad visual distinta para cada marca.
          </p>
        </div>

        <div className="projects-grid">
          {otherProjects.map((project) => (
            <a
              className="project-card"
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="project-card-swatch"
                style={{ background: project.bg, color: project.accent }}
              >
                <span className="style-label" style={{ color: project.accent }}>
                  {project.style}
                </span>
              </div>
              <div className="project-card-body">
                <div className="project-card-kind">{project.kind}</div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <span className="link-pill" style={{ alignSelf: 'flex-start', color: 'var(--text)', borderColor: 'var(--border-strong)' }}>
                  Ver sitio ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
