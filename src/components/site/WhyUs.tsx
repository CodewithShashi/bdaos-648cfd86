import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Container } from "./Container";

const columns = [
  {
    title: "Freelance",
    items: [
      "One person, limited capacity",
      "Narrow skill set, gaps in others",
      "Slows down when they get busy",
      "Little process or documentation",
      "Gone the moment it ships",
    ],
    positive: false,
    highlighted: false,
  },
  {
    title: "Other Agencies",
    items: [
      "Generic, pre-built solutions",
      "Slow, bloated onboarding",
      "Junior team does the real work",
      "Locked into their tools",
      "Handover, then radio silence",
    ],
    positive: false,
    highlighted: false,
    grey: true,
  },
  {
    title: "Working with Us",
    items: [
      "Senior team across the full AI stack",
      "Custom-built around your data",
      "2–4 week pilots with clear metrics",
      "Fully documented, owned by you",
      "Ongoing optimisation and support",
    ],
    positive: true,
    highlighted: true,
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="relative py-28 md:py-36 bg-background">
      <Container>
        <div className="flex flex-col items-center text-center gap-6">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            Why Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-foreground"
          >
            AI Partner, Done Right.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl text-base text-muted-foreground leading-relaxed"
          >
            The difference between a quick fix and a system that lasts.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-14 rounded-3xl border border-border bg-secondary/40 p-3 md:p-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {columns.map((col) => (
              <motion.div
                key={col.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className={
                  col.highlighted
                    ? "rounded-2xl bg-foreground text-background p-6 md:p-8 shadow-elevated"
                    : "rounded-2xl bg-background/60 border border-border p-6 md:p-8"
                }
              >
                <h3
                  className={
                    "text-2xl md:text-3xl font-normal tracking-tight " +
                    (col.highlighted ? "text-background" : "text-foreground")
                  }
                >
                  {col.title}
                </h3>

                <ul className="mt-8 flex flex-col">
                  {col.items.map((item, i) => (
                    <li
                      key={item}
                      className={
                        "flex items-start gap-3 py-4 text-sm md:text-base " +
                        (i !== 0
                          ? col.highlighted
                            ? "border-t border-background/15"
                            : "border-t border-border"
                          : "")
                      }
                    >
                      <span
                        className={
                          "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full " +
                          (col.positive
                            ? "text-primary"
                            : col.highlighted
                              ? "text-background/70"
                              : "text-muted-foreground")
                        }
                      >
                        {col.positive ? (
                          <Check className="h-4 w-4" strokeWidth={2.5} />
                        ) : (
                          <X className="h-4 w-4" strokeWidth={2.5} />
                        )}
                      </span>
                      <span
                        className={
                          "leading-relaxed " +
                          (col.highlighted ? "text-background" : "text-foreground")
                        }
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
