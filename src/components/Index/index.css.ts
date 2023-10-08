import { rem } from '@mantine/core';
import { style } from '@vanilla-extract/css';

import { vars } from '@/libs/mantine/theme';

const title = style({
  color: vars.colors.black,
  fontSize: rem(100),
  fontWeight: 900,
  letterSpacing: rem(-2),

  selectors: {
    [vars.darkSelector]: {
      color: vars.colors.white,
    },
  },

  '@media': {
    [vars.smallerThan('md')]: {
      fontSize: rem(50),
    },
  },
});

const styles = {
  title,
};

export default styles;
