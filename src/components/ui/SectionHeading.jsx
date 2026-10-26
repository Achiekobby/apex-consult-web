import { motion } from "framer-motion"
import { useReveal } from "../../hooks/useReveal"

/**
 * Shared eyebrow + title + intro block so every home section reads as one system.
 * `tone="dark"` is for navy backgrounds.
 */
export default function SectionHeading({ id, eyebrow, title, intro, tone = "light", className = "" }) {
  const reveal = useReveal()
  const dark = tone === "dark"

  return (
    <div className={className}>
      {eyebrow ? (
        <motion.p
          className={`flex items-center gap-4 text-base font-semibold tracking-[0.14em] uppercase ${dark ? "text-mist" : "text-navy"}`}
          {...reveal(0)}
        >
          <span className="h-px w-10 shrink-0 bg-gold" aria-hidden="true" />
          {eyebrow}
        </motion.p>
      ) : null}

      {title ? (
        <motion.h2
          id={id}
          className={`${eyebrow ? "mt-6" : ""} max-w-3xl text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] font-extrabold tracking-[-0.04em] text-balance ${dark ? "text-white" : "text-navy"}`}
          {...reveal(0.08)}
        >
          {title}
        </motion.h2>
      ) : null}

      {intro ? (
        <motion.p
          className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${dark ? "text-mist" : "text-navy/80"}`}
          {...reveal(0.14)}
        >
          {intro}
        </motion.p>
      ) : null}
    </div>
  )
}
