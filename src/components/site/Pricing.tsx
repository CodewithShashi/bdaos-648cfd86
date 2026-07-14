import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const plans = [
  {
    name: "Pilot",
    tagline: "Start with one high-impact win.",
    price: "$1.995",
    period: "/MONTHLY",
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
    price: "$2.995",
    period: "/MONTHLY",
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
    price: "$5.995",
    period: "/MONTHLY",
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
  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-background">
      <Container>
        <SectionHeading
          eyebrow="008/ OUR PRICING"
          title="Pricing That Scales With You."
          description="Start with a focused pilot, grow into an embedded partnership."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col"
            >
              {/* Outer dashed frame */}
              <div
                className={`rounded-3xl border border-dashed border-border p-3 ${
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
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] font-medium tracking-wider text-background/70">
                        {plan.badge}
                      </span>
                      <span className="relative h-5 w-9 rounded-full bg-background/20 flex items-center">
                        <span className="h-4 w-4 rounded-full bg-background ml-0.5" />
                      </span>
                    </div>
                  </div>

                  <div className="mt-14 flex items-end gap-1">
                    <span className="font-display text-4xl md:text-5xl tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-background/60 mb-2">{plan.period}</span>
                  </div>
                </div>

                {/* CTA */}
                <button
                  type="button"
                  className="group relative mt-3 w-full rounded-2xl bg-foreground text-background py-4 text-sm font-medium overflow-hidden"
                >
                  <span className="relative z-10">Book A Call</span>
                  <span className="absolute left-6 right-6 bottom-3 h-px bg-primary/70" />
                </button>
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
