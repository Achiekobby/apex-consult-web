import { motion } from "framer-motion"
import { useReveal } from "../../hooks/useReveal"

// Static lookup so components are never created during render.
const tags = {
  div: motion.div,
  li: motion.li,
  p: motion.p,
  h2: motion.h2,
  article: motion.article,
  section: motion.section,
  ul: motion.ul,
  dl: motion.dl,
}

/** Scroll-reveal wrapper. `as` picks the element; respects reduced motion. */
export default function Reveal({ as = "div", delay = 0, y, className, children, ...rest }) {
  const reveal = useReveal(y ? { y } : undefined)
  const Tag = tags[as]

  return (
    <Tag className={className} {...reveal(delay)} {...rest}>
      {children}
    </Tag>
  )
}
