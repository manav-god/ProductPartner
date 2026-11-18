import type { FaqItem } from "@/lib/page-faqs";

export function ServiceFaqs({
  heading,
  faqs,
}: {
  heading: string;
  faqs: FaqItem[];
}) {
  if (!faqs.length) return null;

  return (
    <section className="pd-section">
      <div className="mx-auto w-full max-w-[1400px] p-[50px]">
        <span className="pd-eyebrow">Frequently Asked Questions</span>
        <h2>{heading}</h2>
        <div className="pd-faq">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
