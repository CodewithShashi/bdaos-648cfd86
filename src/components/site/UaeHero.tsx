import { RegionHero } from "./RegionHero";
import uaeHero from "@/assets/uae-hero.jpg";

export function UaeHero() {
  return (
    <RegionHero
      image={uaeHero}
      imageAlt="Dubai skyline at dusk"
      badge="BDA Technologies — UAE"
      flag="🇦🇪"
      trustMarks={["Dubai", "Abu Dhabi", "Sharjah", "GCC delivery"]}
    />
  );
}
