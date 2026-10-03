import { unstable_cache } from "next/cache";
import { getCms } from "@/lib/cms";

export const getPublishedPosts = unstable_cache(
  async () => {
    const payload = await getCms();
    const result = await payload.find({
      collection: "posts",
      where: {
        status: {
          equals: "published",
        },
      },
      sort: "-createdAt",
      depth: 1,
      limit: 50,
    });

    return result.docs;
  },
  ["published-posts"],
  { revalidate: 60 },
);

export const getPublishedPost = unstable_cache(
  async (slug: string) => {
    const payload = await getCms();
    const result = await payload.find({
      collection: "posts",
      where: {
        and: [
          {
            slug: {
              equals: slug,
            },
          },
          {
            status: {
              equals: "published",
            },
          },
        ],
      },
      depth: 1,
      limit: 1,
    });

    return result.docs[0] ?? null;
  },
  ["published-post"],
  { revalidate: 60 },
);
