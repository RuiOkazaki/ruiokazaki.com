import { request } from '@octokit/request';

import { defaultOptions } from '@/libs/octokit/defaultOptions';

/**
 * GitHubリポジトリからIDに紐付く公開済みのissueを取得します。
 *
 * @param {string | number} [id] - 取得したいissueのidを指定
 *
 * @returns {Promise<Object>} GitHub APIからのレスポンス
 *
 * @example
 * const issues = await getIssues({ limit: 10, labels: ['bug'] });
 */
export const getIssueById = async (id: string | number) => {
  const response = await request(
    'GET /repos/{owner}/{repo}/issues/{issue_number}',
    {
      issue_number: Number(id),
      ...defaultOptions,
    },
  );
  return response;
};
