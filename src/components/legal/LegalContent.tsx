import Link from "next/link";
import "@/app/product-development/product-development.css";
import "./legal.css";

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export function LegalContent({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <div className="pd-page legal-page">
      <main id="main-content">
        <section className="pd-hero">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <span className="pd-eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
            <p className="pd-lead">{intro}</p>
            <p className="legal-updated">Last updated: {updated}</p>
          </div>
        </section>

        <section className="pd-section">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <div className="legal-body">
              {sections.map((section) => (
                <article key={section.title} className="legal-section">
                  <h2>{section.title}</h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul>
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}

              <p className="legal-contact">
                Questions? Reach us at{" "}
                <a href="mailto:manav@productpartner.net">
                  manav@productpartner.net
                </a>{" "}
                or through our{" "}
                <Link href="/contact">contact page</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
