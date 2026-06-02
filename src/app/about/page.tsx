import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { aboutIntro, aboutValues } from "@/lib/about-content";
import { aboutPageHero } from "@/lib/page-hero-assets";
import { teamMembers } from "@/lib/team";
import {
  serviceCardBodyClass,
  serviceCardClass,
  serviceCardTitleClass,
} from "@/lib/service-card-styles";

export const metadata: Metadata = {
  title: "About us",
  description:
    "AutoEngage builds maintainable automation and CRM systems for growing teams - and the people behind the work.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-24">
        <PageHero
          image={aboutPageHero.src}
          imageAlt={aboutPageHero.alt}
          priority
          variant="page"
        >
          <Reveal variant="fade-up" durationMs={1000}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/95">
              {aboutIntro.eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.35)] sm:text-4xl lg:text-5xl">
              {aboutIntro.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/88 [text-shadow:0_1px_16px_rgba(0,0,0,0.35)]">
              {aboutIntro.body}
            </p>
          </Reveal>
        </PageHero>

        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 md:grid-cols-3">
            {aboutValues.map((b, i) => (
              <Reveal
                key={b.title}
                variant={i % 2 === 0 ? "slide-left" : "slide-right"}
                delayMs={i * 90}
                durationMs={1000}
              >
                <article className={`${serviceCardClass} h-full`}>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-sm font-bold text-white shadow-sm transition group-hover:bg-white/15 group-hover:text-white">
                    {b.mark}
                  </span>
                  <h2 className={`mt-4 text-base font-semibold ${serviceCardTitleClass}`}>
                    {b.title}
                  </h2>
                  <p className={`mt-2 ${serviceCardBodyClass}`}>{b.body}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal variant="fade-up" className="mt-20" durationMs={1000}>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Team
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              A small senior team - you work directly with the people shipping your
              systems, not a rotating bench.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, i) => (
              <Reveal
                key={member.name}
                variant={i % 2 === 0 ? "slide-left" : "slide-right"}
                delayMs={i * 80}
                durationMs={1000}
              >
                <article className="group overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_8px_30px_-12px_rgba(15,23,42,0.1)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                  <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                    <Image
                      src={member.image}
                      alt={member.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-slate-900">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                      {member.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {member.bio}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal variant="fade-scale" className="mt-16" delayMs={80} durationMs={1000}>
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white px-6 py-8 sm:px-10 sm:py-10">
              <p className="text-sm font-semibold text-blue-900">
                Want the same clarity on your stack?
              </p>
              <p className="mt-2 max-w-xl text-sm text-slate-600">
                Start with a free consultation - we’ll map constraints, quick wins,
                and a sensible first milestone.
              </p>
              <Link
                href="/#contact"
                className="mt-5 inline-flex h-11 items-center justify-center rounded-lg bg-blue-700 px-6 text-sm font-semibold text-white shadow-md transition hover:bg-blue-800"
              >
                Book a Free Consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
