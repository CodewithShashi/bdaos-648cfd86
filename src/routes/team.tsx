import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Linkedin } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/site/Container";
import { AnimatedButton } from "@/components/site/AnimatedButton";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { CTA } from "@/components/site/CTA";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team & Partners — BDA Technologies" },
      {
        name: "description",
        content:
          "Meet the operators, engineers, and partners behind BDA Technologies — the team building operating systems for growing service businesses.",
      },
      { property: "og:title", content: "Team & Partners — BDA Technologies" },
      {
        property: "og:description",
        content:
          "The people and partners shaping how growing service businesses execute — meet the BDA Technologies team.",
      },
    ],
  }),
  component: TeamPage,
});

type Member = {
  name: string;
  role: string;
  team: "Leadership" | "Product" | "Engineering" | "Operations" | "Design" | "Growth";
  img: string;
};

const members: Member[] = [
  { name: "Bhavuk Dhingra", role: "Founder & CEO", team: "Leadership", img: "https://i.pravatar.cc/600?img=13" },
  { name: "Ananya Rao", role: "Head of Product", team: "Product", img: "https://i.pravatar.cc/600?img=47" },
  { name: "Rohan Mehta", role: "Engineering Lead", team: "Engineering", img: "https://i.pravatar.cc/600?img=15" },
  { name: "Priya Nair", role: "Operations Manager", team: "Operations", img: "https://i.pravatar.cc/600?img=49" },
  { name: "Kabir Sethi", role: "Design Lead", team: "Design", img: "https://i.pravatar.cc/600?img=12" },
  { name: "Meera Kapoor", role: "Growth Strategist", team: "Growth", img: "https://i.pravatar.cc/600?img=45" },
  { name: "Arjun Verma", role: "Senior Engineer", team: "Engineering", img: "https://i.pravatar.cc/600?img=33" },
  { name: "Sanya Iyer", role: "Product Manager", team: "Product", img: "https://i.pravatar.cc/600?img=44" },
];

const filters = ["All", "Leadership", "Product", "Engineering", "Operations", "Design", "Growth"] as const;
type Filter = (typeof filters)[number];

function TeamPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = filter === "All" ? members : members.filter((m) => m.team === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              TEAM & PARTNERS
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-foreground"
            >
              The people building the systems your business runs on.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              Operators, engineers, designers, and partners who work side by side with founders to turn day-to-day chaos into structured execution.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-9 flex justify-center"
            >
              <AnimatedButton href="#cta">Apply for a Business Audit Call</AnimatedButton>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* OUR TEAM */}
      <section className="relative pb-20 md:pb-28">
        <Container>
          {/* filter nav */}
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-border bg-secondary/40 p-1.5 mx-auto w-fit max-w-full">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  filter === f
                    ? "bg-background text-foreground shadow-soft border border-border"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {f === "All" ? "View all" : f}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visible.map((m, i) => (
              <motion.article
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
                className="group relative overflow-hidden rounded-3xl bg-foreground shadow-soft hover:shadow-elevated transition-shadow"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                {/* floating name plate */}
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl bg-background/95 backdrop-blur border border-border p-3.5 shadow-soft">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">{m.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{m.role}</p>
                  </div>
                  <a
                    href="#"
                    aria-label={`${m.name} on LinkedIn`}
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* TRUSTED BY */}
      <LogoMarquee />

      {/* CTA */}
      <CTA />

      <Footer />
    </div>
  );
}
