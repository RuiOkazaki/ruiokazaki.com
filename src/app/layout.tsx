import { ColorSchemeScript } from '@mantine/core';
import '@mantine/core/styles.css';

import type { Metadata } from 'next';

import { Noise } from '@/components/Noise';

import { CustomMantineProvider } from '@/libs/mantine/provider';
import { LINESeedJP } from '@/libs/next-font';

import styles from './global.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja" className={styles.resetHeight}>
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${LINESeedJP.className} ${styles.resetHeight}`}>
        <CustomMantineProvider>
          <Noise />
          {children}
        </CustomMantineProvider>
      </body>
    </html>
  );
};

export default RootLayout;
