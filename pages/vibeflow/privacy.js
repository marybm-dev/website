import Head from 'next/head'

const SUPPORT_EMAIL = 'support@marybm.dev'
const UPDATED = 'November 21, 2026'

export default function VibeFlowPrivacy() {
  return (
    <>
      <Head>
        <title>Vibe Flow Privacy Policy</title>
        <meta name="description" content="Privacy policy for Vibe Flow. The app collects no personal data." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main id="main">
        <p><a href="/">marybm.dev</a> · <a href="/vibeflow/support/">Vibe Flow</a></p>
        <h1>Privacy Policy</h1>
        <p className="mono">Last updated {UPDATED}</p>

        <div className="block">
          <h2>Overview</h2>
          <p>Vibe Flow ("the app") does not collect, store or transmit any personal data. The app is designed to work entirely on your device.</p>
        </div>

        <div className="block">
          <h2>Microphone</h2>
          <p>The app asks for microphone access only to analyze ambient audio frequencies in real time. That analysis drives the visuals on screen. No audio is recorded, saved or transmitted, and all audio processing happens on your device.</p>
          <p>When you use video recording, you choose whether to include microphone audio. If you include it, audio is captured only for the length of the recording and saved to your device. The app never uploads or shares it.</p>
        </div>

        <div className="block">
          <h2>Data collection</h2>
          <p>Vibe Flow does not collect any data:</p>
          <ul>
            <li>No personal information</li>
            <li>No usage analytics or tracking</li>
            <li>No cookies or identifiers</li>
            <li>No location data</li>
            <li>No data shared with third parties</li>
          </ul>
        </div>

        <div className="block">
          <h2>In-app purchase</h2>
          <p>Vibe Flow offers a one-time in-app purchase processed entirely by Apple's App Store. We never see your payment information. Your purchase status is stored on your device.</p>
        </div>

        <div className="block">
          <h2>Children</h2>
          <p>Vibe Flow does not knowingly collect information from children. The app has no accounts, social features or data collection of any kind.</p>
        </div>

        <div className="block">
          <h2>Changes</h2>
          <p>If this policy changes, the update will be posted on this page with a new date.</p>
        </div>

        <div className="block">
          <h2>Contact</h2>
          <p>Questions about this policy? Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p>
        </div>
      </main>
    </>
  )
}
