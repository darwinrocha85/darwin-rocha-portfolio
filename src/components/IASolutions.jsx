import { useEffect, useState } from 'react'
import { merlinCase, freemotionCase } from '../data/content'
import { useReveal } from '../hooks/useReveal'

const CASES = [freemotionCase, merlinCase]

const TABS = [
  { id: 'freemotions-labs', label: 'freemotionsLabs (visor C3D)' },
  { id: 'merlin-decomp', label: 'Homeworld 2 (Decompilation)' },
]

const TAB_IDS = TABS.map((t) => t.id)

// Lee `?case=<id>` o `#ia-solutions-<id>` para abrir la sección con su pestaña.
function tabFromLocation() {
  if (typeof window === 'undefined') return null
  const q = new URLSearchParams(window.location.search || '').get('case')
  if (q && TAB_IDS.includes(q)) return q
  const m = (window.location.hash || '').match(/^#ia-solutions(?:-([a-z-]+))?$/)
  return m && m[1] && TAB_IDS.includes(m[1]) ? m[1] : null
}

function hashForTab(tab) {
  return tab === 'freemotions-labs' ? '#ia-solutions' : `#ia-solutions-${tab}`
}

function CaseTable({ table }) {
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

export default function IASolutions() {
  const [activeTab, setActiveTab] = useState(() => tabFromLocation() || 'freemotions-labs')
  const [audience, setAudience] = useState('hr')
  const { ref, revealed } = useReveal()
  const isHr = audience === 'hr'
  const project = CASES.find((c) => c.id === activeTab) || CASES[0]
  const copy = isHr ? project.hrDescription : project.techDescription

  useEffect(() => {
    const applyHash = (scroll) => {
      const tab = tabFromLocation()
      if (tab) {
        setActiveTab(tab)
        setAudience('hr')
        if (scroll) document.getElementById('ia-solutions')?.scrollIntoView()
      }
    }
    applyHash(true)
    const onHashChange = () => applyHash(false)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const selectTab = (id) => {
    setActiveTab(id)
    setAudience('hr')
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', hashForTab(id))
    }
  }

  return (
    <section ref={ref} className={`section reveal${revealed ? ' is-visible' : ''}`} id="ia-solutions">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Research & IA Solutions</span>
          <h2>Más que un CRUD: dos pruebas</h2>
          <p>
            El mismo flujo con IA sobre problemas que no son un CRM —
            un laboratorio personal de marcha y una prueba técnica de decompilación,
            con alcance y verificación explícitos.
          </p>
        </div>

        <div className="secondary-project-card">
          <div className="project-tabs eco-tabs" role="tablist" aria-label="Elegir caso">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={activeTab === tab.id ? 'active' : ''}
                onClick={() => selectTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="secondary-top">
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

          {isHr ? (
            <>
              <div className="views-label">El resultado, de un vistazo</div>
              <div
                className="match-bars"
                role="img"
                aria-label={`${project.name}: ${project.results.map((r) => `${r.label} ${String(r.pct).replace('.', ',')} por ciento`).join(', ')}`}
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
            </>
          ) : (
            <>
              <div className="views-label">Cómo se logró, paso a paso</div>
              <ol className="flow-steps flow-steps-five">
                {project.loopSteps.map((s, i) => (
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
              <div className="tag-row">
                {project.tech.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              {project.prUrl && (
                <div className="relevant-connection">
                  <a className="connection-chip" href={project.prUrl} target="_blank" rel="noreferrer">
                    PR #4 (pendiente de merge)
                  </a>
                  <span className="connection-arrow">base {project.baseCommit} · verificado con objdiff-cli →</span>
                  <a className="connection-chip accent" href={project.repoUrl} target="_blank" rel="noreferrer">
                    repo Homeworld2Classic
                  </a>
                </div>
              )}
            </>
          )}

          <div className="audience-copy">
            {copy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {project.demoUrl && (
            <div className="secondary-project-actions">
              <a className="btn btn-primary btn-sm" href={project.demoUrl} target="_blank" rel="noreferrer">
                Ver demo ↗
              </a>
              {project.repoUrl && (
                <a className="btn btn-outline btn-sm" href={project.repoUrl} target="_blank" rel="noreferrer">
                  Código
                </a>
              )}
            </div>
          )}

          {project.decisions && <CaseTable table={project.decisions} />}
          {project.ownership && <CaseTable table={project.ownership} />}
        </div>
      </div>
    </section>
  )
}
