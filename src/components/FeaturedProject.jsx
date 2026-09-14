import { useState } from 'react'
import { featuredProject } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function FeaturedProject() {
  const [audience, setAudience] = useState('hr')
  const copy = audience === 'hr' ? featuredProject.hrDescription : featuredProject.techDescription
  const { ref, revealed } = useReveal()

  return (
    <section ref={ref} className={`section reveal${revealed ? ' is-visible' : ''}`} id="proyecto-destacado">
      <div className="container">
        <div className="featured">
          <div className="featured-inner">
            <div className="featured-top">
              <div>
                <span className="eyebrow" style={{ background: 'rgba(91,124,250,0.16)', color: '#9fb1ff' }}>
                  Proyecto destacado
                </span>
                <h2>{featuredProject.name}</h2>
                <p className="tagline">{featuredProject.tagline}</p>
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

            <div className="phases">
              {featuredProject.phases.map((phase) => (
                <div className="phase-card" key={phase.title}>
                  <h4>{phase.title}</h4>
                  <p>{phase.detail}</p>
                </div>
              ))}
            </div>

            <div className="apps-grid">
              {featuredProject.apps.map((app) => (
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
              <a href={featuredProject.backendRepo} target="_blank" rel="noreferrer">
                github.com/darwinrocha85/spacecraftSystem
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
