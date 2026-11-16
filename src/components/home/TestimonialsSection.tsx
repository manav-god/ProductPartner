import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const clientLogos = [
  { src: "/images/clientlogo/trimmed/clubeduelz.png", alt: "Club Duelz" },
  { src: "/images/clientlogo/trimmed/mediawise.png", alt: "Mediawise" },
  { src: "/images/clientlogo/trimmed/statepharm.png", alt: "Statepharm" },
  { src: "/images/clientlogo/trimmed/logo4.png", alt: "Client logo" },
  { src: "/images/clientlogo/trimmed/logo5-clear.png", alt: "Client logo" },
  { src: "/images/clientlogo/trimmed/dared.png", alt: "Dared" },
];

const quotes = [
  {
    quote: "“Manav was a highly diligent and dedicated partner to us.”",
    name: "Steve",
    role: "CEO, PD",
  },
  {
    quote: "“They brought a strong combination of strategic insight and execution.”",
    name: "Dawn M Price",
    role: "Sr Industry Engagement Manager, GSIC",
  },
  {
    quote:
      "“He built our multiplayer mobile game MVP from scratch, handling complex real-time features perfectly.”",
    name: "Nikodem Rafal",
    role: "CEO, Dared",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className={`${inter.className} scroll-mt-[120px] border-t border-[rgba(14,14,14,0.1)] bg-white text-[#0e0e0e]`}
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center px-5 py-20 text-center sm:px-8 md:py-28 lg:px-12 lg:py-[140px]">
        <p className="text-[12px] font-semibold tracking-[0.14em] text-[#5e5c58] uppercase">
          What partners say
        </p>
        <h2
          id="testimonials-heading"
          className="mt-6 max-w-[720px] text-[32px] leading-[1.25] font-medium tracking-[-0.038em] sm:text-[40px] lg:text-[46px]"
        >
          <span className="lg:block">“I’ve worked with product leaders</span>{" "}
          <span className="lg:block">twice Manav’s age. He catches</span>{" "}
          <span className="lg:block">things most of them miss.”</span>
        </h2>
        <p className="mt-8 text-[16px]">
          <span className="font-semibold">Vraj D</span>{" "}
          <span className="text-[14px] text-[#5e5c58]">Founder, Club Duelz</span>
        </p>

        <div className="mt-16 grid w-full gap-5 text-left lg:grid-cols-3">
          {quotes.map((item) => (
            <figure
              key={item.name}
              className="flex min-h-[239px] flex-col rounded-[24px] bg-[#f6f5f2] p-[30px]"
            >
              <blockquote className="text-[18px] leading-7 font-medium tracking-[-0.3px]">
                {item.quote}
              </blockquote>
              <figcaption className="mt-auto pt-6">
                <p className="text-[15px] font-semibold">{item.name}</p>
                <p className="mt-1 text-[13px] text-[#5e5c58]">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-5 gap-y-4">
          <p className="mr-3 text-[12px] text-[#5e5c58]">Teams we’ve worked with</p>
          {clientLogos.map((logo) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              className="h-11 w-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
