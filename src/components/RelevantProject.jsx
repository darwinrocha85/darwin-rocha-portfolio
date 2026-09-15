import { useState } from 'react'
import { relevantProject } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function RelevantProject() {
  const [audience, setAudience] = useState('hr')
  const copy = audience === 'hr' ? relevantProject.hrDescription : relevantProject.techDescription
  const { ref, revealed } = useReveal()

  return (
    <section ref={ref} className={`section reveal${revealed ? ' is-visible' : ''}`} id="proyecto-relevante">
      <div className="container">
        <div className="relevant-card">
          <div className="relevant-top">
            <div>
              <span className="eyebrow">{relevantProject.eyebrow}</span>
              <h2>{relevantProject.title}</h2>
              <p className="relevant-intro">{relevantProject.tagline}</p>
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

          <div className="relevant-connection">
            <span className="connection-chip">{relevantProject.name}</span>
            <span className="connection-arrow">conectado como método de pago de →</span>
            <span className="connection-chip accent">{relevantProject.connectedTo}</span>
          </div>

          <div className="relevant-links">
            {relevantProject.apps.map((app) => (
              <div className="relevant-link-group" key={app.label}>
                <a
                  className="link-pill"
                  style={{ color: 'var(--text)', borderColor: 'var(--border-strong)' }}
                  href={app.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver {app.label} ↗
                </a>
                <a
                  className="link-pill"
                  style={{ color: 'var(--text)', borderColor: 'var(--border-strong)' }}
                  href={app.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Código
                </a>
              </div>
            ))}
            <a
              className="link-pill"
              style={{ color: 'var(--text)', borderColor: 'var(--border-strong)' }}
              href={relevantProject.backendRepo}
              target="_blank"
              rel="noreferrer"
            >
              Backend
            </a>
          </div>

          <div className="coming-soon">
            <span className="coming-soon-label">Próximamente en esta sección</span>
            <div className="coming-soon-items">
              {relevantProject.comingSoon.map((item) => (
                <span className="tag" key={item.name}>
                  {item.name} — {item.note}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
