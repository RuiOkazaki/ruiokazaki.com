import { Title, Text, Anchor } from '@mantine/core';

import { ColorSchemeToggle } from '@/components/functional/ColorSchemeToggle';

import styles from '@/app/(base)/page.css';

const Welcome = () => {
  return (
    <main>
      <Title className={styles.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: 'pink', to: 'yellow' }}
        >
          Mantine
        </Text>
      </Title>
      <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This starter Next.js project includes a minimal setup for server side
        rendering, if you want to learn more on Mantine + Next.js integration
        follow{' '}
        <Anchor href="https://mantine.dev/guides/next/" size="lg">
          this guide
        </Anchor>
        . To get started edit index.tsx file.
      </Text>
      <ColorSchemeToggle />
    </main>
  );
};

export default Welcome;