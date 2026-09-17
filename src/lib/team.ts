export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "manav",
    name: "Manav Shah",
    role: "Co-founder and CEO",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "arjun",
    name: "Arjun Gautami",
    role: "Co-founder and CTO",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "kabir",
    name: "Kabir Desai",
    role: "Engineering Director",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "nina",
    name: "Nina Kapoor",
    role: "Growth & Marketing Lead",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
];
