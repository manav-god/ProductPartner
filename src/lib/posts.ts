import config from "@payload-config";
import { getPayload } from "payload";

export async function getPublishedPosts() {
  const payload = await getPayload({ config });
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
}

export async function getPublishedPost(slug: string) {
  const payload = await getPayload({ config });
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
}
