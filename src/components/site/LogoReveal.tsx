import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import bdaLogo from "@/assets/BDA-Logo.png";

export function LogoReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const p = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.4,
  });

  const scale = useTransform(p, [0, 0.55, 1], [0.55, 1, 1.25]);
  const opacity = useTransform(p, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const blur = useTransform(p, [0, 0.3], ["12px", "0px"]);
  const lineWidth = useTransform(p, [0.25, 0.7], ["0%", "100%"]);
  const captionOpacity = useTransform(p, [0.45, 0.7, 0.95], [0, 1, 0]);

  return (
    <section ref={ref} className="relative h-[130vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-foreground">
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
        >
          <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-primary/40 blur-3xl" />
          <div className="absolute -bottom-32 right-1/4 h-[26rem] w-[26rem] rounded-full bg-primary-glow/30 blur-3xl" />
        </div>

        <motion.div
          style={{ scale, opacity, filter: blur }}
          className="relative z-10 flex flex-col items-center px-6 text-center"
        >
          <img
            src={bdaLogo}
            alt="BDA Technologies"
            className="h-16 w-auto object-contain sm:h-24 lg:h-28"
          />
          <motion.span
            style={{ width: lineWidth }}
            className="mt-8 block h-px max-w-md bg-background/30"
          />
          <motion.p
            style={{ opacity: captionOpacity }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-background/70 sm:text-xl"
          >
            One operating system. Built for founder-led service businesses.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
