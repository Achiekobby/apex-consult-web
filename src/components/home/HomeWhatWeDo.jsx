import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Link } from "react-router"
import { homePage } from "../../content/home"
import { useReveal } from "../../hooks/useReveal"
import { whatWeDoArt } from "../../utils/images"
import ImageSlot from "../ui/ImageSlot"
import SectionHeading from "../ui/SectionHeading"

const pad = (index) => String(index + 1).padStart(2, "0")

// Keeps each artwork's subject in frame when it is cropped into a tall panel.
const focalPoint = {
  Plan: "[object-position:72%_50%]",
}

const slotName = (pillar) => `what-we-do/${pillar.verb.toLowerCase()}`
const slotArt = (pillar) => whatWeDoArt[pillar.verb]?.src

function PillarPanel({ pillar, index, active, onActivate }) {
  return (
    <li
      className={`min-w-0 basis-0 transition-[flex-grow] duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        active ? "grow-[4.2]" : "grow"
      }`}
    >
      <Link
        to={pillar.to}
        onMouseEnter={onActivate}
        onFocus={onActivate}
        aria-label={`${pillar.verb}: ${pillar.summary}`}
        className="group relative block h-full overflow-hidden rounded-md border border-navy/10 bg-white shadow-[0_4px_6px_rgba(0,20,73,0.06)]"
      >
        {/* Fixed-width artwork so it never rescales while the panel animates */}
        <div className="absolute inset-y-0 left-1/2 w-[40rem] max-w-none -translate-x-1/2">
          <ImageSlot
            name={slotName(pillar)}
            fallbackSrc={slotArt(pillar)}
            hint="1000×1100 · portrait-ish"
            className={focalPoint[pillar.verb] ?? ""}
          />
        </div>

        {/* Veil: calms inactive panels, lifts on the active one */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 bg-mist/70 transition-opacity duration-500 ${
            active ? "opacity-0" : "opacity-100 group-hover:opacity-60"
          }`}
        />

        <span className="absolute top-5 left-5 text-base font-semibold text-blue tabular-nums">{pad(index)}</span>
        <span
          aria-hidden="true"
          className={`absolute top-6 right-5 h-px bg-gold transition-all duration-500 ${active ? "w-10" : "w-0"}`}
        />

        {/* Collapsed label */}
        <span
          aria-hidden="true"
          className={`absolute bottom-6 left-5 text-[1.75rem] leading-none font-bold tracking-[-0.03em] text-navy transition-opacity duration-300 [writing-mode:vertical-rl] rotate-180 ${
            active ? "opacity-0" : "opacity-100"
          }`}
        >
          {pillar.verb}
        </span>

        {/* Expanded detail card (fixed width so text never reflows mid-animation) */}
        <div
          className={`absolute bottom-4 left-4 w-[min(26rem,calc(100%-2rem))] rounded border border-white/60 bg-white/90 p-6 shadow-[0_18px_40px_-18px_rgba(0,20,73,0.35)] backdrop-blur-md transition-all duration-500 ease-out ${
            active ? "translate-y-0 opacity-100 delay-150" : "pointer-events-none translate-y-3 opacity-0"
          }`}
        >
          <span className="block text-4xl leading-none font-bold tracking-[-0.04em] text-navy">{pillar.verb}</span>
          <span className="mt-3 block text-base leading-relaxed text-navy/85">{pillar.summary}</span>
          <span className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-blue">
            View service
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
            />
          </span>
        </div>
      </Link>
    </li>
  )
}

export default function HomeWhatWeDo() {
  const reveal = useReveal()
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="what-we-do" className="relative scroll-mt-20 overflow-hidden bg-mist" aria-labelledby="what-we-do-title">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 size-[28rem] rounded-full bg-cyan/15 blur-[110px]"
      />

      <div className="relative mx-auto max-w-8xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading id="what-we-do-title" eyebrow="What we do" title="Six ways we help an organisation move." />

          <motion.div {...reveal(0.2)}>
            <Link
              to="/services"
              className="group inline-flex min-h-12 items-center gap-3 border border-navy px-6 text-sm font-semibold text-navy transition-colors duration-300 hover:bg-navy hover:text-white"
            >
              All services
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 text-blue transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold"
              />
            </Link>
          </motion.div>
        </div>

        {/* Desktop: expanding panels */}
        <motion.ul className="mt-14 hidden h-[34rem] gap-3 lg:flex xl:h-[36rem]" {...reveal(0.12)}>
          {homePage.pillars.map((pillar, index) => (
            <PillarPanel
              key={pillar.verb}
              pillar={pillar}
              index={index}
              active={index === activeIndex}
              onActivate={() => setActiveIndex(index)}
            />
          ))}
        </motion.ul>

        {/* Mobile / tablet: cards */}
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:hidden">
          {homePage.pillars.map((pillar, index) => (
            <motion.li key={pillar.verb} {...reveal(0.05 * (index % 2))}>
              <Link
                to={pillar.to}
                className="group flex h-full flex-col overflow-hidden rounded-md border border-navy/10 bg-white shadow-[0_4px_6px_rgba(0,20,73,0.06)] transition-shadow duration-300 hover:shadow-[0_10px_24px_rgba(0,20,73,0.1)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageSlot
                    name={slotName(pillar)}
                    fallbackSrc={slotArt(pillar)}
                    hint="1000×1100 · portrait-ish"
                    className={`transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03] ${focalPoint[pillar.verb] ?? ""}`}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-base font-semibold text-blue tabular-nums">{pad(index)}</span>
                  <span className="mt-3 text-[1.75rem] leading-none font-bold tracking-[-0.03em] text-navy transition-colors duration-300 group-hover:text-blue">
                    {pillar.verb}
                  </span>
                  <span className="mt-3 flex-1 text-base leading-relaxed text-navy/85">{pillar.summary}</span>
                  <span className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-blue">
                    View service
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
