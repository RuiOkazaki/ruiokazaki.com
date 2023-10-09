import { FC } from 'react';

import { getIssues } from '@/libs/octokit/getIssues';

export const BlogList: FC = async () => {
  const { data: blogs } = await getIssues({ labels: ['blog'] });

  return (
    <ul>
      {blogs.map((blog) => (
        <li key={blog.id}>{blog.title}</li>
      ))}
    </ul>
  );
};
