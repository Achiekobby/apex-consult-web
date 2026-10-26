import SectionHeading from "./ui/SectionHeading"

const tones = {
  white: "bg-white",
  mist: "bg-mist",
  navy: "relative isolate overflow-hidden bg-navy",
}

/**
 * Standard inner-page section. `tone="navy"` renders a dark band with a gold top line.
 */
export default function Section({ id, eyebrow, title, intro, tone = "white", className = "", children }) {
  const dark = tone === "navy"
  const titleId = id && title ? `${id}-title` : undefined

  return (
    <section id={id} className={`scroll-mt-20 ${tones[tone]}`} aria-labelledby={titleId}>
      {dark ? (
        <>
          <div className="absolute inset-x-0 top-0 h-px bg-gold" aria-hidden="true" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -right-32 -z-10 size-[30rem] rounded-full bg-blue/40 blur-[120px]"
          />
        </>
      ) : null}
      <div className={`mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-24 ${className}`}>
        {eyebrow || title ? (
          <SectionHeading id={titleId} eyebrow={eyebrow} title={title} intro={intro} tone={dark ? "dark" : "light"} />
        ) : null}
        <div className={eyebrow || title ? "mt-12 sm:mt-14" : ""}>{children}</div>
      </div>
    </section>
  )
}
