import { motion } from "framer-motion";

/**
 * Hero background — concentric horizontal ripple waves pulsing outward from
 * the center, inspired by the reference clip. Olive #556b2f on soft #f0f0f0.
 */
export function AnimatedHeroBackground() {
  const OLIVE = "#556b2f";
  const BG = "#f0f0f0";

  // Mirrored ring positions (offsets from vertical center in px).
  const offsets = [0, 80, 160, 240, 320, 400];

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ backgroundColor: BG }}
    >
      {/* Radial base wash so the center feels warmer */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 60% 55% at 50% 50%, ${OLIVE}33, transparent 75%)`,
        }}
      />

      {/* Concentric ripple rings mirrored above & below the middle */}
      {offsets.map((off, i) => {
        const widthBase = 1400 - i * 120;
        const heightBase = 70 - i * 4;
        const delay = i * 0.28;
        return (
          <div key={i} className="absolute inset-0">
            {[-1, 1].map((dir) => (
              <motion.div
                key={dir}
                className="absolute left-1/2 top-1/2 rounded-[50%]"
                style={{
                  width: widthBase,
                  height: heightBase,
                  x: "-50%",
                  y: `calc(-50% + ${off * dir}px)`,
                  background: `radial-gradient(ellipse, ${OLIVE} 0%, ${OLIVE}cc 30%, ${OLIVE}66 55%, transparent 75%)`,
                  filter: "blur(14px)",
                  mixBlendMode: "multiply",
                }}
                animate={{
                  opacity: off === 0 ? [0.7, 1, 0.7] : [0.45, 0.95, 0.45],
                  scaleX: [0.94, 1.06, 0.94],
                  scaleY: [0.85, 1.15, 0.85],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay,
                }}
              />
            ))}
          </div>
        );
      })}

      {/* Sharp bright horizontal accent lines through the ring centers */}
      {[-3, -2, -1, 0, 1, 2, 3].map((k) => (
        <motion.div
          key={`line-${k}`}
          className="absolute left-1/2"
          style={{
            top: `calc(50% + ${k * 80}px)`,
            width: "80%",
            height: 2,
            x: "-50%",
            background: `linear-gradient(90deg, transparent, ${OLIVE}, transparent)`,
            mixBlendMode: "multiply",
          }}
          animate={{ opacity: [0.2, 0.95, 0.2], scaleX: [0.55, 1, 0.55] }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.abs(k) * 0.28,
          }}
        />
      ))}

      {/* Soft edge vignette that keeps the light bg outside the ripples */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 85% 90% at 50% 50%, transparent 55%, ${BG} 100%)`,
        }}
      />
    </div>
  );
}
