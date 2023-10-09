import { FC } from 'react';

import { getIssueById } from '@/libs/octokit/getIssueById';
import { convertMarkdownToHtml } from '@/libs/remark/convertMarkdownToHtml';

type Props = {
  articleId: string | number;
};
export const ArticleDetail: FC<Props> = async ({ articleId }) => {
  const articleResponse = await getIssueById(articleId);

  const html = await convertMarkdownToHtml(articleResponse.data.body ?? '');

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
