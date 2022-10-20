import Image from "next/image";
import Button from "./Button";
import styles from "../styles/Product.module.css";
import BadgeeLogoSvg from "../public/badgee-logo.svg";
import ArrowRightSvg from "../public/arrow-right.svg";
import BadgeePic from "../public/badgee-pic.png";
import ExternalLink from "../components/ExternalLink";

export default function Badgee() {
  return (
    <div id="badgee" className={`${styles.wrapper} flex-center justify-center`}>
      <div className="content-container flex-center">
        <div className="left">
          <BadgeeLogoSvg />
          <h5 className={styles.title}>
            Create & Free-mint Your Soulbound Token
          </h5>
          <p className={styles.text}>
            By using Badgee, you can easily create and free-mint the
            Non-transferable SBTs that can help represent a person&apos;s
            identity and achievements in Web3.
          </p>
          <ExternalLink href="https://badgee.xyz">
            <Button end={<ArrowRightSvg />}>Visit</Button>
          </ExternalLink>
        </div>
        <div style={{ width: "641px", flex: "0 0 auto", marginLeft: "58px" }}>
          <Image src={BadgeePic} width={641} height={400} alt="" />
        </div>
      </div>
    </div>
  );
}
