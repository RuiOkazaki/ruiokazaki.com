import { NextPage } from 'next';

import { Contents } from '@/components/ui/Contents';

import { BlogList } from './_components/BlogList';

const page: NextPage = () => {
  return (
    <Contents>
      <BlogList />
    </Contents>
  );
};
export default page;
