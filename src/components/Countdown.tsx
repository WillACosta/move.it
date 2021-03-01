import { useState, useEffect, useContext } from "react";
import { challengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/Countdown.module.css";
import { CountdownContext } from '../contexts/CountdownContext';

export function Countdown() {

  const { minutes, seconds, hasFinished, isActive, resetCountdown, startCountdown } = useContext(CountdownContext);

  const [minuteStart, minuteEnd] = String(minutes).padStart(2, '0').split('');
  /* Preenche a string com o valor 0 caso não haja dois valores obtidos no split */

  const [secondStart, secondEnd] = String(seconds).padStart(2, '0').split('');


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