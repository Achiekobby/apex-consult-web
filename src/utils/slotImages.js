/**
 * Drop-in image slots.
 *
 * Add a file to one of the folders below and it appears in the matching slot
 * automatically, with no code change. The file name (without extension) must match.
 * Accepted formats: png, jpg, jpeg, webp, avif.
 *
 * HOME
 *   what-we-do/<verb>            plan, build, connect, operate, protect, develop   ~1000x1100
 *   services/<service-slug>      16:9 landscape                                    ~1600x900
 *   solutions/<solution-slug>    16:9 landscape                                    ~1600x900
 *   why-apex/main                square                                            ~1200x1200
 *   next-steps/main              4:5 portrait                                      ~1000x1250
 *
 * INNER PAGES
 *   services/overview            Services page hero                                ~1200x960
 *   solutions/overview           Solutions page hero                               ~1200x960
 *   about/hero                   About page hero                                   ~1200x960
 *   about/story                  About page "Our story" (portrait)                 ~1000x1250
 *   resources/main               Resources page hero                               ~1200x960
 *   resources/insights           Resources hub, featured Insights card             ~1600x900
 *   resources/insights-cover     Cover image above the Insights article            ~2100x900
 *   contact/main                 Contact / quote / consultation side panel         ~1200x900
 *
 * Service slugs:  business-consulting, software-development, cloud-managed-services,
 *                 coaching-training, security-systems, governance-cybersecurity
 * Solution slugs: enterprise-applications, digital-payments, business-communications,
 *                 cloud-hosting, cybersecurity, smart-security
 */
const modules = import.meta.glob(
  "/src/assets/images/{what-we-do,services,solutions,why-apex,next-steps,about,resources,contact}/*.{png,jpg,jpeg,webp,avif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
)

const slotImages = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => {
    const key = path.replace("/src/assets/images/", "").replace(/\.[^.]+$/, "")
    return [key, url]
  }),
)

/** @param {string} name e.g. "services/business-consulting" */
export function getSlotImage(name) {
  return slotImages[name] ?? null
}
