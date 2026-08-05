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

  const scale = useTransform(p, [0, 0.55, 1], [0.65, 1, 1.15]);
  const opacity = useTransform(p, [0, 0.1, 0.8, 1], [0.9, 1, 1, 0]);
  const blur = useTransform(p, [0, 0.3], ["3px", "0px"]);
  // Logo drops in from above and settles at center
  const y = useTransform(p, [0, 0.5], ["-45%", "0%"]);
  const lineWidth = useTransform(p, [0.1, 0.5], ["0%", "100%"]);
  const captionOpacity = useTransform(p, [0.2, 0.5, 0.95], [0, 1, 0]);

  return (
    <section ref={ref} className="relative h-[25vh] sm:h-[80vh] lg:h-[130vh]">
      <div className="sticky top-0 flex h-[25vh] sm:h-[80vh] lg:h-screen items-center justify-center overflow-hidden bg-foreground">
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
        >
          <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-primary/50 blur-3xl" />
          <div className="absolute -bottom-32 right-1/4 h-[26rem] w-[26rem] rounded-full bg-primary-glow/40 blur-3xl" />
        </div>

        <motion.div
          style={{ scale, opacity, filter: blur, y }}
          className="relative z-10 flex flex-col items-center px-6 text-center"
        >
          <img
            src={bdaLogo}
            alt="BDA Technologies"
            className="h-24 w-auto object-contain brightness-125 contrast-125 drop-shadow-[0_0_24px_rgba(132,204,22,0.55)] sm:h-28 lg:h-32"
          />
          <motion.span
            style={{ width: lineWidth }}
            className="mt-1 block h-px max-w-xs bg-background/30 sm:mt-3 sm:max-w-md"
          />
          <motion.p
            style={{ opacity: captionOpacity }}
            className="mt-1 max-w-lg text-xs leading-relaxed text-background/70 sm:mt-3 sm:text-lg lg:text-xl"
          >
            One operating system. Built for founder-led service businesses.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
