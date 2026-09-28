import { useState } from 'react'
import { merlinCase } from '../data/content'
import { useReveal } from '../hooks/useReveal'

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
  const [audience, setAudience] = useState('hr')
  const { ref, revealed } = useReveal()
  const isHr = audience === 'hr'
  const project = merlinCase
  const copy = isHr ? project.hrDescription : project.techDescription

  return (
    <section ref={ref} className={`section reveal${revealed ? ' is-visible' : ''}`} id="ia-solutions">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">IA Solutions</span>
          <h2>Casos fuera del ecosistema</h2>
          <p>
            El mismo flujo con IA pero sin conocer el dominio —
            empezando por una prueba técnica de decompilación,
            con alcance y verificación explícitos.
          </p>
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
                aria-label={`Matching decompilation: 5 funciones al 100 por ciento (4 mas 1 helper), despachador al ${project.results[1].pct} por ciento, test SAT al ${project.results[2].pct} por ciento`}
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
              <div className="relevant-connection">
                <a className="connection-chip" href={project.prUrl} target="_blank" rel="noreferrer">
                  PR #4 (pendiente de merge)
                </a>
                <span className="connection-arrow">base {project.baseCommit} · verificado con objdiff-cli →</span>
                <a className="connection-chip accent" href={project.repoUrl} target="_blank" rel="noreferrer">
                  repo Homeworld2Classic
                </a>
              </div>
            </>
          )}

          <div className="audience-copy">
            {copy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {project.decisions && <CaseTable table={project.decisions} />}
          {project.ownership && <CaseTable table={project.ownership} />}
        </div>
      </div>
    </section>
  )
}
