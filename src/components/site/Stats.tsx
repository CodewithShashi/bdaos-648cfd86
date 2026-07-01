import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import statsImg from "@/assets/hero-ai.jpg";

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

export function Stats() {
  return (
    <section className="relative py-20 md:py-28 bg-secondary/30 overflow-hidden">
      {/* Dark animated background on the left */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-full lg:w-1/2 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_#0b0f0d_0%,_#0b0f0d_45%,_transparent_75%)]" />
        <motion.div
          className="absolute -left-24 top-10 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(0,148,50,0.45), transparent 60%)" }}
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-20 bottom-0 h-96 w-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(0,148,50,0.25), transparent 60%)" }}
          animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse at left, black 30%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at left, black 30%, transparent 70%)",
          }}
        />
        {[...Array(6)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/70"
            style={{ left: `${8 + i * 9}%`, top: `${20 + (i % 3) * 20}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          />
        ))}
      </div>

      <div className="relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-0">
          {/* Left visual — full bleed */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative h-[380px] md:h-[520px] w-full overflow-hidden"
          >
            <img
              src={statsImg}
              alt="BDA AI global footprint"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-transparent to-secondary/30" />
          </motion.div>

          {/* Right stats card — overlaps slightly on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 lg:-ml-16 relative z-10 mx-4 md:mx-8 lg:mr-16 -mt-16 lg:mt-0 bg-white rounded-[2rem] shadow-elevated p-10 md:p-16"
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
      </div>
    </section>
  );
}

