import styles from "../styles/components/ChallengeBox.module.css";

export default function ChallengeBox() {

  const hasChallenge = true;

  return (
    <div className={styles.container}>
      { hasChallenge ? (
        <div className={styles.active}>
          <header>Ganhe 400XP</header>
          <main>
            <img src="icons/body.svg" alt="" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.failedButton}
              onClick={null}
            >Falhei</button>
            <button
              type="button"
              className={styles.succeededButton}
              onClick={null}
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
                AVance de nível completando os desafios
              </p>
            </div>
          </>
        )}

    </div>
  );
}