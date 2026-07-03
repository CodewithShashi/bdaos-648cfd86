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
    // Each curtain stays entirely within its own half so the two never
    // cross or overlap at the center. Stripes flow continuously by
    // translating one STRIPE_GAP per loop for a seamless marquee.
    const shift = side === "left" ? -STRIPE_GAP : STRIPE_GAP;

    return (
      <motion.ul
        className="absolute inset-y-0 flex list-none m-0 p-0"
        style={{
          width: HALF_W,
          opacity,
          [side]: 0,
          justifyContent: side === "left" ? "flex-end" : "flex-start",
        }}
        initial={{ x: 0 }}
        animate={prefersReducedMotion ? { x: 0 } : { x: [0, shift] }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : {
                duration,
                delay,
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
      <Curtain side="left" duration={14} delay={0} opacity={1} />
      <Curtain side="right" duration={14} delay={0} opacity={1} />

      {/* Edge fades — soften stripes as they approach the outer edges */}
      <div
        className="absolute inset-y-0 left-0 w-40 pointer-events-none"
        style={{ background: `linear-gradient(to right, ${BG}, transparent)` }}
      />
      <div
        className="absolute inset-y-0 right-0 w-40 pointer-events-none"
        style={{ background: `linear-gradient(to left, ${BG}, transparent)` }}
      />

      {/* Central fade for hero-text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 60% 55% at 50% 45%, ${BG} 0%, ${BG}f2 35%, ${BG}99 60%, transparent 85%)`,
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
