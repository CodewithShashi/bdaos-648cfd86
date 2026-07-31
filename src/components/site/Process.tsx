import { ArrowUpRight } from "lucide-react";
import { Container } from "./Container";
import { AnimatedButton } from "./AnimatedButton";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const products = [
  {
    title: "LinkAssist",
    desc: "LinkedIn content and relationship workflow",
    href: "/products/linkassist",
  },
  {
    title: "HireAssist",
    desc: "Hiring workflow and candidate management",
    href: "/products/hireassist",
  },
  {
    title: "QAAssist",
    desc: "Quality assurance and release tracking",
    href: "/products/qaassist",
  },
  {
    title: "TaskAssist",
    desc: "Task ownership, escalation, and reporting",
    href: "/products/taskassist",
  },
];

export function Process() {
  return (
    <section id="products" className="relative bg-secondary/40 py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold tracking-wide text-foreground">
              PRODUCTS BUILT BY BDA
            </span>

            <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-foreground md:mt-8 md:text-5xl">
              We build products when a repeated business problem needs a better system.
            </h2>

            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
              Our product portfolio shows how we turn real operating problems into practical
              software. Some products are available to the public. Others are used inside client
              systems.
            </p>

            <div className="mt-8 md:mt-10">
              <AnimatedButton href="/products">Explore Our Products</AnimatedButton>
            </div>
          </div>

          {/* Right: stacked scroll cards */}
          <div className="lg:col-span-7">
            <ScrollStack
              itemDistance={40}
              itemStackDistance={16}
              itemScale={0.02}
              baseScale={0.9}
              stackPosition="26%"
              scaleEndPosition="14%"
            >
              {products.map((p, i) => (
                <ScrollStackItem key={p.title}>
                  <a
                    href={p.href}
                    className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-shadow duration-300 hover:shadow-elevated md:min-h-[260px] md:p-8"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
                          {p.title}
                        </h3>
                        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground md:text-base">
                          {p.desc}
                        </p>
                      </div>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary text-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                    <span className="pointer-events-none absolute -bottom-6 -right-2 font-display text-8xl text-foreground/[0.04] transition-colors duration-300 group-hover:text-primary/10">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </a>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </div>
      </Container>
    </section>
  );
}
