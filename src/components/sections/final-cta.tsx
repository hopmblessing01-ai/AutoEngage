import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";

export function FinalCtaSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-[7.5rem] pb-24 pt-4 sm:pb-28 sm:pt-6"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 shadow-xl shadow-blue-900/20">
          <div className="grid gap-10 px-6 py-12 lg:grid-cols-2 lg:items-start lg:gap-12 lg:px-10 lg:py-14">
            <Reveal variant="slide-right" durationMs={1050}>
              <div className="relative text-center lg:text-left">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-sky-400/25"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-blue-500/30 lg:hidden"
                />
                <h2 className="relative text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Let’s automate your business and remove manual work.
                </h2>
                <p className="relative mx-auto mt-4 max-w-xl text-base text-blue-100/95 lg:mx-0">
                  Tell us what slows your team down. We’ll map the fastest path
                  to reliable automation - and what it will take to ship.
                </p>
                <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                  <a
                    href="mailto:hopmblessing@gmail.com?subject=Book%20a%20free%20call"
                    className="btn-shine relative inline-flex h-12 min-w-[200px] items-center justify-center overflow-hidden rounded-lg bg-white px-8 text-sm font-semibold text-blue-900 shadow-lg transition duration-300 hover:-translate-y-1 active:translate-y-0"
                  >
                    <span className="relative z-[1]">Book a Free Call</span>
                  </a>
                  <a
                    href="mailto:hopmblessing@gmail.com?subject=Free%20system%20audit"
                    className="text-sm font-semibold text-sky-100 underline-offset-4 transition hover:text-white hover:underline"
                  >
                    Request an audit outline →
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal variant="slide-up" delayMs={140} durationMs={1100}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
