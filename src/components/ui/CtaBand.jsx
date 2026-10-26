import { ArrowRight } from "lucide-react"
import { Link } from "react-router"
import { homePage } from "../../content/home"
import Reveal from "./Reveal"

/**
 * Closing call-to-action band shared by inner pages.
 * Defaults to the home-page closing copy and links.
 */
export default function CtaBand({
  eyebrow = "Next step",
  title = homePage.closingTitle,
  text = homePage.closing,
  primary = homePage.closingPrimaryCta,
  secondary = homePage.closingSecondaryCta,
}) {
  return (
    <section className="bg-white" aria-label={title}>
      <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal
          className="relative isolate overflow-hidden rounded-md bg-navy text-white shadow-[0_40px_80px_-40px_rgba(0,20,73,0.6)]"
          y={24}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(60% 90% at 100% 0%, rgba(0,112,189,0.75), transparent 60%), radial-gradient(45% 70% at 0% 100%, rgba(0,205,218,0.22), transparent 65%), radial-gradient(35% 50% at 45% 110%, rgba(245,173,10,0.22), transparent 70%)",
            }}
          />
          <div className="absolute inset-x-0 top-0 h-px bg-gold" aria-hidden="true" />

          <div className="grid items-end gap-10 p-8 sm:p-12 lg:grid-cols-12 lg:gap-16 lg:p-16">
            <div className="lg:col-span-7">
              <p className="flex items-center gap-4 text-base font-semibold tracking-[0.14em] text-mist uppercase">
                <span className="h-px w-10 shrink-0 bg-gold" aria-hidden="true" />
                {eyebrow}
              </p>
              <h2 className="mt-6 text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.95] font-extrabold tracking-[-0.045em] text-balance text-white">
                {title}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">{text}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:flex-col lg:items-stretch">
              <Link
                to={primary.to}
                className="group inline-flex min-h-12 items-center justify-center gap-3 bg-gold px-6 text-sm font-semibold text-navy transition-colors duration-300 hover:bg-white"
              >
                {primary.label}
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
                />
              </Link>
              {secondary ? (
                <Link
                  to={secondary.to}
                  className="inline-flex min-h-12 items-center justify-center border border-white/40 px-6 text-sm font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
                >
                  {secondary.label}
                </Link>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
