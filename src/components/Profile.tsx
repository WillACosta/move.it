import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/willACosta.png" alt="William A" />
      <div>
        <strong>William Amaral</strong>
        <p>
          <img src="icons/level.svg" alt="icone de nível" />
          Level 1
          </p>
      </div>
    </div>
  );
}