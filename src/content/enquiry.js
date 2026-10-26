export const calendlyBookingUrl = "https://calendly.com/johnny-ofori/apex-point-meeting"

export const enquiryTypes = [
  { value: "consultation", label: "Consultation" },
  { value: "quotation", label: "Quotation" },
  { value: "training", label: "Training" },
  { value: "security-assessment", label: "Security assessment" },
  { value: "general", label: "General enquiry" },
]

export const enquiryPages = {
  general: {
    path: "/contact-us",
    documentTitle: "Contact Apex Point Consult Ltd | Request a Consultation",
    metaDescription:
      "Contact Apex Point Consult Ltd about a technology challenge, transformation project, or business opportunity.",
    eyebrow: "Contact Us",
    title: "Let’s Talk About Your Next Big Idea.",
    summary:
      "Have a technology challenge, transformation project, or business opportunity? Tell us what you need and we will explore an appropriate next step.",
    enquiryType: "general",
  },
  quotation: {
    path: "/request-quote",
    documentTitle: "Request a Quote | Apex Point Consult Ltd",
    metaDescription:
      "Request a quotation from Apex Point Consult Ltd for a proposed technology service.",
    eyebrow: "Contact Us",
    title: "Request a Quote",
    summary:
      "Describe the service and the work you want priced. The request is emailed to Apex Point.",
    enquiryType: "quotation",
  },
  consultation: {
    path: "/book-consultation",
    documentTitle: "Book a Consultation | Apex Point Consult Ltd",
    metaDescription:
      "Book a consultation with Apex Point Consult Ltd to discuss a technology challenge.",
    eyebrow: "Contact Us",
    title: "Book a Consultation",
    summary:
      "Share the challenge you want to talk through and how you prefer to be contacted.",
    enquiryType: "consultation",
  },
}

export const enquiryAcknowledgement =
  "Thank you for contacting APEX POINT CONSULT LTD. Your enquiry has been sent to info@apexpoint.com. Our team will review it and respond through the contact details you provided."
