import Head from 'next/head'
import { useEffect } from 'react'
import Icon from '../components/Icon'
import Tabs from '../components/Tabs'
import Terminal from '../components/Terminal'
import Typer from '../components/Typer'
import {
  profile, social, taglines, about, origin, toolbox, projects, ai,
  earlierWork, openSource, experience, writing, education,
} from '../data/site'

const SITE_URL = 'https://marybm.dev'

function External({ href, children, ...rest }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  )
}

function Block({ title, children }) {
  return (
    <div className="block">
      <h2>{title}</h2>
      {children}
    </div>
  )
}

// App icon, or a gradient monogram tile when there isn't one.
function AppIcon({ src, title, small }) {
  const cls = `app-icon${small ? ' small' : ''}`
  if (src) return <img className={cls} src={src} width={small ? 40 : 56} height={small ? 40 : 56} alt="" />
  const initials = title.replace(/[^A-Za-z ]/g, '').split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('')
  return <span className={`${cls} monogram`} aria-hidden="true">{initials}</span>
}

function Tags({ items, label = 'Built with' }) {
  return (
    <ul className="tags" aria-label={label}>
      {items.map((t) => <li key={t}>{t}</li>)}
    </ul>
  )
}

// Cards glow where the pointer is.
function useSpotlight() {
  useEffect(() => {
    const onMove = (e) => {
      const card = e.target.closest?.('.card, .bot')
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${e.clientX - r.left}px`)
      card.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    document.addEventListener('pointermove', onMove)
    return () => document.removeEventListener('pointermove', onMove)
  }, [])
}

const AboutPanel = (
  <>
    <Block title="Hello, world">
      {about.map((p, i) => <p key={i}>{p}</p>)}
    </Block>
    <Block title="Origin story">
      <Terminal lines={origin} />
    </Block>
    <Block title="Toolbox">
      <p className="meta">Plus whatever happens to catch my curiosity that week.</p>
      <ul className="toolbox">
        {toolbox.map((g) => (
          <li key={g.group}>
            <h3>{g.group}</h3>
            <Tags items={g.items} label={g.group} />
          </li>
        ))}
      </ul>
    </Block>
  </>
)

const ProjectsPanel = (
  <Block title="Things I've built">
    <ul className="cards">
      {projects.map((p) => (
        <li key={p.title} className="card">
          <div className="card-head">
            <AppIcon src={p.icon} title={p.title} />
            <div>
              <h3>{p.title}</h3>
              <p className="meta">{p.kind}</p>
            </div>
          </div>
          {p.banner && (
            <img className="banner" src={p.banner.src} alt={p.banner.alt} width={1000} height={500} loading="lazy" />
          )}
          <p>{p.summary}</p>
          {p.screenshots && (
            <div className="shots" role="region" aria-label={p.galleryLabel || `${p.title} screenshots`} tabIndex={0}>
              <ul>
                {p.screenshots.map((s) => (
                  <li key={s.src}>
                    <img src={s.src} alt={s.alt} width={s.w || 400} height={s.h || 865} loading="lazy" />
                  </li>
                ))}
              </ul>
            </div>
          )}
          {p.details.length > 0 && (
            <ul className="details">
              {p.details.map((d) => <li key={d}>{d}</li>)}
            </ul>
          )}
          <Tags items={p.tech} />
          {p.links.length > 0 && (
            <p className="links">
              {p.links.map((l) => (
                <External key={l.href} href={l.href}>
                  {l.label} <span aria-hidden="true">↗</span>
                  <span className="visually-hidden"> for {p.title}</span>
                </External>
              ))}
            </p>
          )}
        </li>
      ))}
    </ul>
  </Block>
)

const AIPanel = (
  <>
    <Block title="The bot fleet">
      <p>{ai.intro}</p>
      <ul className="bots">
        {ai.bots.map((b) => (
          <li key={b.name} className="bot">
            <div className="bot-head">
              <span className="pulse" aria-hidden="true" />
              <h3>{b.name}</h3>
            </div>
            <p className="meta">{b.role}</p>
            <p>{b.summary}</p>
          </li>
        ))}
      </ul>
      <Tags items={ai.tech} label="Fleet built with" />
    </Block>
    <Block title="Agent pipelines">
      <ul className="cards">
        {ai.more.map((m) => (
          <li key={m.title} className="card">
            <h3>{m.title}</h3>
            <p>{m.summary}</p>
            <Tags items={m.tech} />
          </li>
        ))}
      </ul>
    </Block>
  </>
)

const CareerPanel = (
  <>
    <Block title="Experience">
      <ol className="timeline">
        {experience.map((e) => (
          <li key={e.company}>
            <strong>{e.company}</strong>
            <span className="meta">{e.title}{e.note ? ` · ${e.note}` : ''}</span>
          </li>
        ))}
      </ol>
    </Block>
    <Block title="Open source">
      <ul className="rows">
        {openSource.map((o) => (
          <li key={o.href}>
            <External href={o.href}>{o.title}</External>
            <span className="meta">{o.repo} · {o.year}</span>
          </li>
        ))}
      </ul>
    </Block>
    <Block title="Earlier work">
      <ul className="rows">
        {earlierWork.map((w) => (
          <li key={w.title} className="with-icon">
            <AppIcon src={w.icon} title={w.title} small />
            <div className="row-text">
              <span>
                <strong>{w.title}</strong>
                {' · '}
                <External href={w.link.href}>
                  {w.link.label}
                  <span className="visually-hidden"> for {w.title}</span>
                </External>
              </span>
              <span className="meta">{w.summary} · {w.year}</span>
            </div>
          </li>
        ))}
      </ul>
    </Block>
    <Block title="Writing">
      <ul className="rows">
        {writing.map((w) => (
          <li key={w.href}>
            <External href={w.href}>{w.title}</External>
            <span className="meta">{w.where} · {w.year}</span>
          </li>
        ))}
      </ul>
    </Block>
    <Block title="Education">
      <ul className="rows">
        {education.map((e) => (
          <li key={e.school}>
            <strong>{e.school}</strong>
            <span className="meta">{e.detail}</span>
          </li>
        ))}
      </ul>
    </Block>
  </>
)

const TABS = [
  { id: 'about', label: 'about', content: AboutPanel },
  { id: 'projects', label: 'projects', content: ProjectsPanel },
  { id: 'ai', label: 'ai', content: AIPanel },
  { id: 'career', label: 'career', content: CareerPanel },
]

export default function Home() {
  useSpotlight()

  return (
    <>
      <Head>
        <title>{profile.name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={profile.description} />
        <meta name="theme-color" content="#fbfaf8" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#121114" media="(prefers-color-scheme: dark)" />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={profile.name} />
        <meta property="og:description" content={profile.description} />
        <meta property="og:image" content={`${SITE_URL}/images/profile.jpeg`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@MaryLBMC" />
        <meta name="twitter:creator" content="@MaryLBMC" />
      </Head>

      <div className="backdrop" aria-hidden="true">
        <span className="blob b1" /><span className="blob b2" /><span className="blob b3" />
      </div>

      <a className="skip-link" href="#main">Skip to content</a>

      <header className="hero">
        <div className="avatar-ring">
          <img className="avatar" src="/images/profile.jpeg" width={112} height={112} alt="" />
        </div>
        <div>
          <h1>{profile.name}</h1>
          <p className="role">
            <span className="prompt" aria-hidden="true">&gt;</span>{' '}
            <span className="visually-hidden">{profile.role}</span>
            <Typer phrases={taglines} />
          </p>
        </div>
      </header>

      <p className="tagline">{profile.tagline}</p>

      <nav aria-label="Social profiles">
        <ul className="social">
          {social.map((s) => (
            <li key={s.name}>
              <a href={s.href} rel="me noopener noreferrer" target="_blank">
                <Icon name={s.icon} />
                <span>
                  <span className="visually-hidden">{s.name}: </span>
                  {s.handle}
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main id="main" tabIndex={-1}>
        <Tabs tabs={TABS} label="Sections" />
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name} · <span className="mono">C:\&gt; exit</span>
        </p>
      </footer>
    </>
  )
}
