import styles from "../styles/Nav.module.css";

import ExternalLink from "../components/ExternalLink";

export default function Nav() {
  return (
    <div className="flex-center justify-center">
      <div className={`${styles.item} ${styles.active}`}>
        <ExternalLink>
          <span>Badgee</span>
        </ExternalLink>
      </div>
      <div className={`${styles.item} ${styles.active}`}>
        <ExternalLink>
          <span>Gatez</span>
        </ExternalLink>
      </div>
      <div className={`${styles.item} ${styles.active}`}>
        <ExternalLink>
          <span>Company</span>
        </ExternalLink>
      </div>
      <div className={`${styles.item} ${styles.active}`}>
        <ExternalLink>
          <span>Careers</span>
        </ExternalLink>
      </div>
    </div>
  );
}
