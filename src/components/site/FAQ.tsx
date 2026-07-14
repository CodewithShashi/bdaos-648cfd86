import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Container } from "./Container";

const faqs = [
  {
    q: "What does BDA AI actually do?",
    a: "We're a full-service AI agency. We find where AI creates value, build the automations, agents, and tools to capture it, then train your team to run them.",
  },
  {
    q: "How do I get started?",
    a: "Book a 30-minute strategy call. We'll audit your workflows, identify the highest-leverage AI opportunities, and scope a pilot you can ship in weeks.",
  },
  {
    q: "How long until we see results?",
    a: "Most pilots are live in 4–6 weeks. Measurable impact — time saved, revenue lifted, cost cut — typically shows up in the first quarter of operation.",
  },
  {
    q: "What if a pilot doesn't work out?",
    a: "We scope every engagement with clear success metrics up front. If the pilot misses, we tell you plainly, share what we learned, and part as friends.",
  },
  {
    q: "Do we need technical staff on our side?",
    a: "No. We handle build, deployment, and monitoring end-to-end. We do ask for a product owner who knows the workflow we're automating.",
  },
  {
    q: "Who owns the systems and data?",
    a: "You do. Every model, prompt, integration, and dataset we build lives in your accounts under your control. We hand over full documentation on delivery.",
  },
];

function FaqItem({
  q,
  a,
  index,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className={`rounded-3xl border border-dashed border-border bg-secondary/60 transition-colors ${
        open ? "bg-secondary" : "hover:bg-secondary"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 px-6 py-6 md:px-8 md:py-7 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-xl md:text-2xl tracking-tight text-foreground">
          <span className="text-foreground/90">{num}/ </span>
          {q}
        </span>
        <span
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition-colors ${
            open
              ? "bg-foreground text-background ring-2 ring-primary/60"
              : "bg-foreground text-background"
          }`}
        >
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-7 -mt-1">
              <div className="h-px w-full bg-border/70 mb-5" />
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              009/ FAQS
            </span>
            <h2 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.02] text-foreground">
              Need Answers?
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Everything you need to know before we talk.
            </p>
            <div className="mt-10 hidden lg:flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-foreground" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((f, i) => (
              <FaqItem
                key={f.q}
                q={f.q}
                a={f.a}
                index={i}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
