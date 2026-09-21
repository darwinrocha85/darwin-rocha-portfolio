import { education, profile } from '../data/content'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-kicker">
              <span className="dot" />
              Disponible para nuevas oportunidades · {profile.location}
            </div>

            <h1>{profile.name}</h1>
            <p className="role">{profile.role}</p>
            <p className="summary">{profile.summary}</p>
            <div className="ai-note">{profile.aiNote}</div>
          </div>

          <aside className="hero-side">
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

            <div className="hero-actions">
              <a className="btn btn-primary" href="#proyecto-destacado">
                Ver proyecto destacado
              </a>
              <a className="btn btn-outline" href="#contacto">
                Contactar
              </a>
              <a className="btn btn-outline" href={profile.cvUrl} download>
                Descargar CV
              </a>
            </div>

            <div className="hero-meta">
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={`mailto:${profile.email}`}>Email</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
