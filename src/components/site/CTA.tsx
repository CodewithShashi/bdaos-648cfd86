import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Container } from "./Container";
import { AnimatedButton } from "./AnimatedButton";

export function CTA() {
  return (
    <section id="cta" className="relative py-28 md:py-36">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-foreground text-background p-10 md:p-20 shadow-elevated"
        >
          {/* animated gradient background */}
          <div aria-hidden className="absolute inset-0 opacity-70">
            <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/60 blur-3xl animate-float-slow" />
            <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-primary-glow/50 blur-3xl animate-float" />
          </div>

          <div className="relative max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse-glow" />
              START WITH CLARITY
            </span>
            <h2 className="mt-6 text-4xl md:text-6xl font-normal tracking-tight leading-[1.05]">
              Find what is slowing your business down.
            </h2>
            <p className="mt-5 text-lg text-background/70 max-w-xl leading-relaxed">
              Apply for a Business Audit Call. We will review your business, your current systems, and the main operational issue before inviting you to a call.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <AnimatedButton href="#">Apply for a Business Audit Call</AnimatedButton>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
