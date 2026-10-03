import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const labels: Record<string, string> = {
  "swift.svg": "Swift",
  "apple.svg": "Apple",
  "firebase.svg": "Firebase",
  "nodedotjs.svg": "Node.js",
  "googlecloud.svg": "Google Cloud",
  "openai.svg": "OpenAI",
  "kling.svg": "Kling",
  "bytedance.svg": "ByteDance",
  "nano-banana.svg": "Nano Banana",
  "aws.svg": "AWS",
  "docker.svg": "Docker",
  "postgresql.svg": "PostgreSQL",
  "figma.svg": "Figma",
  "python.svg": "Python",
  "nestjs.svg": "NestJS",
  "nextdotjs.svg": "Next.js",
  "react.svg": "React",
  "typescript.svg": "TypeScript",
  "javascript.svg": "JavaScript",
};

type PayloadClient = {
  find: (args: {
    collection: "media";
    where: Record<string, unknown>;
    limit: number;
  }) => Promise<{ docs: { id: number }[] }>;
  create: (args: {
    collection: "media";
    data: { alt: string; folder: string };
    file: { data: Buffer; mimetype: string; name: string; size: number };
  }) => Promise<{ id: number }>;
};

export async function ensureTechIcons(payload: PayloadClient) {
  const dir = path.join(process.cwd(), "public/images/tech");
  const files = fs.readdirSync(dir).filter((file) => file.endsWith(".svg"));
  const ids = new Map<string, number>();

  for (const file of files) {
    const pngName = file.replace(/\.svg$/, ".png");
    const existing = await payload.find({
      collection: "media",
      where: {
        and: [
          { filename: { equals: pngName } },
          { folder: { equals: "tech-stack" } },
        ],
      },
      limit: 1,
    });

    const current = existing.docs[0];
    if (current) {
      ids.set(`/images/tech/${file}`, current.id);
      console.log(`icon exists ${pngName}`);
      continue;
    }

    const svg = fs.readFileSync(path.join(dir, file));
    const data = await sharp(svg, { density: 300 })
      .resize(256, 256, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toBuffer();

    const media = await payload.create({
      collection: "media",
      data: {
        alt: labels[file] ?? file.replace(/\.svg$/, ""),
        folder: "tech-stack",
      },
      file: {
        data,
        mimetype: "image/png",
        name: pngName,
        size: data.length,
      },
    });

    ids.set(`/images/tech/${file}`, media.id);
    console.log(`icon created ${pngName}`);
  }

  return ids;
}
