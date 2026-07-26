import { motion } from "framer-motion";
import { Container } from "./Container";
import { AnimatedButton } from "./AnimatedButton";
import heroImg from "@/assets/hero-ai.jpg";

const marks = [
  { value: "Dubai", label: "Regional delivery hub" },
  { value: "24/7", label: "GST-aligned support" },
  { value: "200+", label: "Systems implemented" },
];

export function UaeHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 bg-foreground text-background">
      {/* premium ambient background */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute -top-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-primary/40 blur-3xl animate-float-slow" />
        <div className="absolute -bottom-48 right-0 h-[30rem] w-[30rem] rounded-full bg-primary-glow/30 blur-3xl animate-float" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.10),transparent_70%)]" />
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 backdrop-blur px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-background/85"
            >
              <span aria-hidden>🇦🇪</span>
              BDA Technologies — UAE
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-7 font-display font-bold text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] leading-[1.05] tracking-[-0.02em]"
            >
              Business operating systems
              <br className="hidden sm:block" /> built for the{" "}
              <span className="italic text-primary-glow">Gulf</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="mt-7 max-w-xl text-base md:text-lg text-background/70 leading-relaxed"
            >
              We help UAE founder-led service businesses replace scattered tools with
              one connected system — dashboards, workflows, follow-ups, and team
              accountability, delivered with local implementation support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <AnimatedButton href="/contact">Apply for a Business Audit Call</AnimatedButton>
              <a
                href="#services-showcase"
                className="inline-flex items-center rounded-full border border-background/25 px-6 py-3 text-sm font-medium text-background/90 transition hover:bg-background/10"
              >
                Explore BDA OS
              </a>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.46 }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {marks.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-background/15 bg-background/5 backdrop-blur px-5 py-4"
                >
                  <dt className="font-display text-2xl tracking-tight">{m.value}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-background/60">
                    {m.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-background/15 shadow-elevated aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
              <img
                src={heroImg}
                alt="BDA Technologies operating systems for UAE businesses"
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-background/15 bg-foreground/60 backdrop-blur-md px-5 py-4">
                <p className="text-sm text-background/85 leading-relaxed">
                  Implementation teams across Dubai, Abu Dhabi and Sharjah — onboarding
                  in weeks, not quarters.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
