import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

// WAI-ARIA tabs (automatic activation) with a sliding indicator and #hash sync.
export default function Tabs({ tabs, label }) {
  const [active, setActive] = useState(tabs[0].id)
  const [indicator, setIndicator] = useState(null)
  const refs = useRef({})
  const listRef = useRef(null)

  // Read #hash on load and on back/forward.
  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.slice(1)
      if (tabs.some((t) => t.id === id)) setActive(id)
    }
    fromHash()
    window.addEventListener('hashchange', fromHash)
    return () => window.removeEventListener('hashchange', fromHash)
  }, [tabs])

  // Position the sliding indicator under the active tab.
  useIsoLayoutEffect(() => {
    const measure = () => {
      const el = refs.current[active]
      if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth })
    }
    measure()
    window.addEventListener('resize', measure)
    document.fonts?.ready.then(measure)
    return () => window.removeEventListener('resize', measure)
  }, [active])

  const select = (id, focus = false) => {
    setActive(id)
    history.replaceState(null, '', `#${id}`)
    const el = refs.current[id]
    if (focus) el?.focus()
    el?.scrollIntoView({ block: 'nearest', inline: 'nearest' })
  }

  const onKeyDown = (e) => {
    const i = tabs.findIndex((t) => t.id === active)
    const next = {
      ArrowRight: (i + 1) % tabs.length,
      ArrowLeft: (i - 1 + tabs.length) % tabs.length,
      Home: 0,
      End: tabs.length - 1,
    }[e.key]
    if (next === undefined) return
    e.preventDefault()
    select(tabs[next].id, true)
  }

  return (
    <>
      <div className="tabbar">
        <div role="tablist" aria-label={label} className="tablist" ref={listRef} onKeyDown={onKeyDown}>
          {indicator && (
            <span
              className="tab-indicator"
              aria-hidden="true"
              style={{ transform: `translateX(${indicator.left}px)`, width: indicator.width }}
            />
          )}
          {tabs.map((t) => (
            <button
              key={t.id}
              ref={(el) => (refs.current[t.id] = el)}
              role="tab"
              type="button"
              id={`tab-${t.id}`}
              aria-selected={active === t.id}
              aria-controls={`panel-${t.id}`}
              tabIndex={active === t.id ? 0 : -1}
              className="tab"
              onClick={() => select(t.id)}
            >
              <span className="tab-prefix" aria-hidden="true">~/</span>{t.label}
            </button>
          ))}
        </div>
      </div>

      {tabs.map((t) => (
        <section
          key={t.id}
          role="tabpanel"
          id={`panel-${t.id}`}
          aria-labelledby={`tab-${t.id}`}
          tabIndex={0}
          hidden={active !== t.id}
          className="panel"
        >
          {t.content}
        </section>
      ))}
    </>
  )
}
