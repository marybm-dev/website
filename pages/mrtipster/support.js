import Head from 'next/head'

const SUPPORT_EMAIL = 'support@marybm.dev'

export default function MrTipsterSupport() {
  return (
    <>
      <Head>
        <title>Mr Tipster Support</title>
        <meta name="description" content="Help and contact for Mr Tipster, the tip calculator with a mustache." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main id="main">
        <p><a href="/">marybm.dev</a></p>
        <h1>Mr Tipster Support</h1>
        <p>Mr Tipster is a tip calculator with a mustache. Type the bill, pick a tip, split it with friends, and Mr Tipster lets you know how he feels about your generosity.</p>

        <div className="block">
          <h2>How to use it</h2>
          <ul>
            <li>Type the bill. The field is ready as soon as the app opens.</li>
            <li>Pick a quick tip (15–25%) or use − and + for any whole percentage from 0 to 50%.</li>
            <li>Split between up to 50 people. Each share is rounded up to the cent, so the group never comes up short.</li>
            <li>Turn on Round up to round each share, or the total, up to the next whole dollar, euro, pound or rupee, or the next ¥100.</li>
            <li>Set your default tip and currency in Settings.</li>
          </ul>
        </div>

        <div className="block">
          <h2>Common questions</h2>
          <p><strong>Why did my bill disappear?</strong> Mr Tipster remembers your bill for 10 minutes, then starts fresh.</p>
          <p><strong>Which currencies are supported?</strong> It follows your device region automatically, or you can pick US dollar, euro, British pound, Japanese yen or Indian rupee. Numbers always use your device's format.</p>
          <p><strong>Does it work with VoiceOver?</strong> Yes. Every control is labeled, the tip and people controls are adjustable with a swipe up or down, and changes announce the new total. It also supports Voice Control, Switch Control, Dynamic Type up to the largest sizes, Increase Contrast and Reduce Motion.</p>
        </div>

        <div className="block">
          <h2>Contact</h2>
          <p>Found a bug or have an idea? Email <a href={`mailto:${SUPPORT_EMAIL}?subject=Mr%20Tipster`}>{SUPPORT_EMAIL}</a>.</p>
        </div>

        <div className="block">
          <h2>Privacy</h2>
          <p>Mr Tipster collects no data. Read the <a href="/mrtipster/privacy/">privacy policy</a>.</p>
        </div>
      </main>
    </>
  )
}
