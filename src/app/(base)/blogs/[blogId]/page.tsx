import { NextPage } from 'next';

import { ArticleDetail } from '@/components/functional/ArticleDetail';

import { getIssues } from '@/libs/octokit/getIssues';

export const generateStaticParams = async () => {
  const { data: blogs } = await getIssues({ labels: ['blog'] });

  return blogs.map((blog) => ({
    blogId: String(blog.number),
  }));
};

type Props = {
  params: {
    blogId: string;
  };
};

const page: NextPage<Props> = ({ params: { blogId } }) => {
  return (
    <main>
      <ArticleDetail articleId={blogId} />
    </main>
  );
};

export default page;
