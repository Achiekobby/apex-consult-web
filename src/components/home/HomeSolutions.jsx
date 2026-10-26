import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Users } from "lucide-react"
import { Link } from "react-router"
import { solutions } from "../../content/solutions"
import { useReveal } from "../../hooks/useReveal"
import ImageSlot from "../ui/ImageSlot"
import SectionHeading from "../ui/SectionHeading"

const gridPattern = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
  backgroundSize: "56px 56px",
  maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent)",
}

// Moves a CSS-variable spotlight with the pointer without re-rendering React.
function trackPointer(event) {
  const card = event.currentTarget
  const rect = card.getBoundingClientRect()
  card.style.setProperty("--mx", `${event.clientX - rect.left}px`)
  card.style.setProperty("--my", `${event.clientY - rect.top}px`)
}

function SolutionCard({ solution, index }) {
  return (
    <Link
      to={`/solutions/${solution.slug}`}
      onPointerMove={trackPointer}
      className="group relative flex h-full flex-col overflow-hidden rounded-md border border-white/15 bg-white/[0.04] backdrop-blur-sm transition-colors duration-300 hover:border-cyan/50"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "radial-gradient(420px circle at var(--mx, 50%) var(--my, 0%), rgba(0,205,218,0.14), transparent 45%)",
        }}
      />

      <div className="relative aspect-[16/10] overflow-hidden">
        <ImageSlot
          name={`solutions/${solution.slug}`}
          tone="dark"
          hint="1200×750 · 16:10"
          className="transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent"
        />
        <span className="absolute top-4 left-4 rounded-sm border border-white/25 bg-navy/60 px-3 py-1 text-sm font-semibold text-gold tabular-nums backdrop-blur">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="relative z-20 flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-2xl leading-tight font-bold tracking-[-0.03em] text-balance text-white">{solution.navLabel}</h3>

        <div className="mt-6 space-y-5">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">The challenge</p>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/80">{solution.challenge}</p>
          </div>
          <div>
            <p className="flex items-center gap-1.5 text-xs font-semibold tracking-[0.14em] text-cyan uppercase">
              <CheckCircle2 aria-hidden="true" className="size-3.5" />
              The outcome
            </p>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-white">{solution.benefits}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-1 items-end justify-between gap-4 border-t border-white/15 pt-5">
          <p className="flex items-start gap-2 text-sm leading-snug text-white/70">
            <Users aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
            {solution.suitableClients}
          </p>
          <span
            className="grid size-10 shrink-0 place-items-center rounded-sm border border-white/25 text-white transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-navy"
            aria-hidden="true"
          >
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:-rotate-45" />
          </span>
        </div>
        <span className="sr-only">View solution: {solution.title}</span>
      </div>
    </Link>
  )
}

export default function HomeSolutions() {
  const reveal = useReveal()

  return (
    <section id="solutions" className="relative isolate scroll-mt-20 overflow-hidden bg-navy" aria-labelledby="solutions-title">
      <div className="absolute inset-x-0 top-0 h-px bg-gold" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true" style={gridPattern} />
      <div
        className="pointer-events-none absolute -top-40 -right-32 -z-10 size-[34rem] rounded-full bg-blue/40 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-48 -left-40 -z-10 size-[30rem] rounded-full bg-cyan/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-8xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <SectionHeading
          id="solutions-title"
          tone="dark"
          eyebrow="Solutions"
          title="Outcomes for a business, not a list of products."
          intro="These categories describe intended results. Apex Point does not present them as existing proprietary platforms."
        />

        <ul className="mt-14 grid gap-5 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {solutions.map((solution, index) => (
            <motion.li key={solution.slug} {...reveal(0.06 * (index % 3))}>
              <SolutionCard solution={solution} index={index} />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
