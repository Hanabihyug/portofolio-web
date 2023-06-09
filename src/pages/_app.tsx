import type { AppProps } from 'next/app';
import '../../styles/globals.css';
import 'animate.css/animate.min.css';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
  }
  
  export default MyApp;
