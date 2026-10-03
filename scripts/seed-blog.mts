import nextEnv from "@next/env";

const { loadEnvConfig } = nextEnv;

loadEnvConfig(process.cwd());

function text(value: string) {
  return {
    type: "text",
    detail: 0,
    format: 0,
    mode: "normal",
    style: "",
    text: value,
    version: 1,
  };
}

function paragraph(value: string) {
  return {
    type: "paragraph",
    format: "",
    indent: 0,
    version: 1,
    children: [text(value)],
    direction: "ltr",
    textFormat: 0,
    textStyle: "",
  };
}

function heading(value: string) {
  return {
    type: "heading",
    tag: "h2",
    format: "",
    indent: 0,
    version: 1,
    children: [text(value)],
    direction: "ltr",
  };
}

function list(items: string[]) {
  return {
    type: "list",
    listType: "bullet",
    start: 1,
    tag: "ul",
    format: "",
    indent: 0,
    version: 1,
    direction: "ltr",
    children: items.map((item, index) => ({
      type: "listitem",
      value: index + 1,
      format: "",
      indent: 0,
      version: 1,
      direction: "ltr",
      children: [text(item)],
    })),
  };
}

function cell(value: string, header = false) {
  return {
    type: "tablecell",
    headerState: header ? 1 : 0,
    colSpan: 1,
    rowSpan: 1,
    backgroundColor: null,
    format: "",
    indent: 0,
    version: 1,
    direction: "ltr",
    children: [paragraph(value)],
  };
}

function tableRow(values: string[], header = false) {
  return {
    type: "tablerow",
    format: "",
    indent: 0,
    version: 1,
    direction: "ltr",
    children: values.map((value) => cell(value, header)),
  };
}

function table(headers: string[], rows: string[][]) {
  return {
    type: "table",
    format: "",
    indent: 0,
    version: 1,
    direction: "ltr",
    children: [
      tableRow(headers, true),
      ...rows.map((values) => tableRow(values)),
    ],
  };
}

const content = {
  root: {
    type: "root",
    format: "",
    indent: 0,
    version: 1,
    direction: "ltr",
    children: [
      paragraph(
        "The first month of a product partnership is not a strategy deck. It is the stretch where a team finds out whether someone can make decisions with them, not for them.",
      ),
      heading("Start with the decision, not the backlog"),
      paragraph(
        "A backlog already exists. What is usually missing is a shared call on what the next release has to change for a customer. We spend the opening days on that call, then let the work follow it.",
      ),
      heading("What we look at in week one"),
      list([
        "Who the product is for, in one sentence a customer would recognize",
        "The single outcome the next release has to move",
        "Where the current build is guessing instead of knowing",
        "Which meetings exist only because the decision was never written down",
      ]),
      paragraph("The month breaks down like this."),
      table(
        ["Week", "Focus"],
        [
          ["1", "Name the outcome the next release has to move"],
          ["2", "Cut the scope that does not serve that outcome"],
          ["3", "Write down who owns the next step"],
          ["4", "Leave a plan the team can run"],
        ],
      ),
      heading("Leave the team with a plan they can run"),
      paragraph(
        "By the end of the month the useful artifact is small: a written outcome, the scope that serves it, and the people who own the next step. Everything else can wait until that plan is in motion.",
      ),
    ],
  },
};

async function main() {
  const { getPayload } = await import("payload");
  const { default: configPromise } = await import("../src/payload.config.ts");
  const payload = await getPayload({ config: await configPromise });
  const slug = "first-30-days";

  const existing = await payload.find({
    collection: "posts",
    where: { slug: { equals: slug } },
    limit: 1,
  });

  if (existing.docs[0]) {
    console.log(`post exists ${slug}`);
    process.exit(0);
  }

  const imageResponse = await fetch(
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
  );
  if (!imageResponse.ok) {
    throw new Error("Could not download the blog cover");
  }

  const data = Buffer.from(await imageResponse.arrayBuffer());
  const media = await payload.create({
    collection: "media",
    data: {
      alt: "Product team working through a plan together",
      folder: "blog",
    },
    file: {
      data,
      mimetype: "image/jpeg",
      name: "first-30-days.jpg",
      size: data.length,
    },
  });

  await payload.create({
    collection: "posts",
    data: {
      title: "What a product partner does in the first 30 days",
      slug,
      excerpt:
        "The opening month is where a team finds out if someone can make decisions with them. Here is what we actually do in that window.",
      cover: media.id,
      content,
      status: "published",
    },
  });

  console.log(`post created ${slug}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
