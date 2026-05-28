import Link from "next/link";
import { eventData } from "@/data/event";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-panel backdrop-blur">
        <p className="text-sm uppercase tracking-[0.3em] text-highlight">Event Microsite Starter</p>
        <h1 className="mt-4 text-4xl font-semibold uppercase tracking-[0.05em] text-white sm:text-5xl">
          {eventData.name}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ice/80">{eventData.description}</p>
        <div className="mt-8">
          <Link
            href={`/${eventData.slug}`}
            className="inline-flex rounded-full bg-highlight px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:scale-[1.02]"
          >
            Open Public Page
          </Link>
        </div>
      </div>
    </main>
  );
}
