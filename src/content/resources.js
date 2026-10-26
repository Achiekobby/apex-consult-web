export const insightArticle = {
  slug: "ready-for-digital-transformation",
  title: "7 Signs Your Business Is Ready for Digital Transformation",
  summary:
    "A practical check for leaders deciding whether to invest in technology change, without assuming a tool will fix an unclear process.",
  sections: [
    {
      heading: "The process is understood",
      body: "People can describe how work moves today, including the handoffs and the delays. Transformation has somewhere specific to start.",
    },
    {
      heading: "Leaders will stay with the change",
      body: "A named sponsor can make decisions, protect time for the work, and explain why the change matters to the business.",
    },
    {
      heading: "The pain is measurable",
      body: "Slow response times, rework, missed enquiries, or reporting delays can be pointed at. A project needs a result it can be judged against.",
    },
    {
      heading: "The data has an owner",
      body: "Someone knows where customer, finance, or operational records live, and who is allowed to change them.",
    },
    {
      heading: "Teams can adopt a new way of working",
      body: "Staff have, or can be given, the time and training to use the new process. Software that nobody is prepared to learn will sit idle.",
    },
    {
      heading: "Security and privacy are part of the brief",
      body: "The organisation can say what information is sensitive and who should see it before a system is designed around that information.",
    },
    {
      heading: "There is a next step, not only a slogan",
      body: "Readiness looks like a bounded first initiative: one service, one workflow, or one customer journey, with a person accountable for it.",
    },
  ],
}

export const faqs = [
  {
    question: "Who do you serve?",
    answer:
      "SMEs, telecoms, banks, fintechs, enterprises, public institutions, and other organisations that are changing how they use technology.",
  },
  {
    question: "Can you develop custom software?",
    answer:
      "Custom development is included in the proposed portfolio. Apex Point first assesses requirements and delivery scope.",
  },
  {
    question: "Do you offer support after implementation?",
    answer:
      "Support can be included in an agreed maintenance or managed-services arrangement.",
  },
  {
    question: "Can I request a consultation?",
    answer:
      "Yes. Use the contact form to describe your challenge and preferred contact details.",
  },
  {
    question: "Do you offer training?",
    answer:
      "Planned topics include software engineering, IT service management, project management, and cybersecurity.",
  },
  {
    question: "Do you provide CCTV and security systems?",
    answer:
      "The proposed security offering includes CCTV, access control, and electronic security integration.",
  },
]

export const resourceSections = [
  {
    slug: "insights",
    label: "Insights",
    title: "Insights & Articles",
    summary:
      "Practical perspectives on technology strategy, cloud, cybersecurity, fintech, software, and leadership.",
    article: insightArticle,
  },
  {
    slug: "news",
    label: "News",
    title: "News & Updates",
    summary:
      "Company announcements, service introductions, events, and relevant industry developments.",
    empty:
      "There are no announcements to publish yet. News will appear here when Apex Point has an update to share.",
  },
  {
    slug: "case-studies",
    label: "Case Studies",
    title: "Case Studies & Success Stories",
    summary:
      "Client-approved stories of a challenge, the work undertaken, and the measured outcome.",
    empty:
      "No case studies are published yet. A story will appear here only after the client has authorised it.",
  },
  {
    slug: "downloads",
    label: "Downloads",
    title: "Downloads",
    summary:
      "The company profile, service brochures, checklists, white papers, and training schedules.",
    empty:
      "Downloads will be added when an approved company profile or brochure is ready to share.",
  },
  {
    slug: "faqs",
    label: "FAQs",
    title: "FAQs",
    summary:
      "Answers to common questions about services, delivery, support, and training.",
    faqs,
  },
]

export function getResourceSection(slug) {
  return resourceSections.find((section) => section.slug === slug)
}
