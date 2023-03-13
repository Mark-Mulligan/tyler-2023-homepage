/* eslint-disable @next/next/no-img-element */
import styles from './index.module.css';
import { type NextPage } from 'next';
import Head from 'next/head';

// React
import { useState } from 'react';

// Components
import Modal from '../components/Modal';

const Home: NextPage = () => {
  const [showList, setShowList] = useState(false);

  return (
    <>
      <Head>
        <title>Tyler&#39;s Birthday</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
        <meta prefix="og: http://ogp.me/ns#" property="og:type" content="website" />
        <meta name="title" property="og:title" content="Tyler's Birthday 2023" />
        <meta name="image" property="og:image" content="https://tyler-birthday-2023.vercel.app/mario.png" />
        <meta name="url" property="og:url" content="https://tyler-birthday-2023.vercel.app" />
        <meta
          name="description"
          property="og:description"
          content="This is a site with info about Tyler's birthday party."
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <img className={styles.envelope} src="envelope-min.png" alt="invitation" />
          <img className={styles.invitation} src="invitation-min.jpg" alt="invitation" />
          <div className={styles.actionsContainer}>
            <a
              className="btn"
              style={{ marginRight: '2rem' }}
              href="https://docs.google.com/forms/d/e/1FAIpQLSeYJRaFMLTp3vzaNNBqprd-SG5G4lPLBr8I0COvKwW5vsm_yA/viewform?usp=sf_link"
              target="_blank"
              rel="noreferrer"
            >
              RSVP
            </a>
            <button className="btn" onClick={() => setShowList(true)}>
              View List
            </button>
          </div>
        </div>

        {showList && <Modal handleClose={() => setShowList(false)} />}
      </main>
    </>
  );
};

export default Home;
