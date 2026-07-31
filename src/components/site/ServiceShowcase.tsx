import { useState } from "react";
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
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services-showcase" className="relative scroll-mt-32 pt-24 pb-20 md:pt-36 md:pb-28">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="WHAT WE DO"
          title="Advice is useful. Implementation creates change."
          description="BDA Technologies works from diagnosis to launch, training, and adoption."
        />

        <div className="mt-12 flex flex-col gap-4 md:mt-16 lg:h-[520px] lg:flex-row">
          {services.map((s, i) => {
            const isActive = active === i;
            return (
              <a
                key={s.num}
                href={s.href}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                className="group relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-3xl border border-border shadow-soft transition-[flex-grow] duration-700 ease-out sm:min-h-[420px] lg:min-h-0"
                style={{ flexGrow: isActive ? 2.4 : 1, flexBasis: 0 }}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={900}
                  height={1100}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                    isActive ? "scale-100" : "scale-105"
                  }`}
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    isActive
                      ? "bg-gradient-to-t from-foreground/95 via-foreground/50 to-foreground/10"
                      : "bg-gradient-to-t from-foreground/95 via-foreground/75 to-foreground/40"
                  }`}
                />

                <span className="absolute left-6 top-6 rounded-full border border-background/25 bg-background/10 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-background backdrop-blur-sm md:left-8 md:top-8">
                  {s.num}
                </span>

                <div className="relative p-6 md:p-8">
                  <h3
                    className={`font-display leading-tight tracking-tight text-background transition-all duration-500 ${
                      isActive ? "text-2xl md:text-[30px]" : "text-xl md:text-2xl"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`max-w-sm text-sm leading-relaxed text-background/80 transition-all duration-500 md:text-base ${
                      isActive
                        ? "mt-3 max-h-32 opacity-100"
                        : "mt-0 max-h-0 overflow-hidden opacity-0 lg:mt-0"
                    }`}
                  >
                    {s.desc}
                  </p>
                  <div className="mt-6 flex items-center gap-3 text-sm font-medium text-background">
                    <span
                      className={`transition-opacity duration-500 ${
                        isActive ? "opacity-100" : "opacity-0 lg:opacity-0"
                      }`}
                    >
                      Explore Service
                    </span>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
