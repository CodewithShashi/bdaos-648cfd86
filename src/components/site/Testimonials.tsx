import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const reviews = [
  {
    quote: "BDA AI shipped in six weeks what our internal team had struggled with for a year. The quality is unmatched.",
    name: "Amelia Chen",
    role: "VP Product, Northwind",
  },
  {
    quote: "It genuinely feels like hiring a senior AI team overnight. Every deliverable is thoughtful and elegant.",
    name: "Marcus Reeves",
    role: "CTO, Lumen Health",
  },
  {
    quote: "The most polished, pragmatic AI partner we've worked with. They think in systems, not features.",
    name: "Priya Natarajan",
    role: "Head of Engineering, Cadence",
  },
  {
    quote: "From strategy to launch, they moved with a rare combination of speed and craft.",
    name: "Jonas Weber",
    role: "Founder, Fieldnote",
  },
];

const logos = ["Northwind", "Lumen", "Cadence", "Fieldnote", "Orbit", "Meridian", "Halo", "Atlas"];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Loved by teams"
          title="Trusted by ambitious builders."
          description="From Series-A startups to Fortune 100 enterprises — teams choose BDA AI for craft, speed, and reliability."
        />

        {/* logos marquee */}
        <div className="mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-14 animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((l, i) => (
              <span key={i} className="text-2xl font-semibold tracking-tight text-muted-foreground/60">
                {l}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {reviews.map((r) => (
            <motion.figure
              key={r.name}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ y: -4 }}
              className="relative rounded-3xl border border-border bg-white p-8 shadow-soft transition"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-lg leading-relaxed text-foreground/90">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground font-semibold">
                  {r.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <div>
                  <div className="font-medium">{r.name}</div>
                  <div className="text-sm text-muted-foreground">{r.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
