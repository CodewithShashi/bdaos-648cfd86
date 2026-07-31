import { motion } from "framer-motion";
import { Container } from "./Container";
import { AnimatedButton } from "./AnimatedButton";

type Props = {
  image: string;
  imageAlt: string;
  badge: string;
  flag?: string;
  trustMarks?: string[];
};

export function RegionHero({ image, imageAlt, badge, flag }: Props) {
  return (
    <section className="relative overflow-hidden min-h-[88vh] flex items-center pt-32 pb-16 md:pt-40 md:pb-24 text-background">
      <img
        src={image}
        alt={imageAlt}
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/85 to-foreground/40"
      />
      <div aria-hidden className="absolute inset-0 bg-foreground/30" />

      <Container className="relative">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-background/25 bg-background/10 backdrop-blur px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-background/85"
          >
            {flag ? <span aria-hidden>{flag}</span> : null}
            {badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display font-bold text-[2.1rem] sm:text-[3rem] md:text-[4rem] leading-[1.05] tracking-[-0.02em]"
          >
            Build a more efficient business with one operating system.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base md:text-lg text-background/75 leading-relaxed"
          >
            BDA Technologies builds custom business operating systems for founder-led service
            businesses. We connect tasks, dashboards, reports, follow-ups, and team accountability
            so fewer things get missed and work moves faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col items-start sm:flex-row sm:flex-wrap sm:items-center gap-3"
          >
            <AnimatedButton href="#cta" className="w-fit max-w-full">
              Apply for a Business Audit Call
            </AnimatedButton>
            <a
              href="#services-showcase"
              className="inline-flex w-fit max-w-full items-center justify-center rounded-full border border-background/25 px-6 py-3 text-sm font-medium text-background/90 transition hover:bg-background/10"
            >
              Explore BDA OS
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
