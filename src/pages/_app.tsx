import '@/styles/globals.css';
import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Layout from '@/HOC/layout';
import Hotjar from '@hotjar/browser';
import { hotjar_site_id, hotjar_version } from '@/config';
import Head from 'next/head';
import { useRouter } from 'next/router';
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    if (router.query.from === 'skill') {
      console.log('redirection', router.push('/'));
      router.push('/');
    }

    Hotjar.init(hotjar_version, hotjar_site_id);
  }, [router.pathname, router.query.from]);

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
