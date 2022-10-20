import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";
import Investors from "./Investors";
import JoinUs from "./JoinUs";
import Team from "./Team";
import Badgee from "./Badgee";
import Gatez from "./Gatez";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>8glabs</title>
      </Head>
      <div className="container">
        <Header />
        <main className="main">{children}</main>
        <Badgee />
        <Gatez />
        <Team />
        <Investors />
        <JoinUs />
        <Footer />
      </div>
    </>
  );
}
