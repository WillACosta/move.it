import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {

  const { level, closeModal } = useContext(challengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você subiu de nível</p>
        <button type="button" onClick={closeModal}>
          <img src="/icons/close.svg" alt="" />
        </button>
      </div>
    </div>
  );
}