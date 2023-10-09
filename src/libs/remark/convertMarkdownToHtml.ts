import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkGithub from 'remark-github';
import remarkHtml from 'remark-html';

/**
 * Markdown形式のテキストをHTMLに変換します。
 *
 * @param {string} markdown - 変換するMarkdown形式のテキスト
 * @returns {Promise<string>} 変換されたHTML形式のテキスト
 *
 * @example
 * const html = await convertMarkdownToHtml("# Hello World");
 */
export const convertMarkdownToHtml = async (markdown: string) => {
  const response = await remark()
    .use(remarkHtml)
    .use(remarkGfm)
    .use(remarkGithub, {
      repository: `${process.env['GITHUB_OWNER']}/${process.env['GITHUB_REPOSITORY']}`,
    })
    .process(markdown);

  return response.toString();
};
