import { Route, Routes } from "react-router"
import SiteLayout from "../layout/SiteLayout"
import AboutPage from "../pages/AboutPage"
import EnquiryPage from "../pages/EnquiryPage"
import HomePage from "../pages/HomePage"
import LegalPage from "../pages/LegalPage"
import NotFoundPage from "../pages/NotFoundPage"
import ResourceSectionPage from "../pages/ResourceSectionPage"
import ResourcesPage from "../pages/ResourcesPage"
import ServiceDetailPage from "../pages/ServiceDetailPage"
import ServicesPage from "../pages/ServicesPage"
import SolutionDetailPage from "../pages/SolutionDetailPage"
import SolutionsPage from "../pages/SolutionsPage"

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about-us" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:slug" element={<ServiceDetailPage />} />
        <Route path="solutions" element={<SolutionsPage />} />
        <Route path="solutions/:slug" element={<SolutionDetailPage />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="resources/:section" element={<ResourceSectionPage />} />
        <Route path="contact-us" element={<EnquiryPage intent="general" />} />
        <Route path="request-quote" element={<EnquiryPage intent="quotation" />} />
        <Route path="book-consultation" element={<EnquiryPage intent="consultation" />} />
        <Route path="privacy-policy" element={<LegalPage pageKey="privacy" />} />
        <Route path="terms-of-use" element={<LegalPage pageKey="terms" />} />
        <Route path="cookie-policy" element={<LegalPage pageKey="cookies" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
