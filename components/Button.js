import styles from "../styles/Button.module.css";

export default function Button({ end, children }) {
  return (
    <button className={styles.button}>
      <div>{children}</div>
      {end}
    </button>
  );
}
