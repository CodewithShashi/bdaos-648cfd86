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
      <div className="relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch gap-0">
          {/* Left visual — full bleed, matches card height */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative h-[320px] lg:h-auto w-full overflow-hidden"
          >
            <img
              src={statsImg}
              alt="BDA AI global footprint"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 via-transparent to-secondary/20" />
          </motion.div>

          {/* Right stats card — overlaps slightly on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 lg:-ml-16 relative z-10 mx-4 md:mx-8 lg:mr-16 -mt-16 lg:mt-0 bg-white rounded-[2rem] shadow-elevated p-10 md:p-16 self-center"
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

