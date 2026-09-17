import { useState } from 'react'
import { relatedProject, secondaryProjects } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function MoreProjects() {
  const [activeTab, setActiveTab] = useState('bankin')
  const [audience, setAudience] = useState('hr')
  const { ref, revealed } = useReveal()

  const audienceCopy = audience === 'hr' ? relatedProject.hrDescription : relatedProject.techDescription
  const linkStyle = { color: 'var(--text)', borderColor: 'var(--border-strong)' }
  const activeSecondary = secondaryProjects.find((project) => project.id === activeTab)

  return (
    <section ref={ref} className={`section reveal${revealed ? ' is-visible' : ''}`} id="proyectos-backend">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Más proyectos</span>
          <h2>Más proyectos con backend</h2>
          <p>
            Proyectos más compactos que naveSpace, pero funcionando de verdad: uno ya conectado como su
            método de pago, otro que hoy vive dentro de naveSpace y está en camino a independizarse, y un
            tercero como demo independiente.
          </p>
        </div>

        <div className="project-tabs" role="tablist" aria-label="Elegir proyecto">
          <button
            role="tab"
            aria-selected={activeTab === 'bankin'}
            className={activeTab === 'bankin' ? 'active' : ''}
            onClick={() => setActiveTab('bankin')}
          >
            BankIn
          </button>
          {secondaryProjects.map((project) => (
            <button
              key={project.id}
              role="tab"
              aria-selected={activeTab === project.id}
              className={activeTab === project.id ? 'active' : ''}
              onClick={() => setActiveTab(project.id)}
            >
              {project.name}
            </button>
          ))}
        </div>

        {activeTab === 'bankin' ? (
          <div className="relevant-card">
            <div className="relevant-top">
              <div>
                <h3>{relatedProject.name}</h3>
                <p className="relevant-intro">{relatedProject.tagline}</p>
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
              {audienceCopy.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="relevant-connection">
              <span className="connection-chip">BankIn</span>
              <span className="connection-arrow">conectado como método de pago de →</span>
              <span className="connection-chip accent">{relatedProject.connectedTo}</span>
            </div>

            <div className="relevant-links">
              <a className="link-pill" style={linkStyle} href={relatedProject.demoUrl} target="_blank" rel="noreferrer">
                Ver BankIn ↗
              </a>
              <a className="link-pill" style={linkStyle} href={relatedProject.frontendRepo} target="_blank" rel="noreferrer">
                Código
              </a>
              <a className="link-pill" style={linkStyle} href={relatedProject.backendRepo} target="_blank" rel="noreferrer">
                Backend
              </a>
            </div>

            <div className="coming-soon">
              <span className="coming-soon-label">Próximamente en esta sección</span>
              <div className="coming-soon-items">
                {relatedProject.upcoming.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          activeSecondary && (
            <div className="secondary-project-card">
              <span className="secondary-project-kind">{activeSecondary.kind}</span>
              <h3>{activeSecondary.name}</h3>
              <p className="tagline">{activeSecondary.tagline}</p>

              {activeSecondary.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <div className="tag-row">
                {activeSecondary.tech.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <div className="secondary-project-actions">
                <a className="btn btn-primary btn-sm" href={activeSecondary.demoUrl} target="_blank" rel="noreferrer">
                  Ver demo ↗
                </a>
                <a className="btn btn-outline btn-sm" href={activeSecondary.frontendRepo} target="_blank" rel="noreferrer">
                  Código frontend
                </a>
                <a className="btn btn-outline btn-sm" href={activeSecondary.backendRepo} target="_blank" rel="noreferrer">
                  Código backend
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  )
}
