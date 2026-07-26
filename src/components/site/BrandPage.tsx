import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ComponentType } from "react";
import { CheckCircle2, Sparkles, type LucideIcon } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/site/Container";
import { AnimatedButton } from "@/components/site/AnimatedButton";

export type BrandPageProps = {
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon | ComponentType<{ className?: string }>;
  logo?: string;
  website?: string;
  offerings: { title: string; body: string; icon: LucideIcon | ComponentType<{ className?: string }> }[];
  approach: { title: string; body: string }[];
  outcomes: string[];
  bestFor: string;
};

export function BrandPage(p: BrandPageProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero {...p} />
      <Offerings {...p} />
      <Approach {...p} />
      <Outcomes {...p} />
      <FinalCTA {...p} />
      <Footer />
    </main>
  );
}

function Hero(p: BrandPageProps) {
  return (
    <section className="relative overflow-hidden pt-36 md:pt-44 pb-20 md:pb-28">
      <div aria-hidden className="absolute inset-0 bg-mesh opacity-70" />
      <div
        aria-hidden
        className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float-slow"
      />
      <Container className="relative">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center text-center"
          >
            {p.logo && (
              <img src={p.logo} alt={`${p.name} logo`} className="mb-6 h-12 md:h-14 w-auto object-contain" />
            )}
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.03] tracking-tight text-foreground">
              {p.name}
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-foreground/80 font-display leading-snug">
              {p.tagline}
            </p>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {p.description}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <AnimatedButton href="/" variant="ghost">
                Back to Home
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function Offerings(p: BrandPageProps) {
  return (
    <section className="relative py-24 md:py-32 bg-secondary/40">
      <Container>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            What We Offer
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-foreground">
            Focused capabilities under {p.name}.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Built for {p.bestFor.toLowerCase()}.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {p.offerings.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-xl md:text-2xl text-foreground tracking-tight">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Approach(p: BrandPageProps) {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              How We Work
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-foreground">
              A clear path from brief to delivery.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Every stage has clear scope, owners, and outcomes.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {p.approach.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative flex gap-6 rounded-3xl border border-border bg-card p-7 shadow-soft"
              >
                <span className="shrink-0 grid h-12 w-12 place-items-center rounded-2xl bg-foreground text-background font-display text-lg">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl md:text-2xl text-foreground tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Outcomes(p: BrandPageProps) {
  return (
    <section className="relative py-24 md:py-32 bg-secondary/40">
      <Container>
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Outcomes
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-foreground">
            What clients get from {p.name}.
          </h2>
          <ul className="mt-8 space-y-4">
            {p.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span className="text-foreground/85 leading-relaxed">{o}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl border border-border bg-background p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Best For
            </p>
            <p className="mt-1 text-foreground">{p.bestFor}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FinalCTA(p: BrandPageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  return (
    <section id="cta" ref={ref} className="relative py-24 md:py-32">
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
          <div className="relative max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
              Start with clarity
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Let's build the right system for your business.
            </h2>
            <p className="mt-5 text-lg text-background/70 max-w-xl leading-relaxed">
              Talk to the {p.name} team and see how it fits into a wider operating system.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <AnimatedButton href="/contact">Talk to Us</AnimatedButton>
              <AnimatedButton href="/" variant="ghost">
                Back to Home
              </AnimatedButton>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
