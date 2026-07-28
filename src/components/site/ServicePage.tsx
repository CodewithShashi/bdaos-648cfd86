import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ComponentType } from "react";
import { Check, X, ArrowRight, Plus, Minus, type LucideIcon } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/site/Container";
import { AnimatedButton } from "@/components/site/AnimatedButton";

type Icon = LucideIcon | ComponentType<{ className?: string }>;

export type ServicePageProps = {
  name: string;
  hero: {
    label: string;
    headline: string;
    text: string[];
    ctaLabel: string;
    ctaHref?: string;
    smallText: string;
  };
  problem: {
    label: string;
    headline: string;
    text: string[];
    items: { title: string; body: string }[];
    closing: string;
  };
  build: {
    label: string;
    heading: string;
    body: string;
    cards: { title: string; body: string; icon: Icon }[];
  };
  process: {
    label: string;
    headline: string;
    text: string[];
    steps: { title: string; body: string }[];
  };
  deliverables: {
    label: string;
    headline: string;
    text: string;
    items: string[];
    closing: string;
  };
  beforeAfter: {
    label: string;
    headline: string;
    rows: { before: string; after: string }[];
  };
  caseStudy: {
    label: string;
    headline: string;
    problem: string;
    built: string;
    changed: string;
  };
  fit: {
    label: string;
    headline: string;
    good: string[];
    bad: string[];
  };
  faq: {
    label: string;
    headline: string;
    items: { q: string; a: string }[];
  };
  finalCta: {
    label: string;
    headline: string;
    text: string;
    ctaLabel: string;
    ctaHref?: string;
    smallText: string;
  };
};

function Label({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] ${
        tone === "dark"
          ? "border-background/25 bg-background/10 text-background/80"
          : "border-border bg-secondary/60 text-muted-foreground"
      }`}
    >
      {children}
    </span>
  );
}

export function ServicePage(p: ServicePageProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero {...p} />
      <Problem {...p} />
      <Build {...p} />
      <Process {...p} />
      <Deliverables {...p} />
      <BeforeAfter {...p} />
      <CaseStudy {...p} />
      <Fit {...p} />
      <Faq {...p} />
      <FinalCTA {...p} />
      <Footer />
    </main>
  );
}

function Hero({ hero }: ServicePageProps) {
  return (
    <section className="relative overflow-hidden bg-foreground text-background pt-28 sm:pt-32 md:pt-44 pb-16 md:pb-24">
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
          <Label tone="dark">{hero.label}</Label>
          <h1 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.06] tracking-tight">
            {hero.headline}
          </h1>
          {hero.text.map((t) => (
            <p key={t} className="mt-5 text-base md:text-lg text-background/70 leading-relaxed">
              {t}
            </p>
          ))}
          <div className="mt-9 flex justify-center">
            <AnimatedButton href={hero.ctaHref ?? "/contact"}>{hero.ctaLabel}</AnimatedButton>
          </div>
          <p className="mt-5 text-xs sm:text-sm text-background/50">{hero.smallText}</p>
        </motion.div>
      </Container>
    </section>
  );
}

function Problem({ problem }: ServicePageProps) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Label>{problem.label}</Label>
            <h2 className="mt-5 font-display text-2xl sm:text-3xl md:text-4xl leading-[1.1] tracking-tight">
              {problem.headline}
            </h2>
            {problem.text.map((t) => (
              <p key={t} className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                {t}
              </p>
            ))}
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problem.items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-card p-5 md:p-6 shadow-soft"
              >
                <h3 className="font-display text-lg tracking-tight">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.body}</p>
              </motion.div>
            ))}
            <div className="sm:col-span-2 rounded-2xl border border-dashed border-border bg-secondary/50 p-5 md:p-6">
              <p className="font-display text-base md:text-lg tracking-tight">{problem.closing}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Build({ build }: ServicePageProps) {
  return (
    <section className="py-20 md:py-28 bg-secondary/40">
      <Container>
        <div className="max-w-3xl">
          <Label>{build.label}</Label>
          <h2 className="mt-5 font-display text-2xl sm:text-3xl md:text-4xl leading-[1.1] tracking-tight">
            {build.heading}
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
            {build.body}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
          {build.cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-colors hover:border-primary/40"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg md:text-xl tracking-tight">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Process({ process }: ServicePageProps) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="max-w-3xl">
          <Label>{process.label}</Label>
          <h2 className="mt-5 font-display text-2xl sm:text-3xl md:text-4xl leading-[1.1] tracking-tight">
            {process.headline}
          </h2>
          {process.text.map((t) => (
            <p key={t} className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              {t}
            </p>
          ))}
        </div>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-[15px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-1/2"
          />
          <div className="space-y-8 md:space-y-0">
            {process.steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="relative grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-4 md:grid-cols-2 md:gap-16 md:pb-12"
              >
                <span
                  className={`z-10 grid h-8 w-8 place-items-center rounded-full border-2 border-primary bg-background text-xs font-semibold text-primary md:absolute md:left-1/2 md:top-1 md:-translate-x-1/2 ${
                    i % 2 === 0 ? "" : ""
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div
                  className={
                    i % 2 === 0
                      ? "md:col-start-1 md:pr-12 md:text-right"
                      : "md:col-start-2 md:pl-12 md:row-start-1"
                  }
                >
                  <div className="rounded-2xl border border-border bg-card p-5 md:p-6 shadow-soft transition hover:shadow-elevated">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Step {String(i + 1).padStart(2, "0")}
                      {i < process.steps.length - 1 ? "" : " · Handover"}
                    </p>
                    <h3 className="mt-2 font-display text-xl md:text-2xl tracking-tight">{s.title}</h3>
                    <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}

function Deliverables({ deliverables }: ServicePageProps) {
  return (
    <section className="py-20 md:py-28 bg-secondary/40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Label>{deliverables.label}</Label>
            <h2 className="mt-5 font-display text-2xl sm:text-3xl md:text-4xl leading-[1.1] tracking-tight">
              {deliverables.headline}
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              {deliverables.text}
            </p>
            <div className="mt-6 rounded-2xl border border-border bg-card p-5 shadow-soft">
              <p className="text-sm md:text-base text-foreground/85 leading-relaxed">
                {deliverables.closing}
              </p>
            </div>
          </div>

          <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {deliverables.items.map((d, i) => (
              <motion.li
                key={d}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3.5 shadow-soft"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-foreground/85 leading-relaxed">{d}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function BeforeAfter({ beforeAfter }: ServicePageProps) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="max-w-3xl">
          <Label>{beforeAfter.label}</Label>
          <h2 className="mt-5 font-display text-2xl sm:text-3xl md:text-4xl leading-[1.1] tracking-tight">
            {beforeAfter.headline}
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {beforeAfter.rows.map((r, i) => (
            <motion.div
              key={r.before}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-stretch gap-3 md:gap-4"
            >
              <div className="rounded-2xl border border-border bg-secondary/50 p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Before
                </p>
                <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {r.before}
                </p>
              </div>
              <div className="hidden md:grid place-items-center">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-primary">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
              <div className="rounded-2xl border border-primary/25 bg-card p-5 shadow-soft">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                  After
                </p>
                <p className="mt-2 text-sm md:text-base text-foreground/90 leading-relaxed">
                  {r.after}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CaseStudy({ caseStudy }: ServicePageProps) {
  const blocks = [
    { k: "The problem", v: caseStudy.problem },
    { k: "What we built", v: caseStudy.built },
    { k: "What changed", v: caseStudy.changed },
  ];
  return (
    <section className="py-20 md:py-28 bg-foreground text-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Label tone="dark">{caseStudy.label}</Label>
            <h2 className="mt-5 font-display text-2xl sm:text-3xl md:text-4xl leading-[1.1] tracking-tight">
              {caseStudy.headline}
            </h2>
            <div className="mt-8 rounded-3xl border border-background/15 bg-background/5 p-6 backdrop-blur">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-background/50">
                Case study
              </p>
              <p className="mt-3 text-sm md:text-base text-background/80 leading-relaxed">
                A real implementation — from the problem we found, to the system we built, to the
                change it created for the team.
              </p>
            </div>

          </div>

          <div className="lg:col-span-7">
            <div className="relative border-l border-background/20 pl-8 md:pl-10">
              {blocks.map((b, i) => (
                <motion.div
                  key={b.k}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="relative pb-10 last:pb-0"
                >
                  <span
                    aria-hidden
                    className="absolute -left-[calc(2rem+1px)] top-1.5 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full bg-primary md:-left-[calc(2.5rem+1px)]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                  </span>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-background/50">
                    {b.k}
                  </p>
                  <p className="mt-3 font-display text-lg md:text-2xl leading-snug tracking-tight text-background">
                    {b.v}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );

}

function Fit({ fit }: ServicePageProps) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="max-w-3xl">
          <Label>{fit.label}</Label>
          <h2 className="mt-5 font-display text-2xl sm:text-3xl md:text-4xl leading-[1.1] tracking-tight">
            {fit.headline}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-soft">
            <h3 className="font-display text-lg md:text-xl tracking-tight">This may be right for you if:</h3>
            <ul className="mt-5 space-y-3">
              {fit.good.map((g) => (
                <li key={g} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm md:text-base text-foreground/85 leading-relaxed">{g}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-dashed border-border bg-secondary/50 p-6 md:p-8">
            <h3 className="font-display text-lg md:text-xl tracking-tight">It may not be right for you if:</h3>
            <ul className="mt-5 space-y-3">
              {fit.bad.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="text-sm md:text-base text-muted-foreground leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Faq({ faq }: ServicePageProps) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 md:py-28 bg-secondary/40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <Label>{faq.label}</Label>
            <h2 className="mt-5 font-display text-2xl sm:text-3xl md:text-4xl leading-[1.1] tracking-tight">
              {faq.headline}
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {faq.items.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  className={`rounded-2xl border border-border bg-card transition-colors ${
                    isOpen ? "shadow-soft" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 md:px-6 text-left"
                  >
                    <span className="font-display text-base md:text-lg tracking-tight">{f.q}</span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-foreground text-background">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 md:px-6 pb-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

function FinalCTA({ finalCta }: ServicePageProps) {
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
            <Label tone="dark">{finalCta.label}</Label>
            <h2 className="mt-6 font-display text-2xl sm:text-3xl md:text-5xl leading-[1.08] tracking-tight">
              {finalCta.headline}
            </h2>
            <p className="mt-5 text-base md:text-lg text-background/70 max-w-xl leading-relaxed">
              {finalCta.text}
            </p>
            <div className="mt-8">
              <AnimatedButton href={finalCta.ctaHref ?? "/contact"}>
                {finalCta.ctaLabel}
              </AnimatedButton>
            </div>
            <p className="mt-5 text-xs sm:text-sm text-background/50">{finalCta.smallText}</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
