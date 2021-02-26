import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import CompletedChallenges from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";

import styles from "../styles/pages/home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
        </div>
        <div>
          <Countdown />
        </div>
      </section>
    </div>
  );
}