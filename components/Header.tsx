import Image from "next/image";
import type { Team } from "@/data/teams";

type Fact = {
  label: string;
  value: string;
};

type HeaderProps = {
  title: string;
  titleTop?: string;
  titleBottom?: string;
  description: string;
  featuredTeams?: Team[];
  facts: Fact[];
};

export function Header({
  title,
  titleTop,
  titleBottom,
  description,
  featuredTeams = [],
  facts
}: HeaderProps) {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(245,183,0,0.24),transparent_18%),radial-gradient(circle_at_80%_12%,rgba(255,255,255,0.12),transparent_22%)]" />
      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-6 sm:px-6 sm:pb-14 sm:pt-10">
        <div className="grid gap-0 overflow-hidden rounded-[2rem] border border-white/10 bg-black/10 shadow-poster backdrop-blur-sm lg:grid-cols-[1.08fr_0.92fr]">
          <div className="poster-panel relative bg-poster p-7 pr-12 sm:p-10 sm:pr-16">
            <div className="absolute left-0 top-0 h-24 w-24 bg-black/28" />
            <div>
              {titleTop ? (
                <p className="text-sm uppercase tracking-[0.32em] text-cream/84">{titleTop}</p>
              ) : null}
              <h1 className="mt-4 max-w-xl text-balance text-[4.2rem] font-semibold uppercase italic leading-[0.88] tracking-[0.02em] text-white sm:text-[5.75rem]">
                {title}
              </h1>
              {titleBottom ? (
                <p className="mt-4 text-lg uppercase italic tracking-[0.22em] text-cream/74">{titleBottom}</p>
              ) : null}
              <p className="mt-6 max-w-xl text-base leading-7 text-cream/90 sm:text-lg">{description}</p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-highlight px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-black">
                Flyer Theme Direction
              </div>
              {featuredTeams.length > 0 ? (
                <div className="mt-8 flex flex-wrap gap-2">
                  {featuredTeams.map((team) => (
                    <span
                      key={team.name}
                      className="rounded-full border border-white/12 bg-white/8 px-3 py-2 text-xs uppercase tracking-[0.16em] text-cream/94"
                    >
                      {team.name}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
          <div className="relative min-h-[320px] bg-cream">
            <div className="absolute inset-0">
              <Image
                src="/hero/timpview-camp-flyer.png"
                alt="Timpview youth flag football flyer"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(243,239,228,0.08),rgba(243,239,228,0)_40%,rgba(76,82,0,0.08)_100%)]" />
            <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-3">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-[1.25rem] border border-white/20 bg-black/52 p-4 backdrop-blur"
                >
                  <p className="text-[11px] uppercase tracking-[0.24em] text-highlight">{fact.label}</p>
                  <p className="mt-2 text-sm font-semibold text-white">{fact.value}</p>
                </div>
              ))}
            </div>
            <div className="poster-card absolute bottom-12 right-4 hidden w-40 border-8 border-highlight bg-white/90 p-3 shadow-poster md:block">
              <p className="text-sm font-semibold uppercase italic tracking-[0.12em] text-black">
                For Boys & Girls
              </p>
              <p className="mt-2 text-4xl font-semibold uppercase italic leading-none text-oliveDark">
                Ages 5-12
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
