import Button from "./Button";
import styles from "../styles/Product.module.css";
import GatezLogoSvg from "../public/gatez-logo.svg";
import ExternalLink from "../components/ExternalLink";

export default function Gatez() {
  return (
    <div className={`${styles.wrapper} flex-center justify-center`}>
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
            <Button>Visit</Button>
          </ExternalLink>
        </div>
        <img src="/gatez-pic.png" alt="" />
      </div>
    </div>
  );
}
