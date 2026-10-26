import { Outlet } from "react-router"
import Footer from "./Footer"
import Header from "./Header"
import ScrollToTop from "./ScrollToTop"

export default function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <a
        href="#main"
        className="absolute top-0 left-4 z-50 -translate-y-full bg-navy px-4 py-3 text-sm font-medium text-white focus:translate-y-4"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
