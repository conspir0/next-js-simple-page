import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Simple page</title>
        <meta name="description" content="Next JS - Simple page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main>
        <h1>Hello World!</h1>
      </main>
      <Link href="/users"><a>Users</a></Link>
      <Footer/>
    </div>
  )
}
