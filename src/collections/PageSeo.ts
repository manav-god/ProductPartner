import type { CollectionConfig } from "payload";

export const PageSeo: CollectionConfig = {
  slug: "page-seo",
  labels: {
    singular: "Page SEO",
    plural: "Page SEO",
  },
  admin: {
    group: "SEO",
    useAsTitle: "label",
    defaultColumns: ["label", "path", "metaTitle"],
    description: "Meta title and meta description for each public page.",
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: "label",
      type: "text",
      required: true,
    },
    {
      name: "path",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: {
        description: "Page path, such as / or /contact. Do not add a trailing slash.",
      },
    },
    {
      name: "metaTitle",
      label: "Meta title",
      type: "text",
      required: true,
    },
    {
      name: "metaDescription",
      label: "Meta description",
      type: "textarea",
      required: true,
    },
  ],
};
