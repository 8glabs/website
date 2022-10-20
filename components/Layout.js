import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>8glabs</title>
      </Head>
      <div className="container">
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </div>
    </>
  );
}
