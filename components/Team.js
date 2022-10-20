import styles from "../styles/Team.module.css";

export default function Team() {
  return (
    <div className={`${styles.wrapper} flex-center flex-column`}>
      <h5 className={styles.title}>OUT TEAM</h5>
      <p className={styles.text}>
        We are an international team of ex-Google, YouTube employees with
        backgrounds in social media, finance , machine learning and blockchain
        hoping to make an impact on the next generation of internet through web3
        technologies.
      </p>
    </div>
  );
}
