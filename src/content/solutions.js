export const solutions = [
  {
    slug: "enterprise-applications",
    navLabel: "Enterprise Apps",
    title: "Enterprise Applications & Automation",
    summary:
      "Tailored business applications, portals, workflow automation, and reporting for organisations held back by manual work.",
    challenge:
      "Manual workflows, fragmented information, and inefficient customer processes.",
    proposedSolution:
      "Tailored business applications, portals, workflow automation, CRM connectivity, and reporting dashboards.",
    benefits: "Improved productivity, data visibility, and customer service.",
    suitableClients: "SMEs, corporate organisations, and institutions.",
  },
  {
    slug: "digital-payments",
    navLabel: "Digital Payments",
    title: "Digital Payments & Financial Integrations",
    summary:
      "Payment and partner integrations, including mobile money and USSD journeys, delivered with authorised providers.",
    challenge: "Disconnected payment channels and difficult partner integrations.",
    proposedSolution:
      "Payment gateway integrations, bank and mobile money connectivity, digital collection channels, USSD payment journeys, and secure API integration with authorised partners.",
    benefits:
      "More convenient payment experiences, better reconciliation, and faster service enablement.",
    suitableClients: "Fintechs, merchants, payment providers, and enterprises.",
  },
  {
    slug: "business-communications",
    navLabel: "Communications",
    title: "Business Communications & Customer Engagement",
    summary:
      "Hosted voice, IVR, and messaging so customer enquiries are easier to receive and answer.",
    challenge:
      "Missed customer enquiries and fragmented business communications.",
    proposedSolution:
      "Hosted PBX, virtual call centres, IVR, SMS and USSD applications, and customer engagement integrations.",
    benefits: "Better reachability, responsiveness, and customer experience.",
    suitableClients: "Customer service teams, SMEs, and enterprises.",
  },
  {
    slug: "cloud-hosting",
    navLabel: "Cloud & Hosting",
    title: "Cloud, Hosting & Business Continuity",
    summary:
      "Migration, managed hosting, email, backup, and recovery for organisations modernising their IT.",
    challenge:
      "Unreliable hosting, limited capacity, and inadequate recovery arrangements.",
    proposedSolution:
      "Cloud migration, managed application hosting, email, backup, disaster recovery, and infrastructure optimisation.",
    benefits: "Greater availability, scalability, and continuity.",
    suitableClients: "Growing organisations modernising IT.",
  },
  {
    slug: "cybersecurity",
    navLabel: "Cybersecurity",
    title: "Cybersecurity & Digital Trust",
    summary:
      "Risk reviews, policies, access controls, and awareness support for organisations that need stronger digital trust.",
    challenge: "Exposure to cyber risks and weak governance practices.",
    proposedSolution:
      "Risk reviews, security policies, access controls, cyber awareness, and compliance-readiness support.",
    benefits: "Stronger protection and greater stakeholder confidence.",
    suitableClients: "Regulated entities and enterprises.",
  },
  {
    slug: "smart-security",
    navLabel: "Smart Security",
    title: "Smart Surveillance & Access Control",
    summary:
      "CCTV, biometric entry, alarms, and remote viewing for sites that need clearer control of their premises.",
    challenge:
      "Limited physical visibility and unmanaged access to facilities.",
    proposedSolution:
      "CCTV, biometric entry, alarms, remote viewing, and integrated electronic security.",
    benefits: "Better site monitoring, controlled entry, and incident detection.",
    suitableClients:
      "Offices, residential properties, institutions, and commercial facilities.",
    constraint:
      "",
  },
]

export function getSolution(slug) {
  return solutions.find((solution) => solution.slug === slug)
}
