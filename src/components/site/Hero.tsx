import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { AnimatedButton } from "./AnimatedButton";
import { AnimatedHeroBackground } from "./AnimatedHeroBackground";

const ROTATING_WORDS = ["AI", "Agents", "Systems", "Software"];

export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ROTATING_WORDS.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden pt-40 pb-28 md:pt-52 md:pb-36">
      <AnimatedHeroBackground />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
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
            className="mt-8 font-display font-medium text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-[1.02] tracking-[-0.02em] text-foreground"
          >
            We Build The{" "}
            <span className="relative inline-grid align-baseline">
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROTATING_WORDS[idx]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                  className="italic text-gradient col-start-1 row-start-1"
                >
                  {ROTATING_WORDS[idx]}
                </motion.span>
                <span aria-hidden className="invisible col-start-1 row-start-1 italic">
                  {ROTATING_WORDS.reduce((a, b) => (a.length >= b.length ? a : b))}
                </span>
              </AnimatePresence>
            </span>
            {" "}That
            <br />
            Runs Your Business.
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

