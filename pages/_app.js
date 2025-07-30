import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../lib/i18n';
import '../styles/globals.css';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      // You can add analytics tracking here
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}