import { useState, useEffect } from "react";

import styles from "../styles/components/Countdown.module.css";

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {

  /** Estatdos  */
  const [time, setTime] = useState(25 * 60); // Tempo de 25 minutos em segundos
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setFinished] = useState(false);

  const minutes = Math.floor(time / 60); // Obtém o valor inteiro de minutos (Arredonda pra baixo)
  const seconds = time % 60; // Obtem o restante da divisão

  const [minuteStart, minuteEnd] = String(minutes).padStart(2, '0').split('');
  /* Preenche a string com o valor 0 caso não haja dois valores obtidos no split */

  const [secondStart, secondEnd] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(25 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setFinished(true);
      setIsActive(false);
    }
  }, [isActive, time]); // Executa uma função sempre que os valores mudarem

  return (
    <div>
      <div className={styles.container}>
        <div>
          <span>{minuteStart}</span>
          <span>{minuteEnd}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondStart}</span>
          <span>{secondEnd}</span>
        </div>
      </div>

      { hasFinished ? (
        <button
          disabled
          type="button"
          className={styles.countdownBtn}>
          Ciclo encerrado
        </button>
      ) : (
          /** Este é o fragmnent, simula uma div apenas para permitir a execução do código
           * mas não é exibido no html final
           */
          <>
            {
              isActive ? (
                <button
                  type="button"
                  className={`${styles.countdownBtn} ${styles.countdownBtnActive}`}
                  onClick={resetCountdown}>
                  Interromper o ciclo
                </button>
              ) : (
                  <button
                    type="button"
                    className={styles.countdownBtn}
                    onClick={startCountdown}>
                    Iniciar um cilo
                  </button>
                )
            }
          </>
        )}
    </div>
  );
}