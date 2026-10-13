import React from "react";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";

const DATE_FMT = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function GuidesTeaser() {
  return (
    <section className="py-20 sm:py-24 bg-paper border-b border-ink/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="press-eyebrow">Guides &amp; analyses</p>
            <h2 className="press-title mt-5 text-3xl sm:text-5xl">
              Les ressources pour comprendre
              <br />
              les moteurs génératifs.
            </h2>
          </div>
          <Link
            href="/guides"
            className="btn-press btn-press-outline shrink-0 self-start"
          >
            Tous les guides
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
          {GUIDES.slice(0, 3).map((guide) => (
            <article key={guide.slug} className="border-t border-ink/20 pt-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-press">
                {guide.category}
              </p>
              <h3 className="press-title text-lg mt-2.5 leading-snug">
                <Link
                  href={`/guides/${guide.slug}`}
                  className="hover:text-press transition-colors"
                >
                  {guide.title}
                </Link>
              </h3>
              <p className="mt-3 text-[13px] text-graphite leading-relaxed">{guide.excerpt}</p>
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-stone">
                {DATE_FMT.format(new Date(guide.date))} — Lecture {guide.readingMinutes} min
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
