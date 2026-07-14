import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  ShieldCheck,
  Eye,
  Layers,
  Zap,
  Handshake,
  Plus,
  Minus,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/site/Container";
import { SectionHeading } from "@/components/site/SectionHeading";
import { AnimatedButton } from "@/components/site/AnimatedButton";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import heroImg from "@/assets/hero-ai.jpg";
import aboutImg from "@/assets/about.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — BDA AI" },
      {
        name: "description",
        content:
          "A small, senior team that designs, builds, and ships AI systems for companies that want results, not slideware. Join BDA AI.",
      },
      { property: "og:title", content: "Careers — BDA AI" },
      {
        property: "og:description",
        content:
          "Join a senior team building AI systems that actually ship. Open roles across engineering, design, and strategy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CareersPage,
});

/* ---------------- Data ---------------- */

const stats = [
  { value: 3, suffix: "x", label: "Average pilot-to-live ratio" },
  { value: 100, suffix: "+", label: "Production AI systems shipped" },
  { value: 60, suffix: "%", label: "Less manual work across teams" },
  { value: 98, suffix: "%", label: "Client retention year over year" },
];

const values = [
  {
    icon: BarChart3,
    title: "Results Over Hype",
    text: "Outcomes you can measure — not vague AI promises.",
  },
  {
    icon: ShieldCheck,
    title: "Built To Last",
    text: "Systems that keep working long after we hand off.",
  },
  {
    icon: Eye,
    title: "Radical Clarity",
    text: "We always know what we're doing, why, and what's next.",
  },
  {
    icon: Layers,
    title: "Your Stack, Your Rules",
    text: "We work inside your tools — never around or against them.",
  },
  {
    icon: Zap,
    title: "Speed With Judgment",
    text: "Fast delivery, without cutting the corners that matter.",
  },
  {
    icon: Handshake,
    title: "Partners, Not Vendors",
    text: "Invested in your long-term growth, not just the project.",
  },
];

const team = [
  { name: "Lena Hoffmann", role: "Automation Architect", img: aboutImg },
  { name: "Marcus Elliot", role: "AI Strategy Lead", img: p1 },
  { name: "Sara Vance", role: "Client Success Lead", img: p2 },
  { name: "James Okafor", role: "ML Engineering Lead", img: p3 },
];

const openings = [
  {
    title: "Growth Strategist",
    tags: ["Strategy", "Remote", "Part-time"],
  },
  {
    title: "Client Success Manager",
    tags: ["Operations", "Remote", "Full-time"],
  },
  {
    title: "Solutions Architect",
    tags: ["Engineering", "Hybrid", "Full-time"],
  },
  {
    title: "AI Workflow Specialist",
    tags: ["Operations", "Remote", "Full-time"],
  },
  {
    title: "Automation Engineer",
    tags: ["Engineering", "Remote", "Full-time"],
  },
];

const faqs = [
  {
    q: "What does BDA AI actually do?",
    a: "We design, build, and ship production AI systems — from strategy through implementation and long-term support. Think automations, agents, and workflows tuned to your business.",
  },
  {
    q: "How do I get started?",
    a: "Send us a note with a bit about you and what you've shipped. If there's a fit, we'll set up a 30-minute intro call within a week.",
  },
  {
    q: "How long until we see results?",
    a: "Most engagements produce measurable outcomes within the first 4–6 weeks. We ship small, then compound.",
  },
  {
    q: "What if a pilot doesn't work out?",
    a: "We're clear about scope up-front. If a pilot doesn't hit its target, we document what we learned and part on good terms — no lock-in.",
  },
  {
    q: "Do we need technical staff on our side?",
    a: "No. We can operate as an embedded team or ship turnkey systems your operators can run.",
  },
];

/* ---------------- Counter ---------------- */

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n.toLocaleString()}
      <span className="text-primary">{suffix}</span>
    </span>
  );
}

/* ---------------- Page ---------------- */

function CareersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 bg-mesh opacity-60" />
        <Container>
          <div className="flex flex-col gap-8 max-w-5xl">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium tracking-wider uppercase text-muted-foreground">
              004 / Careers
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl font-normal tracking-tight leading-[1.02]"
            >
              The People
              <br />
              Behind Your <span className="italic text-primary">AI.</span>
            </motion.h1>
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                A small, senior team that designs, builds, and ships AI systems for
                companies that want results, not slideware.
              </p>
              <AnimatedButton href="#openings">Book A Call</AnimatedButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats strip */}
      <section className="border-y border-border/70 py-10 md:py-12">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border/70">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="px-4 md:px-8 py-4 md:py-2"
              >
                <div className="text-4xl md:text-5xl font-normal tracking-tight">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-[11px] tracking-wider uppercase text-muted-foreground">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission statement */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium tracking-wider uppercase text-muted-foreground">
              Our Mission
            </span>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="mt-8 text-2xl md:text-4xl leading-[1.25] font-normal tracking-tight font-display"
            >
              We started BDA AI because too many companies were sold AI hype and left
              with half-finished pilots. Our mission is{" "}
              <span className="text-muted-foreground">
                simple: find where AI actually creates value, build it properly, and make
                sure it keeps working long after the engagement ends.
              </span>
            </motion.p>
          </div>
        </Container>
      </section>

      <LogoMarquee />

      {/* Values */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-end mb-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium tracking-wider uppercase text-muted-foreground">
                Our Values
              </span>
              <h2 className="mt-5 text-4xl md:text-6xl font-normal tracking-tight leading-[1.05]">
                What Sets <span className="italic text-primary">Us Apart.</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-base md:text-right md:pb-3 max-w-md md:ml-auto">
              The standards we hold ourselves to on every project, from first call to
              final handoff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="rounded-3xl border border-border bg-card p-7 shadow-soft hover:shadow-elevated hover:-translate-y-0.5 transition-all"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {v.text}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 bg-secondary/40">
        <Container>
          <div className="mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium tracking-wider uppercase text-muted-foreground">
              Our Team
            </span>
            <div className="mt-5 grid md:grid-cols-[1fr_auto] gap-6 items-end">
              <h2 className="text-4xl md:text-6xl font-normal tracking-tight leading-[1.05]">
                Our Expert <span className="italic text-primary">Team.</span>
              </h2>
              <p className="text-muted-foreground max-w-md md:text-right">
                The specialists behind every system — strategists and automation
                engineers working as one.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-5">
                  <div>
                    <div className="font-semibold">{person.name}</div>
                    <div className="text-[11px] tracking-wider uppercase text-muted-foreground mt-0.5">
                      {person.role}
                    </div>
                  </div>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-background group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Openings */}
      <section id="openings" className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-14 items-start">
            <div className="lg:sticky lg:top-32">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium tracking-wider uppercase text-muted-foreground">
                Careers
              </span>
              <h2 className="mt-5 text-4xl md:text-6xl font-normal tracking-tight leading-[1.05]">
                Join The <span className="italic text-primary">Team.</span>
              </h2>
              <p className="mt-5 text-muted-foreground max-w-md">
                We're always looking for sharp operators, builders, and strategists
                obsessed with automation.
              </p>
              <div className="mt-8">
                <AnimatedButton href="mailto:careers@bda.ai">
                  Send an intro
                </AnimatedButton>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {openings.map((job, i) => (
                <motion.a
                  key={job.title}
                  href={`mailto:careers@bda.ai?subject=Application for ${job.title}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group rounded-3xl border border-border bg-card p-6 md:p-7 shadow-soft hover:shadow-elevated hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-background group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-secondary/40">
        <Container>
          <SectionHeading
            eyebrow="FAQs"
            title="Need Answers?"
            description="Everything you need to know before we talk."
          />
          <div className="mt-14 max-w-3xl mx-auto flex flex-col divide-y divide-border border-y border-border">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-base md:text-lg font-medium">
                      <span className="text-muted-foreground mr-3">
                        0{i + 1}/
                      </span>
                      {f.q}
                    </span>
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border transition-all ${
                        open
                          ? "bg-primary text-primary-foreground border-primary rotate-45"
                          : "bg-background text-foreground"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  {open && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pb-6 pr-16 text-muted-foreground leading-relaxed"
                    >
                      {f.a}
                    </motion.p>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-foreground text-background p-10 md:p-20 shadow-elevated"
          >
            <div aria-hidden className="absolute inset-0 opacity-70">
              <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/60 blur-3xl animate-float-slow" />
              <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-primary-glow/50 blur-3xl animate-float" />
            </div>
            <div className="relative max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-normal tracking-tight leading-[1.08]">
                Don't see the right role?{" "}
                <span className="italic text-primary-glow">Say hello anyway.</span>
              </h2>
              <p className="mt-5 text-lg text-background/70 max-w-xl leading-relaxed">
                We're always happy to hear from talented people. Tell us what you do
                best and we'll find a way to build something together.
              </p>
              <div className="mt-8">
                <AnimatedButton href="mailto:careers@bda.ai">
                  Contact careers
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

// Silence unused imports if tree-shaken paths change
void heroImg;
