import { services } from "./services"
import { solutions } from "./solutions"
import { resourceSections } from "./resources"
import { legalPages } from "./legal"

export const company = {
  legalName: "APEX POINT CONSULT LTD",
  shortName: "Apex Point",
  tagline: "Empowering Business Through Technology",
  footerLine:
    "Technology that works. Solutions that matter. Partnerships that last.",
}

export const proposedOfferingNote =
  "We transform complex business challenges into intuitive, reliable digital solutions that connect people, processes, and technology."

const phoneLines = [
  { value: "0558148715", tel: "tel:+233558148715", whatsapp: "https://wa.me/233558148715" },
  { value: "0266000912", tel: "tel:+233266000912", whatsapp: "https://wa.me/233266000912" },
]

export const contactDetails = [
  { label: "Registered office", value: "Accra, Ghana" },
  {
    label: "Telephone",
    links: phoneLines.map((line) => ({ value: line.value, href: line.tel })),
  },
  { label: "Business email", value: "info@apexpoint.com", href: "mailto:info@apexpoint.com" },
  {
    label: "WhatsApp",
    links: phoneLines.map((line) => ({ value: line.value, href: line.whatsapp })),
  },
  { label: "Business hours", value: "9:00 AM - 5:00 PM GMT" },
]

export const primaryNav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  {
    label: "Our Services",
    to: "/services",
    children: services.map((service) => ({
      label: service.navLabel,
      to: `/services/${service.slug}`,
    })),
  },
  {
    label: "Our Solutions",
    to: "/solutions",
    children: solutions.map((solution) => ({
      label: solution.navLabel,
      to: `/solutions/${solution.slug}`,
    })),
  },
  {
    label: "Resources",
    to: "/resources",
    children: resourceSections.map((section) => ({
      label: section.label,
      to: `/resources/${section.slug}`,
    })),
  },
  { label: "Contact Us", to: "/contact-us" },
]

export const legalLinks = Object.values(legalPages).map((page) => ({
  label: page.title,
  to: page.path,
}))
