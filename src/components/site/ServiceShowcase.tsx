import { motion } from "framer-motion";
import { Check, GripVertical, Zap, Package, Circle, Sparkles } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const cardBase =
  "relative rounded-3xl border border-dashed border-border bg-secondary/40 p-6 md:p-7";

function WorkflowCard() {
  const rows = [
    { title: "New lead captured", meta: "TRIGGER · FORM + EMAIL" },
    { title: "AI enriches & scores it", meta: "UNDER 30 SEC · AUTOMATED" },
    { title: "Routed to the right rep", meta: "0 MANUAL HANDOFFS" },
  ];
  return (
    <div className={cardBase}>
      <div className="space-y-3">
        {rows.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="flex items-center gap-3 rounded-2xl border border-border bg-background p-3 shadow-soft"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-foreground text-background">
              <Check className="h-5 w-5" strokeWidth={2.5} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-display text-base leading-tight text-foreground">{r.title}</div>
              <div className="mt-0.5 text-[10px] font-semibold tracking-wider text-muted-foreground">
                {r.meta}
              </div>
            </div>
            <GripVertical className="h-4 w-4 text-muted-foreground/50" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function IntegrationsCard() {
  const icons = [Sparkles, Package, Circle, Zap, Zap, Sparkles, Circle, Package];
  return (
    <div className={cardBase}>
      <div className="grid grid-cols-4 gap-3">
        {icons.map((Icon, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: i === 7 ? 0.4 : 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="grid aspect-square place-items-center rounded-2xl border border-dashed border-border bg-background"
          >
            <Icon className="h-7 w-7 text-foreground" strokeWidth={1.75} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ConsultingCard() {
  const bars = [
    { h: 30, label: "+20%" },
    { h: 50, label: "+31%" },
    { h: 75, label: "+42%" },
    { h: 18, label: "APR", muted: true },
  ];
  return (
    <div className={cardBase}>
      <div className="flex items-center justify-between text-[10px] font-semibold tracking-wider text-muted-foreground">
        <span>WORK AUTOMATED</span>
        <span>0–50%</span>
      </div>
      <div className="mt-4 flex h-56 items-end gap-4">
        <div className="flex h-full flex-col justify-between py-1 text-[10px] font-medium text-muted-foreground">
          {["50%", "40%", "30%", "20%", "10%", "0"].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="relative flex flex-1 items-end gap-3 border-l border-dashed border-border pl-3">
          {bars.map((b, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-2">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${b.h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: "easeOut" }}
                className={`w-full rounded-xl border border-border ${
                  b.muted ? "bg-background" : "bg-background shadow-soft"
                }`}
              />
              <span
                className={`text-[10px] font-semibold ${
                  b.muted ? "text-muted-foreground" : "text-primary"
                }`}
              >
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    num: "01",
    title: "Workflow Automations",
    desc: "We connect your tools and let the repetitive work run itself.",
    visual: <WorkflowCard />,
  },
  {
    num: "02",
    title: "Data & Integrations",
    desc: "We get your data AI-ready and wired into the tools you already use.",
    visual: <IntegrationsCard />,
  },
  {
    num: "03",
    title: "Business Consulting",
    desc: "We find where AI creates real value, then map the plan to capture it.",
    visual: <ConsultingCard />,
  },
];

export function ServiceShowcase() {
  return (
    <section id="services-showcase" className="relative py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="002/ OUR SERVICES"
          title="Everything you need to put AI to work."
          description="Strategy, automation, custom builds, and the team to run them, all in one place."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.article
              key={s.num}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="flex flex-col"
            >
              {s.visual}
              <div className="mt-6 border-t border-border pt-5">
                <div className="text-xs font-semibold text-primary">{s.num}</div>
                <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
