import { motion } from "framer-motion";

/**
 * Hero background — vertical "curtain" of shifting light/dark stripes,
 * inspired by aithor.framer.website. Olive #556b2f accents on #f0f0f0.
 */
export function AnimatedHeroBackground() {
  const OLIVE = "#556b2f";
  const BG = "#f0f0f0";

  // Randomised but deterministic stripe widths (fractions summing loosely to 1).
  const stripes = [
    3, 1.6, 2.2, 4, 1.2, 2.8, 1.8, 3.4, 1.5, 2.5, 3.2, 1.4, 2, 3.6, 1.7, 2.6,
    1.3, 3.1, 2.1, 1.9, 2.9, 1.6, 3.3, 1.5,
  ];
  const total = stripes.reduce((a, b) => a + b, 0);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ backgroundColor: BG }}
    >
      {/* Vertical curtain of stripes */}
      <div className="absolute inset-0 flex">
        {stripes.map((w, i) => {
          // Alternate between subtle light and slightly darker/olive-tinted bands.
          const isDark = i % 2 === 0;
          const base = isDark
            ? `linear-gradient(180deg, ${OLIVE}18 0%, ${OLIVE}0d 50%, ${OLIVE}22 100%)`
            : `linear-gradient(180deg, #ffffff 0%, ${BG} 50%, #ffffff 100%)`;
          const delay = (i % 6) * 0.4;
          return (
            <motion.div
              key={i}
              className="h-full"
              style={{
                width: `${(w / total) * 100}%`,
                background: base,
                borderRight: `1px solid ${OLIVE}12`,
              }}
              animate={{
                opacity: isDark ? [0.55, 0.95, 0.55] : [0.7, 1, 0.7],
              }}
              transition={{
                duration: 4 + (i % 5) * 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              }}
            />
          );
        })}
      </div>

      {/* Soft central highlight so hero text sits on brighter ground */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 65% 55% at 50% 45%, #ffffffcc, transparent 75%)`,
        }}
      />

      {/* Slow shimmering light sweep across the stripes */}
      <motion.div
        className="absolute inset-y-0"
        style={{
          width: "40%",
          background: `linear-gradient(90deg, transparent, ${OLIVE}1a 45%, #ffffff99 50%, ${OLIVE}1a 55%, transparent)`,
          filter: "blur(24px)",
          mixBlendMode: "screen",
        }}
        animate={{ x: ["-40%", "260%"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle olive drift orbs for depth */}
      <motion.div
        className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full blur-[100px]"
        style={{ background: `radial-gradient(circle, ${OLIVE}40, transparent 70%)` }}
        animate={{ x: [0, 80, -30, 0], y: [0, 60, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-8rem] right-[-6rem] h-[30rem] w-[30rem] rounded-full blur-[110px]"
        style={{ background: `radial-gradient(circle, ${OLIVE}33, transparent 70%)` }}
        animate={{ x: [0, -60, 40, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Bottom fade so it blends into the next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: `linear-gradient(to bottom, transparent, ${BG})` }}
      />
    </div>
  );
}
