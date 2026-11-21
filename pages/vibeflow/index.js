import Head from 'next/head'

const APP_STORE_URL = 'https://apps.apple.com/us/app/vibe-flow-music-visualizer/id6762640810'

const MODES = [
  ['Plasma', 'Organic neon blobs that warp and flow with the bass'],
  ['Random Art', 'Generative trig expressions, unique every time'],
  ['Particles', 'Thousands of points flowing along noise fields'],
  ['Geometric', 'Tessellated polygons with audio-reactive rotation'],
  ['Nebula', 'Deep-space clouds with twinkling stars'],
  ['Kaleidoscope', 'Multi-fold polar symmetry mandalas'],
  ['Shapes', 'Floating forms with orbital drift and glow'],
  ['Vortex', 'A spiral tunnel wormhole with depth rings'],
  ['Ribbon', 'Flowing waveform ribbons with 3D shading'],
  ['Fractal Zoom', 'An infinite zoom through geometric tiles'],
  ['Crystal', 'Prismatic, five-fold refracting facets'],
  ['Stickers', 'Seasonal animated shapes that pulse to the music'],
  ['Blend', 'Combine any two modes'],
]

export default function VibeFlow() {
  return (
    <>
      <Head>
        <title>Vibe Flow: Music Visualizer</title>
        <meta name="description" content="Vibe Flow turns your music into living neon art on iPhone and iPad, and mirrors it to Apple TV." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main id="main">
        <p><a href="/">marybm.dev</a></p>
        <div className="hero">
          <h1>Vibe Flow</h1>
        </div>
        <p>Turn your music into living neon art. Every visual mode reacts to each beat, note and rhythm in real time. Mirror to Apple TV for a party-sized display.</p>
        <p><a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">Download on the App Store<span className="visually-hidden"> (opens in a new tab)</span></a></p>

        <div className="block">
          <h2>{MODES.length} visual modes</h2>
          <ul>
            {MODES.map(([name, blurb]) => <li key={name}><strong>{name}</strong>: {blurb}</li>)}
          </ul>
        </div>

        <div className="block">
          <h2>How it works</h2>
          <ul>
            <li><strong>Microphone-powered:</strong> picks up music from any source around you, including Spotify, Apple Music, vinyl and live instruments.</li>
            <li><strong>Real-time analysis:</strong> splits audio into bass, mid and treble, detects beats and tracks mood.</li>
            <li><strong>Metal rendering:</strong> smooth, low-latency visuals on Apple's GPU framework.</li>
            <li><strong>AirPlay to Apple TV:</strong> turn your TV into a full-screen art installation.</li>
            <li><strong>Record and share:</strong> export video clips, with or without audio.</li>
          </ul>
        </div>

        <div className="block">
          <h2>Premium</h2>
          <p>One purchase, not a subscription. Unlock every mode including Blend, all palettes plus custom colors, speed control, saved presets, auto-cycle, shake to randomize, and 60-second watermark-free video export.</p>
        </div>

        <div className="block">
          <h2>More</h2>
          <p><a href="/vibeflow/support/">Support</a> · <a href="/vibeflow/privacy/">Privacy policy</a></p>
        </div>
      </main>
    </>
  )
}
