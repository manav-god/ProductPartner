import nextEnv from "@next/env";

const { loadEnvConfig } = nextEnv;

loadEnvConfig(process.cwd());

const legacyQuestions: Record<string, string[]> = {
  "/product-development": [
    "What is product development?",
    "What is the difference between product development and software development?",
    "What is included in product development services?",
    "How long does product development take?",
    "Can you develop an MVP before building the full product?",
  ],
  "/product-management": [
    "What does a product management consultant do?",
    "What are product management services?",
    "What is the difference between product management and project management?",
    "Why is product discovery important?",
    "When should a startup invest in product management?",
  ],
  "/product-marketing": [
    "What does a product marketing agency do?",
    "What's the difference between product marketing and digital marketing?",
    "Why do B2B companies need product marketing?",
    "Can product marketing improve SEO and AI search visibility?",
    "When should a startup invest in product marketing?",
  ],
};

function sameQuestions(items: { question?: string | null }[] | null | undefined, questions: string[]) {
  const current = (items ?? []).map((item) => item.question ?? "");
  return current.length === questions.length && current.every((question, index) => question === questions[index]);
}

async function addEnumValues(
  payload: { db: { pool?: { query: (sql: string) => Promise<unknown> } } },
  paths: string[],
) {
  const pool = payload.db.pool;
  if (!pool) throw new Error("Database pool is unavailable.");
  for (const path of paths) {
    const value = path.replaceAll("'", "''");
    await pool.query(`ALTER TYPE "enum_faqs_page" ADD VALUE IF NOT EXISTS '${value}'`);
  }
}

async function main() {
  const { getPayload } = await import("payload");
  const { default: configPromise } = await import("../src/payload.config.ts");
  const { faqPages } = await import("../src/lib/faq-catalog.ts");
  const payload = await getPayload({ config: await configPromise });
  const allowed = new Set(faqPages.map((page) => page.path));

  try {
    await addEnumValues(payload, faqPages.map((page) => page.path));
  } catch (error) {
    console.error("Could not extend the FAQ page list in the database.", error);
  }

  const existingSets = await payload.find({
    collection: "faqs",
    limit: 200,
    pagination: false,
  });

  for (const doc of existingSets.docs) {
    if (!allowed.has(doc.page)) {
      await payload.delete({ collection: "faqs", id: doc.id });
      console.log(`removed faq set ${doc.page}`);
    }
  }

  for (const page of faqPages) {
    const existing = await payload.find({
      collection: "faqs",
      where: { page: { equals: page.path } },
      limit: 1,
    });
    const doc = existing.docs[0];

    if (!doc) {
      await payload.create({
        collection: "faqs",
        data: {
          title: page.label,
          page: page.path,
          items: page.items,
        },
      });
      console.log(`faq set created ${page.path}`);
      continue;
    }

    const legacy = legacyQuestions[page.path];
    if (legacy && sameQuestions(doc.items, legacy)) {
      await payload.update({
        collection: "faqs",
        id: doc.id,
        data: {
          title: page.label,
          items: page.items,
        },
      });
      console.log(`faq set matched to the page ${page.path}`);
    } else {
      console.log(`faq set kept ${page.path}`);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
