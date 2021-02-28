import { createContext, ReactNode, useState } from "react";

export const challengesContext = createContext({});

interface ChallengesProviderProps {
  children: ReactNode
}

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    console.log();
  }

  /**
   * Value exporta os dados para qualquer componente externo
   */
  return (
    <challengesContext.Provider value={{ level, currentExperience, challengesCompleted, startNewChallenge }}>
      {children}
    </challengesContext.Provider>
  );
}