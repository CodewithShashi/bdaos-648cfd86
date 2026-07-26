import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "./Container";
import { AnimatedButton } from "./AnimatedButton";

const products = [
  {
    title: "LinkAssist",
    desc: "LinkedIn content and relationship workflow",
  },
  {
    title: "HireAssist",
    desc: "Hiring workflow and candidate management",
  },
  {
    title: "QAAssist",
    desc: "Quality assurance and release tracking",
  },
  {
    title: "TaskAssist",
    desc: "Task ownership, escalation, and reporting",
  },
];

export function Process() {
  return (
    <section id="products" className="relative py-28 md:py-36 bg-secondary/40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          {/* Left */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold tracking-wide text-foreground">
              PRODUCTS BUILT BY BDA
            </span>

            <h2 className="mt-6 md:mt-8 font-display text-4xl md:text-5xl leading-[1.02] tracking-tight text-foreground">
              We build products when a repeated business problem needs a better system.
            </h2>

            <p className="mt-4 md:mt-6 max-w-md text-base md:text-lg text-muted-foreground leading-relaxed">
              Our product portfolio shows how we turn real operating problems into practical software. Some products are available to the public. Others are used inside client systems.
            </p>

            <div className="mt-8 md:mt-10">
              <AnimatedButton href="#products">Explore Our Products</AnimatedButton>
            </div>
          </div>

          {/* Right product cards */}
          <div className="lg:col-span-7">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {products.map((p, i) => (
                <motion.div
                  key={p.title}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-shadow duration-300 hover:shadow-elevated"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl tracking-tight text-foreground">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary text-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                  <span className="absolute -bottom-4 -right-4 font-display text-7xl text-foreground/[0.03] transition-colors duration-300 group-hover:text-primary/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

