import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Container } from "./Container";


const services = [
  { title: "AI Strategy", desc: "Map AI to business outcomes with strategy sprints, opportunity audits, and roadmap design." },
  { title: "Autonomous Agents", desc: "Custom agents that plan, act, and learn — plugged into your existing tools and data." },
  { title: "Workflow Automation", desc: "Replace repetitive work with intelligent pipelines that scale with your operations." },
  { title: "Data & Analytics", desc: "Transform raw data into decisions with real-time dashboards and predictive models." },
  { title: "AI Security", desc: "SOC 2, HIPAA, and enterprise-grade guardrails for every deployment we ship." },
  { title: "Integrations", desc: "Native connectors for 200+ platforms — from Slack and Notion to Salesforce and SAP." },
];

export function Services() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const visible = 4;
  const maxStart = Math.max(0, services.length - visible);
  const [start, setStart] = useState(0);

  const next = () => {
    const n = Math.min(start + 1, maxStart);
    setStart(n);
    setActive(n);
  };
  const prev = () => {
    const n = Math.max(start - 1, 0);
    setStart(n);
    setActive(n);
  };

  // Autoplay: advance active card; wrap around
  const activeRef = useRef(active);
  activeRef.current = active;
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      const nextActive = (activeRef.current + 1) % services.length;
      setActive(nextActive);
      setStart(Math.min(nextActive, maxStart));
    }, 3200);
    return () => clearInterval(id);
  }, [paused, maxStart]);


  const progress = ((active + 1) / services.length) * 100;

  return (
    <section id="services" className="relative py-28 md:py-36 bg-secondary/50 overflow-hidden">
      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <p className="text-sm font-medium text-muted-foreground mb-4">WHAT WE DO</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-foreground leading-[1.05]">
              Advice is useful. Implementation creates change.
            </h2>

          </div>
          <p className="lg:col-span-4 text-muted-foreground leading-relaxed">
            BDA Technologies works from diagnosis to launch, training, and adoption.
          </p>
        </div>

        <div className="mt-14 overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <motion.div
            className="flex gap-5"
            animate={{ x: `calc(${-start} * (25% + 0px) - ${start} * 0px)` }}
            transition={{ type: "spring", stiffness: 120, damping: 22 }}
            style={{ width: `${(services.length / visible) * 100}%` }}
          >
            {services.map((s, i) => {
              const isActive = i === active;
              return (
                <motion.button
                  key={s.title}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`group text-left rounded-[28px] p-8 flex flex-col justify-between min-h-[340px] transition-colors duration-500 border ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-glow"
                      : "bg-white text-foreground border-border hover:bg-white"
                  }`}
                  style={{ flex: `0 0 calc(${100 / services.length}% - ${(20 * (services.length - 1)) / services.length}px)` }}
                  whileHover={{ y: -4 }}
                >
                  <div>
                    <h3 className="text-2xl md:text-[26px] font-semibold tracking-tight leading-tight">
                      {s.title}
                    </h3>
                    <motion.p
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0.75, height: "auto" }}
                      className={`mt-5 leading-relaxed ${isActive ? "text-primary-foreground/90" : "text-muted-foreground"}`}
                    >
                      {s.desc}
                    </motion.p>
                  </div>

                  <div className={`mt-8 inline-flex items-center gap-3 font-medium ${isActive ? "text-primary-foreground" : "text-foreground"}`}>
                    <span>Learn More</span>
                    <motion.span
                      animate={{ x: isActive ? 6 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`inline-flex ${isActive ? "text-primary-foreground" : "text-primary"}`}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.span>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        {/* Progress + controls */}
        <div className="mt-10 flex items-center gap-6">
          <div className="relative flex-1 h-px bg-border overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-primary h-[2px] -top-[0.5px]"
              animate={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              disabled={start === 0}
              aria-label="Previous"
              className="h-10 w-10 grid place-items-center rounded-full text-muted-foreground hover:text-foreground disabled:opacity-30 transition"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              disabled={start === maxStart}
              aria-label="Next"
              className="h-10 w-10 grid place-items-center rounded-full text-foreground hover:text-primary disabled:opacity-30 transition"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
