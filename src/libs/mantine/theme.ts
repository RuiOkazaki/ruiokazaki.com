'use client';

import { ActionIcon, Button, createTheme } from '@mantine/core';
import { themeToVars } from '@mantine/vanilla-extract';

export const theme = createTheme({
  components: {
    Button: Button.extend({
      defaultProps: {
        radius: 'lg',
        color: 'gray',
        fw: 'bold',
        variant: 'subtle',
      },
    }),
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        radius: 'lg',
        color: 'gray',
      },
    }),
  },
});
export const vars = themeToVars(theme);
