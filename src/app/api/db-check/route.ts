import { lookup } from "node:dns/promises";
import pg from "pg";
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

export async function GET() {
  const uri = databaseUri();
  const info = describe(uri);
  const started = Date.now();

  if (!uri) {
    return Response.json({ ok: false, ...info, code: "missing" });
  }

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
    return Response.json({
      ok: true,
      ...info,
      ms: Date.now() - started,
    });
  } catch (error) {
    const code =
      error && typeof error === "object" && "code" in error
        ? String(error.code)
        : "error";
    const message =
      error instanceof Error
        ? error.message.replace(/:[^:@/\s]+@/g, ":***@").slice(0, 180)
        : code;
    return Response.json({
      ok: false,
      ...info,
      code,
      message,
      ms: Date.now() - started,
    });
  }
}
