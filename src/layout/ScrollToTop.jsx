import { useEffect } from "react"
import { useLocation } from "react-router"

/** Resets scroll on route changes (the global `scroll-behavior: smooth` would otherwise animate it). */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [pathname, hash])

  return null
}
