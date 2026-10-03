import type { CollectionConfig } from "payload";

export const Inquiries: CollectionConfig = {
  slug: "inquiries",
  labels: {
    singular: "Contact submission",
    plural: "Contact submissions",
  },
  admin: {
    useAsTitle: "email",
    defaultColumns: ["firstName", "lastName", "email", "company", "createdAt"],
  },
  access: {
    create: () => true,
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: "firstName",
      type: "text",
      required: true,
    },
    {
      name: "lastName",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "company",
      type: "text",
    },
    {
      name: "phone",
      type: "text",
    },
    {
      name: "message",
      type: "textarea",
    },
  ],
};
