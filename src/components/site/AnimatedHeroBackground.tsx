import { motion, useReducedMotion } from "framer-motion";

/**
 * Hero background — soft vertical "curtain" bars that emerge from the left
 * and right edges and drift slowly inward, fading out before they reach the
 * center where hero content sits. Inspired by the Aithor hero treatment.
 *
 * Respects `prefers-reduced-motion`.
 */
export function AnimatedHeroBackground() {
  const BG = "#f0f0f0";
  const BAR = "#c9ccc4"; // soft warm gray that reads on #f0f0f0
  const prefersReducedMotion = useReducedMotion();

  const BAR_W = 90;      // width of a single bar
  const BAR_GAP = 110;   // distance between bars
  const COUNT = 10;      // bars per side

  const HALF_W = BAR_GAP * COUNT;

  const Curtain = ({ side }: { side: "left" | "right" }) => {
    const shift = side === "left" ? -BAR_GAP : BAR_GAP;

    return (
      <motion.ul
        className="absolute inset-y-0 flex list-none m-0 p-0"
        style={{
          width: HALF_W,
          [side]: 0,
          justifyContent: side === "left" ? "flex-end" : "flex-start",
        }}
        initial={{ x: 0 }}
        animate={prefersReducedMotion ? { x: 0 } : { x: [0, shift] }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : {
                duration: 22,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }
        }
      >
        {Array.from({ length: COUNT }).map((_, i) => (
          <li
            key={i}
            className="relative shrink-0 h-full"
            style={{ width: BAR_GAP }}
          >
            <div
              className="absolute inset-y-0"
              style={{
                left: 0,
                width: BAR_W,
                background:
                  side === "left"
                    ? `linear-gradient(90deg, ${BAR} 0%, ${BG} 100%)`
                    : `linear-gradient(90deg, ${BG} 0%, ${BAR} 100%)`,
              }}
            />
          </li>
        ))}
      </motion.ul>
    );
  };

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ backgroundColor: BG }}
    >
      <Curtain side="left" />
      <Curtain side="right" />

      {/* Center fade — hides bars behind the hero copy */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 55% 70% at 50% 50%, ${BG} 0%, ${BG} 30%, ${BG}e6 55%, transparent 85%)`,
        }}
      />

      {/* Outer edge fades — soften the entry of bars */}
      <div
        className="absolute inset-y-0 left-0 w-24 pointer-events-none"
        style={{ background: `linear-gradient(to right, ${BG}, transparent)` }}
      />
      <div
        className="absolute inset-y-0 right-0 w-24 pointer-events-none"
        style={{ background: `linear-gradient(to left, ${BG}, transparent)` }}
      />

      {/* Bottom fade blends into the next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: `linear-gradient(to bottom, transparent, ${BG})` }}
      />
    </div>
  );
}
