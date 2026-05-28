import { notFound } from "next/navigation";
import { FieldLayoutSection } from "@/components/FieldLayoutSection";
import { FullBleedBand } from "@/components/FullBleedBand";
import { Header } from "@/components/Header";
import { ScheduleSection } from "@/components/ScheduleSection";
import { eventData, getEventFacts, matchesEventSlug } from "@/data/event";
import { detailedLayouts } from "@/data/layouts";
import { detailedSchedule, drillGroups, rotations } from "@/data/schedule";
import { teams } from "@/data/teams";

type PageProps = {
  params: Promise<{
    "event-slug": string;
  }>;
};

export default async function StaffPage({ params }: PageProps) {
  const { "event-slug": eventSlug } = await params;

  if (!matchesEventSlug(eventSlug)) {
    notFound();
  }

  return (
    <main>
      <Header
        title={`${eventData.name} Staff`}
        titleTop="Operations"
        titleBottom="Internal Run of Show"
        description="Detailed timing, station ownership, rotations, and staff-facing reminders for coaches and volunteers."
        featuredTeams={teams.slice(0, 3)}
        facts={getEventFacts()}
      />

      <FullBleedBand>
        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="poster-panel rounded-[1.75rem] border border-white/10 bg-cream p-7 text-black shadow-poster">
            <p className="text-sm uppercase tracking-[0.28em] text-highlight">Operational Overview</p>
            <h2 className="mt-3 text-4xl font-semibold uppercase italic tracking-[0.03em] text-oliveDark">
              Keep transitions under three minutes and groups moving with urgency
            </h2>
            <p className="mt-4 text-base leading-7 text-black/72">{eventData.staffNotes}</p>
          </div>
        </section>
      </FullBleedBand>

      <FullBleedBand accent="field">
        <ScheduleSection
          title="Detailed Schedule"
          intro="Every block includes owners, setup notes, and pacing guidance so staff can run the event without duplicating content across pages."
          blocks={detailedSchedule}
          showDetails
        />
      </FullBleedBand>

      <FullBleedBand>
        <section className="mx-auto grid max-w-6xl gap-6 px-6 py-12 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 bg-black/18 p-6 shadow-poster">
            <p className="text-sm uppercase tracking-[0.28em] text-highlight">Drill Groups</p>
            <div className="mt-5 space-y-4">
              {drillGroups.map((group) => (
                <div key={group.name} className="rounded-2xl border border-white/10 bg-white/6 p-4">
                  <h3 className="text-2xl font-semibold uppercase italic text-white">{group.name}</h3>
                  <p className="mt-2 text-sm text-cream/74">{group.focus}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.18em] text-highlight">
                    Teams: {group.teams.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-black/18 p-6 shadow-poster">
            <p className="text-sm uppercase tracking-[0.28em] text-highlight">Rotations</p>
            <div className="mt-5 space-y-4">
              {rotations.map((rotation) => (
                <div key={rotation.label} className="rounded-2xl border border-white/10 bg-white/6 p-4">
                  <h3 className="text-2xl font-semibold uppercase italic text-white">{rotation.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-cream/74">{rotation.description}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.18em] text-highlight">
                    Sequence: {rotation.sequence.join(" / ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FullBleedBand>

      <FullBleedBand accent="midnight">
        <FieldLayoutSection
          title="Full Layout Breakdown"
          intro="Staff pages default to text-first instructions for spacing, coaching points, and traffic patterns, while still supporting visual diagrams if assets are added later."
          layouts={detailedLayouts}
          detailed
        />
      </FullBleedBand>
    </main>
  );
}
