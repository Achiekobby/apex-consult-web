import { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowRight, ArrowUpRight, Check, Info } from "lucide-react"
import { Link } from "react-router"
import { services } from "../../content/services"
import { proposedOfferingNote } from "../../content/site"
import { useReveal } from "../../hooks/useReveal"
import { getSlotImage } from "../../utils/slotImages"
import ImageSlot from "../ui/ImageSlot"
import SectionHeading from "../ui/SectionHeading"

const pad = (index) => String(index + 1).padStart(2, "0")

function ServicePreview({ service, index, reduceMotion }) {
  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
      transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="flex h-full flex-col overflow-hidden rounded-md border border-navy/10 bg-white shadow-[0_24px_60px_-24px_rgba(0,20,73,0.28)]"
    >
      {/* The image flexes to fill whatever height the text leaves, so the card never changes size */}
      <div className="relative min-h-40 flex-1 overflow-hidden">
        <ImageSlot name={`services/${service.slug}`} hint="1600×900 · 16:9" />
        {getSlotImage(`services/${service.slug}`) ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy/55 to-transparent"
          />
        ) : null}
        <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-sm bg-white/95 px-3 py-1.5 text-sm font-semibold text-navy shadow-sm backdrop-blur">
          <span className="text-blue tabular-nums">{pad(index)}</span>
          {service.navLabel}
        </span>
      </div>

      <div className="shrink-0 p-6 sm:p-8">
        <h3 className="text-2xl leading-tight font-bold tracking-[-0.03em] text-balance text-navy">{service.title}</h3>
        <p className="mt-3 text-base leading-relaxed text-navy/80">{service.summary}</p>

        <ul className="mt-6 space-y-3 border-t border-navy/10 pt-6">
          {service.offerings.slice(0, 3).map((offering) => (
            <li key={offering} className="flex items-start gap-3 text-[0.9375rem] leading-snug text-navy">
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-sm bg-cyan/20 text-blue">
                <Check aria-hidden="true" className="size-3" strokeWidth={3} />
              </span>
              {offering}
            </li>
          ))}
        </ul>

        <Link
          to={`/services/${service.slug}`}
          className="group mt-8 inline-flex min-h-12 items-center gap-3 bg-navy px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue"
        >
          Explore {service.navLabel}
          <ArrowRight
            aria-hidden="true"
            className="size-4 text-gold transition-transform duration-300 ease-out group-hover:translate-x-1"
          />
        </Link>
      </div>
    </motion.article>
  )
}

export default function HomeServices() {
  const reveal = useReveal()
  const reduceMotion = useReducedMotion()
  const [activeSlug, setActiveSlug] = useState(services[0].slug)
  const activeIndex = Math.max(
    0,
    services.findIndex((service) => service.slug === activeSlug),
  )

  return (
    <section id="services" className="scroll-mt-20 bg-white" aria-labelledby="services-title">
      <div className="mx-auto max-w-8xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            id="services-title"
            eyebrow="Services"
            title="An integrated portfolio, from strategy to support."
            className="lg:col-span-8"
          />

          <motion.p
            className="flex items-start gap-3 rounded border border-gold/40 bg-gold/10 p-4 text-sm leading-relaxed text-navy lg:col-span-4"
            {...reveal(0.2)}
          >
            <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-navy" />
            {proposedOfferingNote}
          </motion.p>
        </div>

        {/* Desktop: interactive index + live preview */}
        <div className="mt-16 hidden h-[46rem] gap-12 lg:grid lg:grid-cols-12">
          <motion.ul className="flex h-full flex-col lg:col-span-5" {...reveal(0.1)}>
            {services.map((service, index) => {
              const active = index === activeIndex
              return (
                <li key={service.slug} className="min-h-0 flex-1 border-b border-navy/10 first:border-t">
                  <Link
                    to={`/services/${service.slug}`}
                    onMouseEnter={() => setActiveSlug(service.slug)}
                    onFocus={() => setActiveSlug(service.slug)}
                    className={`group relative flex h-full items-center gap-5 px-5 transition-colors duration-300 ${
                      active ? "bg-mist" : "hover:bg-mist/50"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute inset-y-0 left-0 w-1 origin-top bg-gold transition-transform duration-300 ease-out ${
                        active ? "scale-y-100" : "scale-y-0"
                      }`}
                    />
                    <span
                      className={`w-8 shrink-0 text-base font-semibold tabular-nums transition-colors duration-300 ${
                        active ? "text-blue" : "text-navy/60"
                      }`}
                    >
                      {pad(index)}
                    </span>
                    <span
                      className={`flex-1 text-[1.75rem] leading-none font-bold tracking-[-0.03em] transition-colors duration-300 ${
                        active ? "text-navy" : "text-navy/70 group-hover:text-navy"
                      }`}
                    >
                      {service.navLabel}
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className={`size-6 shrink-0 transition-all duration-300 ease-out ${
                        active ? "translate-x-0 text-blue opacity-100" : "-translate-x-2 text-navy opacity-0"
                      }`}
                    />
                  </Link>
                </li>
              )
            })}
          </motion.ul>

          <motion.div className="h-full lg:col-span-7" {...reveal(0.18)}>
            <div className="h-full" aria-live="polite">
              <AnimatePresence mode="wait" initial={false}>
                <ServicePreview
                  key={services[activeIndex].slug}
                  service={services[activeIndex]}
                  index={activeIndex}
                  reduceMotion={reduceMotion}
                />
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Mobile / tablet: image cards */}
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:hidden">
          {services.map((service, index) => (
            <motion.li key={service.slug} {...reveal(0.05 * (index % 2))}>
              <Link
                to={`/services/${service.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-md border border-navy/10 bg-white shadow-[0_4px_6px_rgba(0,20,73,0.06)] transition-shadow duration-300 hover:shadow-[0_10px_24px_rgba(0,20,73,0.1)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ImageSlot
                    name={`services/${service.slug}`}
                    hint="1600×900 · 16:9"
                    className="transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-base font-semibold text-blue tabular-nums">{pad(index)}</span>
                  <h3 className="mt-3 text-2xl leading-tight font-bold tracking-[-0.03em] text-navy transition-colors duration-300 group-hover:text-blue">
                    {service.navLabel}
                  </h3>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-navy/80">{service.summary}</p>
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
