import { useEffect, useId, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ChevronDown, Menu, X } from "lucide-react"
import { createPortal } from "react-dom"
import { Link, NavLink, useLocation } from "react-router"
import logo from "../assets/images/logo.png"
import { company, primaryNav } from "../content/site"

const contactItem = primaryNav.find((item) => item.to === "/contact-us")
const menuItems = primaryNav.filter((item) => item.to !== "/contact-us")

function itemIsActive(pathname, to) {
  if (to === "/") return pathname === "/"
  return pathname === to || pathname.startsWith(`${to}/`)
}

function linkClass(active, contact) {
  if (contact) {
    return "inline-flex min-h-11 items-center bg-blue px-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-navy"
  }

  return [
    "relative inline-flex min-h-11 items-center px-3 text-sm font-medium text-navy transition-colors duration-200 hover:text-blue",
    "after:absolute after:right-3 after:bottom-1 after:left-3 after:h-0.5 after:origin-left after:bg-gold after:transition-transform after:duration-200",
    active ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100",
  ].join(" ")
}

function NavGroup({ item, open, onOpen, onClose, reduceMotion }) {
  const panelId = useId()
  const { pathname } = useLocation()
  const active = itemIsActive(pathname, item.to)

  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) onClose()
      }}
    >
      <div className="flex items-center">
        <NavLink to={item.to} className={linkClass(active)} onFocus={onOpen}>
          {item.label}
        </NavLink>
        <button
          type="button"
          className="inline-flex size-11 cursor-pointer items-center justify-center text-navy"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${open ? "Hide" : "Show"} ${item.label} menu`}
          onClick={() => (open ? onClose() : onOpen())}
        >
          <ChevronDown
            aria-hidden="true"
            className={`size-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            id={panelId}
            className="absolute top-full left-0 z-30 w-72 pt-2"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.18, ease: "easeOut" }}
          >
            <ul className="border border-mist bg-white p-2 shadow-[0_16px_40px_rgba(0,20,73,0.12)]">
              {item.children.map((child) => (
                <li key={child.to}>
                  <NavLink
                    to={child.to}
                    className="flex min-h-11 items-center px-3 text-sm font-medium text-navy transition-colors duration-200 hover:bg-mist"
                  >
                    {child.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

function MobileNav({ id, onClose, section, onToggleSection, reduceMotion }) {
  const { pathname } = useLocation()

  return (
    <motion.div
      id={id}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="fixed inset-0 z-50 flex h-dvh flex-col bg-navy xl:hidden"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
      onKeyDown={(event) => {
        if (event.key === "Escape") onClose()
      }}
    >
      <div className="flex items-center justify-between border-b-2 border-gold bg-white px-4 py-3 sm:px-6">
        <Link to="/" className="relative block h-12 w-52 overflow-hidden" onClick={onClose}>
          <img
            src={logo}
            alt="Apex Point Consult Ltd"
            className="absolute top-1/2 w-full -translate-y-1/2"
          />
        </Link>
        <button
          type="button"
          className="inline-flex size-11 cursor-pointer items-center justify-center text-navy"
          aria-label="Close menu"
          autoFocus
          onClick={onClose}
        >
          <X aria-hidden="true" className="size-6" />
        </button>
      </div>

      <motion.ul
        className="flex-1 overflow-y-auto px-6 py-8"
        initial="hidden"
        animate="show"
        variants={{
          show: {
            transition: { staggerChildren: reduceMotion ? 0 : 0.045, delayChildren: reduceMotion ? 0 : 0.05 },
          },
        }}
      >
        {menuItems.map((item) => {
          const active = itemIsActive(pathname, item.to)
          const expanded = section === item.to

          return (
            <motion.li
              key={item.to}
              className="border-b border-white/15"
              variants={{
                hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: reduceMotion ? 0 : 0.28, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between gap-3">
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={`inline-flex min-h-14 flex-1 items-center text-2xl font-semibold ${active ? "text-gold" : "text-white"}`}
                  onClick={onClose}
                >
                  {item.label}
                </NavLink>
                {item.children ? (
                  <button
                    type="button"
                    className="inline-flex size-11 cursor-pointer items-center justify-center text-gold"
                    aria-expanded={expanded}
                    aria-label={`${expanded ? "Hide" : "Show"} ${item.label} pages`}
                    onClick={() => onToggleSection(item.to)}
                  >
                    <ChevronDown
                      aria-hidden="true"
                      className={`size-5 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : null}
              </div>
              <AnimatePresence initial={false}>
                {item.children && expanded ? (
                  <motion.ul
                    className="overflow-hidden pb-3"
                    initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
                  >
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <NavLink
                          to={child.to}
                          className={`flex min-h-11 items-center border-l-2 pl-4 text-base ${
                            pathname === child.to ? "border-gold text-gold" : "border-white/20 text-mist"
                          }`}
                          onClick={onClose}
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </motion.ul>
                ) : null}
              </AnimatePresence>
            </motion.li>
          )
        })}
      </motion.ul>

      <div className="border-t border-white/15 px-6 py-5">
        <Link
          to={contactItem.to}
          className="inline-flex min-h-12 w-full items-center justify-center bg-blue text-base font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-navy"
          onClick={onClose}
        >
          {contactItem.label}
        </Link>
        <p className="mt-3 text-sm text-gold">{company.tagline}</p>
      </div>
    </motion.div>
  )
}

export default function Header() {
  const location = useLocation()
  const reduceMotion = useReducedMotion()
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState(null)
  const [path, setPath] = useState(location.pathname)
  const mobileNavId = useId()

  if (path !== location.pathname) {
    setPath(location.pathname)
    setOpenMenu(null)
    setMobileOpen(false)
    setMobileSection(null)
  }

  useEffect(() => {
    if (!mobileOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileOpen])

  useEffect(() => {
    const media = window.matchMedia("(min-width: 80rem)")
    const closeOnDesktop = () => {
      if (media.matches) setMobileOpen(false)
    }

    media.addEventListener("change", closeOnDesktop)
    return () => media.removeEventListener("change", closeOnDesktop)
  }, [])

  function closeMenus() {
    setOpenMenu(null)
    setMobileOpen(false)
    setMobileSection(null)
  }

  return (
    <header
      className="sticky top-0 z-40 border-b-2 border-gold bg-white"
      onKeyDown={(event) => {
        if (event.key === "Escape") closeMenus()
      }}
    >
      <div className="mx-auto flex max-w-8xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="relative block h-12 w-52 shrink-0 overflow-hidden" onClick={closeMenus}>
          <img
            src={logo}
            alt="Apex Point Consult Ltd"
            className="absolute top-1/2 w-full -translate-y-1/2"
          />
        </Link>

        <nav className="hidden items-center xl:flex" aria-label="Primary">
          {primaryNav.map((item) =>
            item.children ? (
              <NavGroup
                key={item.to}
                item={item}
                open={openMenu === item.to}
                reduceMotion={reduceMotion}
                onOpen={() => setOpenMenu(item.to)}
                onClose={() => setOpenMenu(null)}
              />
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) => linkClass(isActive, item.to === "/contact-us")}
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <button
          type="button"
          className="inline-flex size-11 cursor-pointer items-center justify-center text-navy xl:hidden"
          aria-expanded={mobileOpen}
          aria-controls={mobileNavId}
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu aria-hidden="true" className="size-6" />
        </button>
      </div>

      {createPortal(
        <AnimatePresence>
          {mobileOpen ? (
            <MobileNav
              id={mobileNavId}
              reduceMotion={reduceMotion}
              section={mobileSection}
              onClose={closeMenus}
              onToggleSection={(to) => setMobileSection((current) => (current === to ? null : to))}
            />
          ) : null}
        </AnimatePresence>,
        document.body,
      )}
    </header>
  )
}
