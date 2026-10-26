import { useReducedMotion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1]

/**
 * Returns a factory that produces scroll-reveal props for a framer-motion element.
 * Respects `prefers-reduced-motion` by rendering the final state immediately.
 */
export function useReveal({ y = 18, duration = 0.65 } = {}) {
  const reduceMotion = useReducedMotion()

  return (delay = 0) =>
    reduceMotion
      ? { initial: false, transition: { duration: 0 } }
      : {
          initial: { opacity: 0, y },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "0px 0px -8% 0px" },
          transition: { duration, delay, ease },
        }
}
