import { motion, useReducedMotion } from "framer-motion"
import { homePage } from "../../content/home"

const ease = [0.22, 1, 0.36, 1]

const statements = homePage.welcomeTitle
  .split(". ")
  .map((line) => line.replace(/\.$/, ""))
  .filter(Boolean)

const firstStop = homePage.welcome.indexOf(". ")
const lead = firstStop === -1 ? homePage.welcome : homePage.welcome.slice(0, firstStop + 1)
const detail = firstStop === -1 ? "" : homePage.welcome.slice(firstStop + 2)

export default function HomeWelcome() {
  const reduceMotion = useReducedMotion()

  const reveal = (delay) =>
    reduceMotion
      ? { initial: false, transition: { duration: 0 } }
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "0px 0px -8% 0px" },
          transition: { duration: 0.65, delay, ease },
        }

  return (
    <section id="welcome" className="relative bg-navy text-white" aria-labelledby="home-welcome-title">
      <div className="absolute inset-x-0 top-0 h-px bg-gold" aria-hidden="true" />

      <div className="mx-auto max-w-8xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <motion.p
          className="flex items-center gap-4 text-base font-semibold tracking-[0.14em] text-mist uppercase"
          {...reveal(0)}
        >
          <span className="h-px w-10 shrink-0 bg-gold" aria-hidden="true" />
          What we stand for
        </motion.p>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-16">
          <h2 id="home-welcome-title" className="border-t border-white/25 lg:col-span-8 lg:row-start-1">
            {statements.map((line, index) => (
              <motion.span
                key={line}
                className="flex items-start gap-4 border-b border-white/25 py-6 sm:gap-8 sm:py-8"
                {...reveal(0.08 + index * 0.08)}
              >
                <span
                  className="w-8 shrink-0 pt-2 text-base font-semibold tracking-[0.14em] text-gold tabular-nums sm:w-10"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[clamp(2rem,4.6vw,4.25rem)] leading-[0.92] font-extrabold tracking-[-0.045em] text-balance text-white">
                  {line}.
                </span>
              </motion.span>
            ))}
          </h2>

          <motion.div className="max-w-prose lg:col-span-8 lg:row-start-2" {...reveal(0.32)}>
            <p className="text-xl leading-snug font-medium text-balance text-white sm:text-2xl">{lead}</p>
            {detail ? <p className="mt-6 text-base leading-relaxed text-mist sm:text-lg">{detail}</p> : null}
          </motion.div>

          <motion.div
            className="flex flex-col gap-10 border border-white/25 p-6 sm:p-8 lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:h-full lg:justify-between lg:gap-0"
            {...reveal(0.16)}
          >
            <p className="text-base font-semibold tracking-[0.14em] text-mist uppercase">Founder experience</p>
            <p>
              <span className="sr-only">More than 20 years of the founder’s professional experience.</span>
              <span
                className="block text-[clamp(3.25rem,6vw,5rem)] leading-none font-black tracking-[-0.05em] text-gold"
                aria-hidden="true"
              >
                20+
              </span>
              <span className="mt-4 block text-base leading-relaxed text-white" aria-hidden="true">
                Years of the founder’s professional experience.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
