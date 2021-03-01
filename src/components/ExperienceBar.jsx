import { useContext } from "react";
import { challengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/ExperienceBar.module.css";

export function ExperienceBar() {
  const { currentExperience, xpToNextLevel } = useContext(challengesContext);

  const percentToNextLevel = Math.round(
    (currentExperience * 100) / xpToNextLevel
  );

  return (
    <header className={styles.experienceBar}>
      <span>0 XP</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <span className={styles.currentExperience} style={{ left: "75%" }}>
          {currentExperience} XP
        </span>
      </div>
      <span>{xpToNextLevel} XP</span>
    </header>
  );
}
