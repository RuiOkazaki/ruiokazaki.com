// MEMO: request.defaults では owner / repo の設定をしても required を満たすことが出来なかった為 object で管理する
export const defaultOptions = {
  owner: process.env['GITHUB_OWNER'] ?? '',
  repo: process.env['GITHUB_REPOSITORY'] ?? '',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
  },
};
