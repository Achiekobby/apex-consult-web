import { AlertCircle, ArrowRight, ArrowUpRight, CheckCircle2, Lightbulb, Users } from "lucide-react"
import { Link, useParams } from "react-router"
import CtaBand from "../components/ui/CtaBand"
import ImageSlot from "../components/ui/ImageSlot"
import Notice from "../components/ui/Notice"
import Reveal from "../components/ui/Reveal"
import SectionHeading from "../components/ui/SectionHeading"
import { getService } from "../content/services"
import { getSolution, solutions } from "../content/solutions"
import { proposedOfferingNote } from "../content/site"
import PageFrame from "../layout/PageFrame"
import NotFoundPage from "./NotFoundPage"

const relatedService = {
  "enterprise-applications": "software-development",
  "digital-payments": "software-development",
  "business-communications": "software-development",
  "cloud-hosting": "cloud-managed-services",
  cybersecurity: "governance-cybersecurity",
  "smart-security": "security-systems",
}

const flow = [
  { key: "challenge", label: "The challenge", Icon: AlertCircle, accent: "text-gold" },
  { key: "proposedSolution", label: "Proposed solution", Icon: Lightbulb, accent: "text-blue" },
  { key: "benefits", label: "Business benefits", Icon: CheckCircle2, accent: "text-blue" },
]

export default function SolutionDetailPage() {
  const { slug } = useParams()
  const solution = getSolution(slug)

  if (!solution) return <NotFoundPage />

  const service = getService(relatedService[solution.slug])

  return (
    <PageFrame
      bare
      tone="dark"
      eyebrow="Our Solutions"
      title={solution.title}
      summary={solution.summary}
      heroContent={<Notice tone="dark">{proposedOfferingNote}</Notice>}
      documentTitle={`${solution.title} | Apex Point Consult Ltd`}
      metaDescription={solution.summary}
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Our Solutions", to: "/solutions" }, { label: solution.navLabel }]}
      media={{ name: `solutions/${solution.slug}`, hint: "1600×900 · 16:9" }}
    >
      {/* Challenge -> solution -> benefit */}
      <section className="bg-white" aria-labelledby="story-title">
        <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-24">
          <SectionHeading id="story-title" eyebrow="The approach" title="From problem to outcome." />

          <ol className="mt-12 grid gap-5 lg:grid-cols-3">
            {flow.map(({ key, label, Icon, accent }, index) => (
              <Reveal
                as="li"
                key={key}
                delay={0.08 * index}
                className="relative flex flex-col rounded-md border border-navy/10 bg-mist/60 p-7 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className={`grid size-12 place-items-center rounded bg-white shadow-sm ${accent}`}>
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="text-4xl leading-none font-black tracking-[-0.05em] text-navy/10 tabular-nums" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 text-sm font-semibold tracking-[0.14em] text-blue uppercase">{label}</h3>
                <p className="mt-3 text-xl leading-snug font-semibold text-navy">{solution[key]}</p>

                {index < flow.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute top-1/2 -right-4 z-10 hidden size-8 -translate-y-1/2 place-items-center rounded-sm bg-navy text-gold lg:grid"
                  >
                    <ArrowRight className="size-4" />
                  </span>
                ) : null}
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-5 flex items-start gap-4 rounded-md border border-navy/10 p-6 sm:items-center sm:p-7">
            <span className="grid size-12 shrink-0 place-items-center rounded bg-navy text-gold">
              <Users aria-hidden="true" className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold tracking-[0.14em] text-blue uppercase">Intended users</p>
              <p className="mt-1 text-lg font-semibold text-navy">{solution.suitableClients}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Implementation + related service */}
      <section className="bg-mist" aria-labelledby="implementation-title">
        <div className="mx-auto grid max-w-8xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading id="implementation-title" eyebrow="Delivery" title="Implementation." />
            <Reveal as="p" delay={0.12} className="mt-6 max-w-xl text-lg leading-relaxed text-navy/85">
              Scope, integration, and delivery are agreed after the requirements are assessed. A demonstration is offered only when a working example exists.
            </Reveal>
            {solution.constraint ? <Notice className="mt-6 max-w-xl">{solution.constraint}</Notice> : null}

            <Reveal delay={0.18} className="mt-8">
              <Link
                to={`/contact-us?service=${relatedService[solution.slug]}&type=consultation`}
                className="group inline-flex min-h-12 items-center gap-3 bg-navy px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue"
              >
                Discuss Your Requirements
                <ArrowRight aria-hidden="true" className="size-4 text-gold transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          {service ? (
            <Reveal delay={0.1} className="lg:col-span-5">
              <p className="text-sm font-semibold tracking-[0.14em] text-navy uppercase">Related service</p>
              <Link
                to={`/services/${service.slug}`}
                className="group mt-4 flex flex-col overflow-hidden rounded-md border border-navy/10 bg-white shadow-[0_4px_6px_rgba(0,20,73,0.06)] transition-shadow duration-300 hover:shadow-[0_10px_24px_rgba(0,20,73,0.1)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <ImageSlot
                    name={`services/${service.slug}`}
                    hint="1600×900 · 16:9"
                    className="transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="flex items-center justify-between gap-4 text-xl font-bold tracking-[-0.03em] text-navy transition-colors duration-300 group-hover:text-blue">
                    {service.title}
                    <ArrowUpRight aria-hidden="true" className="size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-navy/80">{service.summary}</p>
                </div>
              </Link>
            </Reveal>
          ) : null}
        </div>
      </section>

      {/* More solutions */}
      <section className="bg-white" aria-labelledby="more-solutions-title">
        <div className="mx-auto max-w-8xl px-4 pt-16 sm:px-6 sm:pt-20">
          <h2 id="more-solutions-title" className="text-sm font-semibold tracking-[0.14em] text-navy uppercase">
            More solutions
          </h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {solutions
              .filter((item) => item.slug !== solution.slug)
              .map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/solutions/${item.slug}`}
                    className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-navy/15 px-4 text-sm font-semibold text-navy transition-colors duration-300 hover:border-blue hover:bg-mist hover:text-blue"
                  >
                    <span className="size-1.5 rounded-[1px] bg-gold" aria-hidden="true" />
                    {item.navLabel}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title={`Let’s talk about ${solution.navLabel.toLowerCase()}.`}
        text="Describe your requirements and we will explore an appropriate next step."
        primary={{ label: "Start a Conversation", to: `/contact-us?service=${relatedService[solution.slug]}&type=consultation` }}
        secondary={{ label: "Request a Quote", to: `/request-quote?service=${relatedService[solution.slug]}` }}
      />
    </PageFrame>
  )
}
