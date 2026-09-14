import { skillGroups } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function Skills() {
  const { ref, revealed } = useReveal()
  return (
    <section ref={ref} className={`section reveal${revealed ? ' is-visible' : ''}`} id="skills">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Skills</span>
          <h2>Stack y herramientas</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.label}>
              <h3>{group.label}</h3>
              <div className="tag-row">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
