export type DiffRow = {
  label: string;
  us: string;
  agencies: string;
  freelancers: string;
};

export const differenceRows: DiffRow[] = [
  {
    label: "Strategy",
    us: "Outcome-led product strategy that ties every sprint to metrics that matter.",
    agencies: "Focused on closing the project, not the outcome.",
    freelancers: "Focused on closing the project, not the outcome.",
  },
  {
    label: "Quality",
    us: "Product thinking across consulting, build, testing, and go-to-market.",
    agencies: "Copy what competitors ship.",
    freelancers: "Copy what competitors ship.",
  },
  {
    label: "Expertise",
    us: "Full product lifecycle ownership, from discovery to scale.",
    agencies: "Narrow execution with slow handoffs.",
    freelancers: "Limited depth and little long-term ownership.",
  },
  {
    label: "Time to Deliver",
    us: "Milestone-based delivery with clear GO / NO-GO decision points.",
    agencies: "Slow rollout and drifting scope.",
    freelancers: "Unpredictable timelines and capacity gaps.",
  },
  {
    label: "Scalability",
    us: "A dedicated partnership that scales with your product roadmap.",
    agencies: "One-off project mindset.",
    freelancers: "Capacity that disappears mid-roadmap.",
  },
];
