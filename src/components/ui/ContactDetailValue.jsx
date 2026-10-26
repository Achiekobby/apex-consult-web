export default function ContactDetailValue({ detail, linkClassName, plainClassName }) {
  const lines = detail.links ?? [{ value: detail.value, href: detail.href }]

  return (
    <span className="inline-flex flex-wrap items-center">
      {lines.map((line, index) => {
        const external = line.href?.startsWith("http")

        return (
          <span key={line.href ?? line.value} className="inline-flex items-center">
            {index > 0 ? <span>/</span> : null}
            {line.href ? (
              <a
                href={line.href}
                className={linkClassName}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {line.value}
              </a>
            ) : (
              <span className={plainClassName}>{line.value}</span>
            )}
          </span>
        )
      })}
    </span>
  )
}
