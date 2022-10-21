import Header from "./Header";
import Footer from "./Footer";
import Investors from "./Investors";
import JoinUs from "./JoinUs";

export default function Layout({ children }) {
  return (
    <>
      <div className="container">
        <Header />
        <main className="main">{children}</main>
        <Investors />
        <JoinUs />
        <Footer />
      </div>
    </>
  );
}
