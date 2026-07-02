import { motion } from "framer-motion";

/**
 * Hero background — concentric horizontal ripple waves pulsing outward from
 * the center, inspired by the reference clip. Olive #556b2f on soft #f0f0f0.
 */
export function AnimatedHeroBackground() {
  const OLIVE = "#556b2f";
  const BG = "#f0f0f0";

  // 7 stacked horizontal ellipse "rings" mirrored top/bottom from center.
  const rings = Array.from({ length: 7 });

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ backgroundColor: BG }}
    >
      {/* Soft base wash */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${OLIVE}22, transparent 70%)`,
        }}
      />

      {/* Central pulsing core */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          width: 600,
          height: 120,
          background: `radial-gradient(ellipse, ${OLIVE}cc, transparent 70%)`,
        }}
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.15, 1] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Concentric ripple rings — mirrored above & below center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          {rings.map((_, i) => {
            const delay = i * 0.35;
            const offset = (i + 1) * 90; // vertical gap between rings
            const widthBase = 1200 - i * 90;
            return (
              <div key={i}>
                {/* Top mirror */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 rounded-[50%] blur-2xl"
                  style={{
                    width: widthBase,
                    height: 90,
                    background: `radial-gradient(ellipse, ${OLIVE}, transparent 70%)`,
                    marginTop: -offset,
                  }}
                  animate={{
                    opacity: [0.15, 0.85, 0.15],
                    scaleX: [0.9, 1.08, 0.9],
                    scaleY: [0.8, 1.15, 0.8],
                  }}
                  transition={{
                    duration: 3.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay,
                  }}
                />
                {/* Bottom mirror */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 rounded-[50%] blur-2xl"
                  style={{
                    width: widthBase,
                    height: 90,
                    background: `radial-gradient(ellipse, ${OLIVE}, transparent 70%)`,
                    marginTop: offset - 90,
                  }}
                  animate={{
                    opacity: [0.15, 0.85, 0.15],
                    scaleX: [0.9, 1.08, 0.9],
                    scaleY: [0.8, 1.15, 0.8],
                  }}
                  transition={{
                    duration: 3.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Sharp bright center line accents */}
      {[-2, -1, 0, 1, 2].map((k) => (
        <motion.div
          key={`line-${k}`}
          className="absolute left-0 right-0 mx-auto"
          style={{
            top: `calc(50% + ${k * 90}px)`,
            height: 1.5,
            background: `linear-gradient(90deg, transparent, ${OLIVE}, transparent)`,
          }}
          animate={{ opacity: [0.2, 0.9, 0.2], scaleX: [0.7, 1, 0.7] }}
          transition={{
            duration: 3.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.abs(k) * 0.35,
          }}
        />
      ))}

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, transparent 40%, ${BG} 95%)`,
        }}
      />
    </div>
  );
}
