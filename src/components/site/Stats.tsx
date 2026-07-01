import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 67, suffix: "", label: "product engineering centers" },
  { value: 587, suffix: "", label: "active clients" },
  { value: 32000, suffix: "+", label: "professionals in 26 countries" },
  { value: 2100, suffix: "+", label: "product releases per year" },
];

function AnimatedBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-secondary/30" />

      {/* Animated flowing ribbons (paper-fold feel) */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="ribbonA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.55" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="ribbonB" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.35" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ribbonC" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
          </linearGradient>
          <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="18" />
          </filter>
        </defs>

        {/* Layered folded ribbons */}
        <motion.path
          d="M -100 620 C 150 500, 300 720, 520 560 S 900 380, 1300 500 L 1300 900 L -100 900 Z"
          fill="url(#ribbonA)"
          filter="url(#soft)"
          animate={{
            d: [
              "M -100 620 C 150 500, 300 720, 520 560 S 900 380, 1300 500 L 1300 900 L -100 900 Z",
              "M -100 580 C 180 640, 340 480, 560 600 S 920 500, 1300 440 L 1300 900 L -100 900 Z",
              "M -100 620 C 150 500, 300 720, 520 560 S 900 380, 1300 500 L 1300 900 L -100 900 Z",
            ],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.path
          d="M -100 380 C 200 260, 380 460, 620 320 S 980 220, 1300 300 L 1300 900 L -100 900 Z"
          fill="url(#ribbonB)"
          filter="url(#soft)"
          animate={{
            d: [
              "M -100 380 C 200 260, 380 460, 620 320 S 980 220, 1300 300 L 1300 900 L -100 900 Z",
              "M -100 420 C 220 360, 420 300, 640 400 S 1000 340, 1300 260 L 1300 900 L -100 900 Z",
              "M -100 380 C 200 260, 380 460, 620 320 S 980 220, 1300 300 L 1300 900 L -100 900 Z",
            ],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Thin flowing outline ribbons */}
        <motion.path
          d="M -50 500 Q 300 340 600 460 T 1250 380"
          stroke="url(#ribbonC)"
          strokeWidth="1.4"
          strokeOpacity="0.6"
          animate={{
            d: [
              "M -50 500 Q 300 340 600 460 T 1250 380",
              "M -50 460 Q 320 500 600 400 T 1250 460",
              "M -50 500 Q 300 340 600 460 T 1250 380",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M -50 260 Q 280 200 560 280 T 1250 220"
          stroke="url(#ribbonC)"
          strokeWidth="1"
          strokeOpacity="0.45"
          animate={{
            d: [
              "M -50 260 Q 280 200 560 280 T 1250 220",
              "M -50 300 Q 300 260 580 220 T 1250 280",
              "M -50 260 Q 280 200 560 280 T 1250 220",
            ],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </svg>

      {/* Slow drifting glow orb */}
      <motion.div
        className="absolute -top-32 -left-20 h-[560px] w-[560px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.22), transparent 65%)" }}
        animate={{ x: [0, 80, -20, 0], y: [0, 60, -20, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grain / vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 40%, transparent 40%, hsl(var(--background) / 0.6) 100%)",
        }}
      />
    </div>
  );
}


export function Stats() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <AnimatedBackdrop />

      <div className="relative z-10 w-full pl-6 md:pl-12 lg:pl-[42%] pr-6 md:pr-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-elevated p-10 md:p-14 border border-white/60"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-16">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              >
                <div className="text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-none">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-muted-foreground text-sm md:text-base">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
}
