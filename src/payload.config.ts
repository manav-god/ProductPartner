import { setDefaultResultOrder } from "node:dns";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { CaseStudies } from "./collections/CaseStudies";
import { Faqs } from "./collections/Faqs";
import { Inquiries } from "./collections/Inquiries";
import { Media } from "./collections/Media";
import { PageSeo } from "./collections/PageSeo";
import { Posts } from "./collections/Posts";
import { Users } from "./collections/Users";
import { databaseUri } from "./lib/database-uri";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

setDefaultResultOrder("ipv4first");

const s3Enabled = Boolean(
  process.env.S3_BUCKET &&
    process.env.S3_ACCESS_KEY_ID &&
    process.env.S3_SECRET_ACCESS_KEY &&
    process.env.S3_ENDPOINT,
);

function mediaFileURL({
  filename,
  prefix,
}: {
  filename: string;
  prefix?: string;
}) {
  const base = (process.env.S3_PUBLIC_URL || "").replace(/\/$/, "");
  const key = prefix ? `${prefix}/${filename}` : filename;
  return `${base}/${key}`;
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: " — Product Partner",
    },
  },
  collections: [Users, Media, Posts, CaseStudies, PageSeo, Faqs, Inquiries],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: databaseUri(),
      max: process.env.VERCEL ? 1 : 4,
      connectionTimeoutMillis: 20000,
      ssl: { rejectUnauthorized: false },
    },
  }),
  plugins: [
    s3Storage({
      enabled: s3Enabled,
      collections: {
        media: {
          prefix: "",
          disablePayloadAccessControl: true,
          generateFileURL: mediaFileURL,
        },
      },
      bucket: process.env.S3_BUCKET || "",
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || "",
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || "",
        },
        region: process.env.S3_REGION || "ap-south-1",
        endpoint: process.env.S3_ENDPOINT,
        forcePathStyle: true,
      },
    }),
  ],
  sharp,
});
