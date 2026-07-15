import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Container } from "./Container";
import thriveGlobal from "@/assets/thrive-global.png.asset.json";
import nbt from "@/assets/nbt.png.asset.json";
import newstrack from "@/assets/newstrack.png.asset.json";
import disrupt from "@/assets/disrupt.png.asset.json";
import midday from "@/assets/midday.png.asset.json";
import dailyhunt from "@/assets/dailyhunt.png.asset.json";

const logos = [
  { src: thriveGlobal.url, alt: "Thrive Global" },
  { src: nbt.url, alt: "Navbharat Times" },
  { src: newstrack.url, alt: "Newstrack" },
  { src: disrupt.url, alt: "Disrupt" },
  { src: midday.url, alt: "Mid-Day" },
  { src: dailyhunt.url, alt: "Dailyhunt" },
];

const SLOTS = 6;
const INTERVAL_MS = 8000;

export function LogoMarquee() {
  const [tick, setTick] = useState(0);
  const indicesRef = useRef([0, 1, 2, 3, 4, 5]);

  useEffect(() => {
    const id = setInterval(() => {
      setTick((prev) => {
        const nextTick = prev + 1;
        const slot = nextTick % SLOTS;
        indicesRef.current = indicesRef.current.map((idx, i) =>
          i === slot ? (idx + 1) % logos.length : idx
        );
        return nextTick;
      });
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);


  return (
    <section className="relative w-full bg-background">
      <Container className="pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center rounded-full border border-foreground/15 bg-secondary/60 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-foreground/80">
            TRUSTED BY TEAMS THAT VALUE BETTER SYSTEMS
          </div>
        </motion.div>
      </Container>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-t border-b border-border">
        {Array.from({ length: SLOTS }).map((_, slot) => {
          const logo = logos[(slot + tick) % logos.length];
          return (
            <div
              key={slot}
              className="group relative flex h-28 items-center justify-center overflow-hidden border-r border-border last:border-r-0 [&:nth-child(n+3)]:border-t sm:[&:nth-child(n+4)]:border-t sm:[&:nth-child(n+3)]:border-t-0 lg:[&:nth-child(n+4)]:border-t-0 px-6"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 0.75, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="max-h-12 w-auto object-contain hover:opacity-100"
                  loading="lazy"
                />
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
