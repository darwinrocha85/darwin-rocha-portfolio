import { useState } from 'react'
import { merlinCase } from '../data/content'
import { useReveal } from '../hooks/useReveal'

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
            Lo mismo que en el ecosistema pero sin conocer el dominio —
            empezando por un videojuego clásico reconstruido byte a byte
            con IA como copiloto.
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
                <span className="connection-chip">Evidencias objdiff</span>
                <span className="connection-arrow">verificadas contra JSONs crudos →</span>
                <span className="connection-chip accent">detalle en entrevista</span>
              </div>
            </>
          )}

          <div className="audience-copy">
            {copy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
