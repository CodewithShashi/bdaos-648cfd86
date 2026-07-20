import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Lightbulb, Layers, Wrench, Linkedin, Check, CircleCheck } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/site/Container";
import { AnimatedButton } from "@/components/site/AnimatedButton";

import { LogoMarquee } from "@/components/site/LogoMarquee";
import { AnimatedHeroBackground } from "@/components/site/AnimatedHeroBackground";

import aboutImg from "@/assets/about.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BDA Technologies — Business Operating Systems" },
      {
        name: "description",
        content:
          "BDA Technologies designs and implements business operating systems for founder-led service businesses — dashboards, workflows, automation, and team adoption.",
      },
      { property: "og:title", content: "About BDA Technologies" },
      {
        property: "og:description",
        content:
          "We build the operating system your business runs on — from diagnosis to launch, training, and adoption.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

/* ---------------- Data ---------------- */

const stats = [
  { value: 200, suffix: "+", label: "Systems implemented" },
  { value: 60, suffix: "%", label: "Less manual work" },
  { value: 10, suffix: "x", label: "Faster reporting" },
];

const values = [
  {
    icon: Lightbulb,
    eyebrow: "WHAT WE BELIEVE",
    title: "Your team does not need more tools. It needs an operating system.",
    description: "Software alone does not create efficiency. The process, ownership, data, and team habits must work together.",
    bullets: [
      "Start with the business problem",
      "Make ownership visible",
      "Keep reporting simple and useful",
      "Automate repeated work carefully",
      "Train the team for real adoption",
      "Improve the system through use",
    ],
  },
  {
    icon: Layers,
    eyebrow: "WHAT WE BUILD",
    title: "Business systems that connect people, work, and information.",
    description: "",
    bullets: [
      "BDA OS implementations",
      "Founder and department dashboards",
      "Task and reporting workflows",
      "Sales and follow-up automation",
      "Custom business software",
      "AI training and team adoption",
      "Focused software products",
    ],
  },
  {
    icon: Wrench,
    eyebrow: "OUR ROLE",
    title: "We diagnose, design, implement, and train.",
    description: "We are not a consulting company that stops at advice. We work with the client team to build and launch the system.",
    bullets: [
      "Understand the current way of working",
      "Design the right operating model",
      "Build the required system",
      "Test and document the workflow",
      "Train users by role",
      "Support adoption and improvement",
    ],
  },
];

const timeline = [
  {
    year: "2023",
    text: "Founded BDA Technologies with a focus on operating systems for founder-led service businesses. Shipped the first BDA OS pilots across India.",
    img: aboutImg,
  },
  {
    year: "2024",
    text: "Launched internal products — LinkAssist, HireAssist, and TaskAssist — after seeing the same operational problems repeat across clients.",
    img: p2,
  },
  {
    year: "2025",
    text: "Expanded to Global and UAE regions, onboarded 200+ implementations, and released QAAssist, Attribution, and CoachAssist to public and private clients.",
    img: p1,
  },
  {
    year: "2026",
    text: "Scaling BDA OS across new industries with deeper AI training programs, partner-led implementations, and a growing product suite for service businesses.",
    img: p3,
  },
];



const team = [
  { name: "Aarav Mehta", role: "Founder & CEO", img: aboutImg, href: "https://linkedin.com" },
  { name: "Priya Sharma", role: "Head of Implementation", img: p1, href: "https://linkedin.com" },
  { name: "Rohan Kapoor", role: "Product Lead", img: p2, href: "https://linkedin.com" },
  { name: "Ananya Iyer", role: "Client Success Lead", img: p3, href: "https://linkedin.com" },
];


/* ---------------- Journey Timeline ---------------- */

function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 40%"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });
  const lineHeight = useTransform(smooth, (v) => `${v * 100}%`);
  const dotTop = useTransform(smooth, (v) => `${v * 100}%`);
  const dotOpacity = useTransform(smooth, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative mx-auto max-w-5xl">
      {/* dashed vertical line (background) */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-4 md:left-1/2 top-0 bottom-0 md:-translate-x-1/2 border-l border-dashed border-border"
      />
      {/* animated solid fill line */}
      <motion.div
        aria-hidden
        style={{ height: lineHeight }}
        className="pointer-events-none absolute left-4 md:left-1/2 top-0 md:-translate-x-1/2 w-px bg-primary origin-top"
      />
      {/* moving dot */}
      <motion.span
        aria-hidden
        style={{ top: dotTop, opacity: dotOpacity }}
        className="pointer-events-none absolute left-4 md:left-1/2 -translate-x-1/2 -translate-y-1/2 grid h-5 w-5 place-items-center rounded-full bg-background ring-2 ring-primary shadow-[0_0_0_6px_hsl(var(--primary)/0.12)]"
      >
        <span className="h-2 w-2 rounded-full bg-primary" />
      </motion.span>

      <div className="flex flex-col gap-16 md:gap-24">
        {timeline.map((t, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-center"
            >
              <div className={`pl-12 md:pl-0 ${isLeft ? "md:pr-16" : "md:order-2 md:pl-16"}`}>
                <div className="overflow-hidden rounded-3xl border border-border shadow-elevated aspect-[4/3]">
                  <img src={t.img} alt={`BDA milestone ${t.year}`} className="h-full w-full object-cover" />
                </div>
              </div>
              <div
                className={`pl-12 md:pl-0 ${
                  isLeft ? "md:pl-16" : "md:order-1 md:pr-16 md:text-right"
                }`}
              >
                <div className="font-display text-5xl md:text-6xl tracking-tight text-foreground">
                  {t.year}
                </div>
                <p
                  className={`mt-4 text-muted-foreground leading-relaxed max-w-md ${
                    isLeft ? "" : "md:ml-auto"
                  }`}
                >
                  {t.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

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

function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-14 md:pt-44 md:pb-20 overflow-hidden">
        <AnimatedHeroBackground />
        <Container className="relative z-10">
          <div className="flex flex-col gap-8 max-w-5xl">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium tracking-wider uppercase text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              About BDA Technologies
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight leading-[1.02]"
            >
              We build the systems behind better execution.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              BDA Technologies helps growing service businesses improve how work is managed. We combine process design, dashboards, automation, custom software, and team training.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-2"
            >
              <AnimatedButton href="/#cta">Apply for a Business Audit Call</AnimatedButton>
            </motion.div>
          </div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-12 md:mt-16 overflow-hidden rounded-[2rem] border border-border shadow-elevated aspect-[16/9]"
          >
            <img
              src={aboutImg}
              alt="BDA Technologies team collaborating on an operating system implementation"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-y border-border/70 py-10 md:py-12">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border/70">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="px-4 md:px-10 py-5 sm:py-2"
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

      {/* Values */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <Container>
          <div className="text-sm tracking-wide text-muted-foreground">
            How we work together
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {values.map((v, i) => (
              <motion.article
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex flex-col h-full bg-background p-8 md:p-10 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_32px_-16px_rgba(15,23,42,0.12)] transition-shadow duration-300 hover:shadow-[0_2px_4px_rgba(15,23,42,0.06),0_20px_40px_-16px_rgba(15,23,42,0.18)]"
                style={{
                  clipPath:
                    "polygon(32px 0, 100% 0, 100% calc(100% - 32px), calc(100% - 32px) 100%, 0 100%, 0 32px)",
                }}
              >
                <div className="text-primary text-xl md:text-2xl font-semibold tracking-tight">
                  {v.eyebrow
                    .toLowerCase()
                    .replace(/\b\w/g, (c) => c.toUpperCase())}
                </div>
                <h3 className="mt-1 text-2xl md:text-[28px] font-semibold tracking-tight leading-[1.15] text-foreground">
                  {v.title}
                </h3>
                {v.description && (
                  <p className="mt-6 text-[15px] md:text-base text-muted-foreground leading-relaxed">
                    {v.description}
                  </p>
                )}
                <ul className="mt-6 space-y-3 text-[15px] md:text-base text-foreground/80">
                  {v.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <CircleCheck
                        className="mt-0.5 h-5 w-5 shrink-0 fill-primary text-background"
                        strokeWidth={2.25}
                      />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* Journey & How We Work */}
      <section className="py-24 md:py-32 bg-secondary/40">
        <Container>
          <div className="flex flex-col gap-24 md:gap-32">
            {/* OUR JOURNEY */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="order-2 lg:order-1"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium tracking-wider uppercase text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                  Our Journey
                </span>
                <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.05]">
                  From digital work to{" "}
                  <span className="italic text-primary">business operating systems.</span>
                </h2>
                <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl">
                  BDA Technologies has worked across marketing, software, automation, training, and business operations. That experience shaped a clear direction: help growing companies build the systems needed for better execution.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="order-1 lg:order-2"
              >
                <div className="overflow-hidden rounded-[2rem] border border-border shadow-elevated aspect-[4/3]">
                  <img
                    src={aboutImg}
                    alt="BDA Technologies journey across operations and technology"
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* HOW WE WORK */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="order-1"
              >
                <div className="overflow-hidden rounded-[2rem] border border-border shadow-elevated aspect-[4/3]">
                  <img
                    src={p2}
                    alt="BDA Technologies team working with clear ownership"
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="order-2"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium tracking-wider uppercase text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                  How We Work
                </span>
                <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.05]">
                  Practical thinking. Clear ownership. Honest delivery.
                </h2>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Clarity before complexity",
                    "Implementation before presentation",
                    "Proof before claims",
                    "Useful systems before more features",
                    "Clear scope and responsibility",
                    "Long-term improvement over quick fixes",
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="flex items-start gap-3 rounded-2xl border border-border bg-background p-4 shadow-soft"
                    >
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                      <span className="text-sm font-medium text-foreground leading-snug">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Milestones Timeline */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium tracking-wider uppercase text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              Milestones
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.05]">
              Our journey so far,{" "}
              <span className="italic text-primary">year by year.</span>
            </h2>
          </div>
          <JourneyTimeline />
        </Container>
      </section>

      {/* Partners / logos */}
      <section className="py-20 md:py-24">
        <LogoMarquee />
      </section>


      {/* Team */}
      <section className="py-24 md:py-32 bg-secondary/40">
        <Container>
          <div className="mb-12 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium tracking-wider uppercase text-muted-foreground">
                Our Team
              </span>
              <h2 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05] text-foreground">
                Meet the minds behind{" "}
                <span className="italic text-primary">BDA.</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm md:text-right leading-relaxed">
              A senior team of operators, strategists, and engineers building
              systems that keep working long after we hand off.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:shadow-elevated"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl border border-border/60 bg-background/85 backdrop-blur-md px-4 py-3">
                  <div className="min-w-0">
                    <div className="font-display text-lg tracking-tight text-foreground truncate">
                      {person.name}
                    </div>
                    <div className="mt-1 text-[10px] tracking-[0.18em] uppercase text-muted-foreground truncate">
                      {person.role}
                    </div>
                  </div>
                  <a
                    href={person.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${person.name} on LinkedIn`}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  >
                    <Linkedin className="h-4 w-4" strokeWidth={2} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-foreground text-background p-10 md:p-20 shadow-elevated"
          >
            {/* animated gradient background */}
            <div aria-hidden className="absolute inset-0 opacity-70">
              <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/60 blur-3xl animate-float-slow" />
              <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-primary-glow/50 blur-3xl animate-float" />
            </div>

            <div className="relative max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse-glow" />
                BUILD A BUSINESS THAT RUNS BETTER
              </span>
              <h2 className="mt-6 text-4xl md:text-6xl font-normal tracking-tight leading-[1.05]">
                Start with the operational problem that matters most.
              </h2>
              <p className="mt-5 text-lg text-background/70 max-w-xl leading-relaxed">
                Apply for a Business Audit Call. We will review your business, your current systems, and the main operational issue before inviting you to a call.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <AnimatedButton href="/#cta">Apply for a Business Audit Call</AnimatedButton>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

