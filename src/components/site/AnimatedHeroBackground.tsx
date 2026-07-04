import { motion, useReducedMotion } from "framer-motion";

/**
 * Hero background — soft vertical bars spawn at the left and right edges,
 * travel inward, and fade out as they approach the center where hero
 * content sits.
 */
export function AnimatedHeroBackground() {
  const BG = "#f0f0f0";
  const BAR = "#b9bdb2";
  const prefersReducedMotion = useReducedMotion();

  const BAR_W = 90;
  const COUNT = 8;         // bars per side
  const DURATION = 14;     // seconds for one bar's full travel
  const TRAVEL = "42vw";   // how far inward a bar travels before fading

  const Curtain = ({ side }: { side: "left" | "right" }) => {
    const dir = side === "left" ? 1 : -1;

    return (
      <div
        className="absolute inset-y-0"
        style={{ [side]: 0, width: "50%" }}
      >
        {Array.from({ length: COUNT }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 h-full"
            style={{
              [side]: 0,
              width: BAR_W,
              background:
                side === "left"
                  ? `linear-gradient(90deg, ${BAR} 0%, ${BG} 100%)`
                  : `linear-gradient(90deg, ${BG} 0%, ${BAR} 100%)`,
            }}
            initial={false}
            animate={
              prefersReducedMotion
                ? { x: 0, opacity: 0.4 }
                : {
                    x: [0, `calc(${TRAVEL} * ${dir})`],
                    opacity: [0, 0.9, 0.9, 0],
                  }
            }
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : {
                    duration: DURATION,
                    delay: (i * DURATION) / COUNT,
                    repeat: Infinity,
                    ease: "linear",
                    times: [0, 0.15, 0.7, 1],
                  }
            }
          />
        ))}
      </div>
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

      {/* Center wash — ensures full fade behind hero copy */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 45% 65% at 50% 50%, ${BG} 0%, ${BG} 40%, transparent 90%)`,
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: `linear-gradient(to bottom, transparent, ${BG})` }}
      />
    </div>
  );
}
