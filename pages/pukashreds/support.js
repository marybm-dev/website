import Head from 'next/head'

const SUPPORT_EMAIL = 'support@marybm.dev'
const APP_STORE_URL = 'https://apps.apple.com/us/app/puka-shreds/id6764086864'

export default function PukaShredsSupport() {
  return (
    <>
      <Head>
        <title>Puka Shreds! Support</title>
        <meta name="description" content="Help and contact for the Puka Shreds! iOS game." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main id="main">
        <p><a href="/">marybm.dev</a></p>
        <div className="hero">
          <img className="app-icon" src="/images/projects/puka-icon.jpg" width={56} height={56} alt="" />
          <h1>Puka Shreds! Support</h1>
        </div>
        <p>Puka Shreds! is a swipe-to-shred arcade game starring Puka, a Boston Terrier who never met a cardboard box that survived the encounter.</p>
        <p><a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">Download on the App Store<span className="visually-hidden"> (opens in a new tab)</span></a></p>

        <div className="block">
          <h2>Contact</h2>
          <p>Found a bug or have an idea? Email <a href={`mailto:${SUPPORT_EMAIL}?subject=Puka%20Shreds!`}>{SUPPORT_EMAIL}</a>. Please include your iPhone model and iOS version.</p>
        </div>

        <div className="block">
          <h2>How to play</h2>
          <ul>
            <li>Swipe across cardboard boxes to shred them before they fall.</li>
            <li>Chain shreds quickly to build a combo multiplier.</li>
            <li>Grab golden treats for bonus points.</li>
            <li>Heavy boxes take several swipes.</li>
            <li>Don't shred the fragile boxes. Hitting one costs a life and breaks your combo.</li>
            <li>You have three lives. Letting too many boxes fall also costs a life.</li>
            <li>Earn up to three stars on each of the ten levels.</li>
          </ul>
        </div>

        <div className="block">
          <h2>Common questions</h2>
          <p><strong>Is my progress backed up?</strong> Progress is saved on your iPhone only. Deleting the app resets it.</p>
          <p><strong>Does the game need the internet?</strong> No. It works fully offline.</p>
          <p><strong>Are there ads or in-app purchases?</strong> No. The game is free with no ads and no purchases.</p>
        </div>

        <div className="block">
          <h2>Privacy</h2>
          <p>The app collects no data. Read the <a href="/pukashreds/privacy/">privacy policy</a>.</p>
        </div>
      </main>
    </>
  )
}
