import { Box } from '@mantine/core';
import { FC } from 'react';

import styles from './NoiseFilter.css';

export const NoiseFilter: FC = () => {
  return (
    <Box
      aria-hidden
      pos={'fixed'}
      inset={0}
      opacity={0.35}
      className={styles.noiseFilter}
    >
      <svg>
        <filter id="noise">
          <feTurbulence baseFrequency="0.8" />
        </filter>
      </svg>
    </Box>
  );
};
