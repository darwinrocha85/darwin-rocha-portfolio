import { otherProjects, secondaryProjects } from '../data/content'
import { useReveal } from '../hooks/useReveal'

const contenthub = secondaryProjects.find((p) => p.id === 'contenthub')

const rows = [
  ...(contenthub
    ? [
        {
          name: contenthub.name,
          kind: 'Marketplace independiente',
          description: 'Marketplace pequeño donde cada compra es única y queda trazada.',
          url: contenthub.demoUrl,
        },
      ]
    : []),
  ...otherProjects.map((p) => ({
    name: p.name,
    kind: p.kind,
    description: p.description,
    url: p.url,
  })),
]

export default function OtherProjects() {
  const { ref, revealed } = useReveal()
  return (
    <section ref={ref} className={`section reveal${revealed ? ' is-visible' : ''}`} id="otros-proyectos">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Otros trabajos</span>
          <h2>ContentHub y landings</h2>
          <p>
            Fuera del ecosistema naveSpace: un marketplace independiente y prototipos de landings
            para clientes. Lista compacta, sin demos largas.
          </p>
        </div>

        <div className="other-list">
          {rows.map((row) => (
            <a className="other-row" key={row.name} href={row.url} target="_blank" rel="noreferrer">
              <div>
                <div className="project-card-kind">{row.kind}</div>
                <strong>{row.name}</strong>
                <span className="other-row-desc"> — {row.description}</span>
              </div>
              <span className="link-pill">Ver ↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
