import { useState } from 'react'
import { featuredProject, relatedProject, secondaryProjects } from '../data/content'
import { useReveal } from '../hooks/useReveal'

const taller = secondaryProjects.find((p) => p.id === 'taller')

const TABS = [
  { id: 'navespace', label: 'naveSpace' },
  { id: 'taller', label: 'Taller' },
  { id: 'bankin', label: 'BankIn' },
]

export default function FeaturedProject() {
  const [activeProject, setActiveProject] = useState('navespace')
  const [audience, setAudience] = useState('hr')
  const { ref, revealed } = useReveal()

  const project =
    activeProject === 'taller' ? taller : activeProject === 'bankin' ? relatedProject : featuredProject
  const copy = audience === 'hr' ? project.hrDescription : project.techDescription

  return (
    <section ref={ref} className={`section reveal${revealed ? ' is-visible' : ''}`} id="proyecto-destacado">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Ecosistema en producción</span>
          <h2>naveSpace, Taller y BankIn</h2>
          <p>
            Un solo ecosistema: naveSpace gestiona la flota y vende entradas, el Taller es el hangar
            aparte donde se reparan las naves y BankIn es el sistema de pago que cobra de verdad.
            Cambiá de una parte a otra con las pestañas.
          </p>
        </div>

        <div className="featured">
          <div className="featured-inner">
            <div className="project-tabs" role="tablist" aria-label="Elegir parte del ecosistema">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeProject === tab.id}
                  className={activeProject === tab.id ? 'active' : ''}
                  onClick={() => {
                    setActiveProject(tab.id)
                    setAudience('hr')
                  }}
                >
                  {tab.label}
                </button>
              ))}
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

            {activeProject === 'navespace' ? (
              <>
                <div className="views-label">Tres vistas para explorarlo</div>
                <div className="apps-grid">
                  {project.apps.map((app) => (
                    <div className="app-card" key={app.label}>
                      <div className="label">{app.label}</div>
                      <p>{app.description}</p>
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
                    </div>
                  ))}
                </div>
                <div className="featured-repo">
                  Backend:{' '}
                  <a href={project.backendRepo} target="_blank" rel="noreferrer">
                    {project.backendRepo.replace('https://github.com/', '')}
                  </a>
                </div>
              </>
            ) : (
              <>
                {project.tech && (
                  <div className="tag-row">
                    {project.tech.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                )}
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
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
