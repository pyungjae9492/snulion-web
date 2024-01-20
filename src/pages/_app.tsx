import { AppProps } from 'next/app';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';
import { logPageview } from '@/utils/logHelper';
import { useRouter } from 'next/router';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    ReactGA.initialize(`${process.env.NEXT_PUBLIC_GA_ID}`);
  }, []);

  useEffect(() => {
    logPageview(router);
  }, [router.pathname]);

  return <Component {...pageProps} />;
}

export default MyApp;
