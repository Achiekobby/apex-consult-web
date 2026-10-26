import { useEffect, useId, useRef, useState } from "react"
import { ArrowRight, CircleAlert, Info } from "lucide-react"
import { Link, useSearchParams } from "react-router"
import { enquiryAcknowledgement, enquiryTypes } from "../content/enquiry"
import { submitEnquiry } from "../content/submitEnquiry"
import { services } from "../content/services"

const emptyValues = {
  fullName: "",
  organisation: "",
  email: "",
  phone: "",
  service: "",
  enquiryType: "",
  description: "",
  budget: "",
  consent: false,
}

function validate(values) {
  const errors = {}

  if (!values.fullName.trim()) errors.fullName = "Enter your full name."
  if (!values.email.trim()) errors.email = "Enter a business email."
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter an email address like name@company.com."
  }
  if (values.phone.trim() && !/^[+()\d\s-]{7,}$/.test(values.phone.trim())) {
    errors.phone = "Use a telephone number with the country code."
  }
  if (!values.service) errors.service = "Choose a service of interest."
  if (!values.enquiryType) errors.enquiryType = "Choose an enquiry type."
  if (!values.description.trim()) errors.description = "Describe the project or challenge."
  if (!values.consent) errors.consent = "Confirm that you have read the privacy policy."

  return errors
}

const fields = [
  ["fullName", "Full name"],
  ["email", "Business email"],
  ["phone", "Telephone or WhatsApp"],
  ["service", "Service of interest"],
  ["enquiryType", "Enquiry type"],
  ["description", "Project description"],
  ["consent", "Privacy consent"],
]

const controlClass =
  "mt-2 w-full rounded-sm border border-navy/25 bg-white px-3.5 text-base text-navy transition-colors duration-200 placeholder:text-navy/45 hover:border-navy/50 focus:border-blue aria-invalid:border-danger"

export default function EnquiryForm({ defaultType }) {
  const [params] = useSearchParams()
  const formId = useId()
  const summaryRef = useRef(null)
  const statusRef = useRef(null)
  const requestedService = params.get("service") ?? ""
  const serviceIsKnown = services.some((service) => service.slug === requestedService)
  const [values, setValues] = useState({
    ...emptyValues,
    service: serviceIsKnown ? requestedService : "",
    enquiryType: params.get("type") || defaultType,
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const honeyRef = useRef(null)

  useEffect(() => {
    if (Object.keys(errors).length > 0) summaryRef.current?.focus()
  }, [errors])

  useEffect(() => {
    if (status) statusRef.current?.focus()
  }, [status])

  function update(event) {
    const { name, type, checked, value } = event.target
    setValues((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (submitting) return

    const nextErrors = validate(values)
    setErrors(nextErrors)
    setStatus(null)
    if (Object.keys(nextErrors).length > 0) return

    if (honeyRef.current?.value) {
      setStatus({ type: "success", message: enquiryAcknowledgement })
      return
    }

    setSubmitting(true)
    try {
      const result = await submitEnquiry(values)
      setStatus({ type: result.delivered ? "success" : "error", message: result.message })
      if (result.delivered) {
        setValues({
          ...emptyValues,
          service: serviceIsKnown ? requestedService : "",
          enquiryType: params.get("type") || defaultType,
        })
      }
    } finally {
      setSubmitting(false)
    }
  }

  const field = (name) => ({
    name,
    formId,
    value: values[name],
    error: errors[name],
    onChange: update,
  })

  return (
    <form className="relative space-y-6" noValidate aria-busy={submitting} onSubmit={handleSubmit}>
      <input
        ref={honeyRef}
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
      />
      {Object.keys(errors).length > 0 ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="flex items-start gap-3 rounded border border-danger/40 bg-danger/5 p-4"
        >
          <CircleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-danger" />
          <div>
            <p className="font-semibold text-navy">Check the following before continuing.</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-navy">
              {fields
                .filter(([name]) => errors[name])
                .map(([name, label]) => (
                  <li key={name}>
                    <a href={`#${formId}-${name}`} className="font-medium">
                      {label}: {errors[name]}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ) : null}

      {status ? (
        <p
          ref={statusRef}
          tabIndex={-1}
          role="status"
          className={`flex items-start gap-3 rounded border p-4 text-sm leading-relaxed text-navy ${
            status.type === "error" ? "border-danger/40 bg-danger/5" : "border-gold/50 bg-gold/10"
          }`}
        >
          {status.type === "error" ? (
            <CircleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-danger" />
          ) : (
            <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
          )}
          {status.message}
        </p>
      ) : null}

      <p className="text-sm text-navy/70">
        Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <TextField label="Full name" autoComplete="name" required {...field("fullName")} />
        <TextField label="Organisation" autoComplete="organization" {...field("organisation")} />
        <TextField label="Business email" type="email" autoComplete="email" required {...field("email")} />
        <TextField label="Telephone or WhatsApp" type="tel" autoComplete="tel" {...field("phone")} />

        <SelectField label="Service of interest" required {...field("service")}>
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.navLabel}
            </option>
          ))}
        </SelectField>

        <SelectField label="Enquiry type" required {...field("enquiryType")}>
          {enquiryTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </SelectField>
      </div>

      <TextAreaField label="Project description" required {...field("description")} />

      <TextField label="Budget or timeline" hint="Optional." {...field("budget")} />

      <div>
        <label className="flex min-h-11 items-start gap-3" htmlFor={`${formId}-consent`}>
          <input
            id={`${formId}-consent`}
            name="consent"
            type="checkbox"
            checked={values.consent}
            onChange={update}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? `${formId}-consent-error` : undefined}
            className="mt-1 size-5 shrink-0 accent-blue"
            required
          />
          <span className="text-sm leading-relaxed text-navy">
            I have read the <Link to="/privacy-policy">privacy policy</Link> and agree to the enquiry details being stored so Apex Point can respond.
          </span>
        </label>
        {errors.consent ? (
          <p id={`${formId}-consent-error`} className="mt-2 text-sm font-medium text-danger">
            {errors.consent}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="group inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-3 bg-navy px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {submitting ? "Sending…" : "Send enquiry"}
        <ArrowRight aria-hidden="true" className="size-4 text-gold transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  )
}

/** Label + error/hint wrapper. `children` receives the props the control must spread. */
function Shell({ label, name, formId, error, hint, required = false, children }) {
  const id = `${formId}-${name}`
  const describedBy = [error ? `${id}-error` : "", hint ? `${id}-hint` : ""].filter(Boolean).join(" ")

  return (
    <div>
      <label className="block text-sm font-semibold text-navy" htmlFor={id}>
        {label}
        {required ? (
          <span aria-hidden="true" className="ml-0.5 text-danger">
            *
          </span>
        ) : null}
      </label>
      {children({
        id,
        name,
        required,
        "aria-invalid": Boolean(error),
        "aria-describedby": describedBy || undefined,
      })}
      {hint ? (
        <p id={`${id}-hint`} className="mt-2 text-sm text-navy/70">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="mt-2 flex items-center gap-1.5 text-sm font-medium text-danger">
          <CircleAlert aria-hidden="true" className="size-4 shrink-0" />
          {error}
        </p>
      ) : null}
    </div>
  )
}

function TextField({ value, onChange, type = "text", autoComplete, ...shell }) {
  return (
    <Shell {...shell}>
      {(props) => (
        <input
          {...props}
          type={type}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          className={`${controlClass} min-h-12`}
        />
      )}
    </Shell>
  )
}

function TextAreaField({ value, onChange, ...shell }) {
  return (
    <Shell {...shell}>
      {(props) => (
        <textarea
          {...props}
          value={value}
          onChange={onChange}
          rows={6}
          placeholder="What are you trying to achieve, and what is getting in the way?"
          className={`${controlClass} py-3`}
        />
      )}
    </Shell>
  )
}

function SelectField({ value, onChange, children, ...shell }) {
  return (
    <Shell {...shell}>
      {(props) => (
        <select {...props} value={value} onChange={onChange} className={`${controlClass} min-h-12`}>
          {children}
        </select>
      )}
    </Shell>
  )
}
