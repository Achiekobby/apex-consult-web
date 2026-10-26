import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router"
import { homePage } from "../../content/home"
import { heroBackground } from "../../utils/images"

const ease = [0.22, 1, 0.36, 1]

const goldWash = [
  "linear-gradient(102deg, rgba(255,248,230,0.94) 0%, rgba(247,214,122,0.88) 28%, rgba(245,173,10,0.5) 48%, rgba(245,173,10,0.14) 64%, rgba(245,173,10,0) 78%)",
  "radial-gradient(56% 64% at 24% 46%, rgba(255,244,214,0.5), transparent 72%)",
].join(", ")

const accentStart = homePage.headline.lastIndexOf(" Through ")
const lead = accentStart === -1 ? homePage.headline : homePage.headline.slice(0, accentStart)
const accent = accentStart === -1 ? "" : homePage.headline.slice(accentStart + 1)

export default function HomeHero() {
  const reduceMotion = useReducedMotion()

  const wash = reduceMotion
    ? { initial: false, transition: { duration: 0 } }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.85, delay: 0.08, ease },
      }

  const reveal = (delay) =>
    reduceMotion
      ? { initial: false, transition: { duration: 0 } }
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        }

  return (
    <section
      className="relative isolate min-h-[calc(100svh-4.75rem)] overflow-hidden bg-[#f6edd8]"
      aria-labelledby="home-hero-title"
    >
      <motion.img
        src={heroBackground.src}
        alt=""
        width={heroBackground.width}
        height={heroBackground.height}
        fetchPriority="high"
        decoding="async"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[18%_40%] sm:object-[62%_42%]"
        initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduceMotion ? 0 : 1.05, ease }}
        aria-hidden="true"
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: goldWash }}
        {...wash}
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4.75rem)] max-w-8xl flex-col justify-center px-4 py-16 sm:px-6 sm:py-20">
        <motion.p
          className="flex items-center gap-3 text-sm font-semibold text-navy sm:gap-4 sm:text-[0.8125rem] sm:tracking-[0.16em] sm:uppercase"
          {...reveal(0.42)}
        >
          <span className="h-px w-8 shrink-0 bg-navy sm:w-10" aria-hidden="true" />
          <span className="min-w-0">Ghana-based technology consultancy</span>
        </motion.p>

        <motion.h1
          id="home-hero-title"
          className="mt-5 max-w-5xl text-[clamp(2.45rem,5.5vw,4.95rem)] leading-[0.92] font-bold tracking-[-0.048em] text-navy"
          {...reveal(0.5)}
        >
          <span className="block">{lead}</span>
          {accent ? <span className="mt-1 block text-blue sm:pl-12">{accent}</span> : null}
        </motion.h1>

        <motion.span
          aria-hidden="true"
          className="mt-6 block h-[3px] w-14 bg-cyan sm:ml-12"
          {...reveal(0.58)}
        />

        <motion.p
          className="mt-5 max-w-xl text-base leading-relaxed font-medium text-balance text-navy sm:text-lg"
          {...reveal(0.64)}
        >
          {homePage.subheadline}
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-8"
          {...reveal(0.72)}
        >
          <Link
            to={homePage.primaryCta.to}
            className="group inline-flex min-h-12 w-full items-center justify-center gap-3 bg-navy px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue sm:w-auto"
          >
            {homePage.primaryCta.label}
            <ArrowRight
              aria-hidden="true"
              className="size-4 text-gold transition-transform duration-300 ease-out group-hover:translate-x-1"
            />
          </Link>
          <Link
            to={homePage.secondaryCta.to}
            className="group inline-flex min-h-12 items-center justify-center gap-2 self-start text-sm font-semibold text-navy transition-colors duration-300 hover:text-blue sm:self-auto"
          >
            <span className="border-b border-navy pb-0.5">{homePage.secondaryCta.label}</span>
            <ArrowRight
              aria-hidden="true"
              className="size-4 text-blue transition-transform duration-300 ease-out group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
