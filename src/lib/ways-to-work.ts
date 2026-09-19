export type WayToWork = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
};

export const waysToWork: WayToWork[] = [
  {
    id: "development",
    number: "01",
    title: "Product Development Partner",
    tagline: "We build what should exist, not just what's in the brief",
    description:
      "MVPs, custom apps, web platforms. Before anything gets built we work out who it's for, what it has to prove, and what can wait. You get working software and the reasoning behind every decision inside it.",
  },
  {
    id: "leadership",
    number: "02",
    title: "Fractional Product Leadership",
    tagline: "Product thinking on the inside, not advice from the outside",
    description:
      "We step in as your Chief Product Officer, product officer or advisor. Sitting with your CTO, giving the roadmap a spine, fixing where users drop off, working on retention and enhancement, helping the team ship with less noise. We do the thinking and stay accountable for the doing.",
  },
  {
    id: "marketing",
    number: "03",
    title: "Product Marketing Development",
    tagline: "Found by the people who are looking for you",
    description:
      "Search has changed. Buyers now ask AI before they ask Google, and both need something real to point at. We build the content, the positioning and the technical foundation that gets you into those answers. B2B only. Everything above is built on how business buyers actually search.",
  },
];
