import { Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { FillButton } from "@/components/FillButton";
import { FaqList } from "@/components/services/SmoothFaq";
import type { OfferingPageData } from "@/lib/offering-pages";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
});

const afterLinks = ["/product-development", "/product-management", "/product-marketing"];

function BookCall() {
  return (
    <FillButton
      href="/contact"
      variant="orange-white"
      className="h-11 gap-2 rounded-full px-4 text-[14px] whitespace-nowrap sm:h-14 sm:gap-2.5 sm:px-7 sm:text-[16px]"
    >
      Book a call
    </FillButton>
  );
}

export function OfferingPage({ page }: { page: OfferingPageData }) {
  return (
    <div className={`${inter.className} bg-white text-[#0e0e0e]`}>
      <section className="canvas-dots flex min-h-[calc(100dvh-72px)] flex-col">
        <div className="mx-auto mt-auto grid w-full max-w-[1400px] items-end gap-8 px-5 py-[50px] sm:gap-10 sm:p-[50px] xl:grid-cols-[minmax(0,680px)_458px] xl:justify-between">
          <div>
            <p className={`${jetbrains.className} text-[13px] text-[#6a6864]`}>
              <Link href="/#services" className="hover:text-[#0e0e0e]">
                Services
              </Link>
              <span className="px-2">/</span>
              <Link href="/product-development" className="hover:text-[#0e0e0e]">
                Product Development
              </Link>
              <span className="px-2">/</span>
              {page.name}
            </p>
            <h1 className="mt-4 max-w-[16ch] text-[32px] leading-[1.12] font-semibold tracking-[-0.045em] sm:text-[48px] sm:leading-[1.05] xl:text-[60px] xl:leading-[1.05]">
              {page.heading}
            </h1>
            <p className="mt-4 max-w-[540px] text-[16px] leading-6 text-[#45433f] sm:mt-6 sm:text-[20px] sm:leading-[33px]">
              {page.lede}
            </p>
            <div className="mt-7">
              <BookCall />
            </div>
          </div>

          <div className="overflow-hidden rounded-[22px] bg-white shadow-[0_18px_20px_rgba(20,16,12,0.08)]">
            <img
              src={page.image}
              alt=""
              width={520}
              height={349}
              className="h-auto w-full"
            />
            <ul className="grid grid-cols-2 gap-px bg-[rgba(14,14,14,0.08)]">
              {page.facts.map((fact) => (
                <li key={fact.value} className="bg-white px-5 py-4">
                  <p className="text-[15px] font-semibold">{fact.value}</p>
                  <p className="mt-1 text-[13px] leading-5 text-[#6a6864]">{fact.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <div className="rounded-[22px] border-l-[3px] border-[#ff5a1f] bg-[#fff1ea] px-8 py-8 sm:px-10 sm:py-10">
            <p className={`${jetbrains.className} text-[13px] text-[#ff5a1f]`}>Quick answer</p>
            <p className="mt-4 text-[18px] leading-[1.7] text-[#1a1614]">{page.quick}</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <h2 className="text-[32px] leading-[1.12] font-semibold tracking-[-0.045em] sm:text-[48px] sm:leading-[1.08]">
            {page.pain.heading}
          </h2>
          <div className="mt-8 grid gap-5">
            {page.pain.paragraphs.map((paragraph) => (
              <p key={paragraph} className="flex gap-4 text-[16px] leading-[1.7] text-[#45433f]">
                <span className="mt-[2px] text-[18px] leading-none text-[#ff5a1f]" aria-hidden="true">
                  →
                </span>
                <span className="min-w-0 flex-1">{paragraph}</span>
              </p>
            ))}
          </div>
          <ul className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {page.pain.points.map((point) => (
              <li key={point} className="rounded-[18px] bg-[#f6f5f2] px-6 py-5 text-[15px] leading-6">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <h2 className="text-[32px] leading-[1.12] font-semibold tracking-[-0.045em] sm:text-[48px] sm:leading-[1.08]">
            {page.build.heading}
          </h2>
          <p className="mt-8 flex gap-4 text-[16px] leading-[1.7] text-[#45433f]">
            <span className="mt-[2px] text-[18px] leading-none text-[#ff5a1f]" aria-hidden="true">
              →
            </span>
            <span className="min-w-0 flex-1">{page.build.intro}</span>
          </p>
          <ul className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {page.build.cards.map((card) => (
              <li key={card.title} className="flex flex-col rounded-[22px] bg-[#f6f5f2] px-7 py-7">
                <h3 className="text-[22px] font-semibold tracking-[-0.03em]">{card.title}</h3>
                <ul className="mt-4 grid gap-2">
                  {card.points.map((point) => (
                    <li key={point} className="text-[15px] leading-6 text-[#45433f]">
                      {point}
                    </li>
                  ))}
                </ul>
                {card.link && card.link.href !== `/${page.slug}` ? (
                  <Link
                    href={card.link.href}
                    className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-[#ff5a1f]"
                  >
                    {card.link.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#f4f3ef]">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <h2 className="text-[32px] leading-[1.12] font-semibold tracking-[-0.045em] sm:text-[48px] sm:leading-[1.08]">
            {page.scope.heading}
          </h2>
          <p className="mt-8 flex gap-4 text-[16px] leading-[1.7] text-[#45433f]">
            <span className="mt-[2px] text-[18px] leading-none text-[#ff5a1f]" aria-hidden="true">
              →
            </span>
            <span className="min-w-0 flex-1">{page.scope.intro}</span>
          </p>
          <ol className="mt-8 grid gap-3 sm:mt-12 lg:mt-14">
            {page.scope.decisions.map((decision, index) => (
              <li
                key={decision}
                className="flex items-start gap-5 rounded-[18px] bg-white px-6 py-5 sm:px-7"
              >
                <span className={`${jetbrains.className} mt-0.5 text-[13px] text-[#ff5a1f]`}>
                  0{index + 1}
                </span>
                <span className="text-[16px] leading-[1.6]">{decision}</span>
              </li>
            ))}
          </ol>
          <article className="mt-3 flex flex-col gap-6 rounded-[22px] bg-white px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <h3 className="text-[24px] font-semibold tracking-[-0.03em] sm:text-[28px]">{page.scope.calloutTitle}</h3>
              <p className="mt-3 text-[16px] leading-[1.6] text-[#45433f]">{page.scope.calloutBody}</p>
            </div>
            <div className="shrink-0">
              <BookCall />
            </div>
          </article>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <h2 className="text-[32px] leading-[1.12] font-semibold tracking-[-0.045em] sm:text-[48px] sm:leading-[1.08]">
            {page.different.heading}
          </h2>
          <p className="mt-8 flex gap-4 text-[16px] leading-[1.7] text-[#45433f]">
            <span className="mt-[2px] text-[18px] leading-none text-[#ff5a1f]" aria-hidden="true">
              →
            </span>
            <span className="min-w-0 flex-1">{page.different.intro}</span>
          </p>
          <ul className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {page.different.items.map((item) => (
              <li key={item.title} className="rounded-[22px] bg-[#f6f5f2] px-7 py-7">
                <h3 className="text-[20px] font-semibold tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-[#45433f]">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <h2 className="text-[32px] leading-[1.12] font-semibold tracking-[-0.045em] sm:text-[48px] sm:leading-[1.08]">
            {page.who.heading}
          </h2>
          <ul className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {page.who.people.map((person) => (
              <li key={person.title} className="rounded-[22px] bg-[#f6f5f2] px-7 py-7">
                <p className="text-[16px] leading-[1.55]">“{person.quote}”</p>
                <p className="mt-5 text-[14px] font-semibold text-[#6a6864]">{person.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#0e0e0e] text-[#f4f3ef]">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <p className="text-[12px] font-semibold tracking-[0.14em] text-[#a3a19c] uppercase">
            How it works
          </p>
          <h2 className="mt-3 text-[32px] leading-[1.12] font-semibold tracking-[-0.05em] sm:text-[48px] sm:leading-[1.1]">
            {page.process.heading}
            <span className="text-[#ff5a1f]">.</span>
          </h2>
          <ol className="mt-8 grid list-none gap-5 sm:mt-12 md:grid-cols-2 lg:grid-cols-4 [&:hover>li:not(:hover)]:border-transparent">
            {page.process.steps.map((step, index) => (
              <li
                key={step.title}
                className={`rounded-[22px] border-t-[3px] bg-[#1a1918] p-7 transition-[border-color] duration-300 ease-out hover:border-[#ff5a1f] ${
                  index === 0 ? "border-[#ff5a1f]" : "border-transparent"
                }`}
              >
                <p className={`${jetbrains.className} text-[12px] text-[#a3a19c]`}>Step {index + 1}</p>
                <h3 className="mt-3 text-[22px] leading-[1.2] font-semibold tracking-[-0.03em]">
                  {step.title}
                </h3>
                <p className="mt-3.5 text-[14.5px] leading-[1.7] text-[#b9b7b2]">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <h2 className="text-[32px] leading-[1.12] font-semibold tracking-[-0.045em] sm:text-[48px] sm:leading-[1.08]">
            {page.deliverables.heading}
          </h2>
          <dl className="mt-8 divide-y divide-[rgba(14,14,14,0.1)] border-y border-[rgba(14,14,14,0.1)] sm:mt-10">
            {page.deliverables.rows.map((row) => (
              <div key={row.item} className="grid gap-2 py-5 sm:grid-cols-[minmax(0,280px)_1fr] sm:gap-8">
                <dt className="font-semibold">{row.item}</dt>
                <dd className="text-[16px] leading-7 text-[#45433f]">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-[#f4f3ef]">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <h2 className="text-[32px] leading-[1.12] font-semibold tracking-[-0.045em] sm:text-[48px] sm:leading-[1.08]">
            {page.why.heading}
          </h2>
          <ul className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2">
            {page.why.reasons.map((reason) => (
              <li key={reason} className="rounded-[18px] bg-white px-6 py-5 text-[16px] leading-7">
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <h2 className="text-[32px] leading-[1.12] font-semibold tracking-[-0.045em] sm:text-[48px] sm:leading-[1.08]">
            {page.angle.heading}
          </h2>
          <p className="mt-8 flex gap-4 text-[16px] leading-[1.7] text-[#45433f]">
            <span className="mt-[2px] text-[18px] leading-none text-[#ff5a1f]" aria-hidden="true">
              →
            </span>
            <span className="min-w-0 flex-1">{page.angle.intro}</span>
          </p>
          <ul className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {page.angle.items.map((item) => (
              <li key={item.title} className="rounded-[22px] bg-[#f6f5f2] px-7 py-7">
                <h3 className="text-[20px] font-semibold tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-[#45433f]">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <h2 className="text-[32px] leading-[1.12] font-semibold tracking-[-0.045em] sm:text-[48px] sm:leading-[1.08]">
            {page.after.heading}
          </h2>
          <ul className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {page.after.paths.map((path, index) => (
              <li key={path.title} className="rounded-[22px] bg-[#f6f5f2] px-7 py-7">
                <h3 className="text-[22px] font-semibold tracking-[-0.03em]">{path.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-[#45433f]">{path.body}</p>
                <Link
                  href={afterLinks[index] ?? "/contact"}
                  className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-[#ff5a1f]"
                >
                  Learn more
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#f4f3ef]">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <h2 className="text-[32px] leading-[1.12] font-semibold tracking-[-0.045em] sm:text-[48px] sm:leading-[1.08]">
            {page.snapshot.heading}
          </h2>
          <p className="mt-8 flex gap-4 text-[16px] leading-[1.7] text-[#45433f]">
            <span className="mt-[2px] text-[18px] leading-none text-[#ff5a1f]" aria-hidden="true">
              →
            </span>
            <span className="min-w-0 flex-1">{page.snapshot.definition}</span>
          </p>
          <dl className="mt-8 divide-y divide-[rgba(14,14,14,0.1)] border-y border-[rgba(14,14,14,0.1)] sm:mt-10">
            {page.snapshot.rows.map((row) => (
              <div key={row.item} className="grid gap-2 py-5 sm:grid-cols-[minmax(0,280px)_1fr] sm:gap-8">
                <dt className="font-semibold">{row.item}</dt>
                <dd className="text-[16px] leading-7 text-[#45433f]">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-[1400px] gap-8 px-5 py-[50px] sm:gap-10 sm:p-[50px] lg:grid-cols-[minmax(0,420px)_minmax(0,594px)] lg:justify-between">
          <h2 className="text-[32px] leading-[1.12] font-semibold tracking-[-0.045em] sm:text-[48px] sm:leading-[1.05]">
            Questions founders ask.
          </h2>
          <div>
            <FaqList
              faqs={page.faqs}
              answerClassName="mt-3 max-w-[58ch] text-[15px] leading-6 text-[#45433f]"
            />
          </div>
        </div>
      </section>

      {/*
      <section className="bg-white">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 border-t border-[rgba(14,14,14,0.1)] px-5 py-[50px] sm:p-[50px] lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-[36px] leading-[1.05] font-semibold tracking-[-0.05em] sm:text-[48px] lg:text-[56px]">
              {page.close.heading}
            </h2>
            <p className="mt-5 max-w-[52ch] text-[16px] leading-[1.7] text-[#45433f]">{page.close.body}</p>
          </div>
          <BookCall />
        </div>
      </section>
      */}
    </div>
  );
}
