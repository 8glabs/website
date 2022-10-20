import Image from "next/image";

import ExternalLink from "./ExternalLink";
import Nav from "./Nav";
import styles from "../styles/Header.module.css";
import TwitterSvg from "../public/twitter.svg";
import DiscordSvg from "../public/discord.svg";

export default function Header() {
  return (
    <header className={styles.background}>
      <div className="content-container">
        <div className={`${styles.headerWrapper} flex-center justify-between`}>
          <Image src="/logo.svg" height={40} width={124} alt="" />
          <Nav />
          <div className="flex-center">
            <ExternalLink className="line-height-none">
              <TwitterSvg className={styles.social} />
            </ExternalLink>
            <ExternalLink className="line-height-none ml-4">
              <DiscordSvg className={styles.social} />
            </ExternalLink>
          </div>
        </div>
        <div className={`${styles.bannerCompany} flex-center justify-center`}>
          <span>WE ARE BUILDING THE</span>
          <span className={`${styles.future} ml-4`}>FUTURE</span>
          <span className="ml-4">OF WEB3</span>
        </div>
      </div>
    </header>
  );
}
