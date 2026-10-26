import { useEffect, useId, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { calendlyBookingUrl } from "../content/enquiry"

const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js"

const calendlyUrl = `${calendlyBookingUrl}?${new URLSearchParams({
  background_color: "ffffff",
  text_color: "001449",
  primary_color: "001449",
}).toString()}`

export default function CalendlyEmbed() {
  const widgetRef = useRef(null)
  const statusId = useId()
  const [status, setStatus] = useState("loading")

  useEffect(() => {
    const parent = widgetRef.current
    let cancelled = false

    const init = () => {
      if (cancelled || !parent || !window.Calendly) return
      parent.replaceChildren()
      window.Calendly.initInlineWidget({
        url: calendlyUrl,
        parentElement: parent,
        resize: true,
      })
      const frame = parent.querySelector("iframe")
      if (!frame) {
        setStatus("error")
        return
      }
      frame.title = "Book a time with Apex Point"
      frame.addEventListener(
        "load",
        () => {
          if (!cancelled) setStatus("ready")
        },
        { once: true },
      )
    }

    const onError = () => {
      if (!cancelled) setStatus("error")
    }

    let script = document.querySelector(`script[src="${SCRIPT_SRC}"]`)
    if (!script) {
      script = document.createElement("script")
      script.src = SCRIPT_SRC
      script.async = true
      document.body.appendChild(script)
    }

    if (window.Calendly) init()
    else {
      script.addEventListener("load", init)
      script.addEventListener("error", onError)
    }

    return () => {
      cancelled = true
      script.removeEventListener("load", init)
      script.removeEventListener("error", onError)
      parent?.replaceChildren()
    }
  }, [])

  return (
    <div className="relative min-h-[700px] bg-white">
      <div ref={widgetRef} className="min-h-[700px] w-full min-w-[320px]" />
      {status !== "ready" ? (
        <div className="absolute inset-0 grid place-items-center bg-white px-6 text-center">
          {status === "error" ? (
            <div className="max-w-sm">
              <p className="text-lg font-bold tracking-[-0.03em] text-navy">The calendar could not be loaded.</p>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">
                Open the scheduler in a new tab and choose a time there.
              </p>
              <a
                href={calendlyBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-12 items-center justify-center gap-3 bg-navy px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue"
              >
                Open the scheduler
                <ArrowRight aria-hidden="true" className="size-4 text-gold" />
              </a>
            </div>
          ) : (
            <p id={statusId} role="status" className="text-sm font-semibold tracking-[0.14em] text-navy uppercase">
              Opening the calendar
            </p>
          )}
        </div>
      ) : null}
    </div>
  )
}
