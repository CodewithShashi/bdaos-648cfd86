import { motion } from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";
import { Container } from "./Container";
import { AnimatedButton } from "./AnimatedButton";
import { AnimatedHeroBackground } from "./AnimatedHeroBackground";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32 bg-mesh">
      <AnimatedHeroBackground />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-soft"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Introducing BDA AI 3.0 — Now with autonomous agents
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-normal leading-[1.02] tracking-tight text-foreground"
          >
            We build the{" "}
            <span className="text-gradient italic">OS</span>{" "}
            that runs your business.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Ship products faster with intelligent workflows, autonomous agents,
            and enterprise-grade infrastructure — all in one elegant platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <AnimatedButton href="#cta">Start building free</AnimatedButton>
            <AnimatedButton href="#work" variant="ghost" icon={false}>
              Watch demo
            </AnimatedButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <div className="flex flex-col items-center gap-1 text-muted-foreground">
            <span className="text-xs">Scroll</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
