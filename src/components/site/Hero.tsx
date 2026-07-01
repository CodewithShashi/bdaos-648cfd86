import { motion } from "framer-motion";
import { Sparkles, ChevronDown, Wand2, Brain, Zap } from "lucide-react";
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
            Introducing Nebula AI 3.0 — Now with autonomous agents
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-normal leading-[1.02] tracking-tight text-foreground"
          >
            The AI operating system{" "}
            <span className="text-gradient italic">for modern teams.</span>
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

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <div className="relative rounded-[2rem] border border-border bg-white p-3 shadow-elevated">
            <div className="rounded-3xl bg-secondary/60 overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/60">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                <span className="ml-3 text-xs text-muted-foreground">nebula.ai / workspace</span>
              </div>
              <div className="grid grid-cols-12 gap-4 p-6 md:p-8">
                <div className="col-span-12 md:col-span-4 space-y-3">
                  {[Brain, Wand2, Zap].map((Icon, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
                      className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-soft"
                    >
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <div className="h-2.5 w-24 rounded-full bg-foreground/80" />
                        <div className="mt-1.5 h-2 w-32 rounded-full bg-muted-foreground/30" />
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="col-span-12 md:col-span-8">
                  <div className="relative h-56 md:h-72 rounded-2xl bg-gradient-to-br from-white to-primary/5 border border-border p-5 overflow-hidden">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-muted-foreground">Agents</div>
                        <div className="mt-1 text-2xl font-semibold">12,428</div>
                      </div>
                      <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        +42% this month
                      </div>
                    </div>
                    {/* animated chart */}
                    <svg viewBox="0 0 400 140" className="absolute inset-x-0 bottom-0 w-full h-32">
                      <defs>
                        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="oklch(0.65 0.19 145)" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="oklch(0.65 0.19 145)" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <motion.path
                        d="M0,110 C40,80 80,120 120,90 C160,60 200,100 240,70 C280,45 320,85 360,55 L400,60 L400,140 L0,140 Z"
                        fill="url(#g)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                      />
                      <motion.path
                        d="M0,110 C40,80 80,120 120,90 C160,60 200,100 240,70 C280,45 320,85 360,55 L400,60"
                        fill="none"
                        stroke="oklch(0.58 0.18 145)"
                        strokeWidth="2.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.8, delay: 1.1, ease: "easeInOut" }}
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* floating badges */}
          <motion.div
            className="hidden md:flex absolute -left-8 top-24 items-center gap-2 rounded-2xl glass px-4 py-3 shadow-soft animate-float"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Zap className="h-4 w-4" />
            </span>
            <div>
              <div className="text-xs text-muted-foreground">Latency</div>
              <div className="text-sm font-semibold">42ms</div>
            </div>
          </motion.div>
          <motion.div
            className="hidden md:flex absolute -right-8 bottom-16 items-center gap-2 rounded-2xl glass px-4 py-3 shadow-soft animate-float-slow"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-foreground text-background">
              <Brain className="h-4 w-4" />
            </span>
            <div>
              <div className="text-xs text-muted-foreground">Models</div>
              <div className="text-sm font-semibold">GPT-5 · Claude</div>
            </div>
          </motion.div>
        </motion.div>

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
