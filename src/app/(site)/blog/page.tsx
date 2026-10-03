import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { resolvePageSeo, withAdminSeo } from "@/lib/page-seo";
import { pageGraph } from "@/lib/schema";
import "./blog.css";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return withAdminSeo({}, await resolvePageSeo("/blog"));
}

export default async function BlogPage() {
  const seo = await resolvePageSeo("/blog");

  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/blog",
          name: seo.metaTitle,
          description: seo.metaDescription,
          crumbs: [
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ],
        })}
      />
      <BlogIndex />
    </>
  );
}
