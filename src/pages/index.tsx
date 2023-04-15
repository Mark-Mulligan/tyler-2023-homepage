/* eslint-disable @next/next/no-img-element */
import styles from './index.module.css';
import { type NextPage } from 'next';
import Head from 'next/head';

// React
import { useState, useEffect } from 'react';

// Components
import Modal from '../components/Modal';

function countdownTo515() {
  // Create Date object for current time
  const now: any = new Date();

  // Create Date object for 5:15pm today
  const target: any = new Date('April 15, 2023 17:15:00');

  // Calculate difference in seconds between now and target time
  const diff = Math.round((target - now) / 1000);
  return diff;
}

function secondsToTimeString(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const hoursString = String(hours).padStart(2, '0');
  const minutesString = String(minutes).padStart(2, '0');
  const secondsString = String(remainingSeconds).padStart(2, '0');

  return `${hoursString}:${minutesString}:${secondsString}`;
}

const Home: NextPage = () => {
  const [showList, setShowList] = useState(false);

  const [timeToScavengerHunt, setTimeToScavengerHunt] = useState(1);

  useEffect(() => {
    setTimeToScavengerHunt(countdownTo515());

    const countdown = setInterval(() => {
      setTimeToScavengerHunt(countdownTo515());
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, []);

  // const [timeBeforeShowingHint, setTimeBeforeShowingHint] = useState(120);

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
          <img className={styles.envelope} src="envelope-min.png" alt="envelope" />
          <img className={styles.invitation} src="invitation-min.jpg" alt="invitation" />
          <div className={styles.actionsContainer}>
            {timeToScavengerHunt > 0 ? (
              <div style={{ marginBottom: '1rem', maxWidth: 300, background: 'rgba(255, 255, 255, 0.9)', padding: 5 }}>
                Scavenger Hunt starts in {secondsToTimeString(timeToScavengerHunt)}
              </div>
            ) : (
              <a
                className="btn"
                style={{ marginBottom: '1rem' }}
                href="https://scavenger-hunt-2023.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Scavenger Hunt
              </a>
            )}

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
