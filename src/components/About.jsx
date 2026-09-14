import { education, profile } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const { ref, revealed } = useReveal()
  return (
    <section ref={ref} className={`section reveal${revealed ? ' is-visible' : ''}`} id="sobre-mi">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Sobre mí</span>
          <h2>10+ años construyendo software backend</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>{profile.summary}</p>
            <div className="ai-note">{profile.aiNote}</div>
          </div>

          <div className="education-card">
            <h3>Formación</h3>
            {education.map((item) => (
              <div className="education-item" key={item.title}>
                <div className="title">{item.title}</div>
                <div className="meta">
                  {item.place ? `${item.place} · ` : ''}
                  {item.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
