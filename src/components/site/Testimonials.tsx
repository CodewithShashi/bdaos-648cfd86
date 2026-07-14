import { motion } from "framer-motion";
import { Star, Quote, Twitter } from "lucide-react";
import { Container } from "./Container";

type Review = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

const rowOne: Review[] = [
  {
    quote:
      "Our team now runs the playbooks on their own. That's the kind of partner that builds capability, not dependency.",
    name: "Emma Collins",
    role: "HEAD OF CONTENT",
    initials: "EC",
  },
  {
    quote:
      "BDA AI killed two of our pet projects and saved us a fortune. Honest advice we couldn't get internally.",
    name: "Lucas Bennett",
    role: "CEO & FOUNDER",
    initials: "LB",
  },
  {
    quote:
      "Every recommendation tied back to a real number on the P&L. Strategic, reliable, and genuinely tailored to us.",
    name: "Benjamin Daul",
    role: "HEAD OF ENGINEERING",
    initials: "BD",
  },
  {
    quote:
      "They rewired how we ship. Weekly experiments, clear metrics, and zero fluff — a rare kind of partner.",
    name: "Sofia Marín",
    role: "VP GROWTH",
    initials: "SM",
  },
];

const rowTwo: Review[] = [
  {
    quote:
      "The pilot was live and measurable before we expected a proposal. Fast, focused, and refreshingly free of buzzwords.",
    name: "Amy Louise",
    role: "CUSTOMER SUCCESS MANAGER",
    initials: "AL",
  },
  {
    quote:
      "We had a roadmap in weeks, not months of meetings. Finally an AI partner that thinks in outcomes.",
    name: "Michael Torres",
    role: "HEAD OF OPERATIONS",
    initials: "MT",
  },
  {
    quote:
      "They showed us where AI actually fit our workflow, not just where it sounded impressive. Clear, practical, worth every cent.",
    name: "Olivia Reed",
    role: "MARKETING DIRECTOR",
    initials: "OR",
  },
  {
    quote:
      "Craft you can feel. Every review round moved us forward instead of sideways — a genuine force multiplier.",
    name: "Jonas Weber",
    role: "FOUNDER",
    initials: "JW",
  },
];

function Card({ r }: { r: Review }) {
  return (
    <figure className="group relative flex w-[380px] shrink-0 flex-col justify-between rounded-3xl border border-border bg-secondary/40 p-7 transition hover:bg-secondary/70 hover:shadow-elevated">
      <div>
        <div className="flex items-start justify-between">
          <div className="flex gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <Quote className="h-6 w-6 text-primary" strokeWidth={2.25} />
        </div>
        <blockquote className="mt-8 font-display text-xl leading-[1.35] tracking-[-0.01em] text-foreground">
          "{r.quote}"
        </blockquote>
      </div>

      <figcaption className="mt-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground text-sm font-semibold">
            {r.initials}
          </span>
          <div>
            <div className="font-medium text-foreground leading-tight">
              {r.name}
            </div>
            <div className="text-[11px] tracking-wider text-muted-foreground uppercase">
              {r.role}
            </div>
          </div>
        </div>
        <a
          href="#"
          aria-label={`${r.name} on X`}
          className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-muted-foreground transition hover:text-primary hover:border-primary"
        >
          <Twitter className="h-3.5 w-3.5" />
        </a>
      </figcaption>
    </figure>
  );
}

function Marquee({
  items,
  direction = "left",
  duration = 60,
}: {
  items: Review[];
  direction?: "left" | "right";
  duration?: number;
}) {
  const loop = [...items, ...items];
  return (
    <div className="group overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {loop.map((r, i) => (
          <Card key={`${r.name}-${i}`} r={r} />
        ))}
      </motion.div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <Container>
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground"
        >
          OUR CLIENTS
        </motion.span>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-foreground"
          >
            What Our Clients Say.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 text-base text-muted-foreground leading-relaxed"
          >
            Real stories from teams that use BDA AI to scale faster and achieve
            measurable results.
          </motion.p>
        </div>
      </Container>

      <div className="mt-14 space-y-6">
        <Marquee items={rowOne} direction="left" duration={60} />
        <Marquee items={rowTwo} direction="right" duration={70} />
      </div>
    </section>
  );
}
