import Head from 'next/head'

const UPDATED = 'November 21, 2026'

export default function PukaShredsPrivacy() {
  return (
    <>
      <Head>
        <title>Puka Shreds! Privacy Policy</title>
        <meta name="description" content="Privacy policy for the Puka Shreds! iOS game. The app collects no data." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main id="main">
        <p><a href="/pukashreds/support/">Puka Shreds!</a></p>
        <h1>Privacy Policy</h1>
        <p className="mono">Last updated {UPDATED}</p>

        <div className="block">
          <h2>The short version</h2>
          <p>Puka Shreds! does not collect, store, or share any personal data. There are no accounts, no ads, no analytics, and no tracking.</p>
        </div>

        <div className="block">
          <h2>What stays on your device</h2>
          <p>The game saves your level progress, stars and high scores on your iPhone so you can pick up where you left off. This information never leaves your device and is deleted when you delete the app.</p>
        </div>

        <div className="block">
          <h2>Network and third parties</h2>
          <p>The game works fully offline. It does not connect to any server, and it contains no third-party SDKs for advertising, analytics or crash reporting.</p>
        </div>

        <div className="block">
          <h2>Children</h2>
          <p>Because the app collects no data from anyone, it collects no data from children.</p>
        </div>

        <div className="block">
          <h2>Changes</h2>
          <p>If this ever changes, this page will be updated before the new version of the app is released, and the date above will change.</p>
        </div>

        <div className="block">
          <h2>Contact</h2>
          <p>Questions? See the <a href="/pukashreds/support/">support page</a>.</p>
        </div>
      </main>
    </>
  )
}
