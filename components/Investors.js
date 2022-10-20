import styles from "../styles/Investors.module.css";
import ExternalLink from "./ExternalLink";

const INVESTORS = [
  {
    img: "ngc.svg",
    url: "https://www.ngc.fund/",
  },
  {
    img: "slow.svg",
    url: "https://slow-prod.herokuapp.com/",
  },
  {
    img: "gfc.svg",
    url: "https://www.globalfounderscapital.com/",
  },
  {
    img: "goodwater.svg",
    url: "https://www.goodwatercap.com",
  },
  {
    img: "headline.svg",
    url: "https://headline.com",
  },
  {
    img: "bixin.svg",
    url: "https://bixinvc.com/",
  },
];

export default function Investors() {
  return (
    <div className={`${styles.wrapper} flex-center flex-column`}>
      <h5 className={styles.title}>
        SUPPORTED BY TOP CRYPTO AND TECH INVESTORS
      </h5>
      <p className={styles.text}>
        Backed by first-class investors and builders who were early in Facebook,
        Twitter, Coupang, MakerDao, Polkadot, Dapper
      </p>
      <div className={`${styles.itemWrapper} flex-center justify-center`}>
        {(INVESTORS || []).map((item, index) => (
          <ExternalLink
            className={`${styles.item} line-height-none`}
            href={item.url}
            key={index}
          >
            <img src={item.img} alt="" />
          </ExternalLink>
        ))}
      </div>
    </div>
  );
}
