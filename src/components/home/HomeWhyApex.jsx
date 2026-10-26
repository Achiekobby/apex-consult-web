import { motion } from "framer-motion"
import { Gauge, Globe2, Handshake, Route, ShieldCheck, Target } from "lucide-react"
import { homePage } from "../../content/home"
import { useReveal } from "../../hooks/useReveal"
import ImageSlot from "../ui/ImageSlot"
import SectionHeading from "../ui/SectionHeading"

// One icon per reason, in the same order as `homePage.reasons`.
const icons = [Target, Route, Globe2, ShieldCheck, Handshake, Gauge]

// Reasons are written "Headline: supporting sentence". Split them for a stronger hierarchy.
const reasons = homePage.reasons.map((reason) => {
  const split = reason.indexOf(": ")
  if (split === -1) return { title: reason, body: "" }
  return { title: reason.slice(0, split), body: reason.slice(split + 2) }
})

export default function HomeWhyApex() {
  const reveal = useReveal()

  return (
    <section id="why-apex" className="scroll-mt-20 bg-white" aria-labelledby="why-apex-title">
      <div className="mx-auto max-w-8xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading id="why-apex-title" eyebrow="Why Apex Point" title="Business first, then the technology." />

              <motion.div className="relative mt-12" {...reveal(0.2)}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-navy/10 shadow-[0_24px_60px_-28px_rgba(0,20,73,0.4)] lg:aspect-square">
                  <ImageSlot name="why-apex/main" hint="1200×1200 · square" />
                </div>

                <div className="absolute -right-2 -bottom-6 flex items-center gap-4 rounded border border-navy/10 bg-white p-4 pr-6 shadow-[0_18px_40px_-16px_rgba(0,20,73,0.35)] sm:-right-6">
                  <span
                    className="grid size-14 place-items-center rounded-sm bg-navy text-3xl leading-none font-black tracking-tight text-gold"
                    aria-hidden="true"
                  >
                    {reasons.length}
                  </span>
                  <p className="text-sm leading-snug font-semibold text-navy">
                    Principles behind
                    <br />
                    every engagement
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <ul className="grid auto-rows-fr gap-4 pb-8 sm:grid-cols-2 sm:gap-5 lg:col-span-7 lg:pt-4">
            {reasons.map((reason, index) => {
              const Icon = icons[index % icons.length]
              return (
                <motion.li
                  key={reason.title}
                  className="sm:[&:nth-child(even)]:translate-y-8"
                  {...reveal(0.06 * (index % 2))}
                >
                  <div className="group relative h-full overflow-hidden rounded-md border border-navy/10 bg-mist/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue/30 hover:bg-white hover:shadow-[0_18px_40px_-20px_rgba(0,20,73,0.3)] sm:p-7">
                    <span
                      className="absolute top-0 left-0 h-1 w-0 bg-gold transition-all duration-500 ease-out group-hover:w-full"
                      aria-hidden="true"
                    />
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded bg-navy text-gold transition-colors duration-300 group-hover:bg-blue group-hover:text-white">
                        <Icon aria-hidden="true" className="size-5" />
                      </span>
                      <span className="text-sm font-semibold text-navy/50 tabular-nums" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-8 text-xl leading-tight font-bold tracking-[-0.025em] text-navy">{reason.title}</h3>
                    {reason.body ? (
                      <p className="mt-3 text-base leading-relaxed text-navy/80">
                        {reason.body.charAt(0).toUpperCase() + reason.body.slice(1)}
                      </p>
                    ) : null}
                  </div>
                </motion.li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
