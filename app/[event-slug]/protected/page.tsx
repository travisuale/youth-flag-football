import Link from "next/link";
import { notFound } from "next/navigation";
import { FieldLayoutSection } from "@/components/FieldLayoutSection";
import { FullBleedBand } from "@/components/FullBleedBand";
import { Header } from "@/components/Header";
import { ScheduleSection } from "@/components/ScheduleSection";
import { eventData, getEventFacts, matchesEventSlug } from "@/data/event";
import { detailedLayouts } from "@/data/layouts";
import { simpleSchedule } from "@/data/schedule";
import { teams } from "@/data/teams";

type PageProps = {
  params: Promise<{
    "event-slug": string;
  }>;
};

export default async function ProtectedPage({ params }: PageProps) {
  const { "event-slug": eventSlug } = await params;

  if (!matchesEventSlug(eventSlug)) {
    notFound();
  }

  return (
    <main>
      <Header
        title={`${eventData.name} Protected`}
        titleTop="Recruiter + Admin"
        titleBottom="Private Access"
        description="This page is designed for invited evaluators, admins, and trusted organizers who need a compact event snapshot."
        featuredTeams={teams.slice(0, 5)}
        facts={getEventFacts()}
      />

      <FullBleedBand>
        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="poster-panel rounded-[1.75rem] border border-white/10 bg-cream p-7 text-black shadow-poster">
              <p className="text-sm uppercase tracking-[0.28em] text-highlight">Quick Overview</p>
              <h2 className="mt-3 text-4xl font-semibold uppercase italic tracking-[0.03em] text-oliveDark">
                Compact event reference for invited access
              </h2>
              <p className="mt-4 text-base leading-7 text-black/72">{eventData.protectedSummary}</p>
            </div>
            <div className="rounded-[1.75rem] border border-highlight/40 bg-highlight p-7 text-black shadow-poster">
              <p className="text-sm uppercase tracking-[0.28em] text-black">External Board</p>
              <p className="mt-4 text-base leading-7 text-black/76">
                Swap this placeholder for your Airtable, Google Sheet, Notion board, or recruiting dashboard.
              </p>
              <Link
                href={eventData.protectedBoardUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full bg-black px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:scale-[1.02]"
              >
                Open Shared Board
              </Link>
            </div>
          </div>
        </section>
      </FullBleedBand>

      <FullBleedBand accent="field">
        <ScheduleSection
          title="Schedule"
          intro="Protected viewers get the same shared schedule source, keeping edits centralized when future events are swapped in."
          blocks={simpleSchedule}
        />
      </FullBleedBand>

      <FullBleedBand>
        <FieldLayoutSection
          title="Layouts"
          intro="Protected viewers can see the same layout inventory used across the rest of the microsite, with room for visuals or evaluation notes."
          layouts={detailedLayouts}
          useSessionVisuals
        />
      </FullBleedBand>

      <FullBleedBand accent="midnight">
        <section className="mx-auto grid max-w-6xl gap-6 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-black/18 p-7 shadow-poster">
            <p className="text-sm uppercase tracking-[0.28em] text-highlight">Participating Teams</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {teams.map((team) => (
                <div key={team.name} className="rounded-2xl border border-white/10 bg-white/6 p-4">
                  <h3 className="text-2xl font-semibold uppercase italic text-white">{team.name}</h3>
                  <p className="mt-2 text-sm text-cream/74">{team.notes}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-black/18 p-7 shadow-poster">
            <p className="text-sm uppercase tracking-[0.28em] text-highlight">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold uppercase italic tracking-[0.03em] text-white">
              Organizer Details
            </h2>
            <div className="mt-5 space-y-3 text-base text-cream/78">
              <p>{eventData.contact?.name}</p>
              <p>{eventData.contact?.email}</p>
              <p>{eventData.contact?.phone}</p>
            </div>
          </div>
        </section>
      </FullBleedBand>
    </main>
  );
}
