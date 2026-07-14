import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const logosA = [
  "logoipsum",
  "LOGOIPSUM",
  "logoipsum°",
  "Logoipsum",
  "logoipsum",
  "logoipsum°",
  "logoipsum",
  "Logoipsum",
];

const logosB = [
  "Northwind",
  "LUMEN",
  "Cadence°",
  "Fieldnote",
  "Orbit",
  "Meridian°",
  "Halo",
  "Atlas",
];

export function LogoMarquee() {
  const [set, setSet] = useState(0);
  const logos = set === 0 ? logosA : logosB;

  useEffect(() => {
    const id = setInterval(() => {
      setSet((s) => (s + 1) % 2);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative w-full bg-background"
    >
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 border-t border-b border-border">
        {logos.map((l, i) => (
          <div
            key={i}
            className="group relative flex h-24 items-center justify-center border-r border-border last:border-r-0 [&:nth-child(n+5)]:border-t sm:[&:nth-child(n+5)]:border-t-0"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={`${set}-${l}-${i}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="text-xl font-semibold tracking-tight text-muted-foreground/70 transition-colors duration-300 group-hover:text-foreground"
              >
                {l}
              </motion.span>
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
