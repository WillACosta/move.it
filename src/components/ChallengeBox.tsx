import { useContext } from "react";
import { challengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";

import styles from "../styles/components/ChallengeBox.module.css";

export default function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(challengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.container}>
      { activeChallenge ? (
        <div className={styles.active}>
          <header>Ganhe {activeChallenge.amount}XP</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.failedButton}
              onClick={handleChallengeFailed}
            >Falhei</button>
            <button
              type="button"
              className={styles.succeededButton}
              onClick={handleChallengeSucceeded}
            >Completei</button>
          </footer>
        </div>
      ) : (
          <>
            <div className={styles.notActive}>
              <strong>
                Inicie um ciclo para receber desafios a serem completados
              </strong>
              <p>
                <img src="icons/level-up.svg" alt="Nível Acima" />
                Avance de nível completando os desafios
              </p>
            </div>
          </>
        )}

    </div>
  );
}