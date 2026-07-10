import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "./Container";

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
  const [active, setActive] = useState(2);

  return (
    <section id="process" className="relative py-28 md:py-36 bg-secondary/40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          {/* Left */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold tracking-wide text-foreground">
              004/ OUR PROCESS
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
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background shadow-soft transition hover:-translate-y-0.5"
              >
                Book A Call
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#pricing"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium text-foreground transition hover:-translate-y-0.5"
              >
                Our Pricing
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right timeline */}
          <div className="lg:col-span-7 space-y-5">
            {steps.map((s, i) => {
              const isActive = i === active;
              return (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  onMouseEnter={() => setActive(i)}
                  className="relative"
                >
                  {/* week label bar */}
                  <div
                    className={`flex items-center justify-between rounded-2xl px-6 py-3.5 text-xs font-semibold tracking-wider transition-colors duration-500 ${
                      isActive
                        ? "bg-foreground text-background"
                        : "bg-background text-foreground border border-border"
                    }`}
                  >
                    <span>{s.weeks}</span>
                    <Tick active={isActive} />
                  </div>

                  {/* card */}
                  <motion.div
                    animate={{
                      backgroundColor: isActive
                        ? "hsl(0 0% 6%)"
                        : "hsl(0 0% 100%)",
                      color: isActive ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
                    }}
                    transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                    className={`mt-2 rounded-3xl p-8 md:p-10 border ${
                      isActive ? "border-transparent shadow-elevated" : "border-border shadow-soft"
                    }`}
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
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
