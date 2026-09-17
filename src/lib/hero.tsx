import type { ReactNode } from "react";

export type HeroSlide = {
  id: string;
  number: string;
  label: string;
  title: string;
  accent: string;
  titleAfter?: string;
  description: ReactNode;
  cta?: { label: string; href: string };
  gradient: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "apart",
    number: "01",
    label: "What sets us apart",
    title: "We turn product ambitions ",
    accent: "into measurable outcomes",
    description: (
      <>
        <strong>Delivered with clarity</strong> across strategy, design, and
        engineering — so teams ship faster without losing quality or control.
      </>
    ),
    cta: { label: "Get in touch", href: "/contact" },
    gradient:
      "linear-gradient(145deg, #141414 0%, #2a211c 48%, #1a1a1a 100%)",
  },
  {
    id: "value",
    number: "02",
    label: "Business value",
    title: "We are committed to the ",
    accent: "right success metrics",
    description: (
      <>
        A consulting mindset with product craft — an{" "}
        <strong>outcome-based approach</strong> that ties every sprint to
        business results.
      </>
    ),
    cta: { label: "See our work", href: "/case-studies" },
    gradient:
      "linear-gradient(145deg, #121212 0%, #1f2428 45%, #161616 100%)",
  },
  {
    id: "delivery",
    number: "03",
    label: "Product delivery",
    title: "We continuously ",
    accent: "optimise to deliver faster",
    description: (
      <>
        From discovery to launch, we run a focused delivery model grounded in{" "}
        <strong>product thinking</strong>, sharp execution, and clear
        ownership.
      </>
    ),
    cta: { label: "Explore services", href: "/services/product-development" },
    gradient:
      "linear-gradient(145deg, #101010 0%, #1c2220 50%, #141414 100%)",
  },
  {
    id: "domain",
    number: "04",
    label: "Domain knowledge",
    title: "Deep product expertise ",
    accent: "across the full lifecycle",
    description: (
      <>
        Development, management, marketing, testing, and consulting — one
        partner for <strong>end-to-end product work</strong>.
      </>
    ),
    cta: { label: "View services", href: "/#services" },
    gradient:
      "linear-gradient(145deg, #0f0f0f 0%, #241c18 48%, #151515 100%)",
  },
];
