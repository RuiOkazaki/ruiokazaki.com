import { style } from '@vanilla-extract/css';

const baseLayout = style({
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
});

const styles = {
  baseLayout,
};

export default styles;
