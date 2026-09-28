import { useState } from 'react'
import { featuredProject, featuredAgent, harnessCase, relatedProject, secondaryProjects } from '../data/content'
import { useReveal } from '../hooks/useReveal'

const taller = secondaryProjects.find((p) => p.id === 'taller')

const TABS = [
  { id: 'navespace', label: 'Admin' },
  { id: 'taller', label: 'Taller' },
  { id: 'bankin', label: 'BankIn' },
  { id: 'asistentes', label: 'Asistentes IA' },
  { id: 'harness', label: 'Harness' },
]

function EcoTable({ table }) {
  return (
    <>
      <div className="views-label eco-label">{table.caption}</div>
      <div className="harness-table-wrap">
        <table className="harness-table">
          <thead>
            <tr>
              {table.head.map((col) => (
                <th key={col || 'row-head'} scope="col">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, i) =>
                  i === 0 ? (
                    <th key={`${row[0]}-${i}`} scope="row">
                      {cell}
                    </th>
                  ) : (
                    <td key={`${row[0]}-${i}`}>{cell}</td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

function Steps({ steps }) {
  return (
    <ol className="flow-steps">
      {steps.map((s, i) => (
        <li key={s.title}>
          <span className="flow-step-n" aria-hidden="true">
            {i + 1}
          </span>
          <div>
            <strong>{s.title}</strong>
            <p>{s.desc}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default function FeaturedProject() {
  const [activeProject, setActiveProject] = useState('navespace')
  const [audience, setAudience] = useState('hr')
  const { ref, revealed } = useReveal()
  const isHr = audience === 'hr'

  const project =
    activeProject === 'taller'
      ? taller
      : activeProject === 'bankin'
        ? relatedProject
        : activeProject === 'asistentes'
          ? featuredAgent
          : activeProject === 'harness'
            ? harnessCase
            : featuredProject
  const copy = isHr ? project.hrDescription : project.techDescription

  return (
    <section ref={ref} className={`section reveal${revealed ? ' is-visible' : ''}`} id="proyecto-destacado">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Ecosistema en producción</span>
          <h2>Todo naveSpace, junto</h2>
          <p>
            El producto y la IA que lo opera: Admin, Taller y BankIn más los dos
            asistentes que trabajan en vivo y el harness que les recorta el costo.
            Cinco pestañas, mismo toggle RRHH / técnico.
          </p>
        </div>

        <div className="featured">
          <div className="featured-inner">
            <div className="project-tabs eco-tabs" role="tablist" aria-label="Elegir parte del ecosistema">
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
                  aria-selected={isHr}
                  className={isHr ? 'active' : ''}
                  onClick={() => setAudience('hr')}
                >
                  Para RRHH / PM
                </button>
                <button
                  role="tab"
                  aria-selected={!isHr}
                  className={!isHr ? 'active' : ''}
                  onClick={() => setAudience('tech')}
                >
                  Para perfiles técnicos
                </button>
              </div>
            </div>

            <div className="audience-copy">
              {copy.map((paragraph) =>
                typeof paragraph === 'string' ? (
                  <p key={paragraph}>{paragraph}</p>
                ) : null
              )}
            </div>

            {activeProject === 'navespace' && (
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
            )}

            {(activeProject === 'taller' || activeProject === 'bankin') && (
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

            {activeProject === 'asistentes' && (
              <div className="eco-visual">
                {isHr ? (
                  <EcoTable table={project.ecoCompareTable} />
                ) : (
                  <>
                    <div className="views-label eco-label">Modelos y estructura, de un vistazo</div>
                    <Steps steps={project.archSteps} />
                  </>
                )}
                <div className="views-label eco-label">Probalos en vivo</div>
                <div className="secondary-project-actions">
                  <a className="btn btn-primary btn-sm" href="https://spacecraft-system.web.app" target="_blank" rel="noreferrer">
                    Demo admin ↗
                  </a>
                  <a className="btn btn-outline btn-sm" href="https://spacecraft-taller-frontend.web.app" target="_blank" rel="noreferrer">
                    Demo taller ↗
                  </a>
                  <button
                    type="button"
                    className="btn btn-outline btn-sm"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-portfolio-agent'))}
                  >
                    Abrir el chat del portafolio ↗
                  </button>
                </div>
                <p className="eco-note">{project.portfolioLine}</p>
              </div>
            )}

            {activeProject === 'harness' && (
              <div className="eco-visual">
                {isHr ? (
                  <>
                    <div className="bench-hero">
                      <span className="bench-hero-value">{project.benchHero.value}</span>
                      <span className="bench-hero-label">{project.benchHero.label}</span>
                    </div>
                    <div className="views-label eco-label">{project.benchCaption}</div>
                    <div className="match-bars" role="img" aria-label="Tokens pre-harness 56.934 contra post-harness 16.344, un 71,3 por ciento menos">
                      {project.benchBars.map((b) => (
                        <div className="match-bar-row" key={b.label}>
                          <div className="match-bar-head">
                            <span className="match-bar-label">{b.label}</span>
                            <span className="match-bar-detail">
                              {b.pre} → {b.post}
                            </span>
                            <span className="match-bar-value">{b.save}</span>
                          </div>
                          <div className="match-bar-track bench-track">
                            <div className="match-bar-fill bench-pre" style={{ width: '100%' }} />
                          </div>
                          <div className="match-bar-track">
                            <div
                              className="match-bar-fill is-full"
                              style={{ width: `${((b.postN / b.preN) * 100).toFixed(1)}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="stat-chips">
                      {project.benchChips.map((c) => (
                        <div className="stat-chip" key={c.label}>
                          <span className="stat-chip-label">{c.label}</span>
                          <span className="stat-chip-value">{c.value}</span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="views-label eco-label">Cómo funciona</div>
                    <Steps steps={project.flowSteps} />
                    <div className="views-label eco-label">{project.stackTable.caption}</div>
                    <dl className="stack-grid">
                      {project.stackTable.rows.map((row) => (
                        <div className="stack-cell" key={row[0]}>
                          <dt>{row[0]}</dt>
                          <dd>{row[1]}</dd>
                        </div>
                      ))}
                    </dl>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
