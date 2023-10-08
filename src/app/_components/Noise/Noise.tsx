import { Box } from '@mantine/core';
import { FC } from 'react';

import styles from './noise.css';

export const Noise: FC = () => {
  return (
    <Box
      aria-hidden
      pos={'fixed'}
      inset={0}
      opacity={0.35}
      className={styles.noise}
    >
      <svg>
        <filter id="noise">
          <feTurbulence baseFrequency="0.8" />
        </filter>
      </svg>
    </Box>
  );
};
