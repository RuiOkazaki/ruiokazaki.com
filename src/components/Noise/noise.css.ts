import { style } from '@vanilla-extract/css';

const noise = style({
  pointerEvents: 'none',
  zIndex: 1000,

  selectors: {
    '&::after': {
      content: '',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      filter: 'url("#noise")',
    },
  },
});

const styles = {
  noise,
};

export default styles;
