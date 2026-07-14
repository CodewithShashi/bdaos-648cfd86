import { motion } from "framer-motion";
import { Check, GripVertical, Zap, Package, Circle, Sparkles, Loader2 } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const rows = [
  { title: "New lead captured", meta: "TRIGGER · FORM + EMAIL", done: true },
  { title: "AI enriches & scores it", meta: "UNDER 30 SEC · AUTOMATED", done: true },
  { title: "Routed to the right rep", meta: "0 MANUAL HANDOFFS", done: false },
];

function WorkflowVisual() {
  return (
    <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-border bg-secondary/50 p-4">
      <div className="space-y-3">
        {rows.map((r, i) => (
          <motion.div
            key={r.title}
            animate={{ opacity: [0, 1, 1], x: [-16, 0, 0] }}
            transition={{
              duration: 2.4,
              delay: i * 0.5,
              repeat: Infinity,
              repeatDelay: 1.2,
              times: [0, 0.3, 1],
              ease: "easeOut",
            }}
            className="flex items-center gap-3 rounded-xl border border-border bg-background p-2.5 shadow-soft"
          >
            <div
              className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg ${
                r.done ? "bg-foreground text-background" : "bg-secondary text-muted-foreground"
              }`}
            >
              {r.done ? (
                <Check className="h-4 w-4" strokeWidth={2.5} />
              ) : (
                <Loader2 className="h-4 w-4 animate-spin" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-display text-sm leading-tight text-foreground">{r.title}</div>
              <div className="mt-0.5 text-[9px] font-semibold tracking-wider text-muted-foreground">
                {r.meta}
              </div>
            </div>
            <GripVertical className="h-3.5 w-3.5 text-muted-foreground/50" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function IntegrationsVisual() {
  const icons = [Sparkles, Package, Circle, Zap, Circle, Package, Zap, Sparkles, Circle, Zap];
  const row1 = icons;
  const row2 = [...icons].reverse();
  return (
    <div className="flex h-full flex-col justify-center gap-3 overflow-hidden rounded-2xl border border-dashed border-border bg-secondary/50 p-4">
      {[row1, row2].map((row, ri) => (
        <div key={ri} className="relative overflow-hidden">
          <motion.div
            animate={{ x: ri === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="flex w-max gap-3"
          >
            {[...row, ...row].map((Icon, i) => (
              <div
                key={i}
                className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-dashed border-border bg-background"
              >
                <Icon className="h-5 w-5 text-foreground" strokeWidth={1.75} />
              </div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
}

function ConsultingVisual() {
  const bars = [
    { h: 40, label: "+20%", month: "JAN" },
    { h: 62, label: "+31%", month: "FEB" },
    { h: 88, label: "+42%", month: "MAR" },
    { h: 28, label: "APR", month: "APR", muted: true },
  ];
  return (
    <div className="flex h-full flex-col rounded-2xl border border-dashed border-border bg-secondary/50 p-4">
      <div className="flex items-center justify-between text-[9px] font-semibold tracking-wider text-muted-foreground">
        <span>WORK AUTOMATED</span>
        <span>0–50%</span>
      </div>
      <div className="mt-3 flex flex-1 items-end gap-3">
        <div className="flex h-full flex-col justify-between py-1 text-[9px] font-medium text-muted-foreground">
          {["50%", "40%", "30%", "20%", "10%", "0"].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="relative flex h-full flex-1 flex-col">
          <div className="flex flex-1 items-end gap-2 border-l border-dashed border-border pl-2">
            {bars.map((b, i) => (
              <motion.div
                key={i}
                animate={{ height: [`0%`, `${b.h}%`, `${b.h}%`] }}
                transition={{
                  duration: 3,
                  delay: i * 0.35,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  times: [0, 0.4, 1],
                  ease: "easeOut",
                }}
                className={`flex-1 rounded-lg border ${
                  b.muted
                    ? "border-border bg-background"
                    : "border-primary/30 bg-primary/80 shadow-soft"
                }`}
              />
            ))}
          </div>
          <div className="mt-1.5 flex gap-2 pl-2">
            {bars.map((b, i) => (
              <span
                key={i}
                className={`flex-1 text-center text-[9px] font-semibold ${
                  b.muted ? "text-muted-foreground" : "text-primary"
                }`}
              >
                {b.label}
              </span>
            ))}
          </div>
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
    visual: <WorkflowVisual />,
  },
  {
    num: "02",
    title: "Data & Integrations",
    desc: "We get your data AI-ready and wired into the tools you already use.",
    visual: <IntegrationsVisual />,
  },
  {
    num: "03",
    title: "Business Consulting",
    desc: "We find where AI creates real value, then map the plan to capture it.",
    visual: <ConsultingVisual />,
  },
];

export function ServiceShowcase() {
  return (
    <section
      id="services-showcase"
      className="relative scroll-mt-32 pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <Container>
        <SectionHeading
          eyebrow="OUR SERVICES"
          title="Everything you need to put AI to work."
          description="Strategy, automation, custom builds, and the team to run them, all in one place."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {services.map((s) => (
            <motion.article
              key={s.num}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ y: -4 }}
              className="flex h-full flex-col rounded-3xl border border-border bg-card p-5 shadow-soft transition"
            >
              <div className="h-72 shrink-0">{s.visual}</div>
              <div className="mt-6 flex flex-1 flex-col border-t border-border pt-5">
                <div className="text-xs font-semibold tracking-wider text-primary">{s.num}</div>
                <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-foreground">
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
