import { memo } from "react"
import { ImageIcon } from "lucide-react"
import { getSlotImage } from "../../utils/slotImages"

const tones = {
  light: {
    base: "bg-gradient-to-br from-mist via-white to-mist",
    grid: "rgba(0,20,73,0.07)",
    ring: "border-cyan/50",
    icon: "text-blue/70 bg-white/80 border-navy/10",
    hint: "text-navy/60",
  },
  dark: {
    base: "bg-gradient-to-br from-blue/40 via-navy to-navy",
    grid: "rgba(255,255,255,0.08)",
    ring: "border-cyan/40",
    icon: "text-cyan bg-white/10 border-white/20",
    hint: "text-white/60",
  },
}

/**
 * Fills its parent (give the parent a size/aspect ratio and `relative overflow-hidden`).
 * Shows the uploaded image when one exists for `name`; otherwise a designed placeholder
 * so the layout never looks broken while artwork is pending.
 *
 * @param {string} name   Slot key, e.g. "services/business-consulting" (see utils/slotImages.js)
 * @param {string} [hint]        Recommended size, shown only in development
 * @param {string} [fallbackSrc] Existing artwork used until a file is uploaded for this slot
 */
function ImageSlot({ name, alt = "", hint, tone = "light", fallbackSrc, className = "" }) {
  const src = getSlotImage(name) ?? fallbackSrc
  const style = tones[tone]

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover ${className}`}
      />
    )
  }

  return (
    <div aria-hidden="true" className={`absolute inset-0 overflow-hidden ${style.base} ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(${style.grid} 1px, transparent 1px), linear-gradient(90deg, ${style.grid} 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 78%)",
        }}
      />
      <div className={`absolute -right-10 -bottom-10 size-40 rounded-full border ${style.ring}`} />
      <div className={`absolute -right-4 -bottom-4 size-24 rounded-full border ${style.ring} opacity-60`} />
      <div className="absolute top-5 left-5 h-px w-10 bg-gold" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center">
        <span className={`grid size-12 place-items-center rounded border backdrop-blur-sm ${style.icon}`}>
          <ImageIcon className="size-5" />
        </span>
        {import.meta.env.DEV ? (
          <span className={`font-mono text-xs leading-relaxed ${style.hint}`}>
            {name}
            {hint ? <span className="block">{hint}</span> : null}
          </span>
        ) : null}
      </div>
    </div>
  )
}

export default memo(ImageSlot)
