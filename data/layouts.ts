export type LayoutGroup = {
  label: string;
  shortTitle: string;
  description: string;
  items: string[];
  imageSrc?: string;
};

export const publicLayouts: LayoutGroup[] = [
  {
    label: "Section / Group 1",
    shortTitle: "Ages 5-6 Zone",
    description: "Intro field area for younger campers focused on movement confidence, catching, and basic flag play.",
    items: [
      "Movement warm-up lane",
      "Short toss and catch grid",
      "Flag-pull fundamentals circle"
    ],
    imageSrc: "/layouts/field-layout.png"
  },
  {
    label: "Section / Group 2",
    shortTitle: "Ages 7-9 Zone",
    description: "Midfield section for route timing, ball tracking, and small-group competition.",
    items: [
      "Route stem lane",
      "Catch-point competition area",
      "1v1 reaction space"
    ],
    imageSrc: "/layouts/field-layout.png"
  },
  {
    label: "Section / Group 3",
    shortTitle: "Ages 10-12 Zone",
    description: "Older division area for advanced spacing, game-speed decision making, and live reps.",
    items: [
      "QB and receiver timing alley",
      "Pursuit angle challenge lane",
      "Short-field live play box"
    ],
    imageSrc: "/layouts/field-layout.png"
  }
];

export const detailedLayouts: LayoutGroup[] = [
  {
    label: "Section / Group 1",
    shortTitle: "Ages 5-6 Zone",
    description: "South-end field segment for the youngest campers with high coach visibility and fast reset stations.",
    items: [
      "Use extra coaches here to keep players moving station to station.",
      "Limit each rep explanation to one cue and one demonstration.",
      "Place soft footballs and flag belts at the south sideline for quick resets.",
      "Run this zone on shorter whistles to maintain attention and pace."
    ],
    imageSrc: "/layouts/field-layout.png"
  },
  {
    label: "Section / Group 2",
    shortTitle: "Ages 7-9 Zone",
    description: "Midfield section for the largest group, balancing skill detail with competitive energy.",
    items: [
      "Split the field into a route-running side and a catch-finish side.",
      "Use visible lane markers so waiting players do not drift into live reps.",
      "Keep one coach dedicated to transitions and hydration reminders.",
      "This zone is the best place for timed competitions and scoreboard moments."
    ],
    imageSrc: "/layouts/field-layout.png"
  },
  {
    label: "Section / Group 3",
    shortTitle: "Ages 10-12 Zone",
    description: "North-end field space for older campers ready for higher-tempo game application.",
    items: [
      "Open with advanced spacing concepts, then move quickly into live situations.",
      "Use boundary cones to create a red-zone box and a pursuit lane simultaneously.",
      "Assign your strongest teaching coach here during the final team-play block.",
      "Reserve a north sideline pocket for invited evaluators or admin observers."
    ],
    imageSrc: "/layouts/field-layout.png"
  }
];
