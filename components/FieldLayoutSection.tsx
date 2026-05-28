import Image from "next/image";
import type { LayoutGroup } from "@/data/layouts";

type FieldLayoutSectionProps = {
  title: string;
  intro: string;
  layouts: LayoutGroup[];
  detailed?: boolean;
  useSessionVisuals?: boolean;
};

export function FieldLayoutSection({
  title,
  intro,
  layouts,
  detailed = false,
  useSessionVisuals = false
}: FieldLayoutSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <p className="text-sm uppercase tracking-[0.28em] text-highlight">Layouts</p>
      <div className="mt-3 max-w-3xl">
        <h2 className="text-4xl font-semibold uppercase italic tracking-[0.03em] text-white">{title}</h2>
        <p className="mt-4 text-base leading-7 text-cream/82">{intro}</p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {layouts.map((layout) => (
          <article
            key={layout.label}
            className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/18 shadow-poster"
          >
            {useSessionVisuals && layout.imageSrc ? (
              <div className="relative h-48 w-full border-b border-white/10">
                <Image
                  src={layout.imageSrc}
                  alt={layout.shortTitle}
                  fill
                  className="object-cover"
                />
              </div>
            ) : null}
            <div className="p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-highlight">{layout.label}</p>
              <h3 className="mt-2 text-2xl font-semibold uppercase italic text-white">{layout.shortTitle}</h3>
              <p className="mt-3 text-sm leading-6 text-cream/74">{layout.description}</p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-cream/80">
                {(detailed ? layout.items : layout.items.slice(0, 3)).map((item) => (
                  <li key={item} className="rounded-xl border border-white/8 bg-white/6 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
