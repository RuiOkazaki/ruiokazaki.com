import { Box, Flex } from '@mantine/core';
import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <Box component="footer" px={'md'}>
      <Flex maw={1200} mx={'auto'}></Flex>
    </Box>
  );
};
