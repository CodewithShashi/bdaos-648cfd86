import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

export function Process() {
  const [active, setActive] = useState(2);
  const [direction, setDirection] = useState(0);

  const goTo = (index: number) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  const next = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % steps.length);
  };

  const prev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const current = steps[active];

  return (
    <section id="process" className="relative py-28 md:py-36 bg-secondary/40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          {/* Left */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
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

          {/* Right slider */}
          <div className="lg:col-span-7">
            {/* Week tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {steps.map((s, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={s.num}
                    onClick={() => goTo(i)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-xs font-semibold tracking-wider transition-colors duration-300 ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-background text-foreground border border-border hover:bg-secondary"
                    }`}
                  >
                    <span>{s.weeks}</span>
                    <span
                      className={`flex gap-[3px] ${
                        isActive ? "text-primary-foreground" : "text-primary/60"
                      }`}
                    >
                      {Array.from({ length: 4 }).map((_, idx) => (
                        <span
                          key={idx}
                          className={`h-3 w-[2px] rounded-full ${
                            isActive ? "bg-primary-foreground" : "bg-primary/60"
                          }`}
                        />
                      ))}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Slide stage */}
            <div className="relative mt-4 overflow-hidden rounded-3xl border border-border bg-background shadow-soft">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={current.num}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.25 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x > 80) {
                      prev();
                    } else if (info.offset.x < -80) {
                      next();
                    }
                  }}
                  className="relative cursor-grab active:cursor-grabbing rounded-3xl bg-primary p-8 md:p-10"
                >
                  <p className="font-display text-2xl md:text-3xl text-background/80">
                    {current.num}
                  </p>
                  <h3 className="mt-4 font-display text-3xl md:text-4xl tracking-tight leading-tight text-background">
                    {current.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-background/70">
                    {current.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {steps.map((s, i) => (
                  <button
                    key={s.num}
                    onClick={() => goTo(i)}
                    aria-label={`Go to step ${s.num}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active ? "w-8 bg-primary" : "w-2 bg-primary/30 hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous step"
                  className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background text-foreground transition hover:bg-secondary hover:border-primary"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next step"
                  className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background text-foreground transition hover:bg-secondary hover:border-primary"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
