import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const projects = [
  {
    img: p1,
    category: "Analytics",
    title: "Orbit — Predictive analytics",
    desc: "Real-time analytics workspace for growth teams.",
    tags: ["Next.js", "OpenAI"],
    ratio: "aspect-[4/5]",
  },
  {
    img: p2,
    category: "Conversational AI",
    title: "Halo — Support copilot",
    desc: "Handles 70% of tier-1 support autonomously.",
    tags: ["Claude", "RAG"],
    ratio: "aspect-[4/3]",
  },
  {
    img: p3,
    category: "Commerce",
    title: "Meridian — Shopping app",
    desc: "Personalized journeys across web and mobile.",
    tags: ["React Native"],
    ratio: "aspect-[3/4]",
  },
  {
    img: p2,
    category: "Fintech",
    title: "Ledger — Autonomous accounting",
    desc: "Books that close themselves, every month.",
    tags: ["LangChain", "Postgres"],
    ratio: "aspect-square",
  },
  {
    img: p1,
    category: "DevTools",
    title: "Forge — AI code review",
    desc: "Ships production-grade PR reviews in seconds.",
    tags: ["GPT-5", "GitHub"],
    ratio: "aspect-[4/3]",
  },
  {
    img: p3,
    category: "Media",
    title: "Cadence — Content studio",
    desc: "Generative campaigns from brief to launch.",
    tags: ["Vector DB", "Runway"],
    ratio: "aspect-[3/4]",
  },
];

export function Portfolio() {
  return (
    <section id="work" className="relative py-28 md:py-36 bg-secondary/50">
      <Container>
        <SectionHeading
          eyebrow="PRODUCTS BUILT BY BDA"
          title="We build products when a repeated business problem needs a better system."
          description="Our product portfolio shows how we turn real operating problems into practical software. Some products are available to the public. Others are used inside client systems."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]"
        >
          {projects.map((p, i) => (
            <motion.article
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="group relative mb-6 break-inside-avoid overflow-hidden rounded-3xl bg-white border border-border shadow-soft"
            >
              <div className={`relative overflow-hidden ${p.ratio}`}>
                <motion.img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium">
                  {p.category}
                </div>
                <div className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
