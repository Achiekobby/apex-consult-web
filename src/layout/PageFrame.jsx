import PageHero from "../components/ui/PageHero"
import { usePageMeta } from "../hooks/usePageMeta"

/**
 * Page shell: document meta + hero. Pass `bare` when the page lays out its own sections;
 * otherwise `children` render inside a standard content container.
 */
export default function PageFrame({
  eyebrow,
  title,
  summary,
  documentTitle,
  metaDescription,
  breadcrumbs,
  media,
  actions,
  tone,
  heroContent,
  bare = false,
  children,
}) {
  usePageMeta(documentTitle, metaDescription)

  return (
    <article>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        summary={summary}
        breadcrumbs={breadcrumbs}
        media={media}
        actions={actions}
        tone={tone}
      >
        {heroContent}
      </PageHero>

      {children ? (
        bare ? (
          children
        ) : (
          <div className="mx-auto max-w-8xl px-4 py-14 sm:px-6 sm:py-20">{children}</div>
        )
      ) : null}
    </article>
  )
}
