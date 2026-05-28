import { notFound } from "next/navigation";
import { FieldLayoutSection } from "@/components/FieldLayoutSection";
import { FullBleedBand } from "@/components/FullBleedBand";
import { Header } from "@/components/Header";
import { ScheduleSection } from "@/components/ScheduleSection";
import { eventData, getEventFacts, matchesEventSlug } from "@/data/event";
import { publicLayouts } from "@/data/layouts";
import { simpleSchedule } from "@/data/schedule";
import { teams } from "@/data/teams";

type PageProps = {
  params: Promise<{
    "event-slug": string;
  }>;
};

export default async function EventPage({ params }: PageProps) {
  const { "event-slug": eventSlug } = await params;

  if (!matchesEventSlug(eventSlug)) {
    notFound();
  }

  return (
    <main>
      <Header
        title={eventData.name}
        titleTop="Timpview"
        titleBottom="Youth Flag Football Camp"
        description={eventData.description}
        featuredTeams={teams.slice(0, 4)}
        facts={getEventFacts()}
      />

      <FullBleedBand>
        <section className="mx-auto grid max-w-6xl gap-6 px-6 py-12 md:grid-cols-[1.35fr_0.9fr]">
          <div className="poster-panel rounded-[1.75rem] border border-white/10 bg-cream p-7 text-black shadow-poster">
            <p className="text-sm uppercase tracking-[0.28em] text-highlight">Event Overview</p>
            <h2 className="mt-3 text-4xl font-semibold uppercase italic tracking-[0.03em] text-oliveDark">
              High-energy reps, coachable structure, family-friendly flow
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-black/72">{eventData.longDescription}</p>
          </div>
          <div className="grid gap-4">
            {getEventFacts().map((fact) => (
              <div
                key={fact.label}
                className="rounded-[1.5rem] border border-white/10 bg-black/18 p-5 shadow-poster"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-highlight">{fact.label}</p>
                <p className="mt-2 text-lg font-semibold text-white">{fact.value}</p>
              </div>
            ))}
          </div>
        </section>
      </FullBleedBand>

      <FullBleedBand accent="field">
        <ScheduleSection
          title="Camp Day Schedule"
          intro="This public version keeps the day easy to follow for families and participants while preserving the same underlying schedule data used by staff."
          blocks={simpleSchedule}
        />
      </FullBleedBand>

      <FullBleedBand>
        <FieldLayoutSection
          title="Session Layouts"
          intro="Players will rotate through skill, speed, and game-play stations. Add image-based diagrams in `/public/layouts` any time without changing page structure."
          layouts={publicLayouts}
          useSessionVisuals
        />
      </FullBleedBand>

      <FullBleedBand accent="midnight">
        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-highlight">Participating Teams</p>
              <h2 className="mt-3 text-4xl font-semibold uppercase italic tracking-[0.03em] text-white">
                Schools, clubs, and community groups
              </h2>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teams.map((team) => (
              <article
                key={team.name}
                className="rounded-[1.5rem] border border-white/10 bg-black/18 p-5 shadow-poster backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-highlight">{team.group}</p>
                <h3 className="mt-2 text-2xl font-semibold uppercase italic text-white">{team.name}</h3>
                <p className="mt-3 text-sm leading-6 text-cream/74">{team.notes}</p>
              </article>
            ))}
          </div>
        </section>
      </FullBleedBand>
    </main>
  );
}
