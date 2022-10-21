import Head from "next/head";

import Layout from "../components/Layout";
import Badgee from "../components/Badgee";
import Gatez from "../components/Gatez";

export default function Home() {
  return (
    <>
      <Head>
        <title>8glabs</title>
      </Head>
      <Layout>
        <Badgee />
        <Gatez />
      </Layout>
    </>
  );
}
