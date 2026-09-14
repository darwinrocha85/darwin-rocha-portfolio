import { experience } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function Experience() {
  const { ref, revealed } = useReveal()
  return (
    <section ref={ref} className={`section reveal${revealed ? ' is-visible' : ''}`} id="experiencia">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Experiencia</span>
          <h2>Trayectoria profesional</h2>
          <p>De desarrollo Java empresarial a backend Python/Java con IA aplicada.</p>
        </div>

        <div className="timeline">
          {experience.map((job) => (
            <div className="timeline-item" key={`${job.company}-${job.period}`}>
              <div className="timeline-period">{job.period}</div>
              <div>
                <div className="timeline-role">
                  {job.role} · <span className="timeline-company">{job.company}</span>
                </div>
                <div className="timeline-place">{job.place}</div>
                <ul className="timeline-bullets">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {job.tech.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
