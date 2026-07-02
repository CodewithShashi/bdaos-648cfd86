import { motion } from "framer-motion";

/**
 * Hero background — flowing olive mesh on soft #f0f0f0.
 * Pure framer-motion (SVG paths + blobs). No images.
 */
export function AnimatedHeroBackground() {
  const OLIVE = "#556b2f";
  const OLIVE_SOFT = "#7d8f5a";
  const BG = "#f0f0f0";

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden" style={{ backgroundColor: BG }}>
      {/* Soft base wash */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(1200px 700px at 15% 10%, ${OLIVE}22, transparent 60%), radial-gradient(1000px 600px at 85% 90%, ${OLIVE}1a, transparent 65%)`,
        }}
      />

      {/* Drifting olive blobs */}
      <motion.div
        className="absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full blur-[120px]"
        style={{ background: `radial-gradient(circle, ${OLIVE}80, transparent 65%)` }}
        animate={{ x: [0, 120, -40, 0], y: [0, 80, -30, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 h-[40rem] w-[40rem] rounded-full blur-[130px]"
        style={{ background: `radial-gradient(circle, ${OLIVE_SOFT}70, transparent 65%)` }}
        animate={{ x: [0, -100, 40, 0], y: [0, 60, -40, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-8rem] left-1/3 h-[28rem] w-[28rem] rounded-full blur-[110px]"
        style={{ background: `radial-gradient(circle, ${OLIVE}55, transparent 65%)` }}
        animate={{ x: [0, -60, 30, 0], y: [0, -30, 20, 0], scale: [1, 1.08, 0.94, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Flowing ribbon paths */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="hero-ribbon-a" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor={OLIVE} stopOpacity="0" />
            <stop offset="50%" stopColor={OLIVE} stopOpacity="0.9" />
            <stop offset="100%" stopColor={OLIVE} stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hero-ribbon-b" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor={OLIVE_SOFT} stopOpacity="0" />
            <stop offset="50%" stopColor={OLIVE_SOFT} stopOpacity="0.8" />
            <stop offset="100%" stopColor={OLIVE_SOFT} stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.path
          fill="none"
          stroke="url(#hero-ribbon-a)"
          strokeWidth="1.6"
          animate={{
            d: [
              "M -50 420 Q 300 260 720 420 T 1500 380",
              "M -50 400 Q 320 500 720 360 T 1500 440",
              "M -50 460 Q 280 300 720 460 T 1500 360",
              "M -50 420 Q 300 260 720 420 T 1500 380",
            ],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          fill="none"
          stroke="url(#hero-ribbon-b)"
          strokeWidth="1.2"
          animate={{
            d: [
              "M -50 520 Q 300 400 720 520 T 1500 480",
              "M -50 500 Q 320 600 720 460 T 1500 540",
              "M -50 560 Q 280 420 720 560 T 1500 460",
              "M -50 520 Q 300 400 720 520 T 1500 480",
            ],
          }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          fill="none"
          stroke="url(#hero-ribbon-a)"
          strokeWidth="1"
          animate={{
            d: [
              "M -50 300 Q 300 180 720 300 T 1500 260",
              "M -50 280 Q 320 380 720 240 T 1500 320",
              "M -50 340 Q 280 200 720 340 T 1500 240",
              "M -50 300 Q 300 180 720 300 T 1500 260",
            ],
          }}
          transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* Orbiting rings */}
      <motion.div
        className="absolute top-[15%] left-[6%] h-[360px] w-[360px] rounded-full border"
        style={{ borderColor: `${OLIVE}55` }}
        animate={{ rotate: 360, scale: [1, 1.08, 1] }}
        transition={{
          rotate: { duration: 45, repeat: Infinity, ease: "linear" },
          scale: { duration: 9, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[8%] h-[440px] w-[440px] rounded-full border"
        style={{ borderColor: `${OLIVE}33` }}
        animate={{ rotate: -360 }}
        transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating particles */}
      {Array.from({ length: 16 }).map((_, i) => {
        const size = 4 + (i % 4) * 3;
        const left = (i * 73) % 100;
        const top = (i * 37) % 90;
        const dur = 8 + (i % 5) * 2;
        return (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              backgroundColor: OLIVE,
              boxShadow: `0 0 18px ${OLIVE}99`,
            }}
            animate={{
              y: [0, -40, 0, 30, 0],
              x: [0, 20, -10, 15, 0],
              opacity: [0.2, 0.9, 0.4, 0.8, 0.2],
            }}
            transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          />
        );
      })}

      {/* Vignette softener */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, ${BG}66 0%, transparent 30%, transparent 70%, ${BG}cc 100%)`,
        }}
      />
    </div>
  );
}
