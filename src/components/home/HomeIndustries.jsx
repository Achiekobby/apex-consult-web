import { motion } from "framer-motion"
import { homePage } from "../../content/home"
import { useReveal } from "../../hooks/useReveal"

export default function HomeIndustries() {
  const reveal = useReveal()

  return (
    <section id="industries" className="bg-mist" aria-labelledby="industries-title">
      <div className="mx-auto grid max-w-8xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:items-center lg:gap-12">
        <motion.div className="lg:col-span-4" {...reveal(0)}>
          <p className="flex items-center gap-4 text-base font-semibold tracking-[0.14em] text-navy uppercase">
            <span className="h-px w-10 shrink-0 bg-gold" aria-hidden="true" />
            Industries
          </p>
          <h2
            id="industries-title"
            className="mt-5 text-[clamp(1.75rem,2.6vw,2.25rem)] leading-[1] font-extrabold tracking-[-0.035em] text-balance text-navy"
          >
            Organisations we are set up to advise.
          </h2>
        </motion.div>

        <ul className="flex flex-wrap gap-3 lg:col-span-8 lg:justify-end">
          {homePage.industries.map((industry, index) => (
            <motion.li
              key={industry}
              className="flex items-center gap-2.5 rounded-sm border border-navy/10 bg-white px-5 py-3 text-base font-semibold text-navy shadow-[0_2px_4px_rgba(0,20,73,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue/40 hover:shadow-[0_8px_18px_-8px_rgba(0,20,73,0.25)]"
              {...reveal(0.05 * index)}
            >
              <span className="size-2 rounded-[2px] bg-gold" aria-hidden="true" />
              {industry}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
