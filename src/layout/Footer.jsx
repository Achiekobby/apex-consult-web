import { Link } from "react-router"
import { company, contactDetails, legalLinks, primaryNav } from "../content/site"
import { services } from "../content/services"

const linkClass =
  "inline-flex min-h-11 items-center text-sm text-mist transition-colors duration-200 hover:text-gold"

const headingClass = "text-sm font-semibold tracking-[0.14em] text-gold uppercase"

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-navy text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gold" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-32 -z-10 size-[28rem] rounded-full bg-blue/30 blur-[120px]"
      />

      <div className="mx-auto grid max-w-8xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <p className={headingClass}>{company.legalName}</p>
          <p className="mt-5 max-w-xs text-2xl leading-tight font-bold tracking-[-0.03em] text-balance text-white">
            {company.tagline}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">{company.footerLine}</p>
        </div>

        <nav aria-label="Quick links" className="lg:col-span-2">
          <h2 className={headingClass}>Quick links</h2>
          <ul className="mt-4">
            {primaryNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services" className="lg:col-span-3">
          <h2 className={headingClass}>Services</h2>
          <ul className="mt-4">
            {services.map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`} className={linkClass}>
                  {service.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className={headingClass}>Contact</h2>
          <ul className="mt-5 space-y-4 text-sm text-white">
            {contactDetails.map((detail) => (
              <li key={detail.label} className="border-l border-white/20 pl-4">
                <span className="block text-mist">{detail.label}</span>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-gold"
                    {...(detail.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {detail.value}
                  </a>
                ) : (
                  detail.value
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-8xl flex-col gap-3 px-4 py-5 text-sm text-mist sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link key={link.to} to={link.to} className="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-gold">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
