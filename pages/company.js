import Head from "next/head";

import Layout from "../components/Layout";
import Team from "../components/Team";

export default function Company() {
  return (
    <>
      <Head>
        <title>8glabs | company</title>
      </Head>
      <Layout>
        <Team />
      </Layout>
    </>
  );
}
