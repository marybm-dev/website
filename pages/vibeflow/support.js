import Head from 'next/head'

const SUPPORT_EMAIL = 'support@marybm.dev'
const APP_STORE_URL = 'https://apps.apple.com/us/app/vibe-flow-music-visualizer/id6762640810'

export default function VibeFlowSupport() {
  return (
    <>
      <Head>
        <title>Vibe Flow Support</title>
        <meta name="description" content="Help, FAQ and contact for Vibe Flow, the audio-reactive music visualizer for iOS." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main id="main">
        <p><a href="/">marybm.dev</a> · <a href="/vibeflow/">Vibe Flow</a></p>
        <h1>Vibe Flow Support</h1>
        <p>Vibe Flow turns music into real-time neon visuals. Play music from any app, and Vibe Flow uses your device microphone to analyze the audio and generate procedural art that reacts to every beat, note and rhythm. Mirror to Apple TV with AirPlay for a big-screen experience.</p>
        <p><a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">Download on the App Store<span className="visually-hidden"> (opens in a new tab)</span></a></p>

        <div className="block">
          <h2>FAQ</h2>
          <p><strong>How does Vibe Flow hear my music?</strong> It uses your device microphone to pick up ambient audio. Play music from any app (Spotify, Apple Music and so on) and Vibe Flow reacts to it. No audio is recorded or stored.</p>
          <p><strong>Does it work without music?</strong> Yes. If you deny microphone access or nothing is playing, Vibe Flow runs in demo mode with gentle organic pulsing, so the visuals are never static.</p>
          <p><strong>How do I mirror to Apple TV?</strong> Tap the AirPlay button in the app's controls, or open Control Center and tap Screen Mirroring. Pick your Apple TV and the visuals appear on your TV.</p>
          <p><strong>What does Premium include?</strong> A one-time purchase unlocks every visual mode including Blend, all color palettes plus a custom color picker, speed control, saved presets, auto-cycle, shake to randomize, and 60-second watermark-free video export.</p>
          <p><strong>How do I restore my purchase?</strong> Open the app, tap the screen to show the controls, tap "Pro", then tap "Restore Purchase" on the upgrade screen.</p>
          <p><strong>Does Vibe Flow record my conversations?</strong> No. Audio is analyzed in real time for frequency data only. Nothing is recorded, stored or transmitted. When you record a video, you choose whether to include audio; if you decline, the video is silent.</p>
          <p><strong>Does it work with VoiceOver?</strong> Yes. Every control has a VoiceOver label, the controls stay visible while VoiceOver is on, and you can switch modes and palettes with accessibility actions.</p>
        </div>

        <div className="block">
          <h2>Contact</h2>
          <p>For support, feedback or questions, email <a href={`mailto:${SUPPORT_EMAIL}?subject=Vibe%20Flow`}>{SUPPORT_EMAIL}</a>.</p>
        </div>

        <div className="block">
          <h2>Legal</h2>
          <p><a href="/vibeflow/privacy/">Privacy policy</a></p>
        </div>
      </main>
    </>
  )
}
