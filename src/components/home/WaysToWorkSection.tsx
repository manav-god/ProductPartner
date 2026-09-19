import { waysToWork } from "@/lib/ways-to-work";

export function WaysToWorkSection() {
  return (
    <section
      id="services"
      className="scroll-mt-[68px] bg-white py-16 md:py-20 lg:py-24"
      aria-labelledby="ways-to-work-heading"
    >
      <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
        <div className="max-w-2xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-[#252425]/55">
            Our Services
          </p>
          <h2
            id="ways-to-work-heading"
            className="mt-4 text-[32px] font-semibold leading-none tracking-tight text-[#252425] sm:text-[40px] md:text-[48px]"
          >
            Three ways to work together.
            <span
              className="mt-4 block h-[4px] w-[36px] bg-accent"
              aria-hidden
            />
          </h2>
          <p className="mt-5 max-w-xl text-[16px] leading-7 text-[#252425]/65">
            Most partners start with one and grow into the others.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3">
          {waysToWork.map((way) => (
            <article
              key={way.id}
              className="group flex flex-col rounded-2xl border border-[#dadada] bg-[#fafafa] p-6 transition duration-300 hover:-translate-y-1 hover:border-accent md:p-8"
            >
              <p className="font-mono text-[12px] tracking-[0.2em] text-[#252425]/45 transition-colors group-hover:text-accent">
                {way.number}
              </p>
              <h3 className="mt-8 text-[26px] font-semibold leading-none tracking-tight text-[#252425] sm:text-[30px]">
                {way.title}
              </h3>
              <p className="mt-4 text-[15px] italic leading-6 text-[#252425]/55">
                {way.tagline}
              </p>
              <p className="mt-5 text-[14px] leading-7 text-[#252425]/75">
                {way.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
