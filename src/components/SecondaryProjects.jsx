import { secondaryProjects } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function SecondaryProjects() {
  const { ref, revealed } = useReveal()

  return (
    <section ref={ref} className={`section reveal${revealed ? ' is-visible' : ''}`} id="proyectos-backend">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Más proyectos con backend</span>
          <h2>Otras demos de punta a punta</h2>
        </div>

        <div className="secondary-projects">
          {secondaryProjects.map((project) => (
            <div className="secondary-project-card" key={project.name}>
              <span className="secondary-project-kind">{project.kind}</span>
              <h3>{project.name}</h3>
              <p className="tagline">{project.tagline}</p>

              {project.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <div className="tag-row">
                {project.tech.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <div className="secondary-project-actions">
                <a className="btn btn-primary btn-sm" href={project.demoUrl} target="_blank" rel="noreferrer">
                  Ver demo ↗
                </a>
                <a className="btn btn-outline btn-sm" href={project.frontendRepo} target="_blank" rel="noreferrer">
                  Código frontend
                </a>
                <a className="btn btn-outline btn-sm" href={project.backendRepo} target="_blank" rel="noreferrer">
                  Código backend
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
