import { RegionHero } from "./RegionHero";
import indiaHero from "@/assets/india-hero.jpg";

export function IndiaHero() {
  return (
    <RegionHero
      image={indiaHero}
      imageAlt="Gateway of India in Mumbai at dusk"
      badge="BDA Technologies — India"
      flag="🇮🇳"
      trustMarks={["Mumbai", "Delhi NCR", "Bengaluru", "Pan-India delivery"]}
    />
  );
}
