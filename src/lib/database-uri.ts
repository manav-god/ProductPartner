const POOLER_HOST = "aws-0-ap-south-1.pooler.supabase.com";

export function databaseUri() {
  let raw = (process.env.DATABASE_URI || "").trim();
  if (
    (raw.startsWith('"') && raw.endsWith('"')) ||
    (raw.startsWith("'") && raw.endsWith("'"))
  ) {
    raw = raw.slice(1, -1).trim();
  }
  if (!raw) return "";

  try {
    const url = new URL(raw);
    const direct = url.hostname.match(/^db\.([a-z0-9]+)\.supabase\.co$/);
    if (direct) {
      const ref = direct[1];
      url.hostname = POOLER_HOST;
      url.port = "5432";
      const user = decodeURIComponent(url.username);
      if (user === "postgres") {
        url.username = `postgres.${ref}`;
      }
    }
    url.searchParams.set("sslmode", "no-verify");
    return url.toString();
  } catch {
    return raw;
  }
}
