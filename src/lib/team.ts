export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  imageAlt: string;
};

/** Team members shown on the About page. */
export const teamMembers: TeamMember[] = [
  {
    name: "Blessing Igwegbe",
    role: "CEO",
    bio: "Leads strategy and delivery with strong technical depth across CRM, automation, and AI systems.",
    image: "/images/teams/blessing%20igwegbe.png",
    imageAlt: "Portrait of Blessing Igwegbe",
  },
  {
    name: "Souhaib Felloussi",
    role: "CTO",
    bio: "Owns architecture and engineering quality, with deep expertise in scalable automation and AI-powered workflows.",
    image: "/images/teams/souhaib%20felloussi.png",
    imageAlt: "Portrait of Souhaib Felloussi",
  },
];
