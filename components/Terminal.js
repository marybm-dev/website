import { useEffect, useState } from 'react'
import useReducedMotion from './useReducedMotion'

const PROMPT = 'C:\\MARY>'

// A DOS-style terminal that types out each command, then prints its output.
// Screen readers get the full story as a plain list; the animation is aria-hidden.
export default function Terminal({ lines }) {
  const reduced = useReducedMotion()
  const [run, setRun] = useState(0)          // bump to replay
  const [line, setLine] = useState(0)        // current line index
  const [chars, setChars] = useState(0)      // chars typed of current cmd
  const [showOut, setShowOut] = useState(false)
  const done = line >= lines.length

  useEffect(() => {
    if (reduced) { setLine(lines.length); return }
    setLine(0); setChars(0); setShowOut(false)
  }, [run, reduced, lines.length])

  useEffect(() => {
    if (reduced || done) return
    const cmd = lines[line].cmd
    let t
    if (chars < cmd.length) {
      t = setTimeout(() => setChars(chars + 1), 45 + Math.random() * 60)
    } else if (!showOut) {
      t = setTimeout(() => setShowOut(true), 250)
    } else {
      t = setTimeout(() => { setLine(line + 1); setChars(0); setShowOut(false) }, 650)
    }
    return () => clearTimeout(t)
  }, [chars, showOut, line, done, lines, reduced])

  return (
    <figure className="terminal">
      <div className="terminal-bar" aria-hidden="true">
        <span className="dot" /><span className="dot" /><span className="dot" />
        <span className="terminal-title">ORIGIN.BAT</span>
      </div>

      <ol className="visually-hidden">
        {lines.map((l) => <li key={l.cmd}>{l.out}</li>)}
      </ol>

      <div className="terminal-body" aria-hidden="true">
        {lines.slice(0, done ? lines.length : line + 1).map((l, idx) => {
          const current = !done && idx === line
          return (
            <div key={l.cmd} className="terminal-entry">
              <div>
                <span className="prompt">{PROMPT}</span>
                {current ? l.cmd.slice(0, chars) : l.cmd}
                {current && !showOut && <span className="cursor" />}
              </div>
              {(!current || showOut) && <div className="terminal-out">{l.out}</div>}
            </div>
          )
        })}
        {done && (
          <div>
            <span className="prompt">{PROMPT}</span>
            <span className="cursor" />
          </div>
        )}
      </div>

      {done && !reduced && (
        <button type="button" className="replay" onClick={() => setRun(run + 1)}>
          ↻ Replay
        </button>
      )}
    </figure>
  )
}
