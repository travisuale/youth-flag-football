export type EventData = {
  slug: string;
  name: string;
  subtitle: string;
  date: string;
  time: string;
  location: string;
  description: string;
  longDescription: string;
  staffNotes: string;
  protectedSummary: string;
  protectedBoardUrl: string;
  contact?: {
    name: string;
    email: string;
    phone: string;
  };
};

export const eventData: EventData = {
  slug: "timpview-youth-flag-camp",
  name: "Timpview Youth Flag Football Camp",
  subtitle: "Speed, skills, and competitive reps for rising playmakers",
  date: "June 22, 2026",
  time: "8:30 AM - 1:30 PM",
  location: "Timpview High School Practice Fields, Provo, Utah",
  description:
    "A one-day youth flag football camp built for players, families, coaches, and invited evaluators with clean logistics and reusable event content.",
  longDescription:
    "This starter microsite is set up for a youth flag football camp with a simple attendee experience, a deeper operations page for staff, and a protected organizer view. Swap the shared data files to reuse the structure for future showcases, camps, or recruiting events.",
  staffNotes:
    "Lead with visible energy, keep queues short, and use field captains to move groups every whistle. Stations should reset equipment during transitions so players never wait on setup. If weather or attendance changes, adjust group splits in the shared schedule data rather than rewriting page content.",
  protectedSummary:
    "Use this page for invited organizers, recruiters, or admin stakeholders who need a concise summary, shared board access, and the current event layout without exposing internal links on public pages.",
  protectedBoardUrl: "https://example.com/shared-board",
  contact: {
    name: "Camp Operations Coordinator",
    email: "operations@example.com",
    phone: "(801) 555-0148"
  }
};

export function matchesEventSlug(slug: string) {
  return slug === eventData.slug;
}

export function getEventFacts() {
  return [
    { label: "Date", value: eventData.date },
    { label: "Time", value: eventData.time },
    { label: "Location", value: eventData.location }
  ];
}
