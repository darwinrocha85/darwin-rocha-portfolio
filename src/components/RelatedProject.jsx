import { useState } from 'react'
import { relatedProject } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function RelatedProject() {
  const [audience, setAudience] = useState('hr')
  const copy = audience === 'hr' ? relatedProject.hrDescription : relatedProject.techDescription
  const { ref, revealed } = useReveal()

  const linkStyle = { color: 'var(--text)', borderColor: 'var(--border-strong)' }

  return (
    <section ref={ref} className={`section reveal${revealed ? ' is-visible' : ''}`} id="proyecto-relevante">
      <div className="container">
        <div className="relevant-card">
          <div className="relevant-top">
            <div>
              <span className="eyebrow">Proyecto relevante</span>
              <h2>{relatedProject.name}</h2>
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
            {copy.map((paragraph) => (
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
      </div>
    </section>
  )
}
