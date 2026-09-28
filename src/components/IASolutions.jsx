import { useState } from 'react'
import { featuredAgent, harnessCase, merlinCase } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function IASolutions() {
  const [activeTab, setActiveTab] = useState('merlin')
  const [audience, setAudience] = useState('hr')
  const { ref, revealed } = useReveal()

  const project = activeTab === 'merlin' ? merlinCase : activeTab === 'harness' ? harnessCase : featuredAgent
  const copy = audience === 'hr' ? project.hrDescription : project.techDescription

  return (
    <section ref={ref} className={`section reveal${revealed ? ' is-visible' : ''}`} id="ia-solutions">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">IA Solutions</span>
          <h2>IA aplicada donde hay —y donde no hay— documentación</h2>
          <p>
            Tres casos del mismo oficio desde ángulos distintos: el asistente de este
            portfolio responde sobre contenido propio y publicado; el de reingeniería
            reconstruye un producto legacy sin documentación, verificado byte a byte;
            y el harness recorta lo que se le paga al modelo. Tres pestañas, mismo
            toggle RRHH / técnico.
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
          <button
            role="tab"
            aria-selected={activeTab === 'harness'}
            className={activeTab === 'harness' ? 'active' : ''}
            onClick={() => {
              setActiveTab('harness')
              setAudience('hr')
            }}
          >
            Harness
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
            {copy.map((block, i) =>
              typeof block === 'string' ? (
                <p key={block}>{block}</p>
              ) : (
                <div key={block.title || `block-${i}`}>
                  {block.title && <div className="views-label">{block.title}</div>}
                  <pre className="diagram-block">
                    <code>{block.pre}</code>
                  </pre>
                </div>
              )
            )}
          </div>

          {activeTab === 'merlin' ? (
            <>
              <div className="views-label">El resultado, de un vistazo</div>
              <div
                className="match-bars"
                role="img"
                aria-label={`Matching decompilation: 5 funciones al 100 por ciento, despachador al ${project.results[1].pct} por ciento, test SAT al ${project.results[2].pct} por ciento`}
              >
                {project.results.map((r) => (
                  <div className="match-bar-row" key={r.label}>
                    <div className="match-bar-head">
                      <span className="match-bar-label">{r.label}</span>
                      <span className="match-bar-detail">{r.detail}</span>
                      <span className="match-bar-value">{String(r.pct).replace('.', ',')} %</span>
                    </div>
                    <div className="match-bar-track">
                      <div
                        className={`match-bar-fill${r.pct === 100 ? ' is-full' : ''}`}
                        style={{ width: `${r.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
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
          ) : activeTab === 'harness' ? (
            <>
              {[project.stackTable, project.benchTable].map((table) => (
                <div key={table.caption}>
                  <div className="views-label">{table.caption}</div>
                  <div className="harness-table-wrap">
                    <table className="harness-table">
                      <thead>
                        <tr>
                          {table.head.map((col) => (
                            <th key={col} scope="col">
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {table.rows.map((row) => (
                          <tr key={row[0]}>
                            {row.map((cell, i) => (
                              <td key={`${row[0]}-${i}`}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              <div className="views-label">{project.compareTable.caption}</div>
              <div className="harness-table-wrap">
                <table className="harness-table">
                  <thead>
                    <tr>
                      {project.compareTable.head.map((col) => (
                        <th key={col || 'row-head'} scope="col">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {project.compareTable.rows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell, i) => (
                          i === 0 ? (
                            <th key={`${row[0]}-${i}`} scope="row">
                              {cell}
                            </th>
                          ) : (
                            <td key={`${row[0]}-${i}`}>{cell}</td>
                          )
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
