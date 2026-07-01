import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "./Container";

const services = [
  {
    n: "01",
    title: "AI Strategy",
    desc: "Map AI to business outcomes with opportunity audits, strategy sprints, and pragmatic roadmaps.",
    items: ["Opportunity Audits", "Roadmap Design", "ROI Modeling", "Executive Workshops"],
    tools: ["GPT", "Claude", "Gemini", "Notion"],
  },
  {
    n: "02",
    title: "Autonomous Agents",
    desc: "Custom agents that plan, act, and learn — plugged straight into your existing tools and data.",
    items: ["Tool-using Agents", "Voice Agents", "Multi-agent Systems", "Evals & Guardrails"],
    tools: ["LangGraph", "OpenAI", "Vercel", "Pinecone"],
  },
  {
    n: "03",
    title: "Workflow Automation",
    desc: "Replace repetitive work with intelligent pipelines that scale quietly with your operations.",
    items: ["Process Mining", "RPA + LLM", "Approval Flows", "Data Pipelines"],
    tools: ["n8n", "Zapier", "Temporal", "dbt"],
  },
  {
    n: "04",
    title: "Data & Analytics",
    desc: "Turn raw data into decisions with real-time dashboards, forecasts, and predictive models.",
    items: ["Warehousing", "Forecasting", "Dashboards", "ML Ops"],
    tools: ["Snowflake", "dbt", "Metabase", "Vertex"],
  },
  {
    n: "05",
    title: "AI Security",
    desc: "SOC 2, HIPAA, and enterprise-grade guardrails baked into every deployment we ship.",
    items: ["Red Teaming", "PII Redaction", "SOC 2", "Access Controls"],
    tools: ["Vanta", "Vault", "Auth0", "Datadog"],
  },
  {
    n: "06",
    title: "Integrations",
    desc: "Native connectors for 200+ platforms — from Slack and Notion to Salesforce and SAP.",
    items: ["Slack & Teams", "CRM Sync", "ERP Bridges", "Custom APIs"],
    tools: ["Slack", "Salesforce", "HubSpot", "SAP"],
  },
];

export function Services() {
  const [active, setActive] = useState(1);

  return (
    <section id="services" className="relative py-28 md:py-36 bg-[#0b0f0d] text-white overflow-hidden">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-40 -left-24 h-[36rem] w-[36rem] rounded-full bg-primary/25 blur-[140px]"
          animate={{ x: [0, 80, -40, 0], y: [0, 40, -30, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-24 h-[38rem] w-[38rem] rounded-full bg-primary-glow/20 blur-[150px]"
          animate={{ x: [0, -60, 40, 0], y: [0, -50, 30, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
        <svg className="absolute inset-0 h-full w-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="svc-dots-dark" width="26" height="26" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#svc-dots-dark)" />
        </svg>
      </div>

      <Container className="relative">
        {/* Header row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              What we do
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-5 text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.02]"
            >
              Our
              <br />
              Services
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5 md:pt-24 text-lg text-white/70 leading-relaxed"
          >
            A complete toolkit of AI services designed to take you from idea
            to production — without the usual friction.
          </motion.p>
        </div>

        {/* Card rail */}
        <div className="mt-14 -mx-4 px-4 overflow-x-auto scrollbar-none">
          <div className="flex gap-5 min-w-max pb-4">
            {services.map((s, i) => {
              const isActive = i === active;
              return (
                <motion.article
                  key={s.title}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  animate={{
                    width: isActive ? 380 : 300,
                  }}
                  className={`relative flex flex-col justify-between h-[520px] shrink-0 rounded-[28px] p-7 border transition-colors duration-500 cursor-pointer ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-glow"
                      : "bg-white/[0.03] text-white border-white/10 hover:border-white/20"
                  }`}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <span
                      className={`text-2xl font-medium tracking-tight ${
                        isActive ? "text-primary-foreground/90" : "text-white/50"
                      }`}
                    >
                      {s.n}
                    </span>
                    <motion.span
                      animate={{ rotate: isActive ? 0 : -20, scale: isActive ? 1 : 0.9 }}
                      className={`grid h-10 w-10 place-items-center rounded-full border ${
                        isActive
                          ? "border-primary-foreground/30 bg-primary-foreground/10"
                          : "border-white/20 bg-white/5"
                      }`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.span>
                  </div>

                  {/* Title + desc */}
                  <div className="mt-auto">
                    <h3 className="text-3xl font-semibold tracking-tight leading-tight">
                      {s.title}
                    </h3>
                    <motion.p
                      animate={{ opacity: isActive ? 1 : 0, height: isActive ? "auto" : 0 }}
                      transition={{ duration: 0.35 }}
                      className={`mt-3 text-sm leading-relaxed overflow-hidden ${
                        isActive ? "text-primary-foreground/85" : "text-white/60"
                      }`}
                    >
                      {s.desc}
                    </motion.p>

                    {/* Details only when active */}
                    <motion.div
                      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                      transition={{ duration: 0.35, delay: isActive ? 0.05 : 0 }}
                      className={`mt-6 grid grid-cols-2 gap-6 ${isActive ? "" : "pointer-events-none"}`}
                    >
                      <div>
                        <div className="text-[11px] uppercase tracking-widest text-primary-foreground/60">
                          Services
                        </div>
                        <ul className="mt-2 space-y-1.5 text-sm">
                          {s.items.map((it) => (
                            <li key={it}>{it}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-[11px] uppercase tracking-widest text-primary-foreground/60">
                          Tools
                        </div>
                        <ul className="mt-2 space-y-1.5 text-sm">
                          {s.tools.map((t) => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Progress dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Show service ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-8 bg-primary" : "w-1.5 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
