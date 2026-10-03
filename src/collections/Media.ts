import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  labels: {
    singular: "Media",
    plural: "Media",
  },
  admin: {
    group: "Media",
    useAsTitle: "alt",
    defaultColumns: ["filename", "folder", "alt"],
  },
  access: {
    read: () => true,
  },
  hooks: {
    beforeValidate: [
      ({ data, req }) => {
        if (!data) return data;

        if (req.file && data.folder) {
          data.prefix = data.folder;
        }

        return data;
      },
    ],
  },
  upload: {
    mimeTypes: [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
      "image/avif",
    ],
    staticDir: "media",
  },
  fields: [
    {
      name: "folder",
      type: "select",
      required: true,
      options: [
        { label: "Case studies", value: "case-studies" },
        { label: "Blog", value: "blog" },
        { label: "Tech stack", value: "tech-stack" },
      ],
      admin: {
        position: "sidebar",
        description: "Files are stored in this folder in the media bucket.",
      },
    },
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
};
