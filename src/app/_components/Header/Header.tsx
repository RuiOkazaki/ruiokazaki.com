import { Box, Button, Flex } from '@mantine/core';
import Link from 'next/link';
import { FC } from 'react';

import { ColorSchemeToggleButton } from '@/components/functional/ColorSchemeToggleButton';

import styles from './Header.css';

export const Header: FC = () => {
  return (
    <Box component="header" h={60}>
      <Box
        pos={'fixed'}
        right={0}
        left={0}
        top={0}
        px={'md'}
        className={styles.header}
      >
        <Flex
          maw={1200}
          mx={'auto'}
          justify={'flex-end'}
          align={'center'}
          h={60}
          gap={'lg'}
        >
          <Button fz={'sm'} component={Link} href={'/'}>
            Home
          </Button>
          <Button fz={'sm'} component={Link} href={'/about'}>
            About
          </Button>
          <Button fz={'sm'} component={Link} href={'/blogs'}>
            Blogs
          </Button>
          <Button fz={'sm'} component={Link} href={'/notes'}>
            Notes
          </Button>
          <Button fz={'sm'} component={Link} href={'/works'}>
            Works
          </Button>
          <ColorSchemeToggleButton />
        </Flex>
      </Box>
    </Box>
  );
};
