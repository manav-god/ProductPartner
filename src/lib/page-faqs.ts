import { faqPages, type FaqItem } from "@/lib/faq-catalog";

export type { FaqItem };

const servicePaths = ["/product-development", "/product-management", "/product-marketing"];

export const pageFaqs: Record<string, FaqItem[]> = Object.fromEntries(
  faqPages
    .filter((page) => servicePaths.includes(page.path))
    .map((page) => [page.path, page.items]),
);
