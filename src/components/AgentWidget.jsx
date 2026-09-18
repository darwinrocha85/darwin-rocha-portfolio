import { useState, useRef, useEffect } from 'react'

const SUGGESTIONS = [
  '¿Qué hace naveSpace?',
  '¿Qué experiencia tienes con Java?',
  '¿Cómo cobra BankIn las entradas?',
]

function getApiUrl() {
  if (import.meta.env.DEV) {
    return 'http://localhost:5001/darwin-rocha-portfolio/us-central1/ask'
  }
  return '/api/ask'
}

export default function AgentWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Hola — soy el asistente del portfolio de Darwin. Puedo responder sobre estudios, experiencia y demos. Si no está en el portfolio te diré dónde mirar.',
    },
  ])
  const listRef = useRef(null)

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight
  }, [messages, loading])

  async function send(text) {
    const question = (text ?? input).trim()
    if (!question || loading) return
    setMessages((m) => [...m, { role: 'user', text: question }])
    setInput('')
    setLoading(true)
    try {
      const res = await fetch(getApiUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Error')
      setMessages((m) => [...m, { role: 'assistant', text: data.answer }])
    } catch (err) {
      setMessages((m) => [
        ...m,
        { role: 'assistant', text: 'No pude consultar ahora. Intenta de nuevo en unos segundos.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button
        className={`agent-bubble ${open ? 'open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Cerrar asistente' : 'Abrir asistente del portfolio'}
      >
        {open ? (
          '×'
        ) : (
          <>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="9" width="18" height="11" rx="4" />
              <circle cx="9" cy="14.5" r="1.5" fill="currentColor" stroke="none" />
              <circle cx="15" cy="14.5" r="1.5" fill="currentColor" stroke="none" />
              <path d="M12 9V5.5" />
              <circle cx="12" cy="3.8" r="1.3" />
              <path d="M18.5 3l1 1.8 1.8 1-1.8 1-1 1.8-1-1.8-1.8-1 1.8-1 1-1.8z" fill="currentColor" stroke="none" />
            </svg>
            <span>Asistente IA</span>
          </>
        )}
      </button>

      {open && (
        <div className="agent-panel" role="dialog" aria-label="Asistente del portfolio">
          <div className="agent-header">
            <strong>Pregunta a mi portfolio</strong>
            <button className="agent-close" onClick={() => setOpen(false)} aria-label="Cerrar">
              ×
            </button>
          </div>

          <div className="agent-messages" ref={listRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`agent-msg ${msg.role}`}>
                {msg.text}
              </div>
            ))}
            {loading && <div className="agent-msg assistant">Pensando…</div>}
          </div>

          <div className="agent-suggestions">
            {SUGGESTIONS.map((s) => (
              <button key={s} onClick={() => send(s)} disabled={loading}>
                {s}
              </button>
            ))}
          </div>

          <div className="agent-input-row">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Ej: ¿qué hace el taller?"
              maxLength={500}
              disabled={loading}
            />
            <button onClick={() => send()} disabled={loading || !input.trim()}>
              Enviar
            </button>
          </div>
          <p className="agent-hint">Solo responde con lo que hay en el portfolio. Si no está, te deriva a la sección.</p>
        </div>
      )}
    </>
  )
}
