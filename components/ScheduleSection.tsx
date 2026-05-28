type ScheduleBlock = {
  time: string;
  title: string;
  description?: string;
  details?: string[];
};

type ScheduleSectionProps = {
  title: string;
  intro: string;
  blocks: ScheduleBlock[];
  showDetails?: boolean;
};

export function ScheduleSection({
  title,
  intro,
  blocks,
  showDetails = false
}: ScheduleSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <p className="text-sm uppercase tracking-[0.28em] text-highlight">Schedule</p>
      <div className="mt-3 max-w-3xl">
        <h2 className="text-4xl font-semibold uppercase italic tracking-[0.03em] text-white">{title}</h2>
        <p className="mt-4 text-base leading-7 text-cream/82">{intro}</p>
      </div>
      <div className="mt-8 grid gap-4">
        {blocks.map((block) => (
          <article
            key={`${block.time}-${block.title}`}
            className="grid gap-4 overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/18 p-0 shadow-poster sm:grid-cols-[180px_1fr]"
          >
            <div className="poster-band bg-highlight px-5 py-5 sm:py-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black">{block.time}</p>
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="text-2xl font-semibold uppercase italic text-white">{block.title}</h3>
              {block.description ? (
                <p className="mt-2 text-sm leading-6 text-cream/76">{block.description}</p>
              ) : null}
              {showDetails && block.details?.length ? (
                <ul className="mt-4 space-y-2 text-sm leading-6 text-cream/80">
                  {block.details.map((detail) => (
                    <li key={detail} className="rounded-xl border border-white/8 bg-white/6 px-3 py-2">
                      {detail}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
