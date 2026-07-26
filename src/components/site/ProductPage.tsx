import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ComponentType } from "react";
import { CheckCircle2, Sparkles, type LucideIcon } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/site/Container";
import { AnimatedButton } from "@/components/site/AnimatedButton";
import productsFeaturedImg from "@/assets/products-featured.jpg";

export type ProductPageProps = {
  name: string;
  tagline: string;
  eyebrow: string;
  heading: string;
  description: string;
  icon: LucideIcon | ComponentType<{ className?: string }>;
  features: { title: string; body: string; icon: LucideIcon | ComponentType<{ className?: string }> }[];
  howItWorks: { title: string; body: string }[];
  outcomes: string[];
  bestFor: string;
  logo?: string;
};

export function ProductPage(p: ProductPageProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero {...p} />
      <KeyFeatures {...p} />
      <HowItWorks {...p} />
      <Outcomes {...p} />
      <FinalCTA {...p} />
      <Footer />
    </main>
  );
}

function Hero(p: ProductPageProps) {
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
              <AnimatedButton href="/products" variant="ghost">
                Explore Products
              </AnimatedButton>
            </div>
          </motion.div>
        </div>

      </Container>
    </section>
  );
}

function KeyFeatures(p: ProductPageProps) {
  return (
    <section className="relative py-24 md:py-32 bg-secondary/40">
      <Container>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Key Features
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-foreground">
            {p.heading}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Practical capabilities built for the daily reality of {p.bestFor.toLowerCase()}.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {p.features.map((f, i) => (
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

function HowItWorks(p: ProductPageProps) {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              How It Works
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-foreground">
              A workflow the team actually follows.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Ownership, deadlines, and reporting stay visible so nothing quietly slips.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {p.howItWorks.map((s, i) => (
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

function Outcomes(p: ProductPageProps) {
  return (
    <section className="relative py-24 md:py-32 bg-secondary/40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Outcomes
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-foreground">
              What changes after {p.name} is in place.
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-transparent to-primary-glow/20 blur-2xl"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-elevated aspect-[16/12]">
                <img
                  src={productsFeaturedImg}
                  alt={`${p.name} in action`}
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

function FinalCTA(p: ProductPageProps) {
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
              See {p.name} inside your business
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Start with the operational problem that matters most.
            </h2>
            <p className="mt-5 text-lg text-background/70 max-w-xl leading-relaxed">
              Apply for a Business Audit Call and see how {p.name} fits into a wider operating system.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <AnimatedButton href="#cta">Apply for a Business Audit Call</AnimatedButton>
              <AnimatedButton href="/products" variant="ghost">
                Explore Products
              </AnimatedButton>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
