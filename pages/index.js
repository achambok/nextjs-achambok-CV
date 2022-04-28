import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>

      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Ashley Chamboko{' '}
          <a href="https://www.linkedin.com/in/ashley-chamboko-034b8214/">
            profile
          </a>
        </h1>

        <p className={styles.description}>
          Get to know more about me from my LinkedIn page{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Current Status &rarr;</h3>
            <p>CloudOps Engineer at Group42 Cloud.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Projects &rarr;</h3>
            <p>
              Learn about Projects that I've done and have been involved in part
              and in whole.
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>MileStones &rarr;</h3>
            <p>Here I celebrate my MileStones throughout my career.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy my work to your AWS Cloud to give my projects a
              test drive.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/ashley-chamboko-034b8214/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p class="text-muted mb-0 py-2">
            <h4>© 2022 Copyright by Ashley Chamboko All rights reserved.</h4>
          </p>
        </a>
      </footer>
    </div>
  );
}
