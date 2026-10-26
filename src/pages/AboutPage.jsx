import { ArrowRight, ArrowUpRight, Check, Eye, Target } from "lucide-react"
import { Link } from "react-router"
import Section from "../components/Section"
import CtaBand from "../components/ui/CtaBand"
import ImageSlot from "../components/ui/ImageSlot"
import Reveal from "../components/ui/Reveal"
import { aboutPage } from "../content/about"
import { homePage } from "../content/home"
import PageFrame from "../layout/PageFrame"

const pad = (index) => String(index + 1).padStart(2, "0")

export default function AboutPage() {
  return (
    <PageFrame
      bare
      eyebrow={aboutPage.eyebrow}
      title={aboutPage.title}
      summary={aboutPage.summary}
      heroContent={<p className="text-base leading-relaxed text-navy/75">{aboutPage.whoWeAre}</p>}
      documentTitle={aboutPage.documentTitle}
      metaDescription={aboutPage.metaDescription}
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
      media={{ name: "about/hero", hint: "1200×960 · 5:4 landscape" }}
    >
      {/* Story */}
      <Section id="story" eyebrow="Our story" title={aboutPage.storyTitle}>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-20">
          <Reveal className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-navy/10 shadow-[0_24px_60px_-28px_rgba(0,20,73,0.4)]">
              <ImageSlot name="about/story" hint="1000×1250 · 4:5 portrait" />
            </div>
            <div className="absolute -right-2 -bottom-6 rounded border border-navy/10 bg-white p-4 pr-6 shadow-[0_18px_40px_-16px_rgba(0,20,73,0.35)] sm:-right-6">
              <p className="text-4xl leading-none font-black tracking-tight text-navy">
                20<span className="text-gold">+</span>
              </p>
              <p className="mt-2 text-sm leading-snug font-semibold text-navy">
                Years of the founder’s
                <br />
                professional experience
              </p>
            </div>
          </Reveal>

          <div className="space-y-6 lg:col-span-7">
            {aboutPage.story.map((paragraph, index) => (
              <Reveal
                as="p"
                key={paragraph}
                delay={0.08 * index}
                className={index === 0 ? "text-2xl leading-snug font-medium text-balance text-navy" : "text-lg leading-relaxed text-navy/85"}
              >
                {paragraph}
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Objectives */}
      <Section id="objectives" tone="mist" eyebrow="Objectives" title="What the company is setting out to do.">
        <ol className="grid gap-x-12 md:grid-cols-2">
          {aboutPage.objectives.map((objective, index) => (
            <Reveal
              as="li"
              key={objective}
              delay={0.04 * (index % 2)}
              className="group flex items-start gap-6 border-t border-navy/15 py-7 last:border-b md:[&:nth-last-child(2)]:border-b"
            >
              <span className="w-10 shrink-0 text-3xl leading-none font-extrabold tracking-[-0.04em] text-blue tabular-nums transition-colors duration-300 group-hover:text-gold">
                {pad(index)}
              </span>
              <p className="text-lg leading-snug font-medium text-navy">{objective}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Vision & mission */}
      <Section id="direction" eyebrow="Direction" title="Vision and mission">
        <div className="grid gap-5 lg:grid-cols-2">
          {[
            { key: "vision", label: "Vision", text: aboutPage.vision, Icon: Eye, accent: "bg-navy" },
            { key: "mission", label: "Mission", text: aboutPage.mission, Icon: Target, accent: "bg-blue" },
          ].map(({ key, label, text, Icon, accent }, index) => (
            <Reveal
              as="article"
              key={key}
              delay={0.08 * index}
              className={`relative isolate flex flex-col overflow-hidden rounded-md p-8 text-white sm:p-10 ${accent}`}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 -right-20 -z-10 size-72 rounded-full bg-cyan/20 blur-[80px]"
              />
              <div className="absolute inset-x-0 top-0 h-px bg-gold" aria-hidden="true" />
              <span className="grid size-12 place-items-center rounded-sm bg-white/10 text-gold">
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <h3 className="mt-8 text-3xl font-bold tracking-[-0.03em] text-white">{label}</h3>
              <p className="mt-4 text-lg leading-relaxed text-white/90">{text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* IMPACT values */}
      <Section id="values" tone="mist" eyebrow="IMPACT" title="The values that govern the work.">
        <dl className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {aboutPage.values.map((value, index) => (
            <Reveal
              key={value.letter}
              delay={0.05 * (index % 3)}
              className="group relative overflow-hidden rounded-md border border-navy/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue/30 hover:shadow-[0_18px_40px_-20px_rgba(0,20,73,0.3)]"
            >
              <span
                aria-hidden="true"
                className="absolute -top-4 -right-1 text-[8rem] leading-none font-black text-blue/10 transition-colors duration-300 group-hover:text-gold/30"
              >
                {value.letter}
              </span>
              <span className="absolute top-0 left-0 h-1 w-0 bg-gold transition-all duration-500 ease-out group-hover:w-full" aria-hidden="true" />
              <dt className="relative text-2xl font-bold tracking-[-0.03em] text-navy">{value.name}</dt>
              <dd className="relative mt-3 max-w-xs text-base leading-relaxed text-navy/80">{value.description}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      {/* What we do */}
      <Section id="what-we-do" eyebrow="What we do" title="Plan, build, connect, operate, protect, and develop.">
        <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {homePage.pillars.map((pillar, index) => (
            <Reveal as="li" key={pillar.verb} delay={0.04 * (index % 3)}>
              <Link
                to={pillar.to}
                className="group flex items-center gap-5 border-t border-navy/15 py-6 transition-colors duration-300 hover:bg-mist/60 sm:px-3"
              >
                <span className="w-8 text-base font-semibold text-blue tabular-nums">{pad(index)}</span>
                <span className="flex-1 text-2xl font-bold tracking-[-0.03em] text-navy">{pillar.verb}</span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-5 text-navy/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue"
                />
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Promise */}
      <Section id="promise" tone="navy" eyebrow="Why Apex Point" title={aboutPage.promiseTitle} intro={aboutPage.promise}>
        <ul className="grid gap-x-12 gap-y-1 md:grid-cols-2">
          {aboutPage.differentiators.map((item, index) => {
            const split = item.indexOf(": ")
            const title = split === -1 ? item : item.slice(0, split)
            const body = split === -1 ? "" : item.slice(split + 2)
            return (
              <Reveal as="li" key={item} delay={0.04 * (index % 2)} className="flex items-start gap-4 border-t border-white/20 py-6">
                <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-sm bg-gold text-navy">
                  <Check aria-hidden="true" className="size-4" strokeWidth={3} />
                </span>
                <div>
                  <p className="text-lg font-bold tracking-[-0.02em] text-white">{title}</p>
                  {body ? <p className="mt-1 text-base leading-relaxed text-mist">{body.charAt(0).toUpperCase() + body.slice(1)}</p> : null}
                </div>
              </Reveal>
            )
          })}
        </ul>
        <div className="mt-12">
          <Link
            to="/services"
            className="group inline-flex min-h-12 items-center gap-3 bg-gold px-6 text-sm font-semibold text-navy transition-colors duration-300 hover:bg-white"
          >
            Explore our services
            <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </Section>

      <CtaBand />
    </PageFrame>
  )
}
