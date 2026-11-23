import { Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { FillButton } from "@/components/FillButton";
import { FaqList } from "@/components/services/SmoothFaq";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
});

const quotes = [
  "People who try it like it. Too few find it.",
  "We struggle to explain what we do in one sentence.",
  "Buyers ask AI assistants for recommendations, and we’re not in the answer.",
  "We’ve tried content, but it never turned into leads.",
];

const included = [
  {
    title: "Positioning",
    body: "Who it’s for, what it replaces and why it wins, in the words your buyers use.",
  },
  {
    title: "Messaging",
    body: "Homepage, pitch and sales copy that all say the same clear thing.",
  },
  {
    title: "B2B content",
    body: "Articles and pages that answer the questions your buyers already ask.",
  },
  {
    title: "SEO",
    body: "Technical foundations and pages that rank for the searches that matter.",
  },
  {
    title: "AI search visibility",
    body: "Clear, citable content so AI answers mention you when buyers ask (AEO / GEO).",
  },
  {
    title: "Monthly review",
    body: "What’s working, what isn’t, and what we do next.",
  },
];

const steps = [
  {
    step: "Step 1",
    title: "Understand",
    body: "Your customers, your competitors, and how buyers search for what you do.",
    accent: true,
  },
  {
    step: "Step 2",
    title: "Position",
    body: "One clear story about who it’s for and why it’s different.",
  },
  {
    step: "Step 3",
    title: "Publish",
    body: "Pages and content built for search and AI answers.",
  },
  {
    step: "Step 4",
    title: "Measure and grow",
    body: "Track what brings leads, and do more of it every month.",
  },
];

const faqs = [
  {
    question: "What is AEO and GEO?",
    answer:
      "Answer engine and generative engine optimisation. In plain words: making sure AI assistants can find, understand and recommend your product when buyers ask.",
  },
  {
    question: "Do you work with consumer products?",
    answer: "Not yet. We work with B2B products for now.",
  },
  {
    question: "How long before we see results?",
    answer: "The first inbound leads can show up within a month. It depends on where you start.",
  },
  {
    question: "Do you write the content?",
    answer: "Yes. We write the pages and articles, then review them with you every month.",
  },
];

function BookCallLink({ className = "" }: { className?: string }) {
  return (
    <FillButton
      href="/contact"
      variant="orange-white"
      className={`h-11 gap-2 rounded-full px-4 text-[14px] whitespace-nowrap sm:h-14 sm:gap-2.5 sm:px-7 sm:text-[16px] ${className}`}
    >
      Book a call
    </FillButton>
  );
}

export function ProductMarketingContent() {
  return (
    <div className={`${inter.className} bg-white text-[#0e0e0e]`}>
      <section className="canvas-dots">
        <div className="mx-auto grid w-full max-w-[1400px] items-end gap-8 px-5 py-[50px] sm:gap-10 sm:p-[50px] xl:grid-cols-[minmax(0,680px)_458px] xl:justify-between">
          <div>
            <p className={`${jetbrains.className} text-[13px] text-[#6a6864]`}>
              <Link href="/#services" className="hover:text-[#0e0e0e]">
                Services
              </Link>
              <span className="px-2">/</span>
              Product Marketing &amp; Positioning
            </p>
            <h1 className="mt-4 text-[32px] leading-[1.12] font-semibold tracking-[-0.05em] sm:max-w-[14ch] sm:text-[56px] sm:leading-[1.05] xl:max-w-none xl:text-[76px] xl:leading-[82px] xl:tracking-[-3.6px]">
              <span className="xl:block">Get found by</span>{" "}
              <span className="xl:block">the people you</span>{" "}
              <span className="xl:block">
                built it for<span className="text-[#ff5a1f]">.</span>
              </span>
            </h1>
            <p className="mt-4 max-w-[547px] text-[16px] leading-6 text-[#45433f] sm:mt-6 sm:text-[20px] sm:leading-[33px]">
              Positioning, B2B content, and visibility in search and AI answers. For products that
              work, but aren’t being found or understood yet.
            </p>
            <div className="mt-7 flex flex-row flex-wrap items-center gap-2 sm:gap-3">
              <BookCallLink />
              <p className="inline-flex h-10 items-center rounded-full border border-[rgba(14,14,14,0.12)] bg-white px-4 text-[14px] text-[#45433f]">
                B2B products only, for now
              </p>
            </div>
          </div>

          <div className="rounded-[22px] bg-white p-6 shadow-[0_18px_20px_rgba(20,16,12,0.08)]">
            <div className="flex justify-end">
              <p className="rounded-2xl bg-[#f6f5f2] px-4 py-3 text-[14px] leading-snug">
                What’s the best tool for [your category]?
              </p>
            </div>
            <div className="mt-5 flex gap-3">
              <span className="size-[30px] shrink-0 rounded-full bg-[#0e0e0e]" />
              <div className="flex flex-1 flex-col justify-center gap-2 pt-1">
                <span className="h-2.5 w-[92%] rounded-full bg-[#eceae6]" />
                <span className="h-2.5 w-[80%] rounded-full bg-[#eceae6]" />
              </div>
            </div>
            <p className="mt-3 pl-[42px] text-[14px] leading-6 text-[#0e0e0e]">
              A strong option is{" "}
              <span className="rounded-md bg-[#f6f5f2] px-1.5 py-0.5 font-semibold">
                Your product
              </span>, built for teams like yours.
            </p>
            <span className="mt-3 ml-[42px] block h-2.5 w-[62%] rounded-full bg-[#eceae6]" />
            <p className="mt-3 ml-[42px] inline-flex h-6 items-center gap-2 rounded-full bg-[#f6f5f2] px-3 text-[12px] text-[#6a6864]">
              <span className="size-1.5 rounded-full bg-[#ff5a1f]" />
              source: yourproduct.com
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <p className={`${jetbrains.className} text-[13px] text-[#6a6864]`}>Is this for you?</p>
          <h2 className="mt-3 text-[32px] leading-[1.12] font-semibold tracking-[-0.045em] sm:text-[48px] sm:leading-[1.08] lg:text-[56px] lg:leading-[62px]">
            Usually, one of these sounds familiar.
          </h2>
          <ul className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
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
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <p className={`${jetbrains.className} text-[13px] text-[#6a6864]`}>What’s included</p>
          <h2 className="mt-3 text-[32px] leading-[1.12] font-semibold tracking-[-0.045em] sm:text-[48px] sm:leading-[1.08] lg:text-[56px] lg:leading-[62px]">
            One clear story, everywhere buyers look.
          </h2>
          <ul className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {included.map((item) => (
              <li key={item.title} className="rounded-[22px] bg-[#f6f5f2] px-7 py-7">
                <h3 className="text-[22px] font-semibold tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-3 max-w-[34ch] text-[15px] leading-[1.6] text-[#45433f]">
                  {item.body}
                </p>
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
          <h2 className="mt-3 text-[32px] leading-[1.12] font-semibold tracking-[-0.05em] sm:text-[48px] sm:leading-[1.1] lg:text-[52px] lg:leading-[57px] lg:tracking-[-2.52px]">
            Set up once, then keep it running<span className="text-[#ff5a1f]">.</span>
          </h2>
          <ol className="mt-8 grid list-none gap-5 sm:mt-12 md:grid-cols-2 lg:mt-[52px] lg:grid-cols-4 [&:hover>li:not(:hover)]:border-transparent">
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
        <div className="mx-auto grid w-full max-w-[1400px] gap-6 lg:grid-cols-2 p-[50px]">
          <div className="flex min-h-[280px] flex-col justify-end rounded-[24px] bg-[#f4f3ef] p-8 lg:min-h-[320px] lg:p-12">
            <p className="text-[72px] leading-none font-semibold tracking-[-0.05em] lg:text-[120px]">
              2 deals
            </p>
            <p className="mt-4 text-[15px] text-[#45433f]">closed from inbound, within a month</p>
          </div>
          <article className="flex min-h-[280px] flex-col rounded-[24px] bg-[#f6f5f2] p-8 lg:min-h-[320px] lg:p-10">
            <span className="inline-flex h-7 w-fit items-center rounded-full bg-white px-3 text-[13px]">
              AI / Sports · Product marketing
            </span>
            <h3 className="mt-5 text-[26px] font-semibold tracking-[-0.03em]">AI coaching app</h3>
            <p className="mt-3 max-w-[42ch] text-[16px] leading-[1.55] text-[#45433f]">
              Our SEO and AI search work brought in the product’s first inbound leads. Two of them
              closed within a month.
            </p>
            <Link href="/work" className="mt-auto pt-8 text-[16px] font-semibold text-[#ff5a1f]">
              See more work <span aria-hidden="true">→</span>
            </Link>
          </article>
        </div>
      </section>
      */}

      <section className="bg-[#f4f3ef]">
        <div className="mx-auto grid w-full max-w-[1400px] gap-8 px-5 py-[50px] sm:gap-10 sm:p-[50px] lg:grid-cols-[minmax(0,480px)_minmax(0,594px)] lg:justify-between">
          <div>
            <p className={`${jetbrains.className} text-[13px] text-[#6a6864]`}>
              How we work together
            </p>
            <h2 className="mt-4 text-[32px] leading-[1.12] font-semibold tracking-[-0.045em] sm:text-[44px] sm:leading-[1.08] lg:text-[48px]">
              A setup phase, then a monthly engine.
            </h2>
            <p className="mt-6 max-w-[42ch] text-[16px] leading-[1.65] text-[#45433f]">
              We start by getting the positioning and foundations right. Then content and visibility
              work runs every month, reviewed together.
            </p>
          </div>
          <div>
            <FaqList
              faqs={faqs}
              answerClassName="mt-3 max-w-[58ch] text-[15px] leading-6 text-[#45433f]"
            />
          </div>
        </div>
      </section>

      {/*
      <section className="bg-white">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 border-t border-[rgba(14,14,14,0.1)] lg:flex-row lg:items-end lg:justify-between p-[50px]">
          <h2 className="text-[40px] leading-[1.05] font-semibold tracking-[-0.05em] sm:text-[56px] lg:text-[72px]">
            Building something? Let’s connect.
          </h2>
          <BookCallLink className="shrink-0" />
        </div>
      </section>
      */}
    </div>
  );
}
