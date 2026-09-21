import { useEffect, useState } from 'react'

function getInitialTheme() {
  if (typeof document !== 'undefined' && document.documentElement.dataset.theme) {
    return document.documentElement.dataset.theme
  }
  if (typeof window === 'undefined') return 'dark'
  try {
    const stored = window.localStorage.getItem('theme')
    // Sin elección guardada, dark es el tema por defecto.
    if (stored === 'light' || stored === 'dark') return stored
    return 'dark'
  } catch {
    return 'dark'
  }
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      window.localStorage.setItem('theme', theme)
    } catch {
      // localStorage unavailable (private mode, blocked) — theme still applies for this visit
    }
  }, [theme])

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme }
}
