import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Target, Eye, Award } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import aboutImg from "@/assets/about.jpg";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

const pillars = [
  { icon: Target, title: "Mission", text: "Empower every team to build with AI — safely, quickly, and beautifully." },
  { icon: Eye, title: "Vision", text: "A world where software builds itself in collaboration with human intent." },
  { icon: Award, title: "Why us", text: "Trusted by 4,000+ teams. Enterprise-grade security. Human-centered design." },
];

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="About Nebula"
          title="We build the intelligence layer for modern software."
          description="Since 2022, we've been engineering the infrastructure that powers the next generation of AI-native products, from ambitious startups to Fortune 500 teams."
        />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-elevated">
              <img
                src={aboutImg}
                alt="Nebula team collaborating in a bright studio"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
            </div>
            <motion.div
              className="absolute -bottom-8 -right-6 md:-right-10 glass rounded-2xl p-5 shadow-soft animate-float"
            >
              <div className="text-3xl font-semibold">
                <Counter to={99} suffix="%" />
              </div>
              <div className="text-xs text-muted-foreground mt-1">Customer satisfaction</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 rounded-3xl border border-border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elevated"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <p.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-1 text-muted-foreground leading-relaxed">{p.text}</p>
                </div>
              </motion.div>
            ))}

            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { n: 4000, s: "+", l: "Teams" },
                { n: 120, s: "M", l: "API calls / day" },
                { n: 42, s: "", l: "Countries" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl bg-secondary/60 p-5">
                  <div className="text-3xl font-semibold text-gradient">
                    <Counter to={s.n} suffix={s.s} />
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
