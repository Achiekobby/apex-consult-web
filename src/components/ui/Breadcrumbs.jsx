import { ChevronRight } from "lucide-react"
import { Link } from "react-router"

export default function Breadcrumbs({ items, tone = "light" }) {
  if (!items?.length) return null
  const dark = tone === "dark"

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2 text-sm">
        {items.map((item, index) => {
          const last = index === items.length - 1
          return (
            <li key={item.label} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className={`py-2 font-semibold ${dark ? "text-white" : "text-navy"}`}>
                  {item.label}
                </span>
              ) : (
                <>
                  <Link
                    to={item.to}
                    className={`py-2 transition-colors duration-200 ${
                      dark ? "text-mist hover:text-gold" : "text-navy/70 hover:text-blue"
                    }`}
                  >
                    {item.label}
                  </Link>
                  <ChevronRight aria-hidden="true" className={`size-3.5 ${dark ? "text-mist/60" : "text-navy/40"}`} />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
