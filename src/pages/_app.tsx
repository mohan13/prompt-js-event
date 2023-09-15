import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/HOC/layout';
import Hotjar from '@hotjar/browser';
import Head from 'next/head';
export default function App({ Component, pageProps }: AppProps) {
  const siteId = 3655935;
  const hotjarVersion = 6;
  Hotjar.init(siteId, hotjarVersion);
  return (
    <>
      <Head>
        <title>Prompt JS</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
