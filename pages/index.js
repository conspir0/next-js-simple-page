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
        <h1 className={styles.title}>
          Homepage!
        </h1>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem vel debitis incidunt, aperiam, accusantium dignissimos impedit beatae consectetur explicabo et dolore? Corporis enim commodi vero deleniti illo, impedit repudiandae maxime!
        </p>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem vel debitis incidunt, aperiam, accusantium dignissimos impedit beatae consectetur explicabo et dolore? Corporis enim commodi vero deleniti illo, impedit repudiandae maxime!
        </p>
      </main>
      <Link href="/users">
        <a className={styles.btn}>
          Users
        </a>
      </Link>
    </div>
  )
}
