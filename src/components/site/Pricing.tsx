import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

type Billing = "monthly" | "yearly";

const plans = [
  {
    name: "Pilot",
    tagline: "Start with one high-impact win.",
    price: { monthly: "$1.995", yearly: "$1.596" },
    badge: "PER PROJECT",
    included: [
      "AI readiness audit",
      "90-day roadmap",
      "1 workflow automated or 1 AI build",
      "2–4 week delivery",
      "Handover docs + 1 workshop",
    ],
  },
  {
    name: "Partner",
    tagline: "Your AI team, always building.",
    price: { monthly: "$2.995", yearly: "$2.396" },
    badge: "PER PROJECT",
    included: [
      "Everything in Pilot",
      "Multiple builds per quarter",
      "Custom agents & integrations",
      "Bi-weekly strategy reviews",
      "Priority support (Slack, 24–48h)",
    ],
    highlighted: true,
  },
  {
    name: "Scale",
    tagline: "Org-wide AI across teams.",
    price: { monthly: "$5.995", yearly: "$4.796" },
    badge: "PER PROJECT",
    included: [
      "Everything in Partner",
      "Multi-team rollout",
      "Security & compliance review",
      "Dedicated PM + on-call support",
      "Training program + playbooks/SOPs",
    ],
  },
];

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const isYearly = billing === "yearly";

  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-background">
      <Container>
        <SectionHeading
          eyebrow="008/ OUR PRICING"
          title="Pricing That Scales With You."
          description="Start with a focused pilot, grow into an embedded partnership."
        />

        {/* Billing toggle */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/50 p-1">
            {(["monthly", "yearly"] as Billing[]).map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setBilling(opt)}
                className={`px-5 py-2 text-xs font-medium tracking-wider uppercase rounded-full transition-colors ${
                  billing === opt
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {opt}
                {opt === "yearly" && (
                  <span className="ml-2 text-[10px] text-primary">-20%</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col"
            >
              {/* Outer solid frame */}
              <div
                className={`rounded-3xl border border-border p-3 ${
                  plan.highlighted ? "bg-secondary" : "bg-secondary/40"
                }`}
              >
                {/* Dark price card */}
                <div className="rounded-2xl bg-foreground text-background p-6 md:p-7 relative overflow-hidden">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl tracking-tight">
                        {plan.name}
                      </h3>
                      <p className="mt-1 text-sm text-background/70">{plan.tagline}</p>
                    </div>
                    <span className="text-[10px] font-medium tracking-wider text-background/70 shrink-0">
                      {plan.badge}
                    </span>
                  </div>

                  <div className="mt-14 flex items-end gap-1">
                    <motion.span
                      key={plan.price[billing]}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className="font-display text-4xl md:text-5xl tracking-tight"
                    >
                      {plan.price[billing]}
                    </motion.span>
                    <span className="text-xs text-background/60 mb-2">
                      {isYearly ? "/YEARLY" : "/MONTHLY"}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="group relative mt-3 flex w-full items-center justify-center rounded-2xl bg-foreground text-background py-4 text-sm font-medium overflow-hidden hover:bg-foreground/90 transition-colors"
                >
                  <span className="relative z-10">Book A Call</span>
                  <span className="absolute left-6 right-6 bottom-3 h-px bg-primary/70" />
                </a>
              </div>

              {/* Included list */}
              <div className="mt-6 px-2">
                <p className="text-sm text-muted-foreground mb-4">What's included:</p>
                <ul className="flex flex-col gap-3">
                  {plan.included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full text-primary">
                        <Check className="h-4 w-4" strokeWidth={2.5} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
