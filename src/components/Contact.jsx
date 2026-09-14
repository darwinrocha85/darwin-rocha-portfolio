import { profile } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const { ref, revealed } = useReveal()
  return (
    <section ref={ref} className={`section reveal${revealed ? ' is-visible' : ''}`} id="contacto">
      <div className="container">
        <div className="contact-panel">
          <span className="eyebrow">Contacto</span>
          <h2>¿Hablamos de tu próximo proyecto?</h2>
          <p>
            Abierto a oportunidades como ingeniero backend o full-stack, y a proyectos donde IA
            aplicada y desarrollo de software se crucen.
          </p>

          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              Escribirme
            </a>
            <a className="btn btn-outline" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn btn-outline" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn btn-outline" href={profile.cvUrl} download>
              Descargar CV
            </a>
          </div>

          <div className="contact-links">
            <span>{profile.email}</span>
            <span>{profile.location}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
