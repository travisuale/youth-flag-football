export type ScheduleBlock = {
  time: string;
  title: string;
  description?: string;
  details?: string[];
};

export type DrillGroup = {
  name: string;
  focus: string;
  teams: string[];
};

export type Rotation = {
  label: string;
  description: string;
  sequence: string[];
};

export const simpleSchedule: ScheduleBlock[] = [
  {
    time: "8:30 AM",
    title: "Check-In + Warm-Up",
    description: "Player arrival, wristbands, field assignment, and movement prep."
  },
  {
    time: "9:00 AM",
    title: "Skill Stations Open",
    description: "Quarterback, route running, agility, and flag-pull fundamentals."
  },
  {
    time: "10:30 AM",
    title: "Competition Rotations",
    description: "Timed reps and small-group challenges with coach scoring."
  },
  {
    time: "12:00 PM",
    title: "Team Play Sessions",
    description: "Short-field games focused on spacing, tempo, and communication."
  },
  {
    time: "1:00 PM",
    title: "Closing Huddle",
    description: "Awards, reminders, and parent pickup flow."
  }
];

export const detailedSchedule: ScheduleBlock[] = [
  {
    time: "7:45 AM",
    title: "Staff Arrival + Setup",
    description: "Field captains place cones, signage, and hydration stations.",
    details: [
      "Verify check-in table, pinnies, footballs, and medical station.",
      "Assign one adult to parking flow and one to family greeting.",
      "Test music, PA, and whistle communication before gates open."
    ]
  },
  {
    time: "8:30 AM",
    title: "Player Check-In + Dynamic Warm-Up",
    description: "Front gate staff confirm registration while coaches sort players into groups.",
    details: [
      "Use age-color wristbands to direct players to opening lanes.",
      "Warm-up lead starts high knees, hip openers, acceleration buildups.",
      "Late arrivals report to the check-in tent before joining reps."
    ]
  },
  {
    time: "9:00 AM",
    title: "Station Block 1",
    description: "Initial skill circuit across three field zones.",
    details: [
      "Section 1: QB mechanics and snap exchange rhythm.",
      "Section 2: Route stems, breaks, and ball tracking.",
      "Section 3: Flag-pull angles and pursuit leverage."
    ]
  },
  {
    time: "10:30 AM",
    title: "Competition Rotations",
    description: "Short-format challenges with visible pacing and score tracking.",
    details: [
      "Groups rotate on horn every 12 minutes.",
      "Keep one coach scoring, one coaching, and one resetting lines.",
      "Hydration window happens during each station transition."
    ]
  },
  {
    time: "12:00 PM",
    title: "Team Play + Situational Sessions",
    description: "Players apply morning work to fast live reps.",
    details: [
      "Open with red-zone spacing, then progress to full short-field drives.",
      "Use rolling substitutions to keep tempo high and sidelines organized.",
      "Finish with best-on-best showcase reps if timing allows."
    ]
  },
  {
    time: "1:00 PM",
    title: "Closing Huddle + Dismissal",
    description: "Recognize effort, share follow-up notes, and manage pickup lanes.",
    details: [
      "Thank staff before family dismissal begins.",
      "Direct teams to preassigned pickup sides to avoid crowding.",
      "Capture lost-and-found and equipment return before release."
    ]
  }
];

export const drillGroups: DrillGroup[] = [
  {
    name: "Lightning",
    focus: "Younger players emphasizing ball skills and footwork rhythm.",
    teams: ["Timpview Juniors", "Provo Eagles"]
  },
  {
    name: "Blaze",
    focus: "Middle division groups mixing route detail with open-field decision making.",
    teams: ["Wasatch Elite", "Maple Mountain Youth"]
  },
  {
    name: "Storm",
    focus: "Older players working game-speed spacing, timing, and competition periods.",
    teams: ["Utah Valley Select", "Canyon Crew"]
  }
];

export const rotations: Rotation[] = [
  {
    label: "Morning Skills Rotation",
    description: "Three-station circuit that introduces the day’s coaching language and tempo.",
    sequence: ["QB Mechanics", "Receiver Detail", "Flag Defense"]
  },
  {
    label: "Competition Rotation",
    description: "Timed challenges that keep groups moving while preserving clear evaluation lanes.",
    sequence: ["Speed Grid", "Catch Circuit", "1v1 Finish"]
  },
  {
    label: "Team Play Rotation",
    description: "Live rep order for small-sided gameplay and red-zone situations.",
    sequence: ["Red Zone", "Midfield Drive", "Championship Field"]
  }
];
