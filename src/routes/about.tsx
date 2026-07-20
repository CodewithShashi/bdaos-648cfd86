import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Target, Compass, Sparkles, Linkedin } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/site/Container";

import { LogoMarquee } from "@/components/site/LogoMarquee";
import { AnimatedHeroBackground } from "@/components/site/AnimatedHeroBackground";
import heroImg from "@/assets/hero-ai.jpg";
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
    icon: Target,
    title: "Our Mission",
    text: "Help founder-led service businesses run on one clear operating system — so fewer things get missed and work moves faster.",
  },
  {
    icon: Sparkles,
    title: "Operational Excellence",
    text: "We build dashboards, workflows, and automation that survive scale — not slideware. Every system is measured, adopted, and owned by the team.",
  },
  {
    icon: Compass,
    title: "Our Vision",
    text: "A future where every growing business operates with the clarity, accountability, and speed of a much larger company.",
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
    img: heroImg,
  },
  {
    year: "2025",
    text: "Expanded to Global and UAE regions, onboarded 200+ implementations, and released QAAssist, Attribution, and CoachAssist to public and private clients.",
    img: p1,
  },
];

const team = [
  { name: "Aarav Mehta", role: "Founder & CEO", img: aboutImg, href: "https://linkedin.com" },
  { name: "Priya Sharma", role: "Head of Implementation", img: p1, href: "https://linkedin.com" },
  { name: "Rohan Kapoor", role: "Product Lead", img: p2, href: "https://linkedin.com" },
  { name: "Ananya Iyer", role: "Client Success Lead", img: p3, href: "https://linkedin.com" },
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
              About Us
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight leading-[1.02]"
            >
              Building the operating system{" "}
              <span className="italic text-primary">growing businesses run on.</span>
            </motion.h1>
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
      <section className="py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium tracking-wider uppercase text-muted-foreground">
              Our Values
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl font-normal tracking-tight leading-[1.05]">
              Values that power our{" "}
              <span className="italic text-primary">work.</span>
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-3xl border border-border bg-card p-4 shadow-soft hover:shadow-elevated transition-all"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-secondary via-background to-secondary/70">
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(60% 60% at 50% 55%, color-mix(in oklab, hsl(var(--primary)) 22%, transparent), transparent 70%)",
                    }}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                      maskImage:
                        "radial-gradient(circle at 50% 50%, black 30%, transparent 75%)",
                    }}
                  />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="grid h-16 w-16 place-items-center rounded-2xl border border-border bg-background/70 backdrop-blur-md text-primary shadow-elevated transition-transform duration-500 group-hover:scale-110">
                      <v.icon className="h-7 w-7" strokeWidth={1.5} />
                    </span>
                  </div>
                </div>
                <div className="px-3 pt-6 pb-4">
                  <h3 className="text-xl font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {v.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline / Journey */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium tracking-wider uppercase text-muted-foreground">
              Our Journey
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl font-normal tracking-tight leading-[1.05]">
              From first pilot to{" "}
              <span className="italic text-primary">global systems.</span>
            </h2>
          </div>

          <div className="relative mx-auto max-w-5xl">
            {/* dashed vertical line */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-4 md:left-1/2 top-0 bottom-0 md:-translate-x-1/2 border-l border-dashed border-border"
            />
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
                    {/* Image side */}
                    <div
                      className={`pl-12 md:pl-0 ${
                        isLeft ? "md:pr-16" : "md:order-2 md:pl-16"
                      }`}
                    >
                      <div className="overflow-hidden rounded-3xl border border-border shadow-elevated aspect-[4/3]">
                        <img
                          src={t.img}
                          alt={`BDA milestone ${t.year}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    {/* Text side */}
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
                    {/* center marker */}
                    <span
                      aria-hidden
                      className="absolute left-4 md:left-1/2 top-4 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 grid h-5 w-5 place-items-center rounded-full bg-background ring-1 ring-border"
                    >
                      <span className="h-2 w-2 rounded-full bg-primary" />
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
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

      <Footer />
    </main>
  );
}
