import HomeHero from "../components/home/HomeHero"
import HomeSections from "../components/home/HomeSections"
import { homePage } from "../content/home"
import { usePageMeta } from "../hooks/usePageMeta"

export default function HomePage() {
  usePageMeta(homePage.documentTitle, homePage.metaDescription)

  return (
    <>
      <HomeHero />
      <HomeSections />
    </>
  )
}
