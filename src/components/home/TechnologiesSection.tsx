import { techRowOne, techRowTwo, type TechItem } from "@/lib/technologies";

function TechCard({ item }: { item: TechItem }) {
  return (
    <div className="flex w-[240px] shrink-0 flex-col justify-center rounded-[16px] border border-[#dadada] bg-white px-5 py-5 sm:w-[267px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.icon}
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 object-contain"
        loading="lazy"
      />
      <h3 className="mt-4 text-[18px] font-semibold tracking-tight text-[#111111] sm:text-[20px]">
        {item.name}
      </h3>
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: TechItem[];
  direction: "left" | "right";
}) {
  const loop = [...items, ...items];

  return (
    <div className="tech-marquee group/marquee overflow-hidden">
      <div
        className={`tech-marquee__track flex w-max gap-[30px] ${
          direction === "left"
            ? "tech-marquee__track--left"
            : "tech-marquee__track--right"
        }`}
      >
        {loop.map((item, index) => (
          <TechCard key={`${item.id}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export function TechnologiesSection() {
  return (
    <section
      id="technologies"
      className="overflow-hidden py-16 md:py-[92px]"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #edf0f3 100%)",
      }}
      aria-labelledby="technologies-heading"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8 lg:px-[40px]">
        <div className="max-w-[720px]">
          <h2
            id="technologies-heading"
            className="text-[28px] font-bold leading-tight tracking-tight text-[#252425] md:text-[36px]"
          >
            Technologies
            <span
              className="mt-3 block h-[4px] w-[36px] bg-accent"
              aria-hidden
            />
          </h2>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-[30px] md:mt-14">
        <MarqueeRow items={techRowOne} direction="left" />
        <MarqueeRow items={techRowTwo} direction="right" />
      </div>
    </section>
  );
}
