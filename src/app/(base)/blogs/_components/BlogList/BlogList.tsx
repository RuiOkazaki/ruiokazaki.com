import { Box, Image, SimpleGrid, Text } from '@mantine/core';
import Link from 'next/link';
import { memo } from 'react';

import type { FC } from 'react';

import { getIssues } from '@/libs/octokit/getIssues';

const Presenter: FC = async () => {
  const { data: blogs } = await getIssues({ labels: ['blog'] });

  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
      spacing={{ base: 'md', sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
      {blogs.map((blog) => (
        <Box
          key={blog.id}
          component={Link}
          href={`/blogs/${blog.number}`}
          style={{
            textDecoration: 'unset',
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae"
            h={160}
            w={'100%'}
            alt=""
          />
          <Text fw={'bold'} c={'dark'} size="lg" mt="md" lineClamp={1}>
            {blog.title}
          </Text>
          <Text mt="xs" c="dimmed" size="sm" lineClamp={4}>
            {blog.body}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export const BlogList = memo(Presenter);
