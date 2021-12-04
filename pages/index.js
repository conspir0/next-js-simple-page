import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';


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
      <Link href="/users"><a>Users</a></Link>
    </div>
  )
}
