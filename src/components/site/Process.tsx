import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Container } from "./Container";
import { AnimatedButton } from "./AnimatedButton";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isMobile;
}

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

export function Process() {
  const containerRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useIsMobile();
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

  useEffect(() => {
    if (!isMobile) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = cardRefs.current.findIndex((el) => el === entry.target);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-40% 0px -40% 0px" }
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [isMobile]);

  const scrollToCard = (i: number) => {
    const el = cardRefs.current[i];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={containerRef}
      id="process"
      className="relative bg-secondary/40 lg:min-h-[200vh]"
    >
      <div className="py-28 md:py-36 lg:sticky lg:top-0 lg:h-screen lg:min-h-screen">
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

              <div className="mt-10 hidden lg:flex flex-wrap items-center gap-4">
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
                    <button
                      key={s.num}
                      onClick={() => scrollToCard(i)}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-xs font-semibold tracking-wider transition-colors duration-300 border text-left ${
                        isActive
                          ? "bg-primary text-primary-foreground border-transparent"
                          : "bg-background text-foreground border-border"
                      }`}
                    >
                      <span>{s.weeks}</span>
                      <Tick active={isActive} />
                    </button>
                  );
                })}
              </div>

            {/* Card stack */}
              <div className="relative mt-4 lg:min-h-[420px]">
                {steps.map((s, i) => {
                  const isVisible = isMobile || i <= activeIndex;
                  const isActive = i === activeIndex;
                  return (
                    <motion.div
                      ref={(el) => { cardRefs.current[i] = el; }}
                      key={s.num}
                      initial={{ y: 60, opacity: 0, scale: 0.96 }}
                      animate={
                        isVisible
                          ? { y: 0, opacity: 1, scale: 1 }
                          : { y: 60, opacity: 0, scale: 0.96 }
                      }
                      transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                      className={`lg:absolute lg:inset-0 relative mb-4 lg:mb-0 rounded-3xl p-8 md:p-10 ${
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

              <div className="mt-8 flex lg:hidden flex-wrap items-center gap-4">
                <AnimatedButton href="#contact">Book A Call</AnimatedButton>
                <AnimatedButton href="#pricing" variant="ghost">
                  Our Pricing
                </AnimatedButton>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
