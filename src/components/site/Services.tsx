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
    <section id="services" className="relative py-28 md:py-36 bg-secondary/50">
      <Container>
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
