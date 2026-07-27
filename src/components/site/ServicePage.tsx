import { motion } from "framer-motion";
import type { ComponentType } from "react";
import { CheckCircle2, ArrowRight, type LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/site/Container";
import { AnimatedButton } from "@/components/site/AnimatedButton";

export type ServicePageProps = {
  name: string;
  tagline: string;
  eyebrow: string;
  heading: string;
  description: string;
  icon: LucideIcon | ComponentType<{ className?: string }>;
  whatItIncludes: { title: string; body: string; icon: LucideIcon | ComponentType<{ className?: string }> }[];
  process: { title: string; body: string }[];
  outcomes: string[];
  bestFor: string;
};

export function ServicePage(p: ServicePageProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero {...p} />
      <WhatItIncludes {...p} />
      <Process {...p} />
      <Outcomes {...p} />
      <FinalCTA {...p} />
      <Footer />
    </main>
  );
}

function Hero(p: ServicePageProps) {
  return (
    <section className="relative overflow-hidden bg-foreground text-background pt-32 md:pt-44 pb-16 md:pb-24">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute -top-40 -left-32 h-[24rem] w-[24rem] rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-[26rem] w-[26rem] rounded-full bg-primary-glow/20 blur-3xl" />
      </div>
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight">
            {p.name}
          </h1>
          <p className="mt-5 text-lg md:text-2xl font-display leading-snug text-background/85">
            {p.tagline}
          </p>
          <p className="mt-5 text-base md:text-lg text-background/60 leading-relaxed">
            {p.description}
          </p>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            { k: "Best for", v: p.bestFor },
            { k: "Phases", v: `${p.process.length}-step engagement` },
            { k: "Scope", v: `${p.whatItIncludes.length} core workstreams` },
          ].map((s) => (
            <div
              key={s.k}
              className="rounded-2xl border border-background/15 bg-background/5 backdrop-blur px-5 py-4 text-left"
            >
              <dt className="text-[11px] uppercase tracking-[0.16em] text-background/50">{s.k}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-background/90">{s.v}</dd>
            </div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}

function WhatItIncludes(p: ServicePageProps) {
  return (
    <section className="relative py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <span className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              What It Includes
            </span>
            <h2 className="mt-5 font-display text-3xl md:text-4xl leading-[1.08] tracking-tight">
              {p.heading}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A practical engagement built for {p.bestFor.toLowerCase()}.
            </p>
          </div>

          <div className="lg:col-span-8 divide-y divide-border border-y border-border">
            {p.whatItIncludes.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="group grid grid-cols-[auto_minmax(0,1fr)] gap-5 py-6 md:py-7 transition-colors hover:bg-secondary/40"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <f.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-xs text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl tracking-tight">{f.title}</h3>
                  </div>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {f.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Process(p: ServicePageProps) {
  return (
    <section className="relative py-20 md:py-28 bg-secondary/40">
      <Container>
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            Our Process
          </span>
          <h2 className="mt-5 font-display text-3xl md:text-4xl leading-[1.08] tracking-tight">
            A structured engagement from diagnosis to adoption.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 auto-rows-fr">
          {p.process.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <span className="font-display text-3xl text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-lg tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Outcomes(p: ServicePageProps) {
  return (
    <section className="relative py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              Outcomes
            </span>
            <h2 className="mt-5 font-display text-3xl md:text-4xl leading-[1.08] tracking-tight">
              What changes after {p.name}.
            </h2>
            <div className="mt-6 rounded-2xl border border-border bg-secondary/40 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Best For
              </p>
              <p className="mt-1.5 text-foreground">{p.bestFor}</p>
            </div>
          </div>

          <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {p.outcomes.map((o, i) => (
              <motion.li
                key={o}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-foreground/85 leading-relaxed">{o}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function FinalCTA(p: ServicePageProps) {
  return (
    <section id="cta" className="relative py-20 md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-foreground text-background p-8 md:p-16 shadow-elevated"
        >
          <div aria-hidden className="absolute inset-0 opacity-70">
            <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/50 blur-3xl animate-float-slow" />
            <div className="absolute -bottom-40 -right-40 h-[26rem] w-[26rem] rounded-full bg-primary-glow/40 blur-3xl animate-float" />
          </div>
          <div className="relative max-w-3xl">
            <h2 className="font-display text-3xl md:text-5xl leading-[1.06] tracking-tight">
              Start with the operational problem that matters most.
            </h2>
            <p className="mt-5 text-base md:text-lg text-background/70 max-w-xl leading-relaxed">
              Apply for a Business Audit Call and see how {p.name} fits into a wider operating
              system.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <AnimatedButton href="/contact">Apply for a Business Audit Call</AnimatedButton>
              <Link
                to="/pricing"
                className="group inline-flex items-center gap-2 rounded-full border border-background/25 px-6 py-3 text-sm font-medium text-background/90 transition hover:bg-background/10"
              >
                See pricing
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
