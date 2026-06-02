import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { caseStudies } from "@/lib/case-studies-content";
import { caseStudiesPageHero } from "@/lib/page-hero-assets";
import {
  serviceCardBodyClass,
  serviceCardClass,
  serviceCardTitleClass,
} from "@/lib/service-card-styles";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "Real automation and CRM delivery examples: operational bottlenecks, implementation approach, and measurable outcomes.",
  alternates: {
    canonical: "/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-24">
        <PageHero
          image={caseStudiesPageHero.src}
          imageAlt={caseStudiesPageHero.alt}
          priority
          variant="page"
        >
          <Reveal variant="fade-up" durationMs={1000}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/95">
              Case studies
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.35)] sm:text-4xl lg:text-5xl">
              Delivery work with measurable outcomes
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/88 [text-shadow:0_1px_16px_rgba(0,0,0,0.35)]">
              Examples of how we remove manual overhead, connect systems, and
              give leadership clear visibility across teams.
            </p>
          </Reveal>
        </PageHero>

        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((item, i) => (
              <Reveal
                key={item.title}
                variant={i % 2 === 0 ? "slide-left" : "slide-right"}
                delayMs={i * 70}
                durationMs={950}
              >
                <article
                  className={`${serviceCardClass} h-full border-slate-200/80 bg-white/90 shadow-[0_18px_45px_-24px_rgba(15,23,42,0.34)] backdrop-blur-sm`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 transition group-hover:text-blue-200">
                    {item.industry}
                  </p>
                  <h2 className={`mt-3 text-xl font-semibold ${serviceCardTitleClass}`}>
                    {item.title}
                  </h2>
                  <p className={`mt-4 ${serviceCardBodyClass}`}>
                    <span className="font-semibold text-slate-700 transition group-hover:text-white">
                      Challenge:{" "}
                    </span>
                    {item.challenge}
                  </p>
                  <p className={`mt-3 ${serviceCardBodyClass}`}>
                    <span className="font-semibold text-slate-700 transition group-hover:text-white">
                      Solution:{" "}
                    </span>
                    {item.solution}
                  </p>
                  <p className="mt-5 rounded-xl border border-blue-100/80 bg-blue-50/90 px-4 py-3 text-sm font-semibold text-blue-800 transition group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-blue-100">
                    Outcome: {item.outcome}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal variant="fade-scale" className="mt-14" delayMs={120} durationMs={1000}>
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white px-6 py-8 sm:px-10 sm:py-10">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Want your process here next?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
                Share your current stack and bottlenecks. We will map where
                automation creates the fastest impact.
              </p>
              <Link
                href="/#contact"
                className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-blue-700 px-6 text-sm font-semibold text-white shadow-md transition hover:bg-blue-800"
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
