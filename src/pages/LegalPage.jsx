import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router"
import Reveal from "../components/ui/Reveal"
import { getLegalPage } from "../content/legal"
import { legalLinks } from "../content/site"
import PageFrame from "../layout/PageFrame"

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")

export default function LegalPage({ pageKey }) {
  const page = getLegalPage(pageKey)

  return (
    <PageFrame
      bare
      eyebrow="Legal"
      title={page.title}
      summary={page.summary}
      documentTitle={page.documentTitle}
      metaDescription={page.metaDescription}
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Legal" }, { label: page.title }]}
    >
      <section className="bg-white" aria-label={page.title}>
        <div className="mx-auto grid max-w-8xl gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <nav aria-label="On this page">
                <p className="text-sm font-semibold tracking-[0.14em] text-navy uppercase">On this page</p>
                <ol className="mt-4 space-y-1 border-l border-navy/15">
                  {page.sections.map((section, index) => (
                    <li key={section.heading}>
                      <a
                        href={`#${slugify(section.heading)}`}
                        className="-ml-px flex min-h-11 items-center gap-3 border-l-2 border-transparent py-2 pl-4 text-sm leading-snug text-navy/75 transition-colors duration-200 hover:border-gold hover:text-navy"
                      >
                        <span className="font-semibold text-blue tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <nav aria-label="Other legal pages" className="mt-10">
                <p className="text-sm font-semibold tracking-[0.14em] text-navy uppercase">Other policies</p>
                <ul className="mt-3">
                  {legalLinks
                    .filter((link) => link.to !== page.path)
                    .map((link) => (
                      <li key={link.to}>
                        <Link
                          to={link.to}
                          className="group inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-blue"
                        >
                          {link.label}
                          <ArrowUpRight aria-hidden="true" className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      </li>
                    ))}
                </ul>
              </nav>
            </div>
          </aside>

          <div className="lg:col-span-9">
            <div className="max-w-3xl">
              {page.sections.map((section, index) => (
                <Reveal
                  as="section"
                  key={section.heading}
                  id={slugify(section.heading)}
                  className="scroll-mt-28 border-t border-navy/15 py-9"
                >
                  <div className="flex items-start gap-6">
                    <span className="w-12 shrink-0 text-4xl leading-none font-black tracking-[-0.05em] text-gold tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="text-2xl leading-tight font-bold tracking-[-0.03em] text-navy">{section.heading}</h2>
                      <p className="mt-3 text-lg leading-relaxed text-navy/85">{section.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
