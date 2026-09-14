import { highlights } from '../data/content'

export default function Highlights() {
  return (
    <div className="highlights-strip">
      <div className="container">
        <div className="highlights-grid">
          {highlights.map((item) => (
            <div className="highlight-tile" key={item.label}>
              <div className="highlight-value">{item.value}</div>
              <div className="highlight-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
