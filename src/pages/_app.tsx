import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { MantineProvider } from '@mantine/core';
import { Layout } from '@components/molecules';
import { notFound } from 'next/navigation';

export default function App({ Component, pageProps }: AppProps) {
  if (!pageProps) {
    notFound();
  }
  return (
    <Layout>
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    </Layout>
  );
}
