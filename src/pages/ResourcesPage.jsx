import { ArrowRight, ArrowUpRight, Briefcase, CircleHelp, Download, Lightbulb, Newspaper } from "lucide-react"
import { Link } from "react-router"
import CtaBand from "../components/ui/CtaBand"
import ImageSlot from "../components/ui/ImageSlot"
import Reveal from "../components/ui/Reveal"
import { resourceSections } from "../content/resources"
import PageFrame from "../layout/PageFrame"

const icons = {
  insights: Lightbulb,
  news: Newspaper,
  "case-studies": Briefcase,
  downloads: Download,
  faqs: CircleHelp,
}

function StatusChip({ section }) {
  const pending = Boolean(section.empty)
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm px-2.5 py-1 text-xs font-semibold tracking-[0.08em] uppercase ${
        pending ? "bg-gold/15 text-navy" : "bg-cyan/20 text-navy"
      }`}
    >
      <span className={`size-1.5 rounded-[1px] ${pending ? "bg-gold" : "bg-blue"}`} aria-hidden="true" />
      {pending ? "Coming soon" : "Available"}
    </span>
  )
}

export default function ResourcesPage() {
  const [featured, ...rest] = resourceSections

  return (
    <PageFrame
      bare
      eyebrow="Resources"
      title="Insights, Knowledge & Ideas to Help Your Business Grow."
      summary="The Apex Point knowledge hub for practical perspectives on technology, transformation, cybersecurity, fintech, and professional skills."
      documentTitle="Technology Insights, Guides & Resources | Apex Point"
      metaDescription="Insights, news, case studies, downloads, and answers from Apex Point Consult Ltd."
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Resources" }]}
      media={{ name: "resources/main", hint: "1200×960 · 5:4 landscape" }}
    >
      <section className="bg-white" aria-label="Resource sections">
        <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-5 lg:grid-cols-12">
            {/* Featured */}
            <Reveal className="lg:col-span-7 lg:row-span-4">
              <Link
                to={`/resources/${featured.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-md border border-navy/10 bg-white shadow-[0_4px_6px_rgba(0,20,73,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(0,20,73,0.35)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden lg:aspect-auto lg:min-h-72 lg:flex-1">
                  <ImageSlot
                    name="resources/insights"
                    hint="1600×900 · 16:9"
                    className="transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]"
                  />
               
                </div>
                <div className="p-7 sm:p-9">
                  <p className="text-sm font-semibold tracking-[0.14em] text-blue uppercase">{featured.label}</p>
                  <h2 className="mt-3 text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.05] font-extrabold tracking-[-0.035em] text-balance text-navy transition-colors duration-300 group-hover:text-blue">
                    {featured.article.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-navy/80">{featured.article.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-blue">
                    Read the article
                    <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>

            {/* Others */}
            {rest.map((section, index) => {
              const Icon = icons[section.slug]
              return (
                <Reveal key={section.slug} delay={0.06 * index} className="lg:col-span-5">
                  <Link
                    to={`/resources/${section.slug}`}
                    className="group relative flex h-full items-start gap-5 overflow-hidden rounded-md border border-navy/10 bg-mist/60 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue/30 hover:bg-white hover:shadow-[0_18px_40px_-20px_rgba(0,20,73,0.3)]"
                  >
                    <span className="absolute top-0 left-0 h-1 w-0 bg-gold transition-all duration-500 ease-out group-hover:w-full" aria-hidden="true" />
                    <span className="grid size-12 shrink-0 place-items-center rounded bg-navy text-gold transition-colors duration-300 group-hover:bg-blue group-hover:text-white">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <span className="flex-1">
                      <span className="flex items-start justify-between gap-3">
                        <span className="text-xl leading-tight font-bold tracking-[-0.03em] text-navy">{section.title}</span>
                        <ArrowUpRight
                          aria-hidden="true"
                          className="mt-1 size-5 shrink-0 text-navy/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue"
                        />
                      </span>
                      <span className="mt-2 block text-sm leading-relaxed text-navy/80">{section.summary}</span>
                      <span className="mt-3 block">
                        {/* <StatusChip section={section} /> */}
                      </span>
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a question we haven’t answered?"
        text="Tell us what you are trying to solve and we will point you to the right next step."
        primary={{ label: "Contact Us", to: "/contact-us" }}
        secondary={{ label: "Read the FAQs", to: "/resources/faqs" }}
      />
    </PageFrame>
  )
}
