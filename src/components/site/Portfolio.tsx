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
    title: "Orbit — Predictive analytics platform",
    desc: "A real-time analytics workspace built for growth teams at Series-B startups.",
    tags: ["Next.js", "OpenAI", "Postgres"],
    span: "lg:col-span-2",
  },
  {
    img: p2,
    category: "Conversational AI",
    title: "Halo — Enterprise support copilot",
    desc: "Handles 70% of tier-1 support autonomously for a global fintech.",
    tags: ["Claude", "RAG", "Slack"],
  },
  {
    img: p3,
    category: "Commerce",
    title: "Meridian — AI shopping app",
    desc: "Personalized shopping journeys across web, mobile, and messaging.",
    tags: ["React Native", "Vector DB"],
  },
];

export function Portfolio() {
  return (
    <section id="work" className="relative py-28 md:py-36 bg-secondary/50">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Products we're proud of."
          description="A glimpse into the intelligent products we've shipped alongside our partners."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl bg-white border border-border shadow-soft ${p.span ?? ""}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <motion.img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium">
                  {p.category}
                </div>
                <div className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.desc}</p>
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
        </div>
      </Container>
    </section>
  );
}
