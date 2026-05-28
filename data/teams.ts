export type Team = {
  name: string;
  group: string;
  notes: string;
  logoSrc?: string;
};

export const teams: Team[] = [
  {
    name: "Timpview Juniors",
    group: "Host Program",
    notes: "Returning local group focused on foundational skill development.",
    logoSrc: "/teams/timpview-juniors.png"
  },
  {
    name: "Provo Eagles",
    group: "Community Club",
    notes: "Fast, high-energy group bringing strong entry-level competition.",
    logoSrc: "/teams/provo-eagles.png"
  },
  {
    name: "Wasatch Elite",
    group: "Travel Squad",
    notes: "Experienced flag athletes with strong route and spacing instincts.",
    logoSrc: "/teams/wasatch-elite.png"
  },
  {
    name: "Maple Mountain Youth",
    group: "School Group",
    notes: "Balanced roster that benefits from tempo-based team drills.",
    logoSrc: "/teams/maple-mountain-youth.png"
  },
  {
    name: "Utah Valley Select",
    group: "Invite Group",
    notes: "Upper-division participants prepared for advanced reps.",
    logoSrc: "/teams/utah-valley-select.png"
  },
  {
    name: "Canyon Crew",
    group: "Development Group",
    notes: "Coachable unit with a good mix of speed and first-time campers.",
    logoSrc: "/teams/canyon-crew.png"
  }
];
