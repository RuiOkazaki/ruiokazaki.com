import { Box } from '@mantine/core';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Contents: FC<Props> = ({ children }) => (
  <Box maw={1000} w={'100%'} mx={'auto'}>
    {children}
  </Box>
);
