import { Inter, JetBrains_Mono } from "next/font/google";
import { FillButton } from "@/components/FillButton";
import { FaqList } from "@/components/services/SmoothFaq";
import type { IndustryCta, IndustryPageData } from "@/lib/industries/types";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
});

const buttonClass =
  "h-auto min-h-11 max-w-full gap-2 rounded-full px-5 py-3 text-center text-[14px] whitespace-normal sm:min-h-14 sm:px-7 sm:text-[16px]";

function Cta({ cta, variant }: { cta: IndustryCta; variant: "orange-white" | "white-orange" }) {
  return (
    <FillButton href={cta.href} variant={variant} className={buttonClass}>
      {cta.label}
    </FillButton>
  );
}

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="w-full text-[32px] leading-[1.12] font-semibold tracking-[-0.045em] sm:text-[48px] sm:leading-[1.08]">
      {children}
    </h2>
  );
}

function ArrowText({
  children,
  tone = "body",
}: {
  children: string;
  tone?: "body" | "muted" | "inverse";
}) {
  const color =
    tone === "muted" ? "text-[#b9b7b2]" : tone === "inverse" ? "text-[#d6d3cd]" : "text-[#45433f]";

  return (
    <p className={`flex w-full gap-4 text-[16px] leading-[1.7] ${color}`}>
      <span className="mt-[2px] shrink-0 text-[18px] leading-none text-[#ff5a1f]" aria-hidden="true">
        →
      </span>
      <span className="min-w-0 flex-1">{children}</span>
    </p>
  );
}

export function IndustryPage({ page }: { page: IndustryPageData }) {
  return (
    <div className={`${inter.className} bg-white text-[#0e0e0e]`}>
      <section className="canvas-dots">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[72px] sm:px-[50px] sm:py-[110px]">
          <p className="inline-flex max-w-full rounded-full border border-[rgba(14,14,14,0.12)] bg-white px-4 py-2 text-[12px] font-semibold tracking-[0.12em] text-[#6a6864] uppercase">
            {page.pill}
          </p>
          <h1 className="mt-6 w-full text-[32px] leading-[1.08] font-semibold tracking-[-0.045em] sm:text-[48px] sm:leading-[1.05] lg:text-[60px] xl:text-[68px] xl:leading-[1.02]">
            {page.heading}
          </h1>
          <div className="mt-7 grid w-full gap-4">
            {page.ledes.map((lede) => (
              <p key={lede} className="w-full text-[16px] leading-[1.7] text-[#45433f] sm:text-[18px]">
                {lede}
              </p>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
            <Cta cta={page.primaryCta} variant="orange-white" />
            <Cta cta={page.secondaryCta} variant="white-orange" />
          </div>
          <div className="mt-10 rounded-[22px] bg-white p-6 shadow-[0_18px_20px_rgba(20,16,12,0.08)] sm:p-8">
            <p className="text-[15px] font-semibold">{page.heroCard.label}</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {page.heroCard.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-[14px] bg-[#f6f5f2] px-4 py-3 text-[15px]"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#ff5a1f]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[13px] leading-5 text-[#6a6864]">{page.heroCard.caption}</p>
          </div>
        </div>
      </section>

      {page.keywords.length > 0 ? (
        <div className="bg-[#0e0e0e] text-[#f4f3ef]">
          <ul className="mx-auto flex w-full max-w-[1400px] flex-wrap gap-x-8 gap-y-3 px-5 py-5 sm:px-[50px]">
            {page.keywords.map((keyword) => (
              <li key={keyword} className="flex items-center gap-2.5 text-[15px] font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff5a1f]" aria-hidden="true" />
                {keyword}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <SectionTitle>{page.intro.heading}</SectionTitle>
          <div className="mt-6 grid w-full gap-4">
            {page.intro.paragraphs.map((paragraph) => (
              <ArrowText key={paragraph}>{paragraph}</ArrowText>
            ))}
          </div>
          {page.intro.checklist.length > 0 ? (
            <div className="mt-10">
              <h3 className="w-full text-[24px] font-semibold tracking-[-0.03em]">{page.intro.checklistTitle}</h3>
              <ul className="mt-5 grid gap-3 md:grid-cols-2 md:gap-x-12">
                {page.intro.checklist.map((item) => (
                  <li key={item} className="flex gap-3 text-[16px] leading-[1.5]">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ff5a1f]" aria-hidden="true" />
                    <span className="min-w-0 flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {page.intro.pair.length > 0 ? (
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {page.intro.pair.map((item) => (
                <li key={item.title} className="rounded-[22px] bg-[#f6f5f2] px-7 py-7">
                  <h3 className="text-[22px] font-semibold tracking-[-0.03em]">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.6] text-[#45433f]">{item.body}</p>
                </li>
              ))}
            </ul>
          ) : null}
          {page.intro.accent.length > 0 ? (
            <div className="mt-4 rounded-[22px] bg-[#0e0e0e] px-7 py-8 text-[#f4f3ef]">
              <div className="grid gap-4">
                {page.intro.accent.map((paragraph) => (
                  <ArrowText key={paragraph} tone="inverse">
                    {paragraph}
                  </ArrowText>
                ))}
              </div>
            </div>
          ) : null}
          {page.intro.follow && page.intro.follow.length > 0 ? (
            <div className="mt-8 grid w-full gap-4">
              {page.intro.follow.map((paragraph) => (
                <ArrowText key={paragraph}>{paragraph}</ArrowText>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section id="services" className="scroll-mt-[120px] bg-[#f4f3ef]">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <SectionTitle>{page.services.heading}</SectionTitle>
          {page.services.intro ? (
            <div className="mt-6">
              <ArrowText>{page.services.intro}</ArrowText>
            </div>
          ) : null}
          <ul className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-2 xl:grid-cols-3">
            {page.services.cards.map((card) => (
              <li key={card.title} className="flex flex-col rounded-[22px] bg-white px-7 py-7">
                <h3 className="text-[22px] font-semibold tracking-[-0.03em]">{card.title}</h3>
                <div className="mt-3 grid gap-3">
                  {card.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-[15px] leading-[1.6] text-[#45433f]">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {card.items && card.items.length > 0 ? (
                  <ul className="mt-4 grid gap-2">
                    {card.items.map((item) => (
                      <li key={item} className="flex gap-3 text-[15px] leading-[1.5] text-[#45433f]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff5a1f]" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {card.note ? (
                  <p className="mt-4 text-[15px] leading-[1.6] text-[#45433f]">{card.note}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <SectionTitle>{page.types.heading}</SectionTitle>
          {page.types.intro ? (
            <div className="mt-6">
              <ArrowText>{page.types.intro}</ArrowText>
            </div>
          ) : null}
          <div className="mt-8 overflow-hidden rounded-[22px] bg-[#f6f5f2] sm:mt-12">
            {page.types.rows.map((row) => (
              <div
                key={row.title}
                className="grid gap-3 border-b border-[rgba(14,14,14,0.1)] px-6 py-6 last:border-b-0 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-8 lg:px-8"
              >
                <h3 className="text-[20px] font-semibold tracking-[-0.03em]">{row.title}</h3>
                <div className="grid gap-3">
                  {row.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-[15px] leading-[1.6] text-[#45433f]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {page.types.note ? (
            <p className="mt-6 text-[16px] leading-[1.6] font-semibold">{page.types.note}</p>
          ) : null}
          {page.types.formats ? (
            <div className="mt-10">
              <h3 className="w-full text-[24px] font-semibold tracking-[-0.03em] sm:text-[28px]">
                {page.types.formats.heading}
              </h3>
              <div className="mt-4 grid w-full gap-4">
                {page.types.formats.paragraphs.map((paragraph) => (
                  <ArrowText key={paragraph}>{paragraph}</ArrowText>
                ))}
              </div>
              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {page.types.formats.items.map((item) => (
                  <li key={item.title} className="rounded-[18px] bg-[#f6f5f2] px-6 py-5">
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-2 text-[15px] leading-[1.6] text-[#45433f]">{item.body}</p>
                  </li>
                ))}
              </ul>
              {page.types.formats.after ? (
                <div className="mt-6">
                  <ArrowText>{page.types.formats.after}</ArrowText>
                </div>
              ) : null}
            </div>
          ) : null}
          {page.types.transactions ? (
            <div className="mt-10">
              <h3 className="w-full text-[24px] font-semibold tracking-[-0.03em] sm:text-[28px]">
                {page.types.transactions.heading}
              </h3>
              <div className="mt-4 grid w-full gap-4">
                {page.types.transactions.paragraphs.map((paragraph) => (
                  <ArrowText key={paragraph}>{paragraph}</ArrowText>
                ))}
              </div>
              <div className="mt-6 overflow-hidden rounded-[18px] border border-[rgba(14,14,14,0.1)]">
                <div className="grid grid-cols-1 bg-[#f6f5f2] px-5 py-3 text-[13px] font-semibold tracking-[0.04em] uppercase sm:grid-cols-[minmax(0,180px)_1fr]">
                  <p>{page.types.transactions.columns[0]}</p>
                  <p>{page.types.transactions.columns[1]}</p>
                </div>
                {page.types.transactions.rows.map((row) => (
                  <div
                    key={row.code}
                    className="grid grid-cols-1 gap-1 border-t border-[rgba(14,14,14,0.1)] px-5 py-4 sm:grid-cols-[minmax(0,180px)_1fr] sm:gap-4"
                  >
                    <p className="font-semibold">{row.code}</p>
                    <p className="text-[15px] leading-[1.55] text-[#45433f]">{row.purpose}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid w-full gap-4">
                {page.types.transactions.after.map((paragraph) => (
                  <ArrowText key={paragraph}>{paragraph}</ArrowText>
                ))}
              </div>
            </div>
          ) : null}
          {page.types.audience ? (
            <div className="mt-10">
              <h3 className="w-full text-[24px] font-semibold tracking-[-0.03em] sm:text-[28px]">
                {page.types.audience.heading}
              </h3>
              <div className="mt-4 grid w-full gap-4">
                {page.types.audience.paragraphs.map((paragraph) => (
                  <ArrowText key={paragraph}>{paragraph}</ArrowText>
                ))}
              </div>
              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {page.types.audience.items.map((item) => (
                  <li key={item.title} className="rounded-[18px] bg-[#f6f5f2] px-6 py-5">
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-2 text-[15px] leading-[1.6] text-[#45433f]">{item.body}</p>
                  </li>
                ))}
              </ul>
              {page.types.audience.after ? (
                <div className="mt-6">
                  <ArrowText>{page.types.audience.after}</ArrowText>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </section>

      <section className="bg-[#0e0e0e] text-[#f4f3ef]">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <p className="text-[12px] font-semibold tracking-[0.14em] text-[#a3a19c] uppercase">How it works</p>
          <h2 className="mt-3 w-full text-[32px] leading-[1.12] font-semibold tracking-[-0.05em] sm:text-[48px] sm:leading-[1.1]">
            {page.process.heading}
          </h2>
          <div className="mt-6 grid w-full gap-4">
            {page.process.paragraphs.map((paragraph) => (
              <ArrowText key={paragraph} tone="muted">
                {paragraph}
              </ArrowText>
            ))}
          </div>
          <ol className="mt-8 grid list-none gap-4 sm:mt-12 md:grid-cols-2 xl:grid-cols-4">
            {page.process.steps.map((step, index) => (
              <li key={step.title} className="rounded-[22px] bg-[#1a1918] p-7">
                <p className={`${jetbrains.className} text-[12px] text-[#ff5a1f]`}>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-[20px] leading-[1.25] font-semibold tracking-[-0.03em]">
                  {step.title}
                </h3>
                <div className="mt-3 grid gap-3">
                  {step.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-[14.5px] leading-[1.7] text-[#b9b7b2]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
          {page.process.close ? (
            <div className="mt-8">
              <ArrowText tone="inverse">{page.process.close}</ArrowText>
            </div>
          ) : null}
        </div>
      </section>

      <section id="work" className="scroll-mt-[120px] bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <SectionTitle>{page.work.heading}</SectionTitle>
          <div className="mt-6 grid w-full gap-4">
            <ArrowText>{page.work.intro}</ArrowText>
            {page.work.more?.map((paragraph) => (
              <ArrowText key={paragraph}>{paragraph}</ArrowText>
            ))}
          </div>
          <ul className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-2">
            {page.work.projects.map((project) => (
              <li
                key={project.title}
                className={`rounded-[22px] bg-[#f6f5f2] px-7 py-7 ${project.wide ? "md:col-span-2" : ""}`}
              >
                <h3 className="text-[22px] font-semibold tracking-[-0.03em]">{project.title}</h3>
                <div className="mt-3 grid gap-3">
                  {project.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-[15px] leading-[1.6] text-[#45433f]">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {project.stat ? (
                  <p className="mt-5 flex flex-wrap items-baseline gap-3">
                    <span className="text-[40px] leading-none font-semibold tracking-[-0.04em]">
                      {project.stat.value}
                    </span>
                    <span className="max-w-[36ch] text-[14px] leading-[1.5] text-[#6a6864]">
                      {project.stat.label}
                    </span>
                  </p>
                ) : null}
                {project.footnote ? (
                  <p className="mt-3 text-[15px] leading-[1.6] text-[#45433f]">{project.footnote}</p>
                ) : null}
              </li>
            ))}
          </ul>
          {page.work.close ? (
            <div className="mt-8">
              <ArrowText>{page.work.close}</ArrowText>
            </div>
          ) : null}
          <p className="mt-6 rounded-[18px] bg-[#fff1ea] px-6 py-5 text-[15px] leading-[1.6] text-[#1a1614]">
            {page.work.note}
          </p>
        </div>
      </section>

      <section className="bg-[#f4f3ef]">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <SectionTitle>{page.why.heading}</SectionTitle>
          {page.why.intro && page.why.intro.length > 0 ? (
            <div className="mt-6 grid w-full gap-4">
              {page.why.intro.map((paragraph) => (
                <ArrowText key={paragraph}>{paragraph}</ArrowText>
              ))}
            </div>
          ) : null}
          <ul className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-2">
            {page.why.items.map((item) => (
              <li key={item.title} className="rounded-[22px] bg-white px-7 py-7">
                <h3 className="text-[20px] font-semibold tracking-[-0.03em]">{item.title}</h3>
                <div className="mt-3 grid gap-3">
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-[15px] leading-[1.6] text-[#45433f]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          {page.why.close ? (
            <div className="mt-8">
              <ArrowText>{page.why.close}</ArrowText>
            </div>
          ) : null}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <SectionTitle>{page.cost.heading}</SectionTitle>
          <div className="mt-6 grid w-full gap-4">
            {page.cost.paragraphs.map((paragraph) => (
              <ArrowText key={paragraph}>{paragraph}</ArrowText>
            ))}
          </div>
          <div className="mt-10">
            <p className="text-[18px] font-semibold tracking-[-0.02em]">{page.cost.factorsTitle}</p>
            <dl className="mt-4 overflow-hidden rounded-[22px] border border-[rgba(14,14,14,0.1)]">
              {page.cost.factors.map((factor) => (
                <div
                  key={factor.label}
                  className={`grid gap-1 border-b border-[rgba(14,14,14,0.1)] px-5 py-4 last:border-b-0 sm:px-6 ${factor.detail ? "sm:grid-cols-[minmax(0,240px)_1fr] sm:items-center sm:gap-6" : ""}`}
                >
                  <dt className="font-semibold">{factor.label}</dt>
                  {factor.detail ? (
                    <dd className="text-[15px] leading-[1.55] text-[#45433f]">{factor.detail}</dd>
                  ) : null}
                </div>
              ))}
            </dl>
          </div>
          {page.cost.mvp ? (
            <div className="mt-10">
              <h3 className="w-full text-[24px] font-semibold tracking-[-0.03em] sm:text-[28px]">
                {page.cost.mvp.heading}
              </h3>
              <div className="mt-4">
                <ArrowText>{page.cost.mvp.intro}</ArrowText>
              </div>
              <ul className="mt-4 grid gap-2 md:grid-cols-2 md:gap-x-12">
                {page.cost.mvp.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-[1.6] text-[#45433f]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff5a1f]" aria-hidden="true" />
                    <span className="min-w-0 flex-1">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 grid w-full gap-4">
                {page.cost.mvp.after.map((paragraph) => (
                  <ArrowText key={paragraph}>{paragraph}</ArrowText>
                ))}
              </div>
            </div>
          ) : null}
          {page.cost.notes.length > 0 ? (
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {page.cost.notes.map((note) => (
                <li key={note} className="rounded-[22px] bg-[#f6f5f2] px-7 py-7 text-[15px] leading-[1.6]">
                  {note}
                </li>
              ))}
            </ul>
          ) : null}
          {page.cost.prompt ? (
            <p className="mt-8 w-full text-[18px] font-semibold tracking-[-0.02em]">{page.cost.prompt}</p>
          ) : null}
          {page.cost.closing ? (
            <div className="mt-4">
              <ArrowText>{page.cost.closing}</ArrowText>
            </div>
          ) : null}
          {page.cost.cta ? (
            <div className="mt-6">
              <Cta cta={page.cost.cta} variant="orange-white" />
            </div>
          ) : null}
        </div>
      </section>

      {/*
      <section className="canvas-dots">
        <div className="mx-auto grid w-full max-w-[1400px] gap-8 px-5 py-[50px] sm:p-[50px] lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTitle>{page.contact.heading}</SectionTitle>
            <div className="mt-6 grid gap-4">
              {page.contact.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-[16px] leading-[1.7] text-[#45433f]">
                  {paragraph}
                </p>
              ))}
            </div>
            {page.contact.emphasis ? (
              <p className="mt-4 text-[16px] font-semibold">{page.contact.emphasis}</p>
            ) : null}
          </div>
          <div className="rounded-[22px] bg-white px-7 py-8 shadow-[0_18px_20px_rgba(20,16,12,0.06)]">
            <h3 className="text-[26px] font-semibold tracking-[-0.03em]">{page.contact.boxTitle}</h3>
            {page.contact.boxBody ? (
              <p className="mt-3 text-[16px] leading-[1.6] text-[#45433f]">{page.contact.boxBody}</p>
            ) : null}
            {page.contact.boxMeta.length > 0 ? (
              <ul className="mt-4 grid gap-1">
                {page.contact.boxMeta.map((line) => (
                  <li key={line} className="text-[15px] font-semibold">
                    {line}
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="mt-5 flex flex-wrap gap-2">
              <Cta cta={page.contact.primaryCta} variant="orange-white" />
              {page.contact.secondaryCta ? (
                <Cta cta={page.contact.secondaryCta} variant="white-black" />
              ) : null}
              <FillButton
                href={`mailto:${page.contact.email}`}
                variant="white-black"
                className={buttonClass}
              >
                Email Us at {page.contact.email}
              </FillButton>
            </div>
            <p className="mt-5 text-[15px] leading-[1.6] text-[#45433f]">
              Phone:{" "}
              <a href={page.contact.phoneHref} className="font-semibold text-[#0e0e0e]">
                {page.contact.phone}
              </a>
              {page.contact.locations ? (
                <>
                  <br />
                  {page.contact.locations}
                </>
              ) : null}
            </p>
          </div>
        </div>
      </section>
      */}

      {page.faqs.items.length > 0 ? (
        <section className="bg-white">
          <div className="mx-auto grid w-full max-w-[1400px] gap-8 px-5 py-[50px] sm:gap-10 sm:p-[50px] lg:grid-cols-[minmax(0,420px)_minmax(0,594px)] lg:justify-between">
            <div>
              <h2 className="text-[32px] leading-[1.12] font-semibold tracking-[-0.045em] sm:text-[48px] sm:leading-[1.05] lg:text-[52px]">
                Frequently Asked Questions
              </h2>
            </div>
            <div>
              <FaqList
                faqs={page.faqs.items}
                answerClassName="mt-3 max-w-[58ch] text-[15px] leading-6 text-[#45433f]"
              />
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
