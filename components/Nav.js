import Link from "next/link";

import styles from "../styles/Nav.module.css";
import ExternalLink from "../components/ExternalLink";

export default function Nav() {
  return (
    <div className="flex-center justify-center">
      <div className={styles.item}>
        <Link href="/#badgee">
          <span>Badgee</span>
        </Link>
      </div>
      <div className={styles.item}>
        <Link href="/#gatez">
          <span>Gatez</span>
        </Link>
      </div>
      <div className={styles.item}>
        <Link href="/company">
          <span>Company</span>
        </Link>
      </div>
      <div className={styles.item}>
        <ExternalLink href="https://www.notion.so/8glabs/Job-Board-1282158bb7ff434d9529cd0f2bcc3364">
          <span>Careers</span>
        </ExternalLink>
      </div>
    </div>
  );
}
