import { motion, useReducedMotion } from "framer-motion";

/**
 * Hero background — two curtains of olive gradient stripes that emerge from
 * the left and right edges and drift inward, meeting at the center. The
 * stripe gradient fades from olive #556b2f to the page background #f0f0f0.
 *
 * Respects `prefers-reduced-motion`: when enabled, the curtains render in
 * their converged position without animating.
 */
export function AnimatedHeroBackground() {
  const OLIVE = "#556b2f";
  const BG = "#f0f0f0";
  const prefersReducedMotion = useReducedMotion();

  const STRIPE_W = 70;
  const STRIPE_GAP = 58;
  const COUNT = 22; // stripes per half

  // Each half is COUNT * STRIPE_GAP wide.
  const HALF_W = STRIPE_GAP * COUNT;

  const Curtain = ({
    side,
    duration,
    delay,
    opacity,
  }: {
    side: "left" | "right";
    duration: number;
    delay: number;
    opacity: number;
  }) => {
    // Left curtain starts fully offscreen to the left (-HALF_W) and slides
    // to x=0 so its right edge lands at the center. Right curtain starts
    // offscreen to the right and slides to x=0 so its left edge lands at
    // the center. It then loops back out.
    const from = side === "left" ? -HALF_W : HALF_W;

    return (
      <motion.ul
        className="absolute inset-y-0 flex list-none m-0 p-0"
        style={{
          width: HALF_W,
          opacity,
          [side]: "50%",
          justifyContent: side === "left" ? "flex-end" : "flex-start",
          transformOrigin: side === "left" ? "right center" : "left center",
        }}
        initial={{ x: from }}
        animate={
          prefersReducedMotion
            ? { x: 0 }
            : { x: [from, 0, 0, from] }
        }
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : {
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.45, 0.75, 1],
              }
        }
      >
        {Array.from({ length: COUNT }).map((_, i) => (
          <li
            key={i}
            className="relative shrink-0 h-full"
            style={{ width: STRIPE_GAP }}
          >
            <div
              className="absolute inset-y-0"
              style={{
                left: 0,
                width: STRIPE_W,
                background:
                  side === "left"
                    ? `linear-gradient(90deg, ${BG} 0%, ${OLIVE} 100%)`
                    : `linear-gradient(90deg, ${OLIVE} 0%, ${BG} 100%)`,
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
      <Curtain side="left" duration={14} delay={0} opacity={0.9} />
      <Curtain side="right" duration={14} delay={0} opacity={0.9} />

      {/* Central soft highlight for hero-text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 55% 45% at 50% 42%, ${BG}cc, transparent 80%)`,
        }}
      />

      {/* Bottom fade blends into the next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: `linear-gradient(to bottom, transparent, ${BG})` }}
      />
    </div>
  );
}
