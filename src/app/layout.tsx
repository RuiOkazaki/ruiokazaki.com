import { ColorSchemeScript } from '@mantine/core';
import '@mantine/core/styles.css';

import type { Metadata } from 'next';

import { CustomMantineProvider } from '@/libs/mantine/provider';
import { LINESeedJP } from '@/libs/next-font';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={LINESeedJP.className}>
        <CustomMantineProvider>{children}</CustomMantineProvider>
      </body>
    </html>
  );
};

export default RootLayout;
