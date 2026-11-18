import pages from "@/lib/offering-pages.json";

export type OfferingPageData = (typeof pages)[number];

export const offeringPages = pages as OfferingPageData[];

export function getOffering(slug: string) {
  return offeringPages.find((page) => page.slug === slug);
}
