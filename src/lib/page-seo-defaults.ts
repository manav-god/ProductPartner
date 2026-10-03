import { pageFaqs, type FaqItem } from "@/lib/page-faqs";

export type { FaqItem };

export type PageSeoEntry = {
  label: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  faqs: FaqItem[];
};

export const pageSeoDefaults: PageSeoEntry[] = [
  {
    label: "Home",
    path: "/",
    metaTitle: "Product Partner",
    metaDescription:
      "Product Partner helps teams design, build, and ship software products people love.",
    faqs: [],
  },
  {
    label: "Our work",
    path: "/work",
    metaTitle: "Our Work | Product Partner",
    metaDescription:
      "Product partnerships that deliver results. Selected engagements across product development, fractional leadership, and go-to-market.",
    faqs: [],
  },
  {
    label: "Product development",
    path: "/product-development",
    metaTitle:
      "Product Development Services | MVP & Product Engineering | Product Partner",
    metaDescription:
      "Product development services for startups and businesses in the USA. From product discovery and MVP development to product engineering, launch, and scale.",
    faqs: pageFaqs["/product-development"],
  },
  {
    label: "Product management",
    path: "/product-management",
    metaTitle:
      "Product Management Services | Product Strategy & Growth | Product Partner",
    metaDescription:
      "Product management services that connect customer needs, product strategy, technology, and growth. Build better products with Product Partner.",
    faqs: pageFaqs["/product-management"],
  },
  {
    label: "Product marketing",
    path: "/product-marketing",
    metaTitle:
      "Product Marketing Services | Positioning, GTM & SEO/AEO/GEO | Product Partner",
    metaDescription:
      "Product marketing services for B2B, SportsTech and ecommerce brands. From positioning and messaging to go-to-market strategy, SEO, AEO, GEO, and demand generation.",
    faqs: pageFaqs["/product-marketing"],
  },
  {
    label: "Blog",
    path: "/blog",
    metaTitle: "Blog | Product Partner",
    metaDescription: "Notes and product writing from Product Partner.",
    faqs: [],
  },
  {
    label: "Contact",
    path: "/contact",
    metaTitle: "Contact | Product Partner",
    metaDescription:
      "Get in touch with Product Partner. Tell us what you're building, we'll help shape the roadmap, team, and delivery plan.",
    faqs: [],
  },
  {
    label: "Privacy",
    path: "/privacy",
    metaTitle: "Privacy Policy | Product Partner",
    metaDescription:
      "How Product Partner collects, uses, and protects personal information when you use our website and services.",
    faqs: [],
  },
  {
    label: "Terms",
    path: "/terms",
    metaTitle: "Terms of Use | Product Partner",
    metaDescription:
      "Terms governing use of the Product Partner website and engagement with our product partnership services.",
    faqs: [],
  },
];
