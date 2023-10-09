import { Center, Flex, Space, Stack, Text } from '@mantine/core';
import { NextPage } from 'next';

import { Myself } from './_components/Myself';

const page: NextPage = () => {
  return (
    <Center h={'100%'} w={'100%'}>
      <Flex justify={'space-between'} w={'90%'}>
        <Stack justify={'center'} gap={0}></Stack>
        <Text component="h1" fz={'1.75rem'} lh={'2.5'}>
          Hi, I&apos;m{' '}
          <Text component="span" fz={'inherit'} fw={'bold'}>
            RuiOkazaki 🐱
          </Text>
          <br />A{' '}
          <Text component="span" fz={'inherit'} fw={'bold'}>
            &lt;／&gt; Frontend Developer
          </Text>
        </Text>
        <Text>Make computer interfaces better for the humanities 🛠️</Text>
        <Space h={24} />
        <Myself w={500} h={500} />
      </Flex>
    </Center>
  );
};

export default page;
