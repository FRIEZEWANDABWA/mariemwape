import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#dc7b1f" />
        <meta name="author" content="Marie Mwape Kashimbo" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Marie Mwape Kashimbo" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}