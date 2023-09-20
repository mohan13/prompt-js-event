import '@/styles/globals.css';
import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Layout from '@/HOC/layout';
import Hotjar from '@hotjar/browser';
import { hotjar_site_id, hotjar_version } from '@/config';
import Head from 'next/head';
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Hotjar.init(hotjar_site_id, hotjar_version);
  }, []);

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
