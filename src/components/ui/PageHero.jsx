import Breadcrumbs from "./Breadcrumbs"
import ImageSlot from "./ImageSlot"
import Reveal from "./Reveal"

const grid = (color) => ({
  backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
  backgroundSize: "56px 56px",
  maskImage: "radial-gradient(ellipse 80% 70% at 70% 20%, black, transparent)",
})

/**
 * Shared page header.
 *
 * @param {{name:string, hint?:string, alt?:string}} [media] Optional image slot shown beside the text.
 * @param {"light"|"dark"} [tone]
 */
export default function PageHero({ eyebrow, title, summary, breadcrumbs, media, actions, tone = "light", children }) {
  const dark = tone === "dark"

  return (
    <section className={`relative isolate overflow-hidden ${dark ? "bg-navy" : "bg-mist"}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={grid(dark ? "rgba(255,255,255,0.05)" : "rgba(0,20,73,0.05)")}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -top-40 -right-32 -z-10 size-[34rem] rounded-full blur-[120px] ${
          dark ? "bg-blue/40" : "bg-cyan/20"
        }`}
      />
      {dark ? <div className="absolute inset-x-0 top-0 h-px bg-gold" aria-hidden="true" /> : null}
      {!dark ? <div className="absolute inset-x-0 bottom-0 h-px bg-navy/10" aria-hidden="true" /> : null}

      <div className="mx-auto max-w-8xl px-4 pt-6 pb-16 sm:px-6 sm:pt-8 sm:pb-20 lg:pb-24">
        <Breadcrumbs items={breadcrumbs} tone={tone} />

        <div className={`mt-8 grid gap-12 sm:mt-12 ${media ? "lg:grid-cols-12 lg:items-center lg:gap-16" : ""}`}>
          <div className={media ? "lg:col-span-7" : "max-w-4xl"}>
            {eyebrow ? (
              <Reveal
                as="p"
                className={`flex items-center gap-4 text-base font-semibold tracking-[0.14em] uppercase ${
                  dark ? "text-mist" : "text-navy"
                }`}
              >
                <span className="h-px w-10 shrink-0 bg-gold" aria-hidden="true" />
                {eyebrow}
              </Reveal>
            ) : null}

            <Reveal delay={0.08} className="mt-6">
              <h1
                className={`text-[clamp(2.25rem,5vw,4.25rem)] leading-[0.95] font-extrabold tracking-[-0.045em] text-balance ${
                  dark ? "text-white" : "text-navy"
                }`}
              >
                {title}
              </h1>
            </Reveal>

            {summary ? (
              <Reveal
                as="p"
                delay={0.16}
                className={`mt-6 max-w-2xl text-lg leading-relaxed ${dark ? "text-mist" : "text-navy/85"}`}
              >
                {summary}
              </Reveal>
            ) : null}

            {children ? (
              <Reveal delay={0.22} className="mt-6 max-w-2xl space-y-4">
                {children}
              </Reveal>
            ) : null}

            {actions ? (
              <Reveal delay={0.28} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                {actions}
              </Reveal>
            ) : null}
          </div>

          {media ? (
            <Reveal delay={0.2} className="relative lg:col-span-5">
              <div
                className={`relative aspect-[5/4] overflow-hidden rounded-md border shadow-[0_30px_60px_-28px_rgba(0,20,73,0.45)] ${
                  dark ? "border-white/20" : "border-navy/10"
                }`}
              >
                <ImageSlot name={media.name} hint={media.hint} alt={media.alt ?? ""} tone={dark ? "dark" : "light"} />
              </div>
              <div
                aria-hidden="true"
                className="absolute -top-3 -right-3 -z-10 size-full rounded-md border border-gold/50"
              />
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  )
}
