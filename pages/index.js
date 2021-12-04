import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Simple page</title>
        <meta name="description" content="Next JS - Simple page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello World!</h1>
      </main>
    </div>
  )
}
