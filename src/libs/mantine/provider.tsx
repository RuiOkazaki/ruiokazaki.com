import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { FC, ReactNode } from 'react';

import { theme } from './theme';

type Props = {
  children: ReactNode;
};

export const CustomMantineProvider: FC<Props> = ({ children }) => (
  <MantineProvider theme={theme}>
    <Notifications
      portalProps={{
        style: {
          position: 'fixed',
          right: 0,
          bottom: 0,
        },
      }}
    />
    {children}
  </MantineProvider>
);
