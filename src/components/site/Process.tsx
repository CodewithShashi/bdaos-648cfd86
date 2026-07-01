import { motion } from "framer-motion";
import { Compass, PenTool, Rocket, TrendingUp } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const steps = [
  { icon: Compass, title: "Discover", desc: "We dive deep into your goals, users, and constraints to design the right AI opportunity." },
  { icon: PenTool, title: "Design", desc: "Rapid prototypes and interaction design that de-risk the build before code is written." },
  { icon: Rocket, title: "Deploy", desc: "Production-ready agents and workflows, delivered in weeks not quarters." },
  { icon: TrendingUp, title: "Evolve", desc: "Continuous training, monitoring, and iteration — your AI keeps getting sharper." },
];

export function Process() {
  return (
    <section id="process" className="relative py-28 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title="A calm, deliberate process."
          description="Four steps, zero surprises. We combine strategic depth with the speed of a modern product studio."
        />

        <div className="relative mt-20">
          {/* connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="hidden lg:block absolute top-8 left-8 right-8 h-px origin-left bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative"
              >
                <div className="relative">
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white border border-border shadow-soft text-primary">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <span className="absolute -top-2 -right-2 h-7 w-7 grid place-items-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-glow">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
