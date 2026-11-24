import { readFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const srcRoot = path.resolve(process.cwd(), "src");

export async function resolve(specifier, context, nextResolve) {
  if (specifier.startsWith("@/")) {
    const base = path.join(srcRoot, specifier.slice(2));
    for (const extension of [".ts", ".tsx", ".json", ""]) {
      try {
        return await nextResolve(pathToFileURL(`${base}${extension}`).href, context);
      } catch {
        // Try the next extension.
      }
    }
  }

  if (
    (specifier.startsWith(".") || specifier.startsWith("/")) &&
    !specifier.endsWith(".js") &&
    !specifier.endsWith(".mjs") &&
    !specifier.endsWith(".ts") &&
    !specifier.endsWith(".json")
  ) {
    try {
      return await nextResolve(`${specifier}.ts`, context);
    } catch {
      // Fall through to the original specifier.
    }
  }

  return nextResolve(specifier, context);
}

export async function load(url, context, nextLoad) {
  if (url.endsWith("/src/lib/offering-pages.json")) {
    const source = await readFile(new URL(url), "utf8");
    return {
      format: "module",
      shortCircuit: true,
      source: `export default ${source}`,
    };
  }

  return nextLoad(url, context);
}
