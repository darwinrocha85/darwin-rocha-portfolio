import { profile } from '../data/content'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-kicker">
          <span className="dot" />
          Disponible para nuevas oportunidades · {profile.location}
        </div>

        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="summary">{profile.summary}</p>

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
            github.com/darwinrocha85
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            linkedin.com/in/darwinrocha
          </a>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
      </div>
    </section>
  )
}
