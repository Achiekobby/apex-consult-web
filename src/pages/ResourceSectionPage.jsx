import { useMemo, useState } from "react"
import { ArrowRight, Briefcase, Download, Newspaper, Plus, Search } from "lucide-react"
import { Link, NavLink, useParams } from "react-router"
import CtaBand from "../components/ui/CtaBand"
import ImageSlot from "../components/ui/ImageSlot"
import Reveal from "../components/ui/Reveal"
import { getResourceSection, resourceSections } from "../content/resources"
import PageFrame from "../layout/PageFrame"
import NotFoundPage from "./NotFoundPage"

const emptyIcons = {
  news: Newspaper,
  "case-studies": Briefcase,
  downloads: Download,
}

function SectionNav() {
  return (
    <nav aria-label="Resource sections" className="border-b border-navy/10 bg-white">
      <ul className="mx-auto flex max-w-8xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
        {resourceSections.map((item) => (
          <li key={item.slug} className="shrink-0">
            <NavLink
              to={`/resources/${item.slug}`}
              className={({ isActive }) =>
                `inline-flex min-h-11 items-center rounded-sm px-4 text-sm font-semibold transition-colors duration-200 ${
                  isActive ? "bg-navy text-white" : "text-navy hover:bg-mist"
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function Article({ article }) {
  return (
    <div className="mx-auto max-w-8xl px-4 py-14 sm:px-6 sm:py-20">
      <Reveal className="relative aspect-[21/9] overflow-hidden rounded-md border border-navy/10 shadow-[0_24px_60px_-28px_rgba(0,20,73,0.4)]">
        <ImageSlot name="resources/insights-cover" hint="2100×900 · 21:9 banner" />
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <aside className="lg:col-span-3">
          <nav aria-label="In this article" className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold tracking-[0.14em] text-navy uppercase">In this article</p>
            <ol className="mt-4 space-y-1 border-l border-navy/15">
              {article.sections.map((part, index) => (
                <li key={part.heading}>
                  <a
                    href={`#part-${index + 1}`}
                    className="-ml-px flex min-h-11 items-center gap-3 border-l-2 border-transparent py-2 pl-4 text-sm leading-snug text-navy/75 transition-colors duration-200 hover:border-gold hover:text-navy"
                  >
                    <span className="font-semibold text-blue tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                    {part.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <article className="lg:col-span-9">
          <h2 className="max-w-3xl text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1] font-extrabold tracking-[-0.04em] text-balance text-navy">
            {article.title}
          </h2>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed font-medium text-navy/85">{article.summary}</p>

          <div className="mt-12 max-w-3xl">
            {article.sections.map((part, index) => (
              <Reveal
                as="section"
                key={part.heading}
                id={`part-${index + 1}`}
                className="scroll-mt-28 border-t border-navy/15 py-9"
              >
                <div className="flex items-start gap-6">
                  <span className="w-12 shrink-0 text-4xl leading-none font-black tracking-[-0.05em] text-gold tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-2xl leading-tight font-bold tracking-[-0.03em] text-navy">{part.heading}</h3>
                    <p className="mt-3 text-lg leading-relaxed text-navy/85">{part.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </article>
      </div>
    </div>
  )
}

function EmptyState({ slug, message }) {
  const Icon = emptyIcons[slug] ?? Newspaper

  return (
    <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-24">
      <Reveal className="relative isolate overflow-hidden rounded-md border border-dashed border-navy/25 bg-mist/50 px-6 py-16 text-center sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,20,73,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,20,73,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)",
          }}
        />
        <span className="mx-auto grid size-16 place-items-center rounded bg-navy text-gold">
          <Icon aria-hidden="true" className="size-7" />
        </span>
        <p className="mx-auto mt-8 max-w-xl text-xl leading-snug font-semibold text-balance text-navy">{message}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/contact-us"
            className="group inline-flex min-h-12 items-center gap-3 bg-navy px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue"
          >
            Ask us a question
            <ArrowRight aria-hidden="true" className="size-4 text-gold transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/resources/insights"
            className="inline-flex min-h-12 items-center border border-navy px-6 text-sm font-semibold text-navy transition-colors duration-300 hover:bg-navy hover:text-white"
          >
            Read the latest article
          </Link>
        </div>
      </Reveal>
    </div>
  )
}

function Faqs({ faqs, query, onQuery, total }) {
  return (
    <div className="mx-auto max-w-8xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <label className="block text-sm font-semibold text-navy" htmlFor="faq-search">
          Search answers
        </label>
        <div className="relative mt-2">
          <Search aria-hidden="true" className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-navy/50" />
          <input
            id="faq-search"
            type="search"
            value={query}
            onChange={(event) => onQuery(event.target.value)}
            placeholder="Try “training” or “support”"
            className="min-h-14 w-full rounded-sm border border-navy/25 bg-white pr-4 pl-12 text-base text-navy transition-colors duration-200 placeholder:text-navy/45 hover:border-navy/50 focus:border-blue"
          />
        </div>
        <p className="mt-3 text-sm text-navy/70" role="status">
          {query.trim() ? `${faqs.length} of ${total} answers` : `${total} answers`}
        </p>

        {faqs.length === 0 ? (
          <p className="mt-8 rounded border border-dashed border-navy/25 bg-mist/50 p-6 text-center text-base text-navy">
            No answers match that search. <Link to="/contact-us" className="font-semibold">Ask us directly</Link>.
          </p>
        ) : (
          <ul className="mt-6 divide-y divide-navy/15 border-y border-navy/15">
            {faqs.map((faq) => (
              <li key={faq.question}>
                <details className="group py-1">
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg font-bold tracking-[-0.02em] text-navy marker:content-none [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span className="grid size-8 shrink-0 place-items-center rounded-sm bg-mist text-blue transition-all duration-300 group-open:rotate-45 group-open:bg-navy group-open:text-gold">
                      <Plus aria-hidden="true" className="size-4" />
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-5 text-base leading-relaxed text-navy/85">{faq.answer}</p>
                </details>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default function ResourceSectionPage() {
  const { section: slug } = useParams()
  const section = getResourceSection(slug)
  const [query, setQuery] = useState("")

  const faqs = useMemo(() => {
    if (!section?.faqs) return []
    const term = query.trim().toLowerCase()
    if (!term) return section.faqs
    return section.faqs.filter((faq) => `${faq.question} ${faq.answer}`.toLowerCase().includes(term))
  }, [query, section])

  if (!section) return <NotFoundPage />

  return (
    <PageFrame
      bare
      eyebrow="Resources"
      title={section.title}
      summary={section.summary}
      documentTitle={`${section.title} | Apex Point Consult Ltd`}
      metaDescription={section.summary}
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Resources", to: "/resources" }, { label: section.label }]}
    >
      <SectionNav />

      {section.article ? <Article article={section.article} /> : null}
      {section.empty ? <EmptyState slug={section.slug} message={section.empty} /> : null}
      {section.faqs ? <Faqs faqs={faqs} query={query} onQuery={setQuery} total={section.faqs.length} /> : null}

      <CtaBand />
    </PageFrame>
  )
}
