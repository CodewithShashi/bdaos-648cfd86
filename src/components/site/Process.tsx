import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { Container } from "./Container";
import { AnimatedButton } from "./AnimatedButton";

const products = [
  {
    label: "LinkAssist",
    num: "01",
    title: "LinkAssist",
    desc: "LinkedIn content and relationship workflow.",
  },
  {
    label: "HireAssist",
    num: "02",
    title: "HireAssist",
    desc: "Hiring workflow and candidate management.",
  },
  {
    label: "QAAssist",
    num: "03",
    title: "QAAssist",
    desc: "Quality assurance and release tracking.",
  },
  {
    label: "TaskAssist",
    num: "04",
    title: "TaskAssist",
    desc: "Task ownership, escalation, and reporting.",
  },
  {
    label: "Attribution",
    num: "05",
    title: "Attribution",
    desc: "Marketing-to-business outcome tracking.",
  },
  {
    label: "CoachAssist",
    num: "06",
    title: "CoachAssist",
    desc: "Event and delivery operations for training businesses.",
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

export function Process() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const activeIndexMotion = useTransform(
    scrollYProgress,
    (v) => Math.min(steps.length - 1, Math.floor(v * (steps.length - 1) + 0.15))
  );

  const [activeIndex, setActiveIndex] = useState(0);
  useMotionValueEvent(activeIndexMotion, "change", setActiveIndex);

  return (
    <section
      ref={containerRef}
      id="process"
      className="relative min-h-[150vh] md:min-h-[200vh] bg-secondary/40"
    >
      <div className="sticky top-0 h-auto min-h-screen md:h-screen py-20 md:py-36">
        <Container className="h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start h-full">
            {/* Left */}
            <div className="lg:col-span-5">
              <span className="inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold tracking-wide text-foreground">
                PRODUCTS BUILT BY BDA
              </span>

              <h2 className="mt-6 md:mt-8 font-display text-4xl md:text-5xl leading-[1.02] tracking-tight text-foreground">
                We build products when a repeated business problem needs a better system.
              </h2>

              <p className="mt-4 md:mt-6 max-w-md text-base md:text-lg text-muted-foreground leading-relaxed">
                Our product portfolio shows how we turn real operating problems into practical software. Some products are available to the public. Others are used inside client systems.
              </p>

              <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-4">
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
                  const isActive = i === activeIndex;
                  return (
                    <div
                      key={s.num}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-xs font-semibold tracking-wider transition-colors duration-300 border ${
                        isActive
                          ? "bg-primary text-primary-foreground border-transparent"
                          : "bg-background text-foreground border-border"
                      }`}
                    >
                      <span>{s.weeks}</span>
                      <Tick active={isActive} />
                    </div>
                  );
                })}
              </div>

            {/* Card stack */}
              <div className="relative mt-4 min-h-[280px] md:min-h-[360px] lg:min-h-[420px]">
                {steps.map((s, i) => {
                  const isVisible = i <= activeIndex;
                  const isActive = i === activeIndex;
                  return (
                    <motion.div
                      key={s.num}
                      initial={{ y: 60, opacity: 0, scale: 0.96 }}
                      animate={
                        isVisible
                          ? { y: 0, opacity: 1, scale: 1 }
                          : { y: 60, opacity: 0, scale: 0.96 }
                      }
                      transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                      className={`absolute inset-0 rounded-3xl p-6 md:p-8 lg:p-10 ${
                        isActive
                          ? "bg-primary shadow-glow"
                          : "bg-card border border-border shadow-soft"
                      }`}
                      style={{ zIndex: i }}
                    >
                      <p
                        className={`font-display text-2xl md:text-3xl ${
                          isActive ? "text-background/80" : "text-foreground/80"
                        }`}
                      >
                        {s.num}
                      </p>
                      <h3
                        className={`mt-4 font-display text-3xl md:text-4xl tracking-tight leading-tight ${
                          isActive ? "text-background" : "text-foreground"
                        }`}
                      >
                        {s.title}
                      </h3>
                      <p
                        className={`mt-5 max-w-xl text-base md:text-lg leading-relaxed ${
                          isActive ? "text-background/70" : "text-muted-foreground"
                        }`}
                      >
                        {s.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
