const aboutPoints = [
  {
    title: "Product-first partners",
    body: "We embed with your team to shape strategy, prioritize what matters, and ship software people actually use.",
  },
  {
    title: "Builders, not just advisors",
    body: "From discovery through delivery and go-to-market, we stay accountable for outcomes—not slide decks.",
  },
  {
    title: "Startup speed, enterprise rigor",
    body: "Secure, scalable delivery with the urgency of a product team that has to win the next release.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-[68px] bg-[#f7f7f7] py-16 md:py-20 lg:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
        <div className="max-w-2xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-[#252425]/55">
            About
          </p>
          <h2
            id="about-heading"
            className="mt-4 text-[32px] font-semibold leading-none tracking-tight text-[#252425] sm:text-[40px] md:text-[48px]"
          >
            Your product partner, end to end.
            <span
              className="mt-4 block h-[4px] w-[36px] bg-accent"
              aria-hidden
            />
          </h2>
          <p className="mt-5 max-w-xl text-[16px] leading-7 text-[#252425]/65">
            Product Partner helps startups and enterprises design, build, and
            scale software products—with a team that owns the roadmap and the
            release.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3">
          {aboutPoints.map((point) => (
            <article
              key={point.title}
              className="rounded-2xl border border-[#dadada] bg-white p-6 md:p-8"
            >
              <h3 className="text-[20px] font-semibold tracking-tight text-[#252425]">
                {point.title}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-[#252425]/70">
                {point.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
