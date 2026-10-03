import { lookup } from "node:dns/promises";
import pg from "pg";
import { getPayload } from "payload";
import config from "@payload-config";
import { databaseUri } from "@/lib/database-uri";

export const dynamic = "force-dynamic";

function describe(uri: string) {
  try {
    const url = new URL(uri);
    const host = url.hostname;
    const kind = host.includes("pooler.supabase.com")
      ? "pooler"
      : host.startsWith("db.")
        ? "direct"
        : "other";
    return { kind, port: url.port || "5432" };
  } catch {
    return { kind: "invalid", port: "" };
  }
}

function redact(error: unknown) {
  const code =
    error && typeof error === "object" && "code" in error
      ? String(error.code)
      : "error";
  const message =
    error instanceof Error
      ? error.message
          .replace(/postgres(?:ql)?:\/\/\S+/gi, "postgresql://***")
          .slice(0, 300)
      : code;
  return { code, message };
}

export async function GET() {
  const uri = databaseUri();
  const info = describe(uri);
  const started = Date.now();

  if (!uri) {
    return Response.json({ ok: false, ...info, code: "missing" });
  }

  let pgOk = false;
  let pgError: { code: string; message: string } | null = null;
  try {
    await lookup(new URL(uri).hostname, { family: 4 });
    const client = new pg.Client({
      connectionString: uri,
      connectionTimeoutMillis: 5000,
      ssl: { rejectUnauthorized: false },
    });
    await client.connect();
    await client.query("select 1");
    await client.end();
    pgOk = true;
  } catch (error) {
    pgError = redact(error);
  }

  const payloadStarted = Date.now();
  try {
    const payload = await getPayload({ config });
    const posts = await payload.find({
      collection: "posts",
      where: { status: { equals: "published" } },
      limit: 5,
    });
    const studies = await payload.find({
      collection: "case-studies",
      where: { status: { equals: "published" } },
      limit: 5,
    });
    return Response.json({
      ok: true,
      ...info,
      pgOk,
      pgMs: payloadStarted - started,
      payloadMs: Date.now() - payloadStarted,
      posts: posts.totalDocs,
      studies: studies.totalDocs,
    });
  } catch (error) {
    return Response.json({
      ok: false,
      ...info,
      pgOk,
      pgError,
      pgMs: payloadStarted - started,
      payloadMs: Date.now() - payloadStarted,
      payloadError: redact(error),
    });
  }
}
