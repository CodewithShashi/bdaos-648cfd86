import { motion } from "framer-motion";
import { Brain, Bot, Workflow, Shield, LineChart, Puzzle } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const services = [
  { icon: Brain, title: "AI Strategy", desc: "Map AI to business outcomes with strategy sprints, opportunity audits, and roadmap design." },
  { icon: Bot, title: "Autonomous Agents", desc: "Custom agents that plan, act, and learn — plugged into your existing tools and data." },
  { icon: Workflow, title: "Workflow Automation", desc: "Replace repetitive work with intelligent pipelines that scale with your operations." },
  { icon: LineChart, title: "Data & Analytics", desc: "Transform raw data into decisions with real-time dashboards and predictive models." },
  { icon: Shield, title: "AI Security", desc: "SOC 2, HIPAA, and enterprise-grade guardrails for every deployment we ship." },
  { icon: Puzzle, title: "Integrations", desc: "Native connectors for 200+ platforms — from Slack and Notion to Salesforce and SAP." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36 bg-secondary/50 overflow-hidden">
      {/* Animated background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-primary/15 blur-[120px]"
          animate={{ x: [0, 80, -40, 0], y: [0, 40, -30, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 right-1/4 h-[34rem] w-[34rem] rounded-full bg-primary-glow/15 blur-[130px]"
          animate={{ x: [0, -60, 40, 0], y: [0, -50, 30, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
        <svg className="absolute inset-0 h-full w-full opacity-[0.14]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="services-dots" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="oklch(0.58 0.18 145)" />
            </pattern>
            <radialGradient id="dots-fade" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="dots-mask">
              <rect width="100%" height="100%" fill="url(#dots-fade)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-dots)" mask="url(#dots-mask)" />
        </svg>
        {Array.from({ length: 8 }).map((_, i) => {
          const size = 3 + (i % 3) * 2;
          const left = (i * 83) % 100;
          const top = (i * 41) % 90;
          return (
            <motion.span
              key={i}
              className="absolute rounded-full bg-primary/40 shadow-[0_0_14px_oklch(0.58_0.18_145/0.55)]"
              style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
              animate={{ y: [0, -30, 0, 20, 0], opacity: [0.2, 0.8, 0.3, 0.7, 0.2] }}
              transition={{ duration: 9 + (i % 4), repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
            />
          );
        })}
      </div>

      <Container className="relative">

        <SectionHeading
          eyebrow="What we do"
          title="Everything you need to ship AI, in one place."
          description="A complete toolkit of services designed to take you from idea to production, without the usual friction."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl bg-white p-8 border border-border shadow-soft overflow-hidden transition"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/40 via-transparent to-primary-glow/40 blur-md" />
              </div>
              <div className="relative">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
