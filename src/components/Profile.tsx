import { useContext } from "react";
import { challengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/Profile.module.css";

export function Profile() {

  const { level } = useContext(challengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/willACosta.png" alt="William A" />
      <div>
        <strong>William Amaral</strong>
        <p>
          <img src="icons/level.svg" alt="icone de nível" />
          Nível {level}
          </p>
      </div>
    </div>
  );
}