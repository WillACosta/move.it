import styles from "../styles/components/CompletedChallenges.module.css";
import { useContext } from 'react';
import { challengesContext } from "../contexts/ChallengesContext";

export default function CompletedChallenges() {

  const { challengesCompleted } = useContext(challengesContext);

  return (
    <div className={styles.container}>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}