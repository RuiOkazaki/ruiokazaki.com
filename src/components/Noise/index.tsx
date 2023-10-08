import { Box } from '@mantine/core';
import { FC } from 'react';

import styles from './index.css';

export const Noise: FC = () => {
  return (
    <Box
      component="svg"
      pointerEvents={'none'}
      pos={'fixed'}
      top={0}
      z={1000000}
      opacity={0.3}
      className={styles.noise}
      width="100dvw"
      height="100dvh"
    >
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.6"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100dvw" height="100dvh" filter="url(#noise)"></rect>
    </Box>
  );
};
