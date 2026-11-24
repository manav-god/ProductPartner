import type { CollectionConfig } from "payload";
import { faqPages } from "@/lib/faq-catalog";

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
    description:
      "One set of questions per page that shows an FAQ section. Terms, privacy, contact, blog, and other pages without questions are not listed.",
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
      options: faqPages.map((page) => ({ label: page.label, value: page.path })),
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
