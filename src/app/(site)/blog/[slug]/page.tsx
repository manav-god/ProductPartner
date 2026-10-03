import type { Metadata } from "next";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { JsonLd } from "@/components/seo/JsonLd";
import { notFound } from "next/navigation";
import { BlogPostView } from "@/components/blog/BlogPost";
import { getPublishedPost } from "@/lib/posts";
import { pageUrl } from "@/lib/schema";
import "../blog.css";

export const revalidate = 60;

type Args = {
  params: Promise<{
    slug: string;
  }>;
};

type Cover = {
  url?: string | null;
  alt?: string | null;
};

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = await getPublishedPost(slug);
    if (!post) return { title: { absolute: "Blog | Product Partner" } };

    const cover =
      post.cover && typeof post.cover === "object" ? post.cover : null;
    const title = `${post.title} | Product Partner`;
    const description = post.excerpt || undefined;

    return {
      title: { absolute: title },
      description,
      alternates: {
        canonical: `https://productpartner.net/blog/${post.slug}/`,
      },
      openGraph: {
        type: "article",
        siteName: "Product Partner",
        title,
        description,
        url: `https://productpartner.net/blog/${post.slug}/`,
        images: cover?.url ? [{ url: cover.url, alt: cover.alt || post.title }] : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
      },
    };
  } catch {
    return { title: { absolute: "Blog | Product Partner" } };
  }
}

export default async function BlogPostPage({ params }: Args) {
  const { slug } = await params;

  let post: Awaited<ReturnType<typeof getPublishedPost>> | null = null;

  try {
    post = await getPublishedPost(slug);
  } catch {
    post = null;
  }

  if (!post) notFound();

  const cover =
    post.cover && typeof post.cover === "object" ? (post.cover as Cover) : null;
  const url = pageUrl(`/blog/${post.slug}`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.excerpt || undefined,
        image: cover?.url || undefined,
        datePublished: post.createdAt,
        dateModified: post.updatedAt,
        inLanguage: "en-US",
        author: {
          "@type": "Organization",
          name: "Product Partner",
          url: "https://productpartner.net/",
        },
        publisher: { "@id": "https://productpartner.net/#organization" },
        mainEntityOfPage: { "@id": `${url}#webpage` },
        isPartOf: { "@id": "https://productpartner.net/#website" },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${post.title} | Product Partner`,
        description: post.excerpt || undefined,
        isPartOf: { "@id": "https://productpartner.net/#website" },
        mainEntity: { "@id": `${url}#article` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://productpartner.net/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://productpartner.net/blog/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <BlogPostView
      title={post.title}
      excerpt={post.excerpt}
      cover={cover}
      content={(post.content as SerializedEditorState | null) ?? null}
      publishedAt={post.createdAt}
    />
    </>
  );
}
