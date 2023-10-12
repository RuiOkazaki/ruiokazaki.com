import { style } from '@vanilla-extract/css';

const circle = style({
  borderRadius: 9999,
  overflow: 'hidden',
});

const animationEaseInOut = style({
  transition: '2s ease-in-out',
  transitionProperty: 'background, stroke, fill',
});

export const styles = {
  circle,
  animationEaseInOut,
};
