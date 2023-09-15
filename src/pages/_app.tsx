import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/HOC/layout';
import Head from 'next/head';
export default function App({ Component, pageProps }: AppProps) {
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
