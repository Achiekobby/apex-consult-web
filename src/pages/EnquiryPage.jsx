import { Clock, MapPin, MessageCircle, Phone, Mail } from "lucide-react"
import CalendlyEmbed from "../components/CalendlyEmbed"
import EnquiryForm from "../components/EnquiryForm"
import ContactDetailValue from "../components/ui/ContactDetailValue"
import ImageSlot from "../components/ui/ImageSlot"
import Reveal from "../components/ui/Reveal"
import SectionHeading from "../components/ui/SectionHeading"
import { enquiryPages } from "../content/enquiry"
import { contactDetails } from "../content/site"
import PageFrame from "../layout/PageFrame"

const detailIcons = {
  "Registered office": MapPin,
  Telephone: Phone,
  "Business email": Mail,
  WhatsApp: MessageCircle,
  "Business hours": Clock,
}

const steps = [
  { title: "Tell us what you need", body: "Describe the challenge and how you prefer to be contacted." },
  { title: "We review it", body: "Our team reads the information you provide." },
  { title: "We respond", body: "A reply comes through the contact details you gave." },
]

const bookingSteps = [
  { title: "Choose a time", body: "Open slots are shown in your own timezone." },
  { title: "Leave your details", body: "Your name and email stay with the booking." },
  { title: "Meet Apex Point", body: "A confirmation arrives with the time you picked." },
]

export default function EnquiryPage({ intent }) {
  const page = enquiryPages[intent]

  return (
    <PageFrame
      bare
      eyebrow={page.eyebrow}
      title={page.title}
      summary={page.summary}
      documentTitle={page.documentTitle}
      metaDescription={page.metaDescription}
      breadcrumbs={
        intent === "general"
          ? [{ label: "Home", to: "/" }, { label: "Contact Us" }]
          : [{ label: "Home", to: "/" }, { label: "Contact Us", to: "/contact-us" }, { label: page.title }]
      }
    >
      {intent === "general" ? (
        <section className="bg-mist" aria-labelledby="book-heading">
          <div className="mx-auto grid max-w-8xl items-start gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-14">
            <div className="lg:sticky lg:top-28 lg:col-span-4">
              <SectionHeading
                id="book-heading"
                eyebrow="Book a time"
                title="Choose a time that suits you."
                intro="Reserve a conversation with Apex Point. The scheduler confirms the time as soon as you finish."
              />
              <ol className="mt-8 space-y-5">
                {bookingSteps.map((step, index) => (
                  <li key={step.title} className="flex items-start gap-4">
                    <span className="grid size-8 shrink-0 place-items-center rounded-sm bg-navy text-sm font-bold text-white tabular-nums">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-navy">{step.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-navy/70">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <Reveal delay={0.1} className="lg:col-span-8">
              <div className="overflow-hidden rounded-md border border-navy/10 bg-white shadow-[0_24px_60px_-28px_rgba(0,20,73,0.35)]">
                <div className="h-px bg-gold" aria-hidden="true" />
                <CalendlyEmbed />
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="bg-white" aria-label="Enquiry form">
        <div className="mx-auto grid max-w-8xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-14">
          {intent === "general" ? (
            <div className="lg:col-span-12">
              <SectionHeading
                eyebrow="Prefer to write"
                title="Send a message instead."
                intro="Use the form for a project note, a quotation, or a question that does not need a meeting."
              />
            </div>
          ) : null}
          <Reveal className="lg:col-span-7 lg:order-1">
            <div className="rounded-md border border-navy/10 bg-white p-6 shadow-[0_24px_60px_-28px_rgba(0,20,73,0.3)] sm:p-10">
              <EnquiryForm defaultType={page.enquiryType} />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:order-2 lg:col-span-5">
            <div className="relative isolate overflow-hidden rounded-md bg-navy text-white lg:sticky lg:top-28">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 -right-16 -z-10 size-64 rounded-full bg-blue/50 blur-[80px]"
              />
              <div className="absolute inset-x-0 top-0 z-10 h-px bg-gold" aria-hidden="true" />

              <div className="relative aspect-[16/9] overflow-hidden">
                <ImageSlot name="contact/main" tone="dark" hint="1200×675 · 16:9" />
              </div>

              <div className="p-7 sm:p-9">
                <h2 className="text-2xl font-bold tracking-[-0.03em] text-white">What happens next</h2>
                <ol className="mt-6 space-y-5">
                  {steps.map((step, index) => (
                    <li key={step.title} className="flex items-start gap-4">
                      <span className="grid size-8 shrink-0 place-items-center rounded-sm bg-gold text-sm font-bold text-navy tabular-nums">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-white">{step.title}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-mist">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <h2 className="mt-9 border-t border-white/20 pt-8 text-sm font-semibold tracking-[0.14em] text-gold uppercase">
                  Company details
                </h2>
                <ul className="mt-4 space-y-3">
                  {contactDetails.map((detail) => {
                    const Icon = detailIcons[detail.label] ?? Mail
                    return (
                      <li key={detail.label} className="flex items-start gap-3 text-sm">
                        <Icon aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold" />
                        <span>
                          <span className="block text-mist">{detail.label}</span>
                          <ContactDetailValue
                            detail={detail}
                            linkClassName="inline-flex min-h-11 items-center font-medium text-white transition-colors duration-200 hover:text-gold"
                            plainClassName="inline-flex min-h-11 items-center font-medium text-white"
                          />
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageFrame>
  )
}
