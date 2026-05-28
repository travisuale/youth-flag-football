import Link from "next/link";
import { eventData } from "@/data/event";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center shadow-panel">
        <p className="text-sm uppercase tracking-[0.3em] text-highlight">Page Not Found</p>
        <h1 className="mt-4 text-4xl font-semibold uppercase tracking-[0.04em] text-white">
          That event page is not available
        </h1>
        <p className="mt-4 text-base leading-7 text-ice/78">
          Update the event slug in the shared data files or head back to the default public page.
        </p>
        <Link
          href={`/${eventData.slug}`}
          className="mt-8 inline-flex rounded-full bg-highlight px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-ink"
        >
          Open Event
        </Link>
      </div>
    </main>
  );
}
