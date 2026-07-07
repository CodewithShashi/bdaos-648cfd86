import { motion } from "framer-motion";
import { Container } from "./Container";
import { AnimatedButton } from "./AnimatedButton";
import { AnimatedHeroBackground } from "./AnimatedHeroBackground";

export function Hero() {


  return (
    <section className="relative overflow-hidden pt-40 pb-28 md:pt-52 md:pb-36">
      <AnimatedHeroBackground />

      <Container className="relative">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-foreground/15 bg-background/60 backdrop-blur px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-foreground/80"
          >
            2 Slots Available This Month
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 font-display font-bold text-[4rem] leading-[1.02] tracking-[-0.02em] text-foreground whitespace-nowrap"
          >
            We Build The AI
            <br />
            That Runs Your Business.
          </motion.h1>



          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Strategy, automations, custom agents, and the support to keep them running, all from one team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <AnimatedButton href="#cta">Book A Call</AnimatedButton>
            <AnimatedButton href="#pricing" variant="ghost">
              Our Pricing
            </AnimatedButton>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

