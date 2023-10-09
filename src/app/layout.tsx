import { ColorSchemeScript } from '@mantine/core';
import '@mantine/core/styles.css';

import { CustomMantineProvider } from '@/libs/mantine/provider';
import { LINESeedJP } from '@/libs/next-font/lineSeedJp';

import { Noise } from './_components/Noise';
import styles from './global.css';

export * from '@/libs/next/metadata';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja" className={styles.resetHeight}>
      <head>
        <ColorSchemeScript />
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
