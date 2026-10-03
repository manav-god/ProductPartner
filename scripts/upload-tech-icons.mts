import nextEnv from "@next/env";
import pg from "pg";

const { loadEnvConfig } = nextEnv;

loadEnvConfig(process.cwd());

async function prepareIconColumn() {
  const connectionString = process.env.DATABASE_URI;
  if (!connectionString) {
    throw new Error("DATABASE_URI is missing");
  }

  const db = new pg.Client({ connectionString });
  await db.connect();
  await db.query(`
    DO $$
    BEGIN
      IF EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_name = 'case_studies_tech_stack'
          AND column_name = 'icon'
      ) THEN
        ALTER TABLE case_studies_tech_stack DROP COLUMN icon;
      END IF;

      IF NOT EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_name = 'case_studies_tech_stack'
          AND column_name = 'icon_id'
      ) THEN
        ALTER TABLE case_studies_tech_stack
          ADD COLUMN icon_id integer
          CONSTRAINT case_studies_tech_stack_icon_id_media_id_fk
          REFERENCES media(id) ON DELETE SET NULL;
      END IF;
    END $$;
  `);
  await db.end();
}

async function main() {
  await prepareIconColumn();

  const { getPayload } = await import("payload");
  const { default: configPromise } = await import("../src/payload.config.ts");
  const { caseStudies } = await import("../src/lib/case-studies.ts");
  const { ensureTechIcons } = await import("./tech-icons.mts");
  const payload = await getPayload({ config: await configPromise });
  const iconIds = await ensureTechIcons(payload);

  for (const study of caseStudies) {
    const existing = await payload.find({
      collection: "case-studies",
      where: { slug: { equals: study.slug } },
      limit: 1,
    });
    const doc = existing.docs[0];
    if (!doc) {
      throw new Error(`Case study ${study.slug} is missing`);
    }

    await payload.update({
      collection: "case-studies",
      id: doc.id,
      data: {
        techStack: study.techStack.map((item) => {
          const icon = iconIds.get(item.icon);
          if (!icon) {
            throw new Error(`Missing media for ${item.icon}`);
          }
          return { name: item.name, icon };
        }),
      },
    });
    console.log(`linked ${study.slug}`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
