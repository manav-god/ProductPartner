import { Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
});

const quotes = [
  "We have the idea. We need a first version real users can try.",
  "We got quotes for a build, but nobody asked what it needs to prove.",
  "Our product can’t keep up with what users need.",
  "We want builders who question the spec when it matters.",
];

const builds = [
  {
    title: "Discovery and scope",
    body: "Users, goals and what can wait, agreed before any build starts.",
  },
  {
    title: "MVPs",
    body: "A focused first version that real users can try.",
    link: { label: "MVP App Development", href: "/contact" },
  },
  {
    title: "Mobile apps",
    body: "iOS and Android apps, native or cross-platform.",
  },
  {
    title: "Web platforms",
    body: "Web apps, dashboards and the sites around them.",
  },
  {
    title: "Custom software",
    body: "Integrations, admin tools and internal systems.",
  },
  {
    title: "Feature releases",
    body: "Ongoing improvements after launch, shipped in a steady rhythm.",
  },
];

const steps = [
  {
    step: "Step 1",
    title: "Discover",
    body: "Who it’s for, what it has to prove, and what can wait.",
    accent: true,
  },
  {
    step: "Step 2",
    title: "Scope",
    body: "A clear plan, timeline and price before you commit.",
  },
  {
    step: "Step 3",
    title: "Build",
    body: "Short cycles, with working software to review along the way.",
  },
  {
    step: "Step 4",
    title: "Launch and keep shipping",
    body: "Get it live, then keep improving it with feature releases.",
  },
];

const faqs = [
  {
    question: "Who owns the code?",
    answer: "You do. 100% of the code and IP.",
  },
  {
    question: "How long does an MVP take?",
    answer: "A focused MVP is usually a few months. The scope sets the timeline.",
  },
  {
    question: "What do you build with?",
    answer: "The stack that fits the product. We agree it before the build starts.",
  },
  {
    question: "What happens after launch?",
    answer: "We stay on, and keep shipping feature releases in a steady rhythm.",
  },
];

function BookCallLink({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/contact"
      className={`inline-flex h-14 items-center gap-2.5 rounded-full bg-[#ff5a1f] px-7 text-[16px] font-semibold text-[#0e0e0e] transition-colors hover:bg-[#ff6a35] ${className}`}
    >
      Book a call
    </Link>
  );
}

export function ProductDevelopmentContent() {
  return (
    <div className={`${inter.className} bg-white text-[#0e0e0e]`}>
      <section className="canvas-dots">
        <div className="mx-auto grid w-full max-w-[1240px] items-end gap-10 px-5 pt-16 pb-20 sm:px-8 lg:px-12 lg:pt-24 lg:pb-[112px] xl:grid-cols-[minmax(0,680px)_458px] xl:justify-between">
          <div>
            <p className={`${jetbrains.className} text-[13px] text-[#6a6864]`}>
              <Link href="/#services" className="hover:text-[#0e0e0e]">
                Services
              </Link>
              <span className="px-2">/</span>
              Product Development
            </p>
            <h1 className="mt-4 max-w-[12ch] text-[40px] leading-[1.05] font-semibold tracking-[-0.05em] sm:max-w-none sm:text-[56px] xl:text-[76px] xl:leading-[82px] xl:tracking-[-3.6px]">
              <span className="xl:block">Build what the</span>{" "}
              <span className="xl:block">product needs.</span>{" "}
              <span className="xl:block">
                Nothing it doesn’t<span className="text-[#ff5a1f]">.</span>
              </span>
            </h1>
            <p className="mt-6 max-w-[540px] text-[18px] leading-[33px] text-[#45433f] sm:text-[20px]">
              MVPs, mobile apps, web platforms and custom software. We agree what the product has
              to prove first, then build it to scale.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <BookCallLink />
              <Link
                href="/work/fitness-app"
                className="inline-flex h-14 items-center justify-center rounded-full border border-[rgba(14,14,14,0.18)] bg-white px-7 text-[16px] font-semibold text-[#0e0e0e] transition-colors hover:bg-[#f6f5f2]"
              >
                Read a case study
              </Link>
            </div>
          </div>

          <div className="rounded-[22px] bg-white p-6 shadow-[0_18px_20px_rgba(20,16,12,0.08)]">
            <div className="flex items-center justify-between">
              <p className="text-[15px] font-semibold">Build plan</p>
              <p className={`${jetbrains.className} text-[12px] text-[#6a6864]`}>MVP</p>
            </div>
            <ul className="mt-4 space-y-3">
              {["Discovery and scope", "Design and core flows"].map((item) => (
                <li
                  key={item}
                  className="flex h-11 items-center gap-3 rounded-xl bg-[#f6f5f2] px-3.5 text-[14px]"
                >
                  <span className="grid size-5 shrink-0 place-items-center rounded-[10px] bg-[#0e0e0e]">
                    <img
                      src="/images/icons/build-plan-check.svg"
                      alt=""
                      width={11}
                      height={11}
                    />
                  </span>
                  {item}
                </li>
              ))}
              <li className="flex h-[46px] items-center gap-3 rounded-xl border border-[#ff5a1f] px-3.5 text-[14px] font-semibold">
                <span className="grid size-5 shrink-0 place-items-center rounded-[10px] border-2 border-[#ff5a1f]">
                  <span className="size-2 rounded-[4px] bg-[#ff5a1f]" />
                </span>
                Build
                <span
                  className={`${jetbrains.className} ml-auto text-[11px] font-normal text-[#6a6864]`}
                >
                  in progress
                </span>
              </li>
              <li className="flex h-[46px] items-center gap-3 rounded-xl border border-dashed border-[rgba(14,14,14,0.2)] px-3.5 text-[14px] text-[#6a6864]">
                <span className="size-5 shrink-0 rounded-[10px] border-2 border-[rgba(14,14,14,0.25)]" />
                Launch
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1240px] px-5 pt-20 pb-8 sm:px-8 lg:px-12 lg:pt-32">
          <p className={`${jetbrains.className} text-[13px] text-[#6a6864]`}>Is this for you?</p>
          <h2 className="mt-3 max-w-[12ch] text-[36px] leading-[1.08] font-semibold tracking-[-0.045em] sm:text-[48px] lg:max-w-[14ch] lg:text-[56px] lg:leading-[62px]">
            Usually, one of these sounds familiar.
          </h2>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {quotes.map((quote) => (
              <li
                key={quote}
                className="rounded-[22px] bg-[#f6f5f2] px-7 py-7 text-[16px] leading-[1.55]"
              >
                “{quote}”
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1240px] px-5 pt-16 pb-20 sm:px-8 lg:px-12 lg:pt-20 lg:pb-[88px]">
          <p className={`${jetbrains.className} text-[13px] text-[#6a6864]`}>What we build</p>
          <h2 className="mt-3 max-w-[12ch] text-[36px] leading-[1.08] font-semibold tracking-[-0.045em] sm:text-[48px] lg:text-[56px] lg:leading-[62px]">
            From first version to steady releases.
          </h2>
          <ul className="mt-12 grid gap-4 lg:mt-14 lg:grid-cols-3">
            {builds.map((item) => (
              <li key={item.title} className="rounded-[22px] bg-[#f6f5f2] px-7 py-7">
                <h3 className="text-[22px] font-semibold tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-3 max-w-[32ch] text-[15px] leading-[1.6] text-[#45433f]">
                  {item.body}
                </p>
                {item.link ? (
                  <Link
                    href={item.link.href}
                    className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-[#ff5a1f]"
                  >
                    {item.link.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#0e0e0e] text-[#f4f3ef]">
        <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
          <p className="text-[12px] font-semibold tracking-[0.14em] text-[#a3a19c] uppercase">
            How it works
          </p>
          <h2 className="mt-3 text-[36px] leading-[1.1] font-semibold tracking-[-0.05em] sm:text-[48px] lg:text-[52px] lg:leading-[57px] lg:tracking-[-2.52px]">
            Questions first. Then code<span className="text-[#ff5a1f]">.</span>
          </h2>
          <ol className="mt-12 grid list-none gap-5 md:grid-cols-2 lg:mt-[52px] lg:grid-cols-4 [&:hover>li:not(:hover)]:border-transparent">
            {steps.map((item) => (
              <li
                key={item.step}
                className={`rounded-[22px] border-t-[3px] bg-[#1a1918] p-7 transition-[border-color] duration-300 ease-out hover:border-[#ff5a1f] ${
                  item.accent ? "border-[#ff5a1f]" : "border-transparent"
                }`}
              >
                <p className={`${jetbrains.className} text-[12px] text-[#a3a19c]`}>{item.step}</p>
                <h3 className="mt-3 text-[24px] leading-[1.15] font-semibold tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-3.5 text-[14.5px] leading-[1.7] text-[#b9b7b2]">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/*
      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-[1240px] gap-6 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,630px)_minmax(0,490px)] lg:justify-between lg:px-12 lg:py-32">
          <Link
            href="/work/fitness-app"
            className="flex min-h-[320px] flex-col rounded-[24px] bg-[#f4f3ef] p-8 lg:min-h-[360px] lg:p-12"
          >
            <span className="inline-flex h-7 w-fit items-center rounded-full bg-white px-3 text-[13px] text-[#0e0e0e]">
              Health &amp; Fitness · iOS &amp; AI
            </span>
            <p className="mt-8 text-[72px] leading-none font-semibold tracking-[-0.05em] lg:text-[92px]">
              +40%
            </p>
            <p className="mt-4 text-[20px] font-semibold tracking-[-0.02em] lg:text-[22px]">
              AI Fitness Platform: challenge engagement
            </p>
            <p className="mt-4 text-[16px] font-semibold text-[#ff5a1f]">
              Read the case study <span aria-hidden="true">→</span>
            </p>
          </Link>
          <figure className="flex min-h-[320px] flex-col justify-between rounded-[24px] bg-[#f6f5f2] p-8 lg:min-h-[360px] lg:p-10">
            <blockquote className="text-[26px] leading-[1.35] font-semibold tracking-[-0.03em] lg:text-[28px]">
              “He built our multiplayer mobile game MVP from scratch, handling complex real-time
              features perfectly.”
            </blockquote>
            <figcaption className="mt-10 flex items-baseline gap-3 text-[15px]">
              <span className="font-semibold">Nikodem Rafal</span>
              <span className="text-[#6a6864]">CEO, Dared</span>
            </figcaption>
          </figure>
        </div>
      </section>
      */}

      <section className="bg-[#f4f3ef]">
        <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
          <p className={`${jetbrains.className} text-[13px] text-[#6a6864]`}>
            Two ways to build with us
          </p>
          <h2 className="mt-3 text-[36px] leading-[1.1] font-semibold tracking-[-0.045em] sm:text-[48px] lg:text-[52px]">
            Pick the one that fits where you are.
          </h2>
          <div className="mt-12 grid gap-5 lg:mt-14 lg:grid-cols-2">
            <article className="rounded-[22px] bg-white px-8 py-10 lg:px-10">
              <p className={`${jetbrains.className} text-[13px] text-[#6a6864]`}>Build</p>
              <h3 className="mt-4 text-[28px] font-semibold tracking-[-0.03em] lg:text-[32px]">
                Fixed scope, fixed price
              </h3>
              <p className="mt-4 max-w-[46ch] text-[16px] leading-[1.6] text-[#45433f]">
                A clear scope and timeline agreed upfront. You own 100% of the code and IP.
              </p>
            </article>
            <article className="rounded-[22px] bg-white px-8 py-10 lg:px-10">
              <p className={`${jetbrains.className} text-[13px] text-[#6a6864]`}>Partner</p>
              <h3 className="mt-4 text-[28px] font-semibold tracking-[-0.03em] lg:text-[32px]">
                Cash plus equity
              </h3>
              <p className="mt-4 max-w-[46ch] text-[16px] leading-[1.6] text-[#45433f]">
                For a small number of startups each year, we build as a partner, for a mix of cash
                and equity.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,420px)_minmax(0,594px)] lg:justify-between lg:px-12 lg:py-12">
          <h2 className="max-w-[10ch] text-[40px] leading-[1.05] font-semibold tracking-[-0.045em] sm:text-[48px] lg:text-[52px]">
            Questions founders ask.
          </h2>
          <div>
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                open={index === 0}
                className="border-b border-[rgba(14,14,14,0.1)] py-6"
              >
                <summary className="cursor-pointer list-none text-[18px] font-semibold tracking-[-0.02em] sm:text-[20px] [&::-webkit-details-marker]:hidden">
                  {faq.question}
                </summary>
                <p className="mt-3 max-w-[40ch] text-[15px] leading-6 text-[#45433f]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-8 border-t border-[rgba(14,14,14,0.1)] px-5 py-20 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-[118px]">
          <h2 className="max-w-[691px] text-[40px] leading-[1.05] font-semibold tracking-[-0.05em] sm:text-[56px] lg:text-[72px]">
            Building something? Let’s connect.
          </h2>
          <BookCallLink className="shrink-0" />
        </div>
      </section>
    </div>
  );
}
