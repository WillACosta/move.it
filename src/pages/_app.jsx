/**
 * Utilizado para criar componentes compartilhados em muitos lugares
 */

import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
