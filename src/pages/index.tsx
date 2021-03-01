import { ExperienceBar } from "../components/ExperienceBar";
import { Countdown } from "../components/Countdown";
import { Profile } from "../components/Profile";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from '../contexts/ChallengesContext';

import { GetServerSideProps } from "next";

import CompletedChallenges from "../components/CompletedChallenges";

import styles from "../styles/pages/home.module.css";
import Head from "next/head";
import ChallengeBox from "../components/ChallengeBox";

interface HomePage {
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export default function Home(props) {
  return (
    <ChallengesProvider level={props.level} currentExperience={props.currentExperience} challengesCompleted={props.challengesCompleted} >
      <div className={styles.container}>
        <Head>
          <title>Início | Move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

/**
 * Manipular os dados que são passados da camada Next.JS para
 * o frontend -> Pode-se fazer chamadas às APIS : Escopo executado no backend Next
 */
export const getServerSideProps: GetServerSideProps = async (ctx) => {

  /** Obtém os valores armazenados nos cookies */
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    },
  };
};
