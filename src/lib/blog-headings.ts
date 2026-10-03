type LexicalNode = {
  type?: string;
  tag?: string;
  text?: string;
  children?: LexicalNode[];
};

export type ContentsItem = {
  id: string;
  text: string;
};

function headingText(node: LexicalNode): string {
  if (typeof node.text === "string") return node.text;
  return (node.children ?? []).map((child) => headingText(child)).join("");
}

function slugify(value: string) {
  const slug = value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || "section";
}

export function uniqueHeadingId(value: string, seen: Map<string, number>) {
  const base = slugify(value);
  const count = seen.get(base) ?? 0;
  seen.set(base, count + 1);
  return count === 0 ? base : `${base}-${count + 1}`;
}

export function plainHeading(node: LexicalNode) {
  return headingText(node).replace(/\s+/g, " ").trim();
}

export function contentsFromLexical(content: {
  root?: { children?: LexicalNode[] };
} | null): ContentsItem[] {
  const seen = new Map<string, number>();
  const items: ContentsItem[] = [];

  for (const node of content?.root?.children ?? []) {
    if (node.type !== "heading" || node.tag !== "h2") continue;
    const text = plainHeading(node);
    if (!text) continue;
    items.push({ id: uniqueHeadingId(text, seen), text });
  }

  return items;
}
