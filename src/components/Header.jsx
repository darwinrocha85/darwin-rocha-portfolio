import { useState } from 'react'
import { profile } from '../data/content'

const NAV_ITEMS = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#skills', label: 'Skills' },
  { href: '#proyecto-destacado', label: 'Proyecto destacado' },
  { href: '#otros-proyectos', label: 'Otros proyectos' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container">
        <a href="#top" className="brand">
          <span className="brand-mark">DR</span>
          Darwin Rocha
        </a>

        <nav className={`nav-links${open ? ' open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <a className="btn btn-outline btn-sm" href={profile.cvUrl} download>
            Descargar CV
          </a>
          <button
            className="nav-toggle"
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
