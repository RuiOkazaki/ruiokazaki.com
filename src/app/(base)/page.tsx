import { Center, Flex, Stack } from '@mantine/core';
import { NextPage } from 'next';

import { Myself } from './_components/Myself';

const page: NextPage = () => {
  return (
    <Center h={'100%'} w={'100%'}>
      <Flex justify={'space-between'} w={'90%'}>
        <Stack justify={'center'} gap={0}></Stack>
        <Myself w={500} h={500} />
      </Flex>
    </Center>
  );
};

export default page;
