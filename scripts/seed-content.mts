import nextEnv from "@next/env";

const { loadEnvConfig } = nextEnv;

loadEnvConfig(process.cwd());

async function main() {
  const { getPayload } = await import("payload");
  const { default: configPromise } = await import("../src/payload.config.ts");
  const { caseStudies } = await import("../src/lib/case-studies.ts");
  const { pageSeoDefaults } = await import("../src/lib/page-seo-defaults.ts");
  const payload = await getPayload({ config: await configPromise });

  for (const entry of pageSeoDefaults) {
    const existing = await payload.find({
      collection: "page-seo",
      where: { path: { equals: entry.path } },
      limit: 1,
    });

    if (existing.docs[0]) {
      console.log(`seo exists ${entry.path}`);
      continue;
    }

    await payload.create({
      collection: "page-seo",
      data: {
        label: entry.label,
        path: entry.path,
        metaTitle: entry.metaTitle,
        metaDescription: entry.metaDescription,
      },
    });
    console.log(`seo created ${entry.path}`);
  }

  const { ensureTechIcons } = await import("./tech-icons.mts");
  const iconIds = await ensureTechIcons(payload);

  for (const study of caseStudies) {
    const existing = await payload.find({
      collection: "case-studies",
      where: { slug: { equals: study.slug } },
      limit: 1,
    });

    if (existing.docs[0]) {
      console.log(`case study exists ${study.slug}`);
      continue;
    }

    const imageResponse = await fetch(study.image);
    if (!imageResponse.ok) {
      throw new Error(`Could not download the cover for ${study.slug}`);
    }

    const data = Buffer.from(await imageResponse.arrayBuffer());
    const media = await payload.create({
      collection: "media",
      data: {
        alt: study.imageAlt,
        folder: "case-studies",
      },
      file: {
        data,
        mimetype: "image/jpeg",
        name: `${study.slug}.jpg`,
        size: data.length,
      },
    });

    await payload.create({
      collection: "case-studies",
      data: {
        title: study.title,
        slug: study.slug,
        status: "published",
        cover: media.id,
        imageAlt: study.imageAlt,
        tags: study.tags.map((label) => ({ label })),
        titleBefore: study.titleBefore,
        titleHighlight: study.titleHighlight,
        titleAfter: study.titleAfter,
        description: study.description,
        slogan: study.slogan,
        role: study.role,
        lead: study.lead,
        cta: study.cta,
        location: study.location,
        projectType: study.projectType,
        year: study.year,
        services: study.services.map((label) => ({ label })),
        about: study.about.map((paragraph) => ({ paragraph })),
        challenges: study.challenges,
        solutionsIntro: study.solutionsIntro,
        solutions: study.solutions,
        features: study.features,
        techStack: study.techStack.map((item) => ({
          name: item.name,
          icon: iconIds.get(item.icon),
        })),
        results: study.results.map((result) => ({
          stat: result.stat,
          label: result.label,
          body: result.body,
        })),
        metaTitle: study.metaTitle,
        metaDescription: study.metaDescription,
      },
    });

    console.log(`case study created ${study.slug}`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
