import { style } from '@vanilla-extract/css';

import { vars } from '@/libs/mantine/theme';

const header = style({
  background: vars.colors.body,
});

const styles = {
  header,
};

export default styles;
