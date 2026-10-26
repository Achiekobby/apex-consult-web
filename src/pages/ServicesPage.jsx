import { ArrowRight, Cctv, Check, Cloud, Code, Compass, GraduationCap, ShieldCheck } from "lucide-react"
import { Link } from "react-router"
import CtaBand from "../components/ui/CtaBand"
import ImageSlot from "../components/ui/ImageSlot"
import Notice from "../components/ui/Notice"
import Reveal from "../components/ui/Reveal"
import { services } from "../content/services"
import { proposedOfferingNote } from "../content/site"
import PageFrame from "../layout/PageFrame"

const icons = {
  "business-consulting": Compass,
  "software-development": Code,
  "cloud-managed-services": Cloud,
  "coaching-training": GraduationCap,
  "security-systems": Cctv,
  "governance-cybersecurity": ShieldCheck,
}

const pad = (index) => String(index + 1).padStart(2, "0")

function ServiceRow({ service, index }) {
  const Icon = icons[service.slug]
  const flipped = index % 2 === 1

  return (
    <li className="border-t border-navy/10 py-12 first:border-t-0 first:pt-0 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-16">
        <Reveal className={`lg:col-span-6 ${flipped ? "lg:order-2" : ""}`}>
          <Link
            to={`/services/${service.slug}`}
            tabIndex={-1}
            aria-hidden="true"
            className="group relative block aspect-[16/10] overflow-hidden rounded-md border border-navy/10 shadow-[0_24px_60px_-28px_rgba(0,20,73,0.4)]"
          >
            <ImageSlot
              name={`services/${service.slug}`}
              hint="1600×900 · 16:9"
              className="transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]"
            />
            <span className="absolute top-4 left-4 rounded-sm bg-white/95 px-3 py-1.5 text-sm font-semibold text-blue tabular-nums shadow-sm backdrop-blur">
              {pad(index)}
            </span>
          </Link>
        </Reveal>

        <Reveal delay={0.1} className={`lg:col-span-6 ${flipped ? "lg:order-1" : ""}`}>
          <span className="grid size-12 place-items-center rounded bg-navy text-gold">
            <Icon aria-hidden="true" className="size-5" />
          </span>
          <h2 className="mt-6 text-[clamp(1.75rem,3vw,2.5rem)] leading-[1] font-extrabold tracking-[-0.04em] text-balance text-navy">
            {service.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy/85">{service.summary}</p>

          <ul className="mt-6 space-y-3 border-t border-navy/10 pt-6">
            {service.offerings.slice(0, 3).map((offering) => (
              <li key={offering} className="flex items-start gap-3 text-base leading-snug text-navy">
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
            Read the service
            <ArrowRight
              aria-hidden="true"
              className="size-4 text-gold transition-transform duration-300 ease-out group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </li>
  )
}

export default function ServicesPage() {
  return (
    <PageFrame
      bare
      eyebrow="Our Services"
      title="Expertise That Solves Problems. Services That Drive Growth."
      summary="An integrated portfolio of advisory, engineering, infrastructure, security, and learning services for organisations at different stages of digital maturity."
      heroContent={<Notice>{proposedOfferingNote}</Notice>}
      documentTitle="Technology Consulting, Software Development & Managed IT"
      metaDescription="Proposed Apex Point services: business consulting, software development, cloud and managed IT, training, security systems, and cybersecurity."
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Our Services" }]}
      media={{ name: "services/overview", hint: "1200×960 · 5:4 landscape" }}
    >
      <section className="bg-white" aria-label="Services">
        <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-24">
          <ul>
            {services.map((service, index) => (
              <ServiceRow key={service.slug} service={service} index={index} />
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </PageFrame>
  )
}
