import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Mary. 🙋🏽‍♀️ I'm a software engineer.</p>
        <p>Let's chat about iOS development, blockchain, and Web3 👩🏽‍💻📲</p>
      </section>

      <section className={utilStyles.socialContainer}>
        <a href="https://www.linkedin.com/in/devmarymartinez/" className={utilStyles.socialBtn}>
          <Image
            src="/images/linkedin.png"
            height={44}
            width={44}
            alt="linkedin profile"
          />
        </a>
        <a href="https://twitter.com/marym_dev" className={utilStyles.socialBtn}>
          <Image
            src="/images/twitter.png"
            height={44}
            width={44}
            alt="twitter profile"
          />
        </a>
        <a href="https://github.com/mlmc03" className={utilStyles.socialBtn}>
          <Image
            src="/images/github.png"
            height={44}
            width={44}
            alt="github profile"
          />
        </a>
      </section>
    </Layout>
  )
}