import { enquiryAcknowledgement, enquiryTypes } from "./enquiry"
import { services } from "./services"

const destination = "info@apexpoint.com"

const failureMessage =
  "The message could not be sent. Try again in a moment, or email info@apexpoint.com directly."

function labelFrom(list, value, key) {
  return list.find((item) => item[key] === value)
}

export async function submitEnquiry(enquiry) {
  const service = labelFrom(services, enquiry.service, "slug")
  const enquiryType = labelFrom(enquiryTypes, enquiry.enquiryType, "value")

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(destination)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `Apex Point website enquiry from ${enquiry.fullName.trim()}`,
        _template: "table",
        _captcha: "false",
        _replyto: enquiry.email.trim(),
        _honey: enquiry.honey ?? "",
        "Full name": enquiry.fullName.trim(),
        Organisation: enquiry.organisation.trim() || "Not provided",
        "Business email": enquiry.email.trim(),
        "Telephone or WhatsApp": enquiry.phone.trim() || "Not provided",
        "Service of interest": service?.navLabel ?? enquiry.service,
        "Enquiry type": enquiryType?.label ?? enquiry.enquiryType,
        "Project description": enquiry.description.trim(),
        "Budget or timeline": enquiry.budget.trim() || "Not provided",
        "Privacy consent": "Yes",
      }),
    })

    const data = await response.json().catch(() => ({}))
    const delivered = response.ok && (data.success === true || data.success === "true")
    const needsActivation = typeof data.message === "string" && /activation/i.test(data.message)

    return {
      delivered,
      message: delivered
        ? enquiryAcknowledgement
        : needsActivation
          ? "The enquiry inbox is not confirmed yet. Email info@apexpoint.com directly, then try this form again after that inbox is confirmed."
          : failureMessage,
    }
  } catch {
    return { delivered: false, message: failureMessage }
  }
}
