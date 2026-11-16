import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: "500",
});

const tickerItems = [
  "Fractional product leadership",
  "Product marketing & positioning",
  "Product development",
  "MVPs",
  "Roadmaps",
  "AI search visibility",
  "Feature growth",
];

export function ServiceTicker() {
  return (
    <div
      className={`${inter.className} service-ticker overflow-hidden border-b border-[rgba(14,14,14,0.1)] bg-white py-[22px] text-[18px] font-medium text-[#45433f]`}
      aria-label="Services"
    >
      <p className="sr-only">{tickerItems.join(", ")}</p>
      <div className="service-ticker__track flex w-max" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center gap-9 pr-9">
            {tickerItems.map((label) => (
              <span key={`${copy}-${label}`} className="flex items-center gap-9">
                <span className="whitespace-nowrap">{label}</span>
                <span className="size-1.5 shrink-0 bg-[#ff5a1f]" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
