import type { Metadata } from "next";
import { getCms } from "@/lib/cms";
import {
  pageSeoDefaults,
  type FaqItem,
  type PageSeoEntry,
} from "@/lib/page-seo-defaults";

export type { FaqItem, PageSeoEntry };
export { pageSeoDefaults };

export async function resolvePageSeo(path: string): Promise<PageSeoEntry> {
  const fallback =
    pageSeoDefaults.find((entry) => entry.path === path) ?? pageSeoDefaults[0];

  try {
    const payload = await getCms();
    const result = await payload.find({
      collection: "page-seo",
      where: { path: { equals: path } },
      limit: 1,
    });
    const doc = result.docs[0];
    let faqs = fallback.faqs ?? [];

    try {
      const faqResult = await payload.find({
        collection: "faqs",
        where: { page: { equals: path } },
        limit: 1,
      });
      const set = faqResult.docs[0];
      const items = Array.isArray(set?.items) ? set.items : [];
      faqs = items.flatMap((item) => {
        if (!item?.question || !item?.answer) return [];
        return [{ question: item.question, answer: item.answer }];
      });
    } catch {
      faqs = fallback.faqs ?? [];
    }

    if (doc?.metaTitle && doc?.metaDescription) {
      return {
        label: doc.label || fallback.label,
        path,
        metaTitle: doc.metaTitle,
        metaDescription: doc.metaDescription,
        faqs,
      };
    }
  } catch {
    return { ...fallback, faqs: fallback.faqs ?? [] };
  }

  return { ...fallback, faqs: fallback.faqs ?? [] };
}

export function withAdminSeo(
  metadata: Metadata,
  seo: Pick<PageSeoEntry, "metaTitle" | "metaDescription">,
): Metadata {
  const openGraph =
    metadata.openGraph && typeof metadata.openGraph === "object"
      ? metadata.openGraph
      : {};
  const twitter =
    metadata.twitter && typeof metadata.twitter === "object"
      ? metadata.twitter
      : {};

  return {
    ...metadata,
    title: { absolute: seo.metaTitle },
    description: seo.metaDescription,
    openGraph: {
      ...openGraph,
      title: seo.metaTitle,
      description: seo.metaDescription,
    },
    twitter: {
      ...twitter,
      title: seo.metaTitle,
      description: seo.metaDescription,
    },
  };
}
