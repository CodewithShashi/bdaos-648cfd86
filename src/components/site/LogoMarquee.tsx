import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import staava from "@/assets/clients/client-5-1.png.asset.json";
import bluespace from "@/assets/clients/client-16.png.asset.json";
import bharatIct from "@/assets/clients/client-24.png.asset.json";
import ebcc from "@/assets/clients/client-26.png.asset.json";
import naks from "@/assets/clients/client-3-1.png.asset.json";
import tataDigital from "@/assets/clients/client-1.png.asset.json";
import iferp from "@/assets/clients/client-17.png.asset.json";
import pritikaMoney from "@/assets/clients/client-7.png.asset.json";
import pinkBlue from "@/assets/clients/client-11.png.asset.json";
import finanzaPersonel from "@/assets/clients/client-BDA-Client-Logo-new-1.png.asset.json";

const logos = [
  { src: staava.url, alt: "Staava" },
  { src: bluespace.url, alt: "Bluespace Healthcare" },
  { src: bharatIct.url, alt: "Bharat ICT" },
  { src: ebcc.url, alt: "EBCC" },
  { src: naks.url, alt: "Naks & Associates" },
  { src: tataDigital.url, alt: "Tata Digital" },
  { src: iferp.url, alt: "IFERP" },
  { src: pritikaMoney.url, alt: "Pritika Money" },
  { src: pinkBlue.url, alt: "Pink & Blue Symbiotic Living" },
  { src: finanzaPersonel.url, alt: "Finanza Personel" },
];

const SLOTS = 6;
const INTERVAL_MS = 6000;

export function LogoMarquee() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full bg-card">
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
                  transition={{ duration: 0.6, ease: "easeOut" }}
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
