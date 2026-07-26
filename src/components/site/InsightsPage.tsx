import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import type { InsightPost } from "@/data/insights";

export function InsightsPage({
  title,
  tagline,
  description,
  posts,
}: {
  title: string;
  tagline: string;
  description: string;
  posts: InsightPost[];
}) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative overflow-hidden pt-36 md:pt-44 pb-16 md:pb-20">
        <div aria-hidden className="absolute inset-0 bg-mesh opacity-70" />
        <div
          aria-hidden
          className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float-slow"
        />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl flex flex-col items-center text-center"
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.03] tracking-tight text-foreground">
              {title}
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-foreground/80 font-display leading-snug">
              {tagline}
            </p>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {description}
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="relative pb-24 md:pb-32">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {posts.map((p) => (
              <motion.article
                key={p.slug}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="group relative overflow-hidden rounded-3xl bg-secondary/50 border border-border transition-all duration-500 hover:shadow-elevated hover:-translate-y-1"
              >
                <div className="relative overflow-hidden aspect-[4/3] m-2 rounded-2xl">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                  <h2 className="mt-4 text-xl md:text-2xl font-normal tracking-tight text-foreground leading-snug group-hover:text-primary transition-colors">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
