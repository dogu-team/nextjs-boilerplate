import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <Script src="/__ENV.js" strategy="beforeInteractive" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
