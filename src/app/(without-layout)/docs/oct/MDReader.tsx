// @ts-nocheck

import path from "path";
import fs from "fs/promises";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import "../styles.css";

export default async function MDReader({ params }: { params: any }) {
  const content = await fs.readFile(
    path.join(
      process.cwd(),
      `src/app/(without-layout)/docs/oct/content/${params.slug}.mdx`
    ),
    "utf8"
  );

  const options = {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeHighlight],
    },
  };

  return (
    <>

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
      />

      <MDXRemote source={content} options={options} />
    </>
  );
}
