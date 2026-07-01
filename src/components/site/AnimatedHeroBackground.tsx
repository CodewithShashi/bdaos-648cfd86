import { motion } from "framer-motion";

export function AnimatedHeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-32 -left-32 h-[36rem] w-[36rem] rounded-full bg-primary/25 blur-[120px]"
        animate={{ x: [0, 80, -40, 0], y: [0, 60, -30, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-40 -right-32 h-[40rem] w-[40rem] rounded-full bg-primary-glow/25 blur-[130px]"
        animate={{ x: [0, -70, 40, 0], y: [0, 40, -50, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-[100px]"
        animate={{ x: [0, -60, 30, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated grid/mesh */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="oklch(0.58 0.18 145)" strokeWidth="0.6" />
          </pattern>
          <radialGradient id="grid-fade" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="grid-mask">
            <rect width="100%" height="100%" fill="url(#grid-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" mask="url(#grid-mask)" />
      </svg>

      {/* Flowing SVG waves */}
      <svg
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-[70%] opacity-70"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wave-a" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="oklch(0.58 0.18 145)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.58 0.18 145)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="oklch(0.72 0.19 150)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wave-b" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="oklch(0.72 0.19 150)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.72 0.19 150)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="oklch(0.58 0.18 145)" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.path
          fill="none"
          stroke="url(#wave-a)"
          strokeWidth="1.4"
          initial={{ d: "M0,320 C240,240 480,400 720,320 C960,240 1200,400 1440,320" }}
          animate={{
            d: [
              "M0,320 C240,240 480,400 720,320 C960,240 1200,400 1440,320",
              "M0,340 C240,420 480,220 720,340 C960,460 1200,240 1440,340",
              "M0,300 C240,260 480,380 720,300 C960,220 1200,360 1440,300",
              "M0,320 C240,240 480,400 720,320 C960,240 1200,400 1440,320",
            ],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          fill="none"
          stroke="url(#wave-b)"
          strokeWidth="1.2"
          initial={{ d: "M0,360 C240,300 480,440 720,360 C960,280 1200,420 1440,360" }}
          animate={{
            d: [
              "M0,360 C240,300 480,440 720,360 C960,280 1200,420 1440,360",
              "M0,380 C240,460 480,260 720,380 C960,500 1200,280 1440,380",
              "M0,340 C240,300 480,420 720,340 C960,260 1200,400 1440,340",
              "M0,360 C240,300 480,440 720,360 C960,280 1200,420 1440,360",
            ],
          }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          fill="none"
          stroke="url(#wave-a)"
          strokeWidth="1"
          initial={{ d: "M0,280 C240,200 480,360 720,280 C960,200 1200,360 1440,280" }}
          animate={{
            d: [
              "M0,280 C240,200 480,360 720,280 C960,200 1200,360 1440,280",
              "M0,260 C240,340 480,180 720,260 C960,340 1200,180 1440,260",
              "M0,300 C240,220 480,340 720,300 C960,220 1200,340 1440,300",
              "M0,280 C240,200 480,360 720,280 C960,200 1200,360 1440,280",
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* Floating particles */}
      {Array.from({ length: 14 }).map((_, i) => {
        const size = 4 + (i % 4) * 3;
        const left = (i * 73) % 100;
        const top = (i * 37) % 90;
        const dur = 8 + (i % 5) * 2;
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-primary/40 shadow-[0_0_18px_oklch(0.58_0.18_145/0.6)]"
            style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
            animate={{
              y: [0, -40, 0, 30, 0],
              x: [0, 20, -10, 15, 0],
              opacity: [0.2, 0.9, 0.4, 0.8, 0.2],
            }}
            transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          />
        );
      })}

      {/* Vignette softener so content stays legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/70" />
    </div>
  );
}
