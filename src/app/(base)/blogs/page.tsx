import { NextPage } from 'next';

import { BlogList } from './_components/BlogList';

const page: NextPage = () => {
  return (
    <main>
      <BlogList />
    </main>
  );
};
export default page;
