import { useReducedMotion } from "framer-motion";

/**
 * Hero background — soft vertical bars spawn near the left and right edges,
 * travel inward, and fade out as they approach the center where hero
 * content sits.
 */
export function AnimatedHeroBackground() {
  const BG = "#f0f0f0";
  const BAR = "#a8ada0";
  const prefersReducedMotion = useReducedMotion();

  const BAR_W = 90;
  const COUNT = 6;         // bars per side, staggered
  const DURATION = 12;     // seconds for one bar's full travel
  const TRAVEL_VW = 40;    // how far inward each bar travels

  const Curtain = ({ side }: { side: "left" | "right" }) => {
    const dir = side === "left" ? 1 : -1;

    return (
      <div
        className="absolute inset-y-0"
        style={{ [side]: 0, width: "50%" }}
      >
        {Array.from({ length: COUNT }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 h-full"
            style={{
              [side]: 0,
              width: BAR_W,
              background:
                side === "left"
                  ? `linear-gradient(90deg, ${BAR} 0%, ${BG} 100%)`
                  : `linear-gradient(90deg, ${BG} 0%, ${BAR} 100%)`,
              opacity: prefersReducedMotion ? 0.45 : undefined,
              transform: prefersReducedMotion
                ? `translateX(${(TRAVEL_VW / 2) * dir}vw)`
                : undefined,
              animation: prefersReducedMotion
                ? "none"
                : `hero-bar-${side} ${DURATION}s linear infinite`,
              animationDelay: prefersReducedMotion
                ? undefined
                : `${-(i * DURATION) / COUNT}s`,
            }}
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
      <style>
        {`
          @keyframes hero-bar-left {
            0% { transform: translateX(0vw); opacity: 0; }
            20% { opacity: 0.68; }
            50% { opacity: 0.86; }
            78% { opacity: 0.48; }
            100% { transform: translateX(${TRAVEL_VW}vw); opacity: 0; }
          }

          @keyframes hero-bar-right {
            0% { transform: translateX(0vw); opacity: 0; }
            20% { opacity: 0.68; }
            50% { opacity: 0.86; }
            78% { opacity: 0.48; }
            100% { transform: translateX(-${TRAVEL_VW}vw); opacity: 0; }
          }
        `}
      </style>

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
