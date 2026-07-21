import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Linkedin,
  UserRound,
  ShieldCheck,
  ListTodo,
  BarChart3,
  GraduationCap,
  Sparkles,
  Layers,
  Plug,
  LineChart,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/site/Container";
import { AnimatedButton } from "@/components/site/AnimatedButton";
import productsFeaturedImg from "@/assets/products-featured.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — BDA Technologies" },
      {
        name: "description",
        content:
          "Explore the BDA Technologies product ecosystem: LinkAssist, HireAssist, QAAssist, TaskAssist, Attribution, and CoachAssist — practical software built for growing service businesses.",
      },
      { property: "og:title", content: "Products — BDA Technologies" },
      {
        property: "og:description",
        content:
          "A premium product ecosystem built to move your business forward. See how BDA products fit into your operating system.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});

type Product = {
  name: string;
  tag: string;
  icon: typeof Linkedin;
  value: string;
  features: string[];
  category: "AI & Automation" | "Digital Solutions" | "Business Solutions";
  bestFor: string;
  useCase: string;
  keyCap: string;
};

const products: Product[] = [
  {
    name: "LinkAssist",
    tag: "LinkedIn Growth",
    icon: Linkedin,
    value: "LinkedIn content and relationship workflow, without the guesswork.",
    features: ["Content pipeline", "Outreach tracking", "Relationship CRM"],
    category: "Digital Solutions",
    bestFor: "Founders and sales teams",
    useCase: "Turn LinkedIn into a repeatable pipeline",
    keyCap: "Structured content and outreach cadence",
  },
  {
    name: "HireAssist",
    tag: "Hiring Ops",
    icon: UserRound,
    value: "A hiring workflow that keeps candidates, roles, and decisions in one place.",
    features: ["Role pipelines", "Interview scorecards", "Offer tracking"],
    category: "Business Solutions",
    bestFor: "Growing teams hiring 3+ roles",
    useCase: "Close roles faster with clear ownership",
    keyCap: "End-to-end candidate visibility",
  },
  {
    name: "QAAssist",
    tag: "Quality & Release",
    icon: ShieldCheck,
    value: "Quality assurance and release tracking for teams that ship weekly.",
    features: ["Release checklists", "Bug triage", "Regression tracking"],
    category: "Digital Solutions",
    bestFor: "Product and engineering teams",
    useCase: "Ship releases without last-minute surprises",
    keyCap: "Structured QA and release control",
  },
  {
    name: "TaskAssist",
    tag: "Execution",
    icon: ListTodo,
    value: "Task ownership, escalation, and reporting across the whole team.",
    features: ["Owner-based tasks", "Escalation rules", "Weekly reporting"],
    category: "Business Solutions",
    bestFor: "Operations and delivery teams",
    useCase: "Stop tasks from getting lost between people",
    keyCap: "Clear ownership and escalation",
  },
  {
    name: "Attribution",
    tag: "Marketing Analytics",
    icon: BarChart3,
    value: "Marketing-to-business outcome tracking, in one connected view.",
    features: ["Source tracking", "Pipeline attribution", "Outcome reporting"],
    category: "AI & Automation",
    bestFor: "Marketing and revenue leaders",
    useCase: "See which activity actually creates revenue",
    keyCap: "End-to-end attribution across channels",
  },
  {
    name: "CoachAssist",
    tag: "Delivery Ops",
    icon: GraduationCap,
    value: "Event and delivery operations built for training businesses.",
    features: ["Cohort workflows", "Delivery tracking", "Attendee ops"],
    category: "Business Solutions",
    bestFor: "Coaches and training businesses",
    useCase: "Run cohorts and events with less firefighting",
    keyCap: "Cohort and delivery operations in one system",
  },
];



function ProductsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Overview />
      <FeaturedShowcase />
      <WhyOurProducts />
      <FinalCTA />
      <Footer />
    </main>
  );
}

/* ============ 1. HERO ============ */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 md:pt-44 pb-20 md:pb-28">
      <div aria-hidden className="absolute inset-0 bg-mesh opacity-70" />
      <div
        aria-hidden
        className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float-slow"
      />
      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              Our Products
            </span>
            <h1 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.03] tracking-tight text-foreground">
              A product ecosystem built to run better businesses.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              BDA Technologies builds practical software for growing service businesses. Each product solves a repeated operational problem — from LinkedIn workflows to hiring, QA, task ownership, attribution, and delivery.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <AnimatedButton href="#overview">Explore Products</AnimatedButton>
              <AnimatedButton href="#final-cta" variant="ghost">
                Talk to an Expert
              </AnimatedButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6 relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-[5/4] w-full">
      {/* backdrop glow */}
      <div aria-hidden className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-primary/20 via-transparent to-primary-glow/25 blur-2xl" />
      {/* main card */}
      <div className="relative h-full w-full rounded-[2rem] border border-border bg-card shadow-elevated overflow-hidden">
        {/* window chrome */}
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          <span className="ml-3 text-xs text-muted-foreground">bda.os / dashboard</span>
        </div>
        <div className="p-5 grid grid-cols-6 gap-3">
          {/* metric row */}
          {[
            { l: "Active tasks", v: "128" },
            { l: "Owners", v: "24" },
            { l: "On track", v: "92%" },
          ].map((m) => (
            <div
              key={m.l}
              className="col-span-2 rounded-2xl border border-border bg-secondary/40 p-3"
            >
              <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                {m.l}
              </div>
              <div className="mt-1 font-display text-2xl text-foreground">{m.v}</div>
            </div>
          ))}
          {/* chart */}
          <div className="col-span-4 rounded-2xl border border-border bg-secondary/40 p-4 h-40 relative overflow-hidden">
            <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
              Attribution
            </div>
            <svg viewBox="0 0 200 80" className="absolute bottom-3 left-3 right-3 w-[calc(100%-24px)]">
              <defs>
                <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.65 0.19 145)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="oklch(0.65 0.19 145)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,60 C30,40 45,55 70,35 C95,15 120,45 150,25 C175,10 190,30 200,20 L200,80 L0,80 Z"
                fill="url(#g)"
              />
              <path
                d="M0,60 C30,40 45,55 70,35 C95,15 120,45 150,25 C175,10 190,30 200,20"
                fill="none"
                stroke="oklch(0.47 0.09 122)"
                strokeWidth="2"
              />
            </svg>
          </div>
          {/* list */}
          <div className="col-span-2 rounded-2xl border border-border bg-secondary/40 p-3 space-y-2">
            {["LinkAssist", "HireAssist", "QAAssist"].map((n) => (
              <div key={n} className="flex items-center justify-between text-xs text-foreground">
                <span>{n}</span>
                <span className="h-1.5 w-8 rounded-full bg-primary/40">
                  <span className="block h-full w-2/3 rounded-full bg-primary" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* floating pill */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-card shadow-elevated px-4 py-3 flex items-center gap-3"
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
          <Sparkles className="h-4 w-4" />
        </span>
        <div>
          <div className="text-xs text-muted-foreground">AI-assisted workflows</div>
          <div className="text-sm font-medium text-foreground">Live across 6 products</div>
        </div>
      </motion.div>
    </div>
  );
}

/* ============ 2. OVERVIEW ============ */
function Overview() {
  return (
    <section id="overview" className="relative py-24 md:py-32 bg-secondary/40">
      <Container>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Product Overview
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-foreground">
            Solutions built to move your business forward.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Six focused products. One connected way of working. Each product solves a specific operating problem while fitting into a broader business operating system.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {products.map((p) => (
            <motion.a
              key={p.name}
              href="#find"
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
            >
              <div
                aria-hidden
                className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <p.icon className="h-5 w-5" />
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                  {p.tag}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl tracking-tight text-foreground">
                {p.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.value}</p>

              <ul className="mt-5 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                Explore Product
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

/* ============ 3. WHY WE BUILD PRODUCTS ============ */
const whyBuildBullets = [
  "Start with a clear business problem",
  "Design around the user's daily work",
  "Keep ownership and reporting visible",
  "Automate only where it improves the process",
  "Improve the system through real usage",
];

function FeaturedShowcase() {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              Why We Build Products
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-foreground">
              A good product removes repeated friction.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Our products come from real work inside service businesses. Some are public software. Some support client operations. Each one shows how we think about process, data, and adoption.
            </p>

            <ul className="mt-8 space-y-4">
              {whyBuildBullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-foreground/90 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-transparent to-primary-glow/20 blur-2xl"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-elevated aspect-[16/10]">
                <img
                  src={productsFeaturedImg}
                  alt="BDA products in action"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

/* ============ 4. WHY OUR PRODUCTS (BENTO) ============ */
const bento = [
  {
    title: "AI-Powered",
    body: "Intelligent workflows that automate repetitive tasks and surface what needs attention.",
    icon: Sparkles,
    span: "md:col-span-2 md:row-span-2",
    tone: "primary",
  },
  {
    title: "Built to Scale",
    body: "Designed to grow with your team, your data, and your operating model.",
    icon: Layers,
    span: "md:col-span-2",
    tone: "default",
  },
  {
    title: "Seamless Integration",
    body: "Connects with the tools your team already uses.",
    icon: Plug,
    span: "",
    tone: "default",
  },
  {
    title: "Data-Driven",
    body: "Turn business data into clear insight and better decisions.",
    icon: LineChart,
    span: "",
    tone: "default",
  },
];

function WhyOurProducts() {
  return (
    <section className="relative py-24 md:py-32 bg-secondary/40">
      <Container>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Why Our Products
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-foreground">
            Built for performance. Designed for growth.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Every product shares the same foundation — practical design, honest engineering, and systems that hold up in real business conditions.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-4">
          {bento.map((b, i) => {
            const isPrimary = b.tone === "primary";
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`group relative overflow-hidden rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                  b.span
                } ${
                  isPrimary
                    ? "border-transparent bg-foreground text-background shadow-elevated"
                    : "border-border bg-card text-foreground shadow-soft hover:shadow-elevated"
                }`}
              >
                {isPrimary && (
                  <div aria-hidden className="absolute inset-0 opacity-70">
                    <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/50 blur-3xl animate-float-slow" />
                    <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary-glow/40 blur-3xl animate-float" />
                  </div>
                )}
                <div className="relative flex h-full flex-col">
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-2xl ${
                      isPrimary ? "bg-white/10 text-background" : "bg-primary/10 text-primary"
                    }`}
                  >
                    <b.icon className="h-5 w-5" />
                  </span>
                  <h3
                    className={`mt-6 font-display tracking-tight ${
                      isPrimary ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
                    }`}
                  >
                    {b.title}
                  </h3>
                  <p
                    className={`mt-2 leading-relaxed ${
                      isPrimary ? "text-background/80 max-w-md text-lg" : "text-muted-foreground text-sm"
                    }`}
                  >
                    {b.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}


/* ============ 6. FINAL CTA ============ */
function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="final-cta" ref={ref} className="relative py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-foreground text-background p-10 md:p-20 shadow-elevated"
        >
          <motion.div style={{ y }} aria-hidden className="absolute inset-0 opacity-70">
            <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/60 blur-3xl animate-float-slow" />
            <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-primary-glow/50 blur-3xl animate-float" />
          </motion.div>

          {/* subtle grid */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px]"
          />

          <div className="relative max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold tracking-widest uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse-glow" />
              Get Started
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Ready to find the right solution?
            </h2>
            <p className="mt-5 text-lg text-background/70 max-w-xl leading-relaxed">
              Let’s explore how our products can help transform your ideas into scalable digital experiences.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <AnimatedButton href="#cta">Talk to an Expert</AnimatedButton>
              <AnimatedButton href="#cta" variant="ghost">
                Get in Touch
              </AnimatedButton>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
