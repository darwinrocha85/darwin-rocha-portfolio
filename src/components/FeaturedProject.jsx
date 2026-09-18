import { useState } from 'react'
import { featuredProject, featuredAgent } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function FeaturedProject() {
  const [activeProject, setActiveProject] = useState('navespace')
  const [audience, setAudience] = useState('hr')
  const project = activeProject === 'navespace' ? featuredProject : featuredAgent
  const copy = audience === 'hr' ? project.hrDescription : project.techDescription
  const { ref, revealed } = useReveal()

  return (
    <section ref={ref} className={`section reveal${revealed ? ' is-visible' : ''}`} id="proyecto-destacado">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Proyectos destacados</span>
          <h2>naveSpace y el asistente que lo explica</h2>
          <p>
            El sistema completo de gestión de flota, y un asistente de IA embebido en este mismo
            portfolio que responde con su contenido real. Cambiá de uno a otro con las pestañas.
          </p>
        </div>

        <div className="featured">
          <div className="featured-inner">
            <div className="project-tabs" role="tablist" aria-label="Elegir proyecto destacado">
              <button
                role="tab"
                aria-selected={activeProject === 'navespace'}
                className={activeProject === 'navespace' ? 'active' : ''}
                onClick={() => {
                  setActiveProject('navespace')
                  setAudience('hr')
                }}
              >
                naveSpace
              </button>
              <button
                role="tab"
                aria-selected={activeProject === 'agent'}
                className={activeProject === 'agent' ? 'active' : ''}
                onClick={() => {
                  setActiveProject('agent')
                  setAudience('hr')
                }}
              >
                Asistente IA
              </button>
            </div>

            <div className="featured-top">
              <div>
                <h3>{project.name}</h3>
                <p className="tagline">{project.tagline}</p>
              </div>

              <div className="audience-toggle" role="tablist" aria-label="Elegir tipo de descripción">
                <button
                  role="tab"
                  aria-selected={audience === 'hr'}
                  className={audience === 'hr' ? 'active' : ''}
                  onClick={() => setAudience('hr')}
                >
                  Para RRHH / PM
                </button>
                <button
                  role="tab"
                  aria-selected={audience === 'tech'}
                  className={audience === 'tech' ? 'active' : ''}
                  onClick={() => setAudience('tech')}
                >
                  Para perfiles técnicos
                </button>
              </div>
            </div>

            <div className="audience-copy">
              {copy.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="views-label">
              {activeProject === 'navespace' ? 'Tres vistas para explorarlo' : 'Dos piezas para probarlo'}
            </div>

            <div className="apps-grid">
              {project.apps.map((app) => (
                <div className="app-card" key={app.label}>
                  <div className="label">{app.label}</div>
                  <p>{app.description}</p>
                  {activeProject === 'navespace' && (
                    <div className="links">
                      <a
                        className="link-pill primary"
                        href={app.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Ver demo ↗
                      </a>
                      <a className="link-pill" href={app.repo} target="_blank" rel="noreferrer">
                        Código
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="featured-repo">
              {activeProject === 'navespace' ? 'Backend:' : 'Function:'}{' '}
              <a href={project.backendRepo} target="_blank" rel="noreferrer">
                {project.backendRepo.replace('https://github.com/', '')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
