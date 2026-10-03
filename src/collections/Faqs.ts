import type { CollectionConfig } from "payload";

export const Faqs: CollectionConfig = {
  slug: "faqs",
  labels: {
    singular: "Page FAQs",
    plural: "FAQs",
  },
  admin: {
    group: "FAQs",
    useAsTitle: "title",
    defaultColumns: ["title", "page"],
    description: "One box per page. Open a page to edit that page's questions.",
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "page",
      type: "select",
      required: true,
      unique: true,
      options: [
        { label: "Product development", value: "/product-development" },
        { label: "Product management", value: "/product-management" },
        { label: "Product marketing", value: "/product-marketing" },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "items",
      label: "Questions",
      type: "array",
      required: true,
      minRows: 1,
      labels: {
        singular: "Question",
        plural: "Questions",
      },
      fields: [
        {
          name: "question",
          type: "text",
          required: true,
        },
        {
          name: "answer",
          type: "textarea",
          required: true,
        },
      ],
    },
  ],
};
