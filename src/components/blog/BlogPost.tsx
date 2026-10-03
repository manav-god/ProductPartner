import { createElement } from "react";
import Link from "next/link";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { ArrowRight } from "@/components/icons";
import {
  contentsFromLexical,
  plainHeading,
  uniqueHeadingId,
} from "@/lib/blog-headings";

type Cover = {
  url?: string | null;
  alt?: string | null;
};

const headingTags = new Set(["h1", "h2", "h3", "h4", "h5", "h6"]);

function formatPublished(value?: string | null) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function BlogPostView({
  title,
  excerpt,
  cover,
  content,
  publishedAt,
}: {
  title: string;
  excerpt?: string | null;
  cover?: Cover | null;
  content?: SerializedEditorState | null;
  publishedAt?: string | null;
}) {
  const contents = contentsFromLexical(content ?? null);
  const published = formatPublished(publishedAt);
  const seenHeadings = new Map<string, number>();

  return (
    <article className="blog-page blog-article">
      <div className="blog-article-hero">
        <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
          <Link href="/blog" className="blog-back">
            <ArrowRight className="h-3.5 w-3.5 rotate-180" />
            Blog
          </Link>
          <h1>{title}</h1>
          <p className="blog-byline">
            <span>Product Partner</span>
            {published ? (
              <>
                <span aria-hidden="true"> · </span>
                <time dateTime={publishedAt ?? undefined}>{published}</time>
              </>
            ) : null}
          </p>
          {excerpt ? <p className="blog-dek">{excerpt}</p> : null}
          {cover?.url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={cover.url}
              alt={cover.alt || ""}
              className="blog-cover"
            />
          ) : null}

          <div className="blog-layout">
            {contents.length > 0 ? (
              <nav className="blog-contents" aria-label="Contents">
                <p>Contents</p>
                <ol>
                  {contents.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`}>{item.text}</a>
                    </li>
                  ))}
                </ol>
              </nav>
            ) : null}

            {content ? (
              <div className="blog-prose">
                <RichText
                  data={content}
                  converters={({ defaultConverters }) => ({
                    ...defaultConverters,
                    heading: ({ node, nodesToJSX }) => {
                      const tag = headingTags.has(node.tag) ? node.tag : "h2";
                      const text = plainHeading(node);
                      const id =
                        tag === "h2" && text
                          ? uniqueHeadingId(text, seenHeadings)
                          : undefined;
                      return createElement(
                        tag,
                        { id },
                        nodesToJSX({ nodes: node.children }),
                      );
                    },
                    table: ({ node, nodesToJSX }) => (
                      <div className="lexical-table-container">
                        <table className="lexical-table">
                          <tbody>{nodesToJSX({ nodes: node.children })}</tbody>
                        </table>
                      </div>
                    ),
                    tablerow: ({ node, nodesToJSX }) => (
                      <tr>{nodesToJSX({ nodes: node.children })}</tr>
                    ),
                    tablecell: ({ node, nodesToJSX }) => {
                      const Tag = node.headerState > 0 ? "th" : "td";
                      return (
                        <Tag
                          colSpan={
                            node.colSpan > 1 ? node.colSpan : undefined
                          }
                          rowSpan={
                            node.rowSpan > 1 ? node.rowSpan : undefined
                          }
                        >
                          {nodesToJSX({ nodes: node.children })}
                        </Tag>
                      );
                    },
                  })}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
