import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import raw from "rehype-raw";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(raw)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}
