import { Info } from "lucide-react"

/** Gold callout used for "proposed offering" and draft disclaimers. */
export default function Notice({ children, tone = "light", className = "" }) {
  const dark = tone === "dark"

  return (
    <p
      className={`flex items-start gap-3 rounded border p-4 text-sm leading-relaxed ${
        dark ? "border-gold/50 bg-gold/10 text-white" : "border-gold/40 bg-gold/10 text-navy"
      } ${className}`}
    >
      <Info aria-hidden="true" className={`mt-0.5 size-4 shrink-0 ${dark ? "text-gold" : "text-navy"}`} />
      <span>{children}</span>
    </p>
  )
}
