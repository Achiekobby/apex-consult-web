import { AlertCircle, ArrowRight, CheckCircle2, Users } from "lucide-react"
import { Link } from "react-router"
import CtaBand from "../components/ui/CtaBand"
import ImageSlot from "../components/ui/ImageSlot"
import Reveal from "../components/ui/Reveal"
import { solutions } from "../content/solutions"
import PageFrame from "../layout/PageFrame"

const pad = (index) => String(index + 1).padStart(2, "0")

function SolutionCard({ solution, index }) {
  return (
    <Link
      to={`/solutions/${solution.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-md border border-navy/10 bg-white shadow-[0_4px_6px_rgba(0,20,73,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-blue/30 hover:shadow-[0_24px_50px_-24px_rgba(0,20,73,0.35)]"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <ImageSlot
          name={`solutions/${solution.slug}`}
          hint="1600×900 · 16:9"
          className="transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]"
        />
        <span className="absolute top-4 left-4 rounded-sm bg-white/95 px-3 py-1.5 text-sm font-semibold text-blue tabular-nums shadow-sm backdrop-blur">
          {pad(index)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h2 className="text-2xl leading-tight font-bold tracking-[-0.03em] text-balance text-navy transition-colors duration-300 group-hover:text-blue">
          {solution.title}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-navy/80">{solution.summary}</p>

        <div className="mt-6 grid gap-px overflow-hidden rounded border border-navy/10 bg-navy/10 sm:grid-cols-2">
          <div className="bg-mist/70 p-4">
            <p className="flex items-center gap-1.5 text-xs font-semibold tracking-[0.14em] text-navy uppercase">
              <AlertCircle aria-hidden="true" className="size-3.5 text-gold" />
              Challenge
            </p>
            <p className="mt-2 text-sm leading-relaxed text-navy">{solution.challenge}</p>
          </div>
          <div className="bg-mist/70 p-4">
            <p className="flex items-center gap-1.5 text-xs font-semibold tracking-[0.14em] text-navy uppercase">
              <CheckCircle2 aria-hidden="true" className="size-3.5 text-blue" />
              Outcome
            </p>
            <p className="mt-2 text-sm leading-relaxed text-navy">{solution.benefits}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-1 items-end justify-between gap-4">
          <p className="flex items-start gap-2 text-sm leading-snug text-navy/75">
            <Users aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
            <span>
              <span className="sr-only">Suitable for </span>
              {solution.suitableClients}
            </span>
          </p>
          <span className="inline-flex shrink-0 items-center gap-2 text-base font-semibold text-blue">
            Discuss
            <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function SolutionsPage() {
  return (
    <PageFrame
      bare
      tone="dark"
      eyebrow="Our Solutions"
      title="Intelligent Solutions for Real-World Business Needs."
      summary="These categories describe customer problems and intended outcomes. They are proposed offerings, not existing proprietary platforms."
      documentTitle="Business Technology, Cloud, Payments & Security Solutions"
      metaDescription="Proposed Apex Point solutions for enterprise applications, digital payments, communications, cloud hosting, cybersecurity, and smart security."
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Our Solutions" }]}
      media={{ name: "solutions/overview", hint: "1200×960 · 5:4 landscape" }}
    >
      <section className="bg-white" aria-label="Solutions">
        <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-24">
          <ul className="grid gap-6 md:grid-cols-2">
            {solutions.map((solution, index) => (
              <Reveal as="li" key={solution.slug} delay={0.06 * (index % 2)}>
                <SolutionCard solution={solution} index={index} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </PageFrame>
  )
}
