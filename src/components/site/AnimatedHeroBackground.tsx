import { motion } from "framer-motion";

/**
 * Hero background — vertical "curtain" of shifting light/dark stripes,
 * inspired by aithor.framer.website. Olive #556b2f accents on #f0f0f0.
 */
export function AnimatedHeroBackground() {
  const OLIVE = "#556b2f";
  const BG = "#f0f0f0";

  // Randomised but deterministic stripe widths.
  const stripes = [
    3, 1.6, 2.2, 4, 1.2, 2.8, 1.8, 3.4, 1.5, 2.5, 3.2, 1.4, 2, 3.6, 1.7, 2.6,
    1.3, 3.1, 2.1, 1.9, 2.9, 1.6, 3.3, 1.5, 2.4, 1.8, 3, 1.4,
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
          // Alternating light and darker olive-tinted bands.
          const isDark = i % 2 === 0;
          const base = isDark
            ? `linear-gradient(180deg, ${OLIVE}00 0%, ${OLIVE}55 45%, ${OLIVE}66 55%, ${OLIVE}00 100%)`
            : `linear-gradient(180deg, #ffffff00 0%, #ffffff 50%, #ffffff00 100%)`;
          const delay = (i % 6) * 0.35;
          return (
            <motion.div
              key={i}
              className="h-full"
              style={{
                width: `${(w / total) * 100}%`,
                background: base,
                borderRight: `1px solid ${OLIVE}22`,
              }}
              animate={{
                opacity: isDark ? [0.6, 1, 0.6] : [0.75, 1, 0.75],
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
          background: `radial-gradient(ellipse 65% 55% at 50% 45%, ${BG}dd, transparent 75%)`,
        }}
      />

      {/* Slow shimmering vertical light sweep across the stripes */}
      <motion.div
        className="absolute inset-y-0"
        style={{
          width: "35%",
          background: `linear-gradient(90deg, transparent, #ffffff00 40%, #ffffffcc 50%, #ffffff00 60%, transparent)`,
          filter: "blur(30px)",
        }}
        animate={{ x: ["-40%", "260%"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Bottom fade so it blends into the next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: `linear-gradient(to bottom, transparent, ${BG})` }}
      />
    </div>
  );
}
