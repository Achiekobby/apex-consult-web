import { ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react"
import { Link, useParams } from "react-router"
import CtaBand from "../components/ui/CtaBand"
import ImageSlot from "../components/ui/ImageSlot"
import Notice from "../components/ui/Notice"
import Reveal from "../components/ui/Reveal"
import SectionHeading from "../components/ui/SectionHeading"
import { getService, services } from "../content/services"
import { proposedOfferingNote } from "../content/site"
import PageFrame from "../layout/PageFrame"
import NotFoundPage from "./NotFoundPage"

const pad = (index) => String(index + 1).padStart(2, "0")

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = getService(slug)

  if (!service) return <NotFoundPage />

  const index = services.findIndex((item) => item.slug === service.slug)
  const others = [1, 2, 3].map((step) => services[(index + step) % services.length])

  return (
    <PageFrame
      bare
      eyebrow="Our Services"
      title={service.title}
      summary={service.headline}
      documentTitle={`${service.title} | Apex Point Consult Ltd`}
      metaDescription={service.summary}
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Our Services", to: "/services" }, { label: service.navLabel }]}
      media={{ name: `services/${service.slug}`, hint: "1600×900 · 16:9" }}
      actions={
        <>
          <Link
            to={`/book-consultation?service=${service.slug}`}
            className="group inline-flex min-h-12 items-center justify-center gap-3 bg-navy px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue"
          >
            Request a Consultation
            <ArrowRight aria-hidden="true" className="size-4 text-gold transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to={`/request-quote?service=${service.slug}`}
            className="inline-flex min-h-12 items-center justify-center border border-navy px-6 text-sm font-semibold text-navy transition-colors duration-300 hover:bg-navy hover:text-white"
          >
            Request a Quote
          </Link>
        </>
      }
    >
      {/* Coverage + benefits */}
      <section className="bg-white" aria-labelledby="coverage-title">
        <div className="mx-auto grid max-w-8xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <SectionHeading
              id="coverage-title"
              eyebrow="Overview"
              title="What this service covers."
              intro={service.summary}
            />

            <ul className="mt-12 grid gap-4 sm:grid-cols-2">
              {service.offerings.map((offering, offeringIndex) => (
                <Reveal
                  as="li"
                  key={offering}
                  delay={0.04 * (offeringIndex % 2)}
                  className="group relative overflow-hidden rounded-md border border-navy/10 bg-mist/60 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue/30 hover:bg-white hover:shadow-[0_18px_40px_-20px_rgba(0,20,73,0.3)]"
                >
                  <span className="absolute top-0 left-0 h-1 w-0 bg-gold transition-all duration-500 ease-out group-hover:w-full" aria-hidden="true" />
                  <div className="flex items-center justify-between">
                    <span className="grid size-9 place-items-center rounded-sm bg-navy text-gold transition-colors duration-300 group-hover:bg-blue group-hover:text-white">
                      <Check aria-hidden="true" className="size-4" strokeWidth={3} />
                    </span>
                    <span className="text-sm font-semibold text-navy/50 tabular-nums" aria-hidden="true">
                      {pad(offeringIndex)}
                    </span>
                  </div>
                  <p className="mt-5 text-base leading-snug font-medium text-navy">{offering}</p>
                </Reveal>
              ))}
            </ul>

            {service.constraint ? <Notice className="mt-8">{service.constraint}</Notice> : null}
          </div>

          <aside className="lg:col-span-4">
            <Reveal delay={0.12} className="lg:sticky lg:top-28">
              <div className="relative isolate overflow-hidden rounded-md bg-navy p-7 text-white shadow-[0_24px_60px_-28px_rgba(0,20,73,0.6)] sm:p-8">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-16 -right-16 -z-10 size-56 rounded-full bg-blue/50 blur-[70px]"
                />
                <div className="absolute inset-x-0 top-0 h-px bg-gold" aria-hidden="true" />
                <span className="grid size-11 place-items-center rounded-sm bg-white/10 text-gold">
                  <Sparkles aria-hidden="true" className="size-5" />
                </span>
                <h2 className="mt-6 text-2xl font-bold tracking-[-0.03em] text-white">Client benefits</h2>
                <p className="mt-3 text-base leading-relaxed text-mist">{service.benefits}</p>

                <Notice tone="dark" className="mt-6">
                  {proposedOfferingNote}
                </Notice>

                <Link
                  to={`/contact-us?service=${service.slug}`}
                  className="group mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gold transition-colors duration-300 hover:text-white"
                >
                  Ask a question first
                  <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-mist" aria-labelledby="other-services-title">
        <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-24">
          <SectionHeading id="other-services-title" eyebrow="Keep exploring" title="Other services in the portfolio." />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {others.map((other, otherIndex) => (
              <Reveal as="li" key={other.slug} delay={0.06 * otherIndex}>
                <Link
                  to={`/services/${other.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-md border border-navy/10 bg-white shadow-[0_4px_6px_rgba(0,20,73,0.06)] transition-shadow duration-300 hover:shadow-[0_10px_24px_rgba(0,20,73,0.1)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <ImageSlot
                      name={`services/${other.slug}`}
                      hint="1600×900 · 16:9"
                      className="transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl leading-tight font-bold tracking-[-0.03em] text-navy transition-colors duration-300 group-hover:text-blue">
                      {other.navLabel}
                    </h3>
                    <p className="mt-3 flex-1 text-base leading-relaxed text-navy/80">{other.summary}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-blue">
                      View service
                      <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        eyebrow="Next step"
        title={`Interested in ${service.navLabel}?`}
        text="Tell us about the challenge and we will explore an appropriate next step together."
        primary={{ label: "Start a Conversation", to: `/contact-us?service=${service.slug}` }}
        secondary={{ label: "Request a Quote", to: `/request-quote?service=${service.slug}` }}
      />
    </PageFrame>
  )
}
