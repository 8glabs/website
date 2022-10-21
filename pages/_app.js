import { useEffect } from "react";
import ReactGA from "react-ga4";
import { useRouter } from "next/router";

import "../styles/globals.css";

ReactGA.initialize(process.env.NEXT_PUBLIC_GA);

export const usePageTracking = () => {
  const router = useRouter();
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: router.pathname });
  }, [router.pathname]);
};

export default function MyApp({ Component, pageProps }) {
  usePageTracking();
  return <Component {...pageProps} />;
}
