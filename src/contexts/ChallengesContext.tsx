import { createContext, ReactNode, useEffect, useState } from "react";
import challenges from '../../challenges.json';

import Cookies from 'js-cookie';
import { LevelUpModal } from "../components/LevelUpModal";

interface Challenge {
  type: 'body' | 'eye',
  description: string,
  amount: number
}

interface ChallengesContextData {
  level: number,
  currentExperience: number,
  activeChallenge: Challenge
  levelUp: () => void,
  challengesCompleted: number,
  startNewChallenge: () => void,
  resetChallenge: () => void,
  xpToNextLevel: number,
  completeChallenge: () => void,
  closeModal: () => void
}

interface ChallengesProviderProps {
  children: ReactNode,
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export const challengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
  const [isModalOpen, setModalOpen] = useState(false);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const xpToNextLevel = Math.pow((level + 1) * 4, 2); // Calculo para o prox. nivel

  useEffect(() => {
    Notification.requestPermission();
  }, []); // Executa uma única vez assim que o componente for excecutado

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesCompleted', String(challengesCompleted));
  }, [
    level, currentExperience, challengesCompleted
  ]);

  function closeModal() {
    setModalOpen(false);
  }

  function levelUp() {
    setLevel(level + 1);
    setModalOpen(true);
  }

  // new Audio('/notification.mp3').play();

  function startNewChallenge() {
    const randomChallengeIndx = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndx];

    setActiveChallenge(challenge);

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio!!', {
        body: `Valendo ${challenge.amount}XP, vai perder essa!?`
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) return;

    const { amount } = activeChallenge;
    let finalXP = currentExperience + amount;

    if (finalXP >= xpToNextLevel) {
      finalXP = finalXP - xpToNextLevel;
      levelUp();

      setCurrentExperience(finalXP);
      setActiveChallenge(null);
      setChallengesCompleted(challengesCompleted + 1);
    }
  }

  /**
   * Value exporta os dados para qualquer componente externo
   */
  return (
    <challengesContext.Provider value={{
      level,
      currentExperience,
      challengesCompleted,
      startNewChallenge,
      activeChallenge,
      levelUp,
      resetChallenge,
      xpToNextLevel,
      completeChallenge,
      closeModal
    }}>
      {children}
      { isModalOpen && <LevelUpModal />}
    </challengesContext.Provider>
  );
}