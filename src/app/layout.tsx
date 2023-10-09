import { Box, ColorSchemeScript, Flex } from '@mantine/core';
import '@mantine/core/styles.css';

import { CustomMantineProvider } from '@/libs/mantine/provider';
import { LINESeedJP } from '@/libs/next-font/lineSeedJp';

import { NoiseFilter } from './_components/NoiseFilter';
import styles from './layout.css';

export * from '@/libs/next/metadata';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={LINESeedJP.className}>
        <CustomMantineProvider>
          <NoiseFilter />
          <Box h={'100dvh'} className={styles.baseLayout}>
            <header>
              <Flex align={'center'} h={60}>
                header
              </Flex>
            </header>
            <Box component="main" px={'md'}>
              {children}
            </Box>
            <footer>
              <Flex align={'center'}>footer</Flex>
            </footer>
          </Box>
        </CustomMantineProvider>
      </body>
    </html>
  );
};

export default RootLayout;
