import { unstable_cache } from "next/cache";
import { caseStudies, type CaseStudy } from "@/lib/case-studies";
import { getCms } from "@/lib/cms";

type UploadDoc = {
  url?: string | null;
  alt?: string | null;
};

type Row = {
  id: number | string;
  slug: string;
  title: string;
  cover?: UploadDoc | number | null;
  imageAlt?: string | null;
  tags?: { label: string }[] | null;
  titleBefore?: string | null;
  titleHighlight?: string | null;
  titleAfter?: string | null;
  description?: string | null;
  slogan?: string | null;
  role?: string | null;
  cta?: string | null;
  lead?: string | null;
  services?: { label: string }[] | null;
  location?: string | null;
  projectType?: string | null;
  year?: string | null;
  techStack?: { name: string; icon?: UploadDoc | number | null }[] | null;
  about?: { paragraph: string }[] | null;
  challenges?: { title: string; body: string }[] | null;
  solutionsIntro?: string | null;
  solutions?: { title: string; body: string }[] | null;
  features?: { title: string; body: string }[] | null;
  results?: { stat?: string | null; label: string; body: string }[] | null;
  metaTitle?: string | null;
  metaDescription?: string | null;
};

function text(value: string | null | undefined) {
  return value ?? "";
}

export function mapCaseStudy(doc: Row): CaseStudy {
  const cover = doc.cover && typeof doc.cover === "object" ? doc.cover : null;

  return {
    id: String(doc.id),
    slug: doc.slug,
    href: `/work/${doc.slug}`,
    image: cover?.url || "",
    imageAlt: text(doc.imageAlt),
    tags: (doc.tags ?? []).map((tag) => tag.label),
    titleBefore: text(doc.titleBefore),
    titleHighlight: text(doc.titleHighlight),
    titleAfter: text(doc.titleAfter),
    description: text(doc.description),
    slogan: text(doc.slogan),
    title: doc.title,
    role: text(doc.role),
    cta: text(doc.cta),
    lead: text(doc.lead),
    services: (doc.services ?? []).map((service) => service.label),
    location: text(doc.location),
    projectType: text(doc.projectType),
    year: text(doc.year),
    techStack: (doc.techStack ?? []).map((tech) => ({
      name: tech.name,
      icon:
        tech.icon && typeof tech.icon === "object" ? tech.icon.url || "" : "",
    })),
    about: (doc.about ?? []).map((paragraph) => paragraph.paragraph),
    challenges: doc.challenges ?? [],
    solutionsIntro: text(doc.solutionsIntro),
    solutions: doc.solutions ?? [],
    features: doc.features ?? [],
    results: (doc.results ?? []).map((result) => ({
      stat: result.stat || undefined,
      label: result.label,
      body: result.body,
    })),
    metaTitle: text(doc.metaTitle),
    metaDescription: text(doc.metaDescription),
  };
}

const loadPublishedCaseStudies = unstable_cache(
  async (): Promise<CaseStudy[]> => {
    const payload = await getCms();
    const result = await payload.find({
      collection: "case-studies",
      where: { status: { equals: "published" } },
      sort: "createdAt",
      depth: 2,
      limit: 50,
    });
    return result.docs.map((doc) => mapCaseStudy(doc as Row));
  },
  ["published-case-studies"],
  { revalidate: 60 },
);

export async function getPublishedCaseStudies(): Promise<CaseStudy[]> {
  try {
    const studies = await loadPublishedCaseStudies();
    return studies.length > 0 ? studies : caseStudies;
  } catch {
    return caseStudies;
  }
}

const loadPublishedCaseStudy = unstable_cache(
  async (slug: string): Promise<CaseStudy | null> => {
    const payload = await getCms();
    const result = await payload.find({
      collection: "case-studies",
      where: {
        and: [
          { slug: { equals: slug } },
          { status: { equals: "published" } },
        ],
      },
      depth: 2,
      limit: 1,
    });
    const doc = result.docs[0];
    return doc ? mapCaseStudy(doc as Row) : null;
  },
  ["published-case-study"],
  { revalidate: 60 },
);

export async function getPublishedCaseStudy(
  slug: string,
): Promise<CaseStudy | null> {
  try {
    return (
      (await loadPublishedCaseStudy(slug)) ??
      caseStudies.find((study) => study.slug === slug) ??
      null
    );
  } catch {
    return caseStudies.find((study) => study.slug === slug) ?? null;
  }
}
