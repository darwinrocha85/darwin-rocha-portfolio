import { useState } from 'react'
import { featuredAgent, merlinCase } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function IASolutions() {
  const [activeTab, setActiveTab] = useState('merlin')
  const [audience, setAudience] = useState('hr')
  const { ref, revealed } = useReveal()

  const project = activeTab === 'merlin' ? merlinCase : featuredAgent
  const copy = audience === 'hr' ? project.hrDescription : project.techDescription

  return (
    <section ref={ref} className={`section reveal${revealed ? ' is-visible' : ''}`} id="ia-solutions">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">IA Solutions</span>
          <h2>IA aplicada donde hay —y donde no hay— documentación</h2>
          <p>
            Dos pruebas distintas del mismo oficio: el asistente de este portfolio trabaja sobre
            dominio propio y documentado; el caso de decompilación entra a un producto legacy sin
            docs y con verificación byte a byte. Dos pestañas, mismo toggle RRHH / técnico.
          </p>
        </div>

        <div className="project-tabs" role="tablist" aria-label="Elegir caso de IA">
          <button
            role="tab"
            aria-selected={activeTab === 'merlin'}
            className={activeTab === 'merlin' ? 'active' : ''}
            onClick={() => {
              setActiveTab('merlin')
              setAudience('hr')
            }}
          >
            IA - Reingenieria
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'agent'}
            className={activeTab === 'agent' ? 'active' : ''}
            onClick={() => {
              setActiveTab('agent')
              setAudience('hr')
            }}
          >
            Asistente IA
          </button>
        </div>

        <div className="secondary-project-card">
          <div className="secondary-top">
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

          {activeTab === 'merlin' ? (
            <>
              <div className="tag-row">
                {project.tech.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <div className="relevant-connection">
                <span className="connection-chip">Evidencias objdiff</span>
                <span className="connection-arrow">verificadas contra JSONs crudos →</span>
                <span className="connection-chip accent">detalle en entrevista</span>
              </div>
            </>
          ) : (
            <>
              <div className="views-label">Tres casos para explorarlo</div>
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
              <div className="agent-invite">
                <p>¿Querés probar el tercer caso ya? Abajo a la derecha está el chat real de este portfolio — preguntale lo que quieras.</p>
                <button
                  type="button"
                  className="link-pill primary"
                  onClick={() => window.dispatchEvent(new CustomEvent('open-portfolio-agent'))}
                >
                  Abrir el chat ↗
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
