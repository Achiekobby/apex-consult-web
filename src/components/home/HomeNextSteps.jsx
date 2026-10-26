import { motion } from "framer-motion"
import { ArrowRight, CalendarCheck } from "lucide-react"
import { Link } from "react-router"
import { homePage } from "../../content/home"
import { useReveal } from "../../hooks/useReveal"
import ImageSlot from "../ui/ImageSlot"

export default function HomeNextSteps() {
  const reveal = useReveal({ y: 24, duration: 0.75 })

  return (
    <section id="next-steps" className="scroll-mt-20 bg-white" aria-labelledby="next-steps-title">
      <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <motion.div
          className="relative isolate overflow-hidden rounded-md bg-navy text-white shadow-[0_40px_80px_-40px_rgba(0,20,73,0.6)]"
          {...reveal(0)}
        >
          {/* Atmosphere */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(60% 90% at 100% 0%, rgba(0,112,189,0.75), transparent 60%), radial-gradient(45% 70% at 0% 100%, rgba(0,205,218,0.22), transparent 65%), radial-gradient(35% 50% at 45% 110%, rgba(245,173,10,0.22), transparent 70%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "linear-gradient(to bottom right, black, transparent 70%)",
            }}
          />
          <div className="absolute inset-x-0 top-0 h-px bg-gold" aria-hidden="true" />

          <div className="grid items-center gap-12 p-8 sm:p-12 lg:grid-cols-12 lg:gap-16 lg:p-16">
            <div className="lg:col-span-7">
              <motion.p
                className="flex items-center gap-4 text-base font-semibold tracking-[0.14em] text-mist uppercase"
                {...reveal(0.1)}
              >
                <span className="h-px w-10 shrink-0 bg-gold" aria-hidden="true" />
                Next step
              </motion.p>

              <motion.h2
                id="next-steps-title"
                className="mt-6 text-[clamp(2.25rem,5vw,4.25rem)] leading-[0.92] font-extrabold tracking-[-0.045em] text-balance text-white"
                {...reveal(0.16)}
              >
                {homePage.closingTitle}
              </motion.h2>

              <motion.p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg" {...reveal(0.22)}>
                {homePage.closing}
              </motion.p>

              <motion.div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center" {...reveal(0.28)}>
                <Link
                  to={homePage.closingPrimaryCta.to}
                  className="group inline-flex min-h-12 items-center justify-center gap-3 bg-gold px-6 text-sm font-semibold text-navy transition-colors duration-300 hover:bg-white"
                >
                  {homePage.closingPrimaryCta.label}
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  to={homePage.closingSecondaryCta.to}
                  className="inline-flex min-h-12 items-center justify-center border border-white/40 px-6 text-sm font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
                >
                  {homePage.closingSecondaryCta.label}
                </Link>
              </motion.div>

              <motion.div className="mt-8" {...reveal(0.34)}>
                <Link
                  to={homePage.secondaryCta.to}
                  className="group inline-flex min-h-11 items-center gap-2.5 text-sm font-semibold text-mist transition-colors duration-300 hover:text-white"
                >
                  <CalendarCheck aria-hidden="true" className="size-4 text-cyan" />
                  <span className="border-b border-white/40 pb-0.5 group-hover:border-white">
                    Prefer to talk it through? {homePage.secondaryCta.label}
                  </span>
                </Link>
              </motion.div>
            </div>

            <motion.div className="relative lg:col-span-5" {...reveal(0.2)}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-white/20 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.6)] lg:aspect-[4/5]">
                <ImageSlot name="next-steps/main" tone="dark" hint="1000×1250 · 4:5 portrait" />
              </div>
              <div
                aria-hidden="true"
                className="absolute -top-4 -right-4 -z-10 size-full rounded-md border border-gold/40"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
