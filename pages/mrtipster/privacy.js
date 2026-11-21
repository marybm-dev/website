import Head from 'next/head'

const SUPPORT_EMAIL = 'support@marybm.dev'
const UPDATED = 'November 21, 2026'

export default function MrTipsterPrivacy() {
  return (
    <>
      <Head>
        <title>Mr Tipster Privacy Policy</title>
        <meta name="description" content="Privacy policy for Mr Tipster. The app collects no data." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main id="main">
        <p><a href="/">marybm.dev</a> · <a href="/mrtipster/support/">Mr Tipster</a></p>
        <h1>Privacy Policy</h1>
        <p className="mono">Last updated {UPDATED}</p>

        <div className="block">
          <h2>The short version</h2>
          <p>Mr Tipster does not collect, store or share any personal data. There are no accounts, no ads, no analytics and no tracking.</p>
        </div>

        <div className="block">
          <h2>What stays on your device</h2>
          <p>Your default tip, currency choice and the last bill you entered are saved on your device so the app can pick up where you left off. The bill is cleared after 10 minutes. None of this leaves your device, and it's deleted when you delete the app.</p>
        </div>

        <div className="block">
          <h2>Network and third parties</h2>
          <p>Mr Tipster works fully offline. It does not connect to any server and contains no third-party SDKs.</p>
        </div>

        <div className="block">
          <h2>Changes</h2>
          <p>If this ever changes, this page will be updated before the new version of the app is released.</p>
        </div>

        <div className="block">
          <h2>Contact</h2>
          <p>Questions? Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p>
        </div>
      </main>
    </>
  )
}
