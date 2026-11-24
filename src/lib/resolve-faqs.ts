import { unstable_cache } from "next/cache";
import { getCms } from "@/lib/cms";
import type { FaqItem } from "@/lib/faq-catalog";

function readItems(value: unknown): FaqItem[] {
  if (!Array.isArray(value)) return [];
  return value.flatMap((item) => {
    if (!item || typeof item !== "object") return [];
    const question = "question" in item ? item.question : "";
    const answer = "answer" in item ? item.answer : "";
    if (typeof question !== "string" || typeof answer !== "string") return [];
    if (!question.trim() || !answer.trim()) return [];
    return [{ question, answer }];
  });
}

const loadPageFaqs = unstable_cache(
  async (path: string): Promise<FaqItem[] | null> => {
    try {
      const payload = await getCms();
      const result = await payload.find({
        collection: "faqs",
        where: { page: { equals: path } },
        limit: 1,
      });
      const items = readItems(result.docs[0]?.items);
      return items.length ? items : null;
    } catch {
      return null;
    }
  },
  ["page-faqs"],
  { revalidate: 60, tags: ["page-faqs"] },
);

export async function resolvePageFaqs(path: string, fallback: FaqItem[]) {
  const fromCms = await loadPageFaqs(path);
  return fromCms ?? fallback;
}
