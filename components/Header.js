import { useRouter } from "next/router";

import ExternalLink from "./ExternalLink";
import Nav from "./Nav";
import styles from "../styles/Header.module.css";
import TwitterSvg from "../public/twitter.svg";
import DiscordSvg from "../public/discord.svg";
import LogoSvg from "../public/logo.svg";
import BgPic from "../public/bg.png";
import Link from "next/link";

export default function Header() {
  const router = useRouter();

  return (
    <header
      className={styles.background}
      style={{ backgroundImage: `url(${BgPic.src})` }}
    >
      <div className="content-container">
        <div className={`${styles.headerWrapper} flex-center justify-between`}>
          <Link href="/">
            <LogoSvg style={{ cursor: "pointer" }} />
          </Link>
          <Nav />
          <div className="flex-center">
            <ExternalLink
              className="line-height-none"
              href="https://twitter.com/catalog_lu"
            >
              <TwitterSvg className={styles.social} />
            </ExternalLink>
            <ExternalLink
              className="line-height-none ml-4"
              href="https://discord.com/invite/Nskxybzbgp"
            >
              <DiscordSvg className={styles.social} />
            </ExternalLink>
          </div>
        </div>
        {router.pathname === "/" && (
          <div className={`${styles.banner} flex-center flex-column`}>
            <span>We are building the</span>
            <span>FUTURE</span>
            <span>of web3</span>
          </div>
        )}
        {router.pathname === "/company" && (
          <div className={`${styles.bannerCompany} flex-center justify-center`}>
            <span>WE ARE BUILDING THE</span>
            <span className={`${styles.future} ml-4`}>FUTURE</span>
            <span className="ml-4">OF WEB3</span>
          </div>
        )}
      </div>
    </header>
  );
}
