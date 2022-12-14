import Image from "next/image";
import Button from "./Button";
import ExternalLink from "./ExternalLink";
import styles from "../styles/JoinUs.module.css";
import MapLeftPic from "../public/map-left.png";
import MapRightPic from "../public/map-right.png";

export default function JoinUs() {
  return (
    <div className={`${styles.wrapper} flex-center flex-column`}>
      <div className={`${styles.mapWrapper} flex-center justify-between`}>
        <Image src={MapLeftPic} alt="" />
        <Image src={MapRightPic} alt="" />
      </div>
      <h5 className={styles.label}>Interested In Joining Us?</h5>
      <ExternalLink
        href="https://www.notion.so/8glabs/Job-Board-1282158bb7ff434d9529cd0f2bcc3364"
        className="mt-6"
      >
        <Button>See open positions</Button>
      </ExternalLink>
    </div>
  );
}
