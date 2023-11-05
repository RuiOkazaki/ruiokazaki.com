'use client';

import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoon, IconDeviceDesktop } from '@tabler/icons-react';
import { FC, useEffect, useState } from 'react';

const colorSchemeIconMapping = {
  light: <IconSun />,
  dark: <IconMoon />,
  auto: <IconDeviceDesktop />,
} as const;

export const ColorSchemeToggleButton: FC = () => {
  const { setColorScheme, colorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });

  const colorSchemeToggle = () => {
    switch (colorScheme) {
      case 'light':
        setColorScheme('dark');
        break;
      case 'dark':
        setColorScheme('auto');
        break;
      case 'auto':
        setColorScheme('light');
        break;
    }
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <ActionIcon
      variant="subtle"
      h={36}
      w={36}
      onClick={colorSchemeToggle}
      loading={!mounted}
    >
      {mounted && colorSchemeIconMapping[colorScheme]}
    </ActionIcon>
  );
};
