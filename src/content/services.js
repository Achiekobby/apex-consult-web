export const services = [
  {
    slug: "business-consulting",
    navLabel: "Business Consulting",
    title: "Business Consulting & Advisory",
    headline: "Turning Business Challenges into Strategic Opportunities.",
    summary:
      "Technology strategy, operating advice, and transformation planning for organisations that need clearer investment decisions.",
    offerings: [
      "Technology strategy, digital transformation, and enterprise architecture",
      "Business process review, redesign, optimisation, and automation",
      "Telecommunications value-added services and digital financial services advisory",
      "IT operations, ITIL-aligned service management, and delivery improvement",
      "Cybersecurity, technology risk, and resilience consulting",
      "Project, programme, and portfolio management / PMO advisory",
      "Governance, regulatory, and compliance advisory for telecoms, fintech, and digital business",
      "Fractional CIO / CTO and executive technology leadership",
    ],
    benefits:
      "Better investment decisions, stronger governance, reduced risk, and clearer transformation plans.",
  },
  {
    slug: "software-development",
    navLabel: "Software Development",
    title: "Software Development & Digital Solutions",
    headline: "We Build Digital Solutions Around Your Business.",
    summary:
      "Custom software, websites, mobile apps, and integrations shaped around the way an organisation actually works.",
    offerings: [
      "Custom enterprise software and business applications",
      "Responsive websites and web applications",
      "Mobile application design and development",
      "USSD and SMS applications",
      "UI/UX research and interface design",
      "API development and third-party system integration",
      "Software testing, upgrades, maintenance, and technical support",
    ],
    benefits:
      "Streamlined workflows, improved customer experience, and scalable digital delivery.",
    constraint:
      "",
  },
  {
    slug: "cloud-managed-services",
    navLabel: "Cloud & Managed IT",
    title: "Cloud Hosting, Infrastructure & Managed IT",
    headline: "Reliable Infrastructure. Seamless Operations. Business Continuity.",
    summary:
      "Cloud, hosting, networks, and managed support for organisations that need steadier operations.",
    offerings: [
      "IT infrastructure, networks, and data-centre services",
      "Cloud architecture, migration, hosting, and optimisation",
      "Website, business email, USSD, and SMS gateway application hosting",
      "Hosted IVR, virtual PBX / IP-PBX, and business communications",
      "Backup, disaster recovery, and business continuity",
      "Managed IT support, monitoring, maintenance, and service management",
    ],
    benefits:
      "Greater availability, resilience, flexibility, and support predictability.",
  },

  {
    slug: "security-systems",
    navLabel: "Security Systems",
    title: "Security Systems & Solutions",
    headline: "Protecting People, Property and Business Assets.",
    summary:
      "A proposed physical-security offering covering cameras, access control, alarms, and the network behind them.",
    offerings: [
      "CCTV: IP and analogue cameras, NVRs, DVRs, and storage",
      "Biometric access, RFID, smart locks, and visitor management",
      "Burglar alarms, motion sensors, and perimeter alerts",
      "Remote viewing, monitoring setup, and surveillance integration",
      "Hardware sourcing, installation, configuration, and maintenance",
      "Structured cabling, PoE switches, networking, and peripherals",
    ],
    benefits:
      "Improved visibility, controlled access, and enhanced physical security.",
    constraint:
      "Describe this offering as proposed until delivery readiness is confirmed.",
  },
  {
    slug: "governance-cybersecurity",
    navLabel: "Governance & Cybersecurity",
    title: "Governance, Risk & Cybersecurity Enablement",
    headline: "Building Trust Through Security, Governance and Resilience.",
    summary:
      "Advisory support for technology risk, security policy, privacy, and business continuity.",
    offerings: [
      "IT governance and technology risk assessments",
      "Security policy, identity and access control, and cyber hygiene advisory",
      "Data protection and privacy programme support",
      "Business continuity and disaster recovery planning",
      "Vendor and third-party risk reviews",
      "Security awareness and compliance-readiness support",
    ],
    benefits:
      "Better risk visibility, stronger controls, and improved resilience.",
  },
  {
    slug: "coaching-training",
    navLabel: "Coaching & Training",
    title: "Coaching, Training & Professional Development",
    headline: "Developing Skills. Building Confidence. Empowering Professionals.",
    summary:
      "Practical training, coaching, and mentoring for teams adopting new technology and ways of working.",
    offerings: [
      "Software development: PHP, Laravel, React, Java, Bootstrap, Python, SQL, and MongoDB",
      "IT service management and ITIL-aligned practices",
      "Project management, Agile, Scrum, PRINCE2, and PMP-aligned preparation",
      "Cybersecurity, ethical hacking, and penetration testing fundamentals",
      "Data protection, privacy, and cyber awareness",
      "Tailored corporate workshops, leadership coaching, and mentoring",
    ],
    benefits:
      "Improved workplace capability and better adoption of technology.",
    constraint:
      "",
  },
]

export function getService(slug) {
  return services.find((service) => service.slug === slug)
}
