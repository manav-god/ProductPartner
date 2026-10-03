import type { CollectionConfig } from "payload";

export const CaseStudies: CollectionConfig = {
  slug: "case-studies",
  labels: {
    singular: "Case study",
    plural: "Case studies",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "status", "year"],
  },
  access: {
    read: ({ req }) => {
      if (req.user) return true;
      return {
        status: {
          equals: "published",
        },
      };
    },
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "draft",
      options: [
        { label: "Draft", value: "draft" },
        { label: "Published", value: "published" },
      ],
    },
    {
      name: "cover",
      type: "upload",
      relationTo: "media",
      filterOptions: {
        folder: { equals: "case-studies" },
      },
    },
    {
      name: "imageAlt",
      type: "text",
    },
    {
      name: "tags",
      type: "array",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "titleBefore",
      type: "text",
    },
    {
      name: "titleHighlight",
      type: "text",
    },
    {
      name: "titleAfter",
      type: "text",
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "slogan",
      type: "text",
    },
    {
      name: "role",
      type: "text",
    },
    {
      name: "lead",
      type: "textarea",
    },
    {
      name: "location",
      type: "text",
    },
    {
      name: "projectType",
      type: "text",
    },
    {
      name: "year",
      type: "text",
    },
    {
      name: "cta",
      label: "Call to action",
      type: "text",
      required: true,
    },
    {
      name: "techStack",
      label: "Tech stack",
      type: "array",
      fields: [
        { name: "name", type: "text", required: true },
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          required: true,
          filterOptions: {
            folder: { equals: "tech-stack" },
          },
        },
      ],
    },
    {
      name: "metaTitle",
      label: "Meta title",
      type: "text",
      required: true,
      admin: {
        position: "sidebar",
        description:
          "Search and browser title. Write this separately from the case study title.",
      },
    },
    {
      name: "metaDescription",
      label: "Meta description",
      type: "textarea",
      required: true,
      admin: {
        position: "sidebar",
        description:
          "Search snippet. Write this separately from the card description and the lead.",
      },
    },
    {
      name: "services",
      type: "array",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "about",
      type: "array",
      fields: [
        {
          name: "paragraph",
          type: "textarea",
          required: true,
        },
      ],
    },
    {
      name: "challenges",
      type: "array",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "body", type: "textarea", required: true },
      ],
    },
    {
      name: "solutionsIntro",
      type: "textarea",
    },
    {
      name: "solutions",
      type: "array",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "body", type: "textarea", required: true },
      ],
    },
    {
      name: "features",
      type: "array",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "body", type: "textarea", required: true },
      ],
    },
    {
      name: "results",
      type: "array",
      fields: [
        { name: "stat", type: "text" },
        { name: "label", type: "text", required: true },
        { name: "body", type: "textarea", required: true },
      ],
    },
  ],
};
