import { motion, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Target, Eye, Award } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import aboutImg from "@/assets/about.jpg";
import heroImg from "@/assets/hero-ai.jpg";
import whyImg from "@/assets/project-1.jpg";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
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

const pillars = [
  { icon: Target, title: "Mission", text: "Empower every team to build with AI — safely, quickly, and beautifully.", image: aboutImg, caption: "Our Mission", stat: { value: 99, suffix: "%", label: "Customer satisfaction" } },
  { icon: Eye, title: "Vision", text: "A world where software builds itself in collaboration with human intent.", image: heroImg, caption: "Our Vision", stat: { value: 2030, suffix: "", label: "AI-native by" } },
  { icon: Award, title: "Why us", text: "Trusted by 4,000+ teams. Enterprise-grade security. Human-centered design.", image: whyImg, caption: "Why choose us", stat: { value: 4000, suffix: "+", label: "Teams onboard" } },
];

export function About() {
  const [active, setActive] = useState(0);
  const current = pillars[active];

  return (
    <section id="about" className="relative py-28 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="About BDA AI"
          title="We build the intelligence layer for modern software."
          description="Since 2022, we've been engineering the infrastructure that powers the next generation of AI-native products, from ambitious startups to Fortune 500 teams."
        />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-elevated aspect-[4/5] md:aspect-[5/6]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.image}
                  src={current.image}
                  alt={current.caption}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent pointer-events-none" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.title + "-cap"}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-5 left-5 glass rounded-full px-4 py-1.5 text-xs font-medium"
                >
                  {current.caption}
                </motion.div>
              </AnimatePresence>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title + "-stat"}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.45 }}
                className="absolute -bottom-8 -right-6 md:-right-10 glass rounded-2xl p-5 shadow-soft animate-float"
              >
                <div className="text-3xl font-semibold">
                  <Counter key={current.title} to={current.stat.value} suffix={current.stat.suffix} />
                </div>
                <div className="text-xs text-muted-foreground mt-1">{current.stat.label}</div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {pillars.map((p, i) => {
              const isActive = i === active;
              return (
                <motion.button
                  key={p.title}
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  aria-pressed={isActive}
                  className={`w-full text-left flex gap-5 rounded-3xl border p-6 shadow-soft transition-all duration-300 ${
                    isActive
                      ? "border-primary/40 bg-white shadow-elevated -translate-y-1 ring-1 ring-primary/20"
                      : "border-border bg-white/70 hover:-translate-y-0.5 hover:shadow-elevated"
                  }`}
                >
                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition-colors ${
                      isActive ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                    }`}
                  >
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="mt-1 text-muted-foreground leading-relaxed">{p.text}</p>
                    {isActive && (
                      <motion.div
                        layoutId="pillar-underline"
                        className="mt-3 h-0.5 w-12 bg-primary rounded-full"
                      />
                    )}
                  </div>
                </motion.button>
              );
            })}
          </motion.div>


        </div>
      </Container>
    </section>
  );
}
