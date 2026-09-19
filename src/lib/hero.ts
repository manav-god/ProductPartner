export type TrustedClient = {
  id: string;
  name: string;
  href: string;
  linkLabel: string;
};

export const heroContent = {
  eyebrow: "Your Product Partners",
  titleLine1: "Build, Ship & Scale",
  titleLine2: "Products With Confidence.",
  description:
    "From product strategy to delivery and go-to-market, we help startups and enterprises extend their product capacity and ship secure, scalable software faster.",
  primaryCta: {
    label: "Talk to a Product Expert",
    href: "/#contact",
  },
  secondaryCta: {
    label: "View Our Work",
    href: "/#work",
  },
  trustedLabel: "Trusted by Product Teams at",
  trustedHighlight: "50+ Companies",
  trustedClients: [
    {
      id: "fintech",
      name: "Northwind",
      href: "/case-studies/fintech-growth",
      linkLabel: "Read Case Study",
    },
    {
      id: "saas",
      name: "Atlas",
      href: "/case-studies/saas-retention",
      linkLabel: "Read Case Study",
    },
    {
      id: "marketplace",
      name: "Harbor",
      href: "/case-studies/marketplace-mvp",
      linkLabel: "Read Case Study",
    },
    {
      id: "beacon",
      name: "Beacon",
      href: "/case-studies",
      linkLabel: "Read Case Study",
    },
  ] satisfies TrustedClient[],
};
