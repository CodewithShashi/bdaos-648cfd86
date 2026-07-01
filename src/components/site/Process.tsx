import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Compass, PenTool, Rocket, TrendingUp, MousePointer2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const steps = [
  { icon: Compass, title: "Discover", desc: "We dive deep into your goals, users, and constraints to design the right AI opportunity." },
  { icon: PenTool, title: "Design", desc: "Rapid prototypes and interaction design that de-risk the build before code is written." },
  { icon: Rocket, title: "Deploy", desc: "Production-ready agents and workflows, delivered in weeks not quarters." },
  { icon: TrendingUp, title: "Evolve", desc: "Continuous training, monitoring, and iteration — your AI keeps getting sharper." },
];

// Framer/Figma-style collaborator cursors
const cursors = [
  { name: "Aria", color: "#009432", label: "Strategy Lead" },
  { name: "Kai", color: "#7C3AED", label: "Product Designer" },
  { name: "Noor", color: "#F59E0B", label: "AI Engineer" },
  { name: "Zed", color: "#EC4899", label: "Growth" },
];

export function Process() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // observe visibility to start/stop cursor loop
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // animated cursor traversal across icon centers
  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    let idx = 0;

    const getTarget = (i: number) => {
      const track = trackRef.current;
      if (!track) return null;
      const nodes = track.querySelectorAll<HTMLElement>("[data-step-icon]");
      const node = nodes[i];
      if (!node) return null;
      const t = track.getBoundingClientRect();
      const n = node.getBoundingClientRect();
      return {
        cx: n.left - t.left + n.width / 2,
        cy: n.top - t.top + n.height / 2,
      };
    };

    // seed position at first step
    const first = getTarget(0);
    if (first) {
      x.set(first.cx - 40);
      y.set(first.cy - 60);
    }

    const step = async () => {
      while (!cancelled) {
        const target = getTarget(idx);
        if (target) {
          setActive(idx);
          await Promise.all([
            animate(x, target.cx - 40, { duration: 1.1, ease: [0.65, 0, 0.35, 1] }),
            animate(y, target.cy - 60, { duration: 1.1, ease: [0.65, 0, 0.35, 1] }),
          ]);
          await new Promise((r) => setTimeout(r, 1400));
        }
        idx = (idx + 1) % steps.length;
      }
    };
    step();
    return () => {
      cancelled = true;
    };
  }, [inView, x, y]);

  const cursor = cursors[active];
  const labelX = useTransform(x, (v) => v + 20);
  const labelY = useTransform(y, (v) => v + 22);

  return (
    <section id="process" className="relative py-28 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title="A calm, deliberate process."
          description="Four steps, zero surprises. We combine strategic depth with the speed of a modern product studio."
        />

        <div ref={trackRef} className="relative mt-24">
          {/* base connecting line */}
          <div className="hidden lg:block absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          {/* active progress line */}
          <motion.div
            className="hidden lg:block absolute top-8 left-8 h-px origin-left bg-gradient-to-r from-primary/70 via-primary to-primary/70"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: (active + 1) / steps.length }}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
            style={{ right: "2rem" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {steps.map((s, i) => {
              const isActive = i === active;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="relative"
                >
                  <div className="relative inline-block">
                    <motion.span
                      data-step-icon
                      animate={{
                        scale: isActive ? 1.08 : 1,
                        boxShadow: isActive
                          ? "0 20px 40px -18px rgba(0,148,50,0.55)"
                          : "0 8px 20px -12px rgba(15,23,42,0.15)",
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="relative grid h-16 w-16 place-items-center rounded-2xl bg-white border border-border text-primary"
                    >
                      <s.icon className="h-6 w-6" />
                      {isActive && (
                        <motion.span
                          layoutId="step-ring"
                          className="absolute inset-0 rounded-2xl ring-2 ring-primary/60"
                          transition={{ type: "spring", stiffness: 260, damping: 28 }}
                        />
                      )}
                    </motion.span>
                    <motion.span
                      animate={{ scale: isActive ? 1.1 : 1 }}
                      className="absolute -top-2 -right-2 h-7 w-7 grid place-items-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-glow"
                    >
                      {i + 1}
                    </motion.span>
                  </div>
                  <motion.h3
                    animate={{ color: isActive ? "hsl(var(--foreground))" : "hsl(var(--foreground))" }}
                    className="mt-6 text-xl font-semibold"
                  >
                    {s.title}
                  </motion.h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Framer-style collaborator cursor */}
          <motion.div
            aria-hidden
            style={{ x, y }}
            className="pointer-events-none absolute top-0 left-0 hidden lg:block z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <MousePointer2
              className="h-6 w-6 drop-shadow-md"
              style={{ color: cursor.color, fill: cursor.color }}
            />
          </motion.div>
          <motion.div
            aria-hidden
            style={{ x: labelX, y: labelY, backgroundColor: cursor.color }}
            className="pointer-events-none absolute top-0 left-0 hidden lg:flex z-20 items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-medium text-white shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            key={cursor.name}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
            {cursor.name} · {cursor.label}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
