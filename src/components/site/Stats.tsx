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
      {/* Deep green mesh base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--primary) / 0.18) 0%, hsl(var(--primary) / 0.06) 45%, hsl(var(--background)) 100%)",
        }}
      />

      {/* Drifting green blobs */}
      <motion.div
        className="absolute -top-32 -left-32 h-[620px] w-[620px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.55), transparent 65%)",
        }}
        animate={{ x: [0, 100, -40, 0], y: [0, 80, -30, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-[10%] h-[420px] w-[420px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.4), transparent 65%)",
        }}
        animate={{ x: [0, -60, 60, 0], y: [0, 40, -50, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-120px] left-[25%] h-[500px] w-[500px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.35), transparent 65%)",
        }}
        animate={{ x: [0, 60, -60, 0], y: [0, -40, 30, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orbiting rings */}
      <motion.div
        className="absolute top-[20%] left-[8%] h-[320px] w-[320px] rounded-full border border-primary/30"
        animate={{ rotate: 360, scale: [1, 1.08, 1] }}
        transition={{
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{ boxShadow: "0 0 60px hsl(var(--primary) / 0.15) inset" }}
      />
      <motion.div
        className="absolute top-[10%] left-[2%] h-[480px] w-[480px] rounded-full border border-primary/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* Flowing green ribbons */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="statsRibbon" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          stroke="url(#statsRibbon)"
          strokeWidth="1.5"
          animate={{
            d: [
              "M -50 500 Q 300 340 600 460 T 1250 380",
              "M -50 460 Q 320 520 600 380 T 1250 460",
              "M -50 500 Q 300 340 600 460 T 1250 380",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          stroke="url(#statsRibbon)"
          strokeWidth="1"
          animate={{
            d: [
              "M -50 280 Q 280 200 560 300 T 1250 240",
              "M -50 320 Q 300 280 580 220 T 1250 300",
              "M -50 280 Q 280 200 560 300 T 1250 240",
            ],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.path
          stroke="url(#statsRibbon)"
          strokeWidth="1"
          animate={{
            d: [
              "M -50 660 Q 260 580 540 640 T 1250 600",
              "M -50 620 Q 280 680 560 580 T 1250 660",
              "M -50 660 Q 260 580 540 640 T 1250 600",
            ],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </svg>

      {/* Floating green dots */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-primary"
          style={{
            left: `${5 + (i * 4.5) % 45}%`,
            top: `${15 + (i * 9) % 70}%`,
            boxShadow: "0 0 12px hsl(var(--primary) / 0.7)",
          }}
          animate={{ y: [0, -22, 0], opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.35,
          }}
        />
      ))}
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
