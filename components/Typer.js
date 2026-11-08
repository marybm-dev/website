import { useEffect, useState } from 'react'
import useReducedMotion from './useReducedMotion'

// Types, holds, deletes, and moves to the next phrase. Purely decorative:
// render the accessible text separately and keep this aria-hidden.
export default function Typer({ phrases }) {
  const reduced = useReducedMotion()
  const [i, setI] = useState(0)
  const [text, setText] = useState(phrases[0])
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduced) { setText(phrases[0]); return }
    const full = phrases[i]
    let delay = deleting ? 35 : 70
    if (!deleting && text === full) delay = 2200
    if (deleting && text === '') delay = 300

    const t = setTimeout(() => {
      if (!deleting && text === full) setDeleting(true)
      else if (deleting && text === '') { setDeleting(false); setI((i + 1) % phrases.length) }
      else setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1))
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, i, phrases, reduced])

  return (
    <span className="typer" aria-hidden="true">
      {text}<span className="cursor" />
    </span>
  )
}
