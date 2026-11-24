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
  "We have engineers, but nobody owning the product.",
  "The roadmap is a wishlist, and everything feels urgent.",
  "Users sign up, then drop off, and we’re not sure why.",
  "We need product leadership, but not a full-time hire yet.",
  "We need a product person to set up the team and manage our resources.",
  "We need help finding good developers we can actually afford.",
];

const included = [
  {
    title: "Roadmap and priorities",
    body: "A roadmap tied to what the business needs next, not a wishlist.",
  },
  {
    title: "Retention and drop-off",
    body: "Find where users leave, and fix the parts that matter most.",
  },
  {
    title: "Feature growth",
    body: "Decide which features earn their place, and shape them before they’re built.",
  },
  {
    title: "Working with your CTO",
    body: "Product and engineering decisions made together, side by side.",
  },
  {
    title: "UX and product quality",
    body: "Flows, edge cases and the details users actually notice.",
  },
  {
    title: "Delivery rhythm",
    body: "Planning, releases and reviews your team can keep running.",
  },
];

const steps = [
  {
    step: "Step 1",
    title: "Diagnose",
    body: "I look at the product, the data, the team and the roadmap as they are today.",
    accent: true,
  },
  {
    step: "Step 2",
    title: "Set the direction",
    body: "Agree priorities and a roadmap the whole team believes in.",
  },
  {
    step: "Step 3",
    title: "Run it with you",
    body: "A weekly rhythm of planning, reviews and releases.",
  },
  {
    step: "Step 4",
    title: "Grow it",
    body: "New features, and hands-on product marketing so the right people find it.",
  },
];

const roadmap = {
  Now: 2,
  Next: 3,
  Later: 2,
};


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

export function ProductManagementContent({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
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
              Fractional Product Leadership
            </p>
            <h1 className="mt-4 text-[32px] leading-[1.12] font-semibold tracking-[-0.05em] sm:text-[56px] sm:leading-[1.05] xl:text-[72px] xl:leading-[78px] xl:tracking-[-3.4px]">
              <span className="xl:block">Fractional product</span>{" "}
              <span className="xl:block">leadership, inside</span>{" "}
              <span className="xl:block">
                your team<span className="text-[#ff5a1f]">.</span>
              </span>
            </h1>
            <p className="mt-4 max-w-[533px] text-[16px] leading-6 text-[#45433f] sm:mt-6 sm:text-[20px] sm:leading-[33px]">
              I work alongside your founders and engineers on what to build next, and why.
            </p>
            <div className="mt-7 flex flex-row flex-wrap items-center gap-2 sm:gap-3">
              <BookCallLink />
              <FillButton
                href="/work"
                variant="white-orange"
                className="h-11 rounded-full px-4 text-[14px] whitespace-nowrap sm:h-14 sm:px-7 sm:text-[16px]"
              >
                See the work
              </FillButton>
            </div>
          </div>

          <div className="rounded-[22px] bg-white p-6 shadow-[0_18px_20px_rgba(20,16,12,0.08)]">
            <div className="flex items-center justify-between">
              <p className="text-[15px] font-semibold">Roadmap</p>
              <p className={`${jetbrains.className} text-[12px] text-[#6a6864]`}>this quarter</p>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2.5">
              {Object.entries(roadmap).map(([label, count]) => (
                <div key={label}>
                  <p className={`${jetbrains.className} text-[12px] text-[#6a6864]`}>{label}</p>
                  <div className="mt-3.5 space-y-2">
                    {Array.from({ length: count }, (_, index) => (
                      <div key={index} className="h-[46px] rounded-xl bg-[#f6f5f2]" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <p className={`${jetbrains.className} text-[13px] text-[#6a6864]`}>Is this for you?</p>
          <h2 className="mt-3 text-[32px] leading-[1.12] font-semibold tracking-[-0.045em] sm:text-[48px] sm:leading-[1.08] lg:text-[56px] lg:leading-[62px]">
            Usually, one of these sounds familiar.
          </h2>
          <ul className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
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
            What I take care of.
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
            Inside your team, from week one<span className="text-[#ff5a1f]">.</span>
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
        <div className="mx-auto grid w-full max-w-[1400px] gap-6 lg:grid-cols-[minmax(0,630px)_minmax(0,490px)] lg:justify-between p-[50px]">
          <figure className="flex min-h-[280px] flex-col justify-between rounded-[24px] bg-[#f6f5f2] p-8 lg:min-h-[286px] lg:p-12">
            <blockquote className="max-w-[20ch] text-[28px] leading-[1.25] font-semibold tracking-[-0.03em] lg:text-[32px]">
              “I’ve worked with product leaders twice Manav’s age. He catches things most of them
              miss.”
            </blockquote>
            <figcaption className="mt-8 flex items-baseline gap-3 text-[15px]">
              <span className="font-semibold">Vraj D</span>
              <span className="text-[#6a6864]">Founder, Club Duelz</span>
            </figcaption>
          </figure>
          <article className="flex min-h-[280px] flex-col rounded-[24px] bg-[#f4f3ef] p-8 lg:min-h-[286px] lg:p-10">
            <span className="inline-flex h-7 w-fit items-center rounded-full bg-white px-3 text-[13px]">
              Sports · Fractional product leadership
            </span>
            <h3 className="mt-5 text-[24px] font-semibold tracking-[-0.03em] lg:text-[26px]">
              League operations platform
            </h3>
            <p className="mt-3 max-w-[36ch] text-[16px] leading-[1.55] text-[#45433f]">
              I lead product for a US sports platform, running the roadmap, releases and onboarding
              of new leagues.
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
            <p className={`${jetbrains.className} text-[13px] text-[#6a6864]`}>Working together</p>
            <h2 className="mt-4 text-[32px] leading-[1.12] font-semibold tracking-[-0.045em] sm:text-[44px] sm:leading-[1.08] lg:text-[48px]">
              Ongoing, and shaped around you.
            </h2>
            <p className="mt-6 max-w-[42ch] text-[16px] leading-[1.65] text-[#45433f]">
              Scaled to what your product needs right now. For the right early-stage startups, I can
              work for a mix of cash and equity, agreed case by case.
            </p>
          </div>
          <div>
            <FaqList
              faqs={faqs}
              answerClassName="mt-3 max-w-[52ch] text-[15px] leading-6 text-[#45433f]"
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
