import { motion } from "framer-motion";
import { Container } from "./Container";
import { AnimatedButton } from "./AnimatedButton";
import { AnimatedHeroBackground } from "./AnimatedHeroBackground";

export function Hero() {


  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
      <AnimatedHeroBackground />

      <Container className="relative">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-foreground/15 bg-background/60 backdrop-blur px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-foreground/80"
          >
            BUSINESS OPERATING SYSTEMS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 font-display font-bold text-[2.5rem] sm:text-[3.25rem] md:text-[4rem] leading-[1.05] tracking-[-0.02em] text-foreground"
          >
            Build a more efficient business with
            <br />
            one operating system.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            BDA Technologies builds custom business operating systems for founder-led service businesses. We connect tasks, dashboards, reports, follow-ups, and team accountability so fewer things get missed and work moves faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <AnimatedButton href="#cta">Apply for a Business Audit Call</AnimatedButton>
            <AnimatedButton href="#services-showcase" variant="ghost">
              Explore BDA OS
            </AnimatedButton>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

