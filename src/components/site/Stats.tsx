import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Container } from "./Container";
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
    <section className="relative py-24 md:py-32 bg-secondary/40 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative rounded-[2rem] overflow-hidden min-h-[360px] shadow-elevated"
          >
            <img
              src={statsImg}
              alt="BDA AI global footprint"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-primary/10 to-transparent" />
          </motion.div>

          {/* Right stats card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 bg-white rounded-[2rem] shadow-elevated p-10 md:p-14 flex items-center"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-10 w-full">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
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
      </Container>
    </section>
  );
}
