import { request } from '@octokit/request';

import { defaultOptions } from '@/libs/octokit/defaultOptions';

/**
 * GitHubリポジトリから公開済みのissueを取得します。
 *
 * @param {Object} [options] - オプションを指定するオブジェクト
 * @param {number} [options.limit=100] - 取得するissueの最大数
 * @param {string[]} [options.labels=[]] - issueに付けられたラベルによるフィルタ
 *
 * @returns {Promise<Object>} GitHub APIからのレスポンス
 *
 * @example
 * const issues = await getIssues({ limit: 10, labels: ['bug'] });
 */
export const getIssues = async (
  options: {
    limit?: number;
    labels?: string[];
  } = {
    limit: 100,
    labels: [],
  },
) => {
  const response = await request('GET /repos/{owner}/{repo}/issues', {
    per_page: options.limit,
    labels: ['published', ...options.labels!].join(','),
    ...defaultOptions,
  });
  return response;
};
