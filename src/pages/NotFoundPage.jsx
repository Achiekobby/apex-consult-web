import { ArrowRight } from "lucide-react"
import { Link } from "react-router"
import Reveal from "../components/ui/Reveal"
import { usePageMeta } from "../hooks/usePageMeta"

const links = [
  { label: "Back to home", to: "/" },
  { label: "Browse services", to: "/services" },
  { label: "Contact us", to: "/contact-us" },
]

export default function NotFoundPage() {
  usePageMeta(
    "Page not found | Apex Point Consult Ltd",
    "The page you requested is not available on the Apex Point Consult Ltd website.",
  )

  return (
    <section className="relative isolate overflow-hidden bg-mist">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,20,73,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,20,73,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 40%, black, transparent)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 size-[34rem] -translate-x-1/2 rounded-full bg-cyan/20 blur-[120px]"
      />

      <div className="mx-auto flex max-w-8xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32">
        <Reveal as="p" className="flex items-center gap-4 text-base font-semibold tracking-[0.14em] text-navy uppercase">
          <span className="h-px w-10 bg-gold" aria-hidden="true" />
          Error 404
          <span className="h-px w-10 bg-gold" aria-hidden="true" />
        </Reveal>

        <Reveal delay={0.06}>
          <p
            aria-hidden="true"
            className="mt-6 text-[clamp(7rem,22vw,16rem)] leading-[0.85] font-black tracking-[-0.06em] text-navy"
          >
            4<span className="text-gold">0</span>4
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <h1 className="mt-6 text-[clamp(2rem,4vw,3rem)] leading-[1] font-extrabold tracking-[-0.04em] text-balance text-navy">
            Page not found
          </h1>
        </Reveal>
        <Reveal as="p" delay={0.18} className="mt-4 max-w-md text-lg leading-relaxed text-navy/80">
          That address is not part of the Apex Point website.
        </Reveal>

        <Reveal delay={0.24} className="mt-10 flex flex-col gap-3 sm:flex-row">
          {links.map((link, index) => (
            <Link
              key={link.to}
              to={link.to}
              className={
                index === 0
                  ? "group inline-flex min-h-12 items-center justify-center gap-3 bg-navy px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue"
                  : "inline-flex min-h-12 items-center justify-center border border-navy px-6 text-sm font-semibold text-navy transition-colors duration-300 hover:bg-navy hover:text-white"
              }
            >
              {link.label}
              {index === 0 ? (
                <ArrowRight aria-hidden="true" className="size-4 text-gold transition-transform duration-300 group-hover:translate-x-1" />
              ) : null}
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
