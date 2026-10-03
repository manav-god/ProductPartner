import nextEnv from "@next/env";

const { loadEnvConfig } = nextEnv;

loadEnvConfig(process.cwd());

const titles: Record<string, string> = {
  "/product-development": "Product development",
  "/product-management": "Product management",
  "/product-marketing": "Product marketing",
};

async function main() {
  const { getPayload } = await import("payload");
  const { default: configPromise } = await import("../src/payload.config.ts");
  const { pageFaqs } = await import("../src/lib/page-faqs.ts");
  const payload = await getPayload({ config: await configPromise });

  for (const [page, faqs] of Object.entries(pageFaqs)) {
    const existing = await payload.find({
      collection: "faqs",
      where: { page: { equals: page } },
      limit: 1,
    });

    if (existing.docs[0]) {
      console.log(`faq set exists ${page}`);
      continue;
    }

    await payload.create({
      collection: "faqs",
      data: {
        title: titles[page] ?? page,
        page,
        items: faqs,
      },
    });
    console.log(`faq set created ${page}`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
