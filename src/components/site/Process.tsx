import { ArrowUpRight } from "lucide-react";
import { Container } from "./Container";
import { AnimatedButton } from "./AnimatedButton";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import linkassistLogo from "@/assets/linkassist-logo.png.asset.json";
import hireassistLogo from "@/assets/hireassist-logo.png.asset.json";

const products = [
  {
    title: "LinkAssist",
    desc: "LinkedIn content and relationship workflow",
    href: "/products/linkassist",
    logo: linkassistLogo.url,
  },
  {
    title: "HireAssist",
    desc: "Hiring workflow and candidate management",
    href: "/products/hireassist",
    logo: hireassistLogo.url,
  },
  {
    title: "QAAssist",
    desc: "Quality assurance and release tracking",
    href: "/products/qaassist",
    logo: null,
  },
  {
    title: "TaskAssist",
    desc: "Task ownership, escalation, and reporting",
    href: "/products/taskassist",
    logo: null,
  },
];


export function Process() {
  return (
    <section id="products" className="relative bg-secondary/40 py-20 md:py-28">
      <Container>
        {/* Header: body + CTA on the left, heading on the right */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold tracking-wide text-foreground">
              PRODUCTS BUILT BY BDA
            </span>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-foreground md:text-5xl">
              We build products when a repeated business problem needs a better system.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              Our product portfolio shows how we turn real operating problems into practical
              software. Some products are available to the public. Others are used inside client
              systems.
            </p>
            <div className="mt-8">
              <AnimatedButton href="/products">Explore Our Products</AnimatedButton>
            </div>
          </div>
        </div>
      </Container>

      {/* Full-width scroll stack */}
      <div className="mt-14 w-full px-4 md:mt-20 md:px-10">
        <ScrollStack
          itemDistance={60}
          itemStackDistance={20}
          itemScale={0.02}
          baseScale={0.88}
          stackPosition="22%"
          scaleEndPosition="12%"
        >
          {products.map((p, i) => (
            <ScrollStackItem key={p.title}>
              <a
                href={p.href}
                className="group relative mx-auto flex min-h-[260px] w-full max-w-6xl flex-col justify-between overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-soft transition-shadow duration-300 hover:shadow-elevated md:min-h-[320px] md:p-12"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    {p.logo ? (
                      <img
                        src={p.logo}
                        alt={`${p.title} logo`}
                        loading="lazy"
                        className="mb-5 h-9 w-auto object-contain md:h-11"
                      />
                    ) : null}
                    <h3 className="font-display text-3xl tracking-tight text-foreground md:text-4xl">
                      {p.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                      {p.desc}
                    </p>
                  </div>

                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-secondary text-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
                <span className="pointer-events-none absolute -bottom-8 right-2 font-display text-[9rem] leading-none text-foreground/[0.04] transition-colors duration-300 group-hover:text-primary/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </a>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
