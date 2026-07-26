import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Container } from "./Container";
import { AnimatedButton } from "./AnimatedButton";
import { caseStudies as posts } from "@/data/insights";

export function Insights() {
  return (
    <section id="insights" className="relative py-28 md:py-36 bg-background">
      <Container>
        <div className="flex flex-col gap-8">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            REAL SYSTEMS. REAL BUSINESS PROBLEMS.
          </motion.span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8 text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-foreground"
            >
              See how we improve visibility, execution, and control.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-4 text-base text-muted-foreground leading-relaxed"
            >
              Each case study should show the problem, the system built, and the change created.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatedButton href="/insights/case-studies">View Case Studies</AnimatedButton>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {posts.map((p) => (
            <MotionLink
              key={p.slug}
              to="/insights/case-studies"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="group relative overflow-hidden rounded-3xl bg-secondary/50 border border-border transition-all duration-500 hover:shadow-elevated hover:-translate-y-1"
            >
              <div className="relative overflow-hidden aspect-[4/3] m-2 rounded-2xl">
                <motion.img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                />
                <div className="absolute top-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              <div className="p-6 pt-4">
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  <span>{p.category}</span>
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  <span>{p.date}</span>
                </div>
                <h3 className="mt-4 text-xl md:text-2xl font-normal tracking-tight text-foreground leading-snug group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
