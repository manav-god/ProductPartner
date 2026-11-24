export type IndustryCta = {
  label: string;
  href: string;
};

export type IndustryPageData = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  searchKeywords: string[];
  title: string;
  description: string;
  pill: string;
  heading: string;
  ledes: string[];
  primaryCta: IndustryCta;
  secondaryCta: IndustryCta;
  keywords: string[];
  heroCard: {
    label: string;
    items: string[];
    caption: string;
  };
  intro: {
    heading: string;
    paragraphs: string[];
    checklistTitle: string;
    checklist: string[];
    pair: { title: string; body: string }[];
    accent: string[];
    follow?: string[];
  };
  services: {
    heading: string;
    intro: string;
    cards: { title: string; paragraphs: string[]; items?: string[]; note?: string }[];
  };
  types: {
    heading: string;
    intro: string;
    rows: { title: string; paragraphs: string[] }[];
    note: string;
    formats?: {
      heading: string;
      paragraphs: string[];
      items: { title: string; body: string }[];
      after?: string;
    };
    transactions?: {
      heading: string;
      paragraphs: string[];
      columns: [string, string];
      rows: { code: string; purpose: string }[];
      after: string[];
    };
    audience?: {
      heading: string;
      paragraphs: string[];
      items: { title: string; body: string }[];
      after?: string;
    };
  };
  process: {
    heading: string;
    paragraphs: string[];
    steps: { title: string; paragraphs: string[] }[];
    close?: string;
  };
  work: {
    heading: string;
    intro: string;
    more?: string[];
    projects: {
      title: string;
      paragraphs: string[];
      stat?: { value: string; label: string };
      footnote?: string;
      wide?: boolean;
    }[];
    close: string;
    note: string;
  };
  why: {
    heading: string;
    intro?: string[];
    items: { title: string; paragraphs: string[] }[];
    close?: string;
  };
  cost: {
    heading: string;
    paragraphs: string[];
    factorsTitle: string;
    factors: { label: string; detail: string }[];
    notes: string[];
    mvp?: {
      heading: string;
      intro: string;
      items: string[];
      after: string[];
    };
    prompt?: string;
    closing: string;
    cta?: IndustryCta;
  };
  contact: {
    heading: string;
    paragraphs: string[];
    emphasis: string;
    boxTitle: string;
    boxBody: string;
    boxMeta: string[];
    primaryCta: IndustryCta;
    secondaryCta?: IndustryCta;
    email: string;
    phone: string;
    phoneHref: string;
    locations: string;
  };
  faqs: {
    heading: string;
    intro: string;
    items: { question: string; answer: string }[];
  };
};
