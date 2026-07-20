import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Users, Target, Compass, ArrowRight, Linkedin } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/site/Container";
import { SectionHeading } from "@/components/site/SectionHeading";
import { AnimatedButton } from "@/components/site/AnimatedButton";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { CTA } from "@/components/site/CTA";
import founderHero from "@/assets/founder-hero.jpg";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — BDA Technologies" },
      {
        name: "description",
        content:
          "Meet the leadership behind BDA Technologies — founders building operating systems that help service businesses run better.",
      },
      { property: "og:title", content: "Leadership — BDA Technologies" },
      {
        property: "og:description",
        content:
          "The team building BDA OS: founders, operators, and system-builders shaping how growing businesses execute.",
      },
    ],
  }),
  component: LeadershipPage,
});

const pillars = [
  {
    icon: Compass,
    title: "Clarity of direction",
    body: "Leadership starts by narrowing focus. We decide what to build, what to fix, and what to let go — so every team member knows the priority and the reason behind it.",
  },
  {
    icon: Target,
    title: "Discipline of execution",
    body: "Strategy without follow-through is noise. Our leaders instill weekly cadences, dashboards, and reviews that turn plans into shipped outcomes.",
  },
  {
    icon: Users,
    title: "Growth of people",
    body: "Systems only work when teams grow with them. We coach managers to lead through structure, feedback, and accountability instead of firefighting.",
  },
];

function LeadershipPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-border shadow-elevated">
            <img
              src={founderHero}
              alt="BDA Technologies founder"
              className="h-[520px] w-full object-cover md:h-[620px]"
              width={1600}
              height={1000}
            />
            {/* olive gradient overlay from left */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.47 0.09 122 / 0.92) 0%, oklch(0.47 0.09 122 / 0.55) 40%, transparent 70%)",
              }}
            />

            {/* copy */}
            <div className="absolute inset-0 flex items-end md:items-center">
              <div className="p-6 md:p-16 max-w-2xl text-background">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center rounded-full border border-white/25 bg-white/10 backdrop-blur px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em]"
                >
                  LEADERSHIP
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mt-5 font-display text-4xl md:text-6xl leading-[1.05] tracking-tight"
                >
                  Founders who build
                  <br />
                  the systems they lead.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-5 max-w-lg text-base md:text-lg text-background/85 leading-relaxed"
                >
                  BDA Technologies is led by operators who have built, scaled,
                  and rebuilt service businesses. We bring that operating
                  experience into every system we deliver.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-8"
                >
                  <AnimatedButton href="#cta">
                    Apply for a Business Audit Call
                  </AnimatedButton>
                </motion.div>
              </div>
            </div>

            {/* stat badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute bottom-5 right-5 md:bottom-8 md:right-8 rounded-2xl bg-background/95 backdrop-blur border border-border p-4 md:p-5 shadow-elevated w-56"
            >
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-primary/80 border-2 border-background" />
                <div className="h-8 w-8 rounded-full bg-primary border-2 border-background" />
                <div className="h-8 w-8 rounded-full bg-primary-glow border-2 border-background" />
                <div className="h-8 w-8 rounded-full bg-foreground text-background border-2 border-background grid place-items-center text-xs">
                  +
                </div>
              </div>
              <p className="mt-3 font-display text-2xl text-foreground">50+</p>
              <p className="text-xs text-muted-foreground leading-snug">
                Service businesses operated on BDA systems.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* LOGO MARQUEE — trusted by */}
      <LogoMarquee />

      {/* FOUNDER JOURNEY */}
      <section className="relative py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="FOUNDER JOURNEY"
            title="From running businesses to building the systems that run them."
            description="A note from our founder on why BDA Technologies exists and the problem it was built to solve."
            align="center"
          />

          <div className="mt-16 grid gap-10 lg:grid-cols-[380px_1fr] lg:gap-16 items-start">
            {/* portrait card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-soft">
                <img
                  src={founderHero}
                  alt="Founder, BDA Technologies"
                  className="h-[440px] w-full object-cover"
                  loading="lazy"
                  width={1600}
                  height={1000}
                />
              </div>
              <div className="mt-5 flex items-center justify-between rounded-2xl border border-border bg-card p-4 shadow-soft">
                <div>
                  <p className="font-display text-lg text-foreground leading-tight">
                    Bhavuk Dhingra
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Founder & CEO, BDA Technologies
                  </p>
                </div>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            {/* story */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 text-lg text-muted-foreground leading-relaxed"
            >
              <p>
                I started BDA Technologies after watching the same pattern
                repeat across dozens of growing service businesses — sharp
                founders, capable teams, and yet work slipping through the
                cracks. The problem was rarely people. It was the absence of a
                real operating system.
              </p>
              <p>
                Over the last decade I worked across marketing, software,
                automation, and team training. Every engagement taught the same
                lesson: dashboards without cadence do not change behaviour, and
                tools without structure do not create control.
              </p>
              <p>
                BDA Technologies exists to close that gap. We design and
                implement the operating system a business actually runs on —
                tasks, reports, follow-ups, accountability — and we stay long
                enough to make sure the team adopts it.
              </p>
              <div className="flex flex-wrap gap-6 pt-6 border-t border-border">
                <div>
                  <p className="font-display text-3xl text-foreground">10+</p>
                  <p className="text-sm">Years operating service businesses</p>
                </div>
                <div>
                  <p className="font-display text-3xl text-foreground">50+</p>
                  <p className="text-sm">Systems designed and implemented</p>
                </div>
                <div>
                  <p className="font-display text-3xl text-foreground">6</p>
                  <p className="text-sm">Internal products shipped</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* THREE PILLARS */}
      <section className="relative py-24 md:py-32 bg-secondary/40 border-y border-border">
        <Container>
          <div className="text-center mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              THE BDA LEADERSHIP METHOD
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.1] tracking-tight text-foreground">
              Three pillars of business leadership.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Our proven approach turns founder-led service businesses into
              teams that execute with clarity, discipline, and consistent
              growth.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-3xl bg-card border border-border p-8 shadow-soft hover:shadow-elevated transition-shadow"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground shadow-glow">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-8 font-display text-2xl text-foreground leading-tight">
                  {p.title}
                </h3>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  {p.body}
                </p>
                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTA />

      <Footer />
    </div>
  );
}
