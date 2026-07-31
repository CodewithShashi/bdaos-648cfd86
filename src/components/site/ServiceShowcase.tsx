import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import osImg from "@/assets/service-os.jpg";
import transformationImg from "@/assets/service-transformation.jpg";
import trainingImg from "@/assets/service-ai-training.jpg";

const services = [
  {
    num: "01",
    title: "BDA OS Implementation",
    desc: "Design and build a company-wide operating system.",
    image: osImg,
    href: "/services/bda-os-implementation",
    wide: true,
  },
  {
    num: "02",
    title: "Digital Transformation",
    desc: "Find process gaps, reporting issues, and founder dependency.",
    image: transformationImg,
    href: "/services/digital-transformation",
  },
  {
    num: "03",
    title: "AI Training and Team Adoption",
    desc: "Help teams use AI and new systems in daily work.",
    image: trainingImg,
    href: "/services/ai-training",
  },
];

export function ServiceShowcase() {
  return (
    <section id="services-showcase" className="relative scroll-mt-32 pt-24 pb-20 md:pt-36 md:pb-28">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="WHAT WE DO"
          title="Advice is useful. Implementation creates change."
          description="BDA Technologies works from diagnosis to launch, training, and adoption."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-12 grid grid-cols-1 gap-5 md:mt-16 lg:grid-cols-4"
        >
          {services.map((s) => (
            <motion.a
              key={s.num}
              href={s.href}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ y: -6 }}
              className={`group relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-shadow duration-300 hover:shadow-elevated sm:min-h-[480px] md:p-8 ${
                s.wide ? "lg:col-span-2" : "lg:col-span-1"
              }`}
            >
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                width={900}
                height={1100}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/60 to-foreground/10" />

              <span className="absolute left-6 top-6 rounded-full border border-background/25 bg-background/10 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-background backdrop-blur-sm md:left-8 md:top-8">
                {s.num}
              </span>

              <div className="relative">
                <h3 className="font-display text-2xl leading-tight tracking-tight text-background md:text-[28px]">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-background/80 md:text-base">
                  {s.desc}
                </p>
                <div className="mt-6 flex items-center gap-3 text-sm font-medium text-background">
                  <span>Explore Service</span>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
