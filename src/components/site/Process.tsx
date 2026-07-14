import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "./Container";
import { AnimatedButton } from "./AnimatedButton";

const steps = [
  {
    weeks: "WEEKS 1–2",
    num: "01",
    title: "Find the friction",
    desc: "We map your workflows and pinpoint where your team loses time — and where AI will pay off.",
  },
  {
    weeks: "WEEKS 3–4",
    num: "02",
    title: "Shape the plan",
    desc: "We rank the opportunities by ROI and turn the strongest into a clear, sequenced plan.",
  },
  {
    weeks: "WEEKS 5–6",
    num: "03",
    title: "Build & integrate",
    desc: "We build the agents and automations, wire them into your stack, and validate every step.",
  },
  {
    weeks: "WEEKS 7+",
    num: "04",
    title: "Launch & evolve",
    desc: "We roll it out to your team, monitor performance, and keep sharpening the system.",
  },
];

function Tick({ active }: { active: boolean }) {
  return (
    <div className="flex items-center gap-[3px]">
      {Array.from({ length: 4 }).map((_, i) => (
        <span
          key={i}
          className={`h-3 w-[2px] rounded-full ${active ? "bg-primary" : "bg-primary/60"}`}
        />
      ))}
    </div>
  );
}

function StackedCard({
  s,
  index,
  progress,
}: {
  s: (typeof steps)[number];
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const threshold = index / (steps.length - 1);
  const start = Math.max(0, threshold - 0.15);

  const y = useTransform(progress, [start, threshold], [60, 0]);
  const opacity = useTransform(progress, [start, threshold], [0, 1]);
  const scale = useTransform(progress, [start, threshold], [0.96, 1]);

  return (
    <motion.div
      style={{ y, opacity, scale, zIndex: index }}
      className="absolute inset-0 rounded-3xl border border-border bg-card p-8 md:p-10 shadow-soft"
    >
      <p className="font-display text-2xl md:text-3xl text-foreground/80">{s.num}</p>
      <h3 className="mt-4 font-display text-3xl md:text-4xl tracking-tight leading-tight text-foreground">
        {s.title}
      </h3>
      <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground">
        {s.desc}
      </p>
    </motion.div>
  );
}

function ActiveCard({
  s,
  index,
  progress,
}: {
  s: (typeof steps)[number];
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const threshold = index / (steps.length - 1);
  const start = Math.max(0, threshold - 0.15);

  const y = useTransform(progress, [start, threshold], [60, 0]);
  const opacity = useTransform(progress, [start, threshold], [0, 1]);
  const scale = useTransform(progress, [start, threshold], [0.96, 1]);

  return (
    <motion.div
      style={{ y, opacity, scale, zIndex: index + 10 }}
      className="absolute inset-0 rounded-3xl bg-primary p-8 md:p-10 shadow-glow"
    >
      <p className="font-display text-2xl md:text-3xl text-background/80">{s.num}</p>
      <h3 className="mt-4 font-display text-3xl md:text-4xl tracking-tight leading-tight text-background">
        {s.title}
      </h3>
      <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-background/70">
        {s.desc}
      </p>
    </motion.div>
  );
}

function ActiveTab({
  index,
  progress,
}: {
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const threshold = index / (steps.length - 1);
  const start = Math.max(0, threshold - 0.15);
  const isActive = useTransform(progress, (v) => v >= start);

  return (
    <motion.div
      className="absolute inset-0 rounded-2xl bg-primary"
      style={{ opacity: isActive }}
    />
  );
}

export function Process() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      id="process"
      className="relative min-h-[200vh] bg-secondary/40"
    >
      <div className="sticky top-0 h-screen py-28 md:py-36">
        <Container className="h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start h-full">
            {/* Left */}
            <div className="lg:col-span-5">
              <span className="inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold tracking-wide text-foreground">
                OUR PROCESS
              </span>

              <h2 className="mt-8 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-foreground">
                From Friction
                <br />
                To Fully Live.
              </h2>

              <p className="mt-6 max-w-md text-lg text-muted-foreground leading-relaxed">
                A simple, proven path from your first call to a team that runs on AI — in weeks, not quarters.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <AnimatedButton href="#contact">Book A Call</AnimatedButton>
                <AnimatedButton href="#pricing" variant="ghost">
                  Our Pricing
                </AnimatedButton>
              </div>
            </div>

            {/* Right stacked cards */}
            <div className="lg:col-span-7 h-full flex flex-col">
              {/* Week tabs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {steps.map((s, i) => {
                  const threshold = i / (steps.length - 1);
                  const start = Math.max(0, threshold - 0.15);
                  return (
                    <div key={s.num} className="relative">
                      <ActiveTab index={i} progress={scrollYProgress} />
                      <div
                        className={`relative z-10 flex items-center justify-between rounded-2xl px-4 py-3.5 text-xs font-semibold tracking-wider transition-colors duration-300 border border-border ${
                          i === 0
                            ? "bg-primary text-primary-foreground"
                            : "bg-background text-foreground"
                        }`}
                      >
                        <span>{s.weeks}</span>
                        <Tick active={i === 0} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Card stack */}
              <div className="relative flex-1 mt-4 min-h-[360px] md:min-h-[420px]">
                {steps.map((s, i) =>
                  i === 0 ? (
                    <ActiveCard key={s.num} s={s} index={i} progress={scrollYProgress} />
                  ) : (
                    <ActiveCard key={s.num} s={s} index={i} progress={scrollYProgress} />
                  )
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
