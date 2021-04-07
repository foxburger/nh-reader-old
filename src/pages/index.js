import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>nh-reader-ipo-bypass</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          nh-reader-ipo-bypass
        </h1>

        <p className={styles.description}>
          Usage: {' '}
          <code className={styles.code}>/#CODE#/</code>
        </p>
      </main>

      <footer className={styles.footer}>
        Next.js
      </footer>
    </div>
  )
}
