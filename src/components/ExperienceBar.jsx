import styles from "../styles/components/ExperienceBar.module.css";

export function ExperienceBar() {
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: "75%" }} />

        <span className={styles.currentExperience} style={{ left: "75%" }}>
          375 xp
        </span>
      </div>
      <span>1200 xp</span>
    </header>
  );
}
