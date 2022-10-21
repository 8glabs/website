import Image from "next/image";
import Button from "./Button";
import styles from "../styles/Product.module.css";
import GatezLogoSvg from "../public/gatez-logo.svg";
import GatezPic from "../public/gatez-pic.png";
import ArrowRightSvg from "../public/arrow-right.svg";
import ExternalLink from "../components/ExternalLink";

export default function Gatez() {
  return (
    <div id="gatez" className={`${styles.wrapper} flex-center justify-center`}>
      <div className="content-container flex-center">
        <div className="left">
          <GatezLogoSvg />
          <h5 className={styles.title}>
            Build Your Web3 Token Gated Community
          </h5>
          <p className={styles.text}>
            Using NFTs and tokens to control access of your community to your
            discord server, telegram group or website.
          </p>
          <ExternalLink href="https://gatez.io">
            <Button end={<ArrowRightSvg />}>Visit</Button>
          </ExternalLink>
        </div>
        <div style={{ width: "700px", flex: "0 0 auto" }}>
          <Image src={GatezPic} width={700} height={390} alt="" />
        </div>
      </div>
    </div>
  );
}
