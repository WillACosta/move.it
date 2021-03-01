import { createContext, ReactNode, useState, useContext, useEffect } from "react";

import { challengesContext } from './ChallengesContext';

interface CountdownContextData {
  minutes: number,
  seconds: number,
  startCountdown: () => void,
  resetCountdown: () => void,
  hasFinished: boolean,
  isActive: boolean
}

interface ChallengesProviderProps {
  children: ReactNode
}

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: ChallengesProviderProps) {

  let countdownTimeout: NodeJS.Timeout;

  const { startNewChallenge } = useContext(challengesContext);

  /** Estatdos  */
  const [time, setTime] = useState(0.1 * 60); // Tempo de 25 minutos em segundos 25 * 60
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setFinished] = useState(false);

  const minutes = Math.floor(time / 60); // Obtém o valor inteiro de minutos (Arredonda pra baixo)
  const seconds = time % 60; // Obtem o restante da divisão

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
    setFinished(false);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]); // Executa uma função sempre que os valores mudarem

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        startCountdown,
        resetCountdown,
        hasFinished,
        isActive
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}