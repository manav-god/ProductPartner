export type CaseStudy = {
  id: string;
  href: string;
  image: string;
  imageAlt: string;
  tags: string[];
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  description: string;
  slogan: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "fintech-growth",
    href: "/case-studies/fintech-growth",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Product analytics dashboard",
    tags: ["Fintech", "Product Engineering"],
    titleBefore: "Fintech Platform increased ",
    titleHighlight: "Activation by 2.4x",
    titleAfter: " through Outcome-led Product Delivery",
    description:
      "A multi-sided finance product rebuilt with clearer onboarding, sharper prioritization, and a release model that tied every sprint to activation and retention metrics.",
    slogan: "Clarity in. Growth out.",
  },
  {
    id: "saas-retention",
    href: "/case-studies/saas-retention",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "SaaS product workspace",
    tags: ["SaaS", "Product Management"],
    titleBefore: "B2B SaaS improved ",
    titleHighlight: "Retention by 38%",
    titleAfter: " with a Redesigned Product Operating System",
    description:
      "We installed outcome-based roadmapping, tightened discovery loops, and shipped a focused experience that reduced churn while accelerating feature adoption.",
    slogan: "Less noise. More signal.",
  },
  {
    id: "marketplace-launch",
    href: "/case-studies/marketplace-launch",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Marketplace product on mobile and desktop",
    tags: ["Marketplace", "Go-to-Market"],
    titleBefore: "Marketplace cut ",
    titleHighlight: "Time-to-Launch by 60%",
    titleAfter: " with a Lean MVP and Sharp Positioning",
    description:
      "From validated problem to production launch, we aligned product, engineering, and marketing so the first release reached the right buyers with a clear value story.",
    slogan: "Ship focused. Scale ready.",
  },
];
