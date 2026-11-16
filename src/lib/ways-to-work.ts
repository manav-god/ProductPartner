export type WayToWork = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  includes: string[];
};

export const waysToWork: WayToWork[] = [
  {
    id: "leadership",
    title: "Fractional Product Leadership",
    description:
      "For founders and teams who need fractional product leadership, without a full-time hire.",
    href: "/product-management",
    icon: "/images/icons/leadership.svg",
    includes: [
      "Roadmap and priorities",
      "Retention and drop-off",
      "Feature growth",
      "Delivery rhythm",
    ],
  },
  {
    id: "marketing",
    title: "Product Marketing & Positioning",
    description:
      "For products that work, but aren’t being found or understood yet.",
    href: "/product-marketing",
    icon: "/images/icons/productmarketing.svg",
    includes: [
      "Positioning",
      "Messaging",
      "B2B content",
      "SEO",
      "AI search visibility (AEO / GEO)",
    ],
  },
  {
    id: "development",
    title: "Product Development",
    description:
      "For founders ready to build, and teams that need to build faster.",
    href: "/product-development",
    icon: "/images/icons/productdevelopment.svg",
    includes: [
      "Discovery and scope",
      "MVPs",
      "Mobile apps",
      "Web platforms",
      "Custom software",
      "Feature releases",
    ],
  },
];
