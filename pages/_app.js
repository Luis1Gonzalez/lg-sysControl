import { ControlProvider } from "../context/controlProvider";
import "../styles/globals.css";
import { initGA, logPageView } from '../analytics';
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    initGA();
    logPageView();
  }, []);
  
  return (
    <ControlProvider>
      <Component {...pageProps} />
    </ControlProvider>
  );
}

export default MyApp;
