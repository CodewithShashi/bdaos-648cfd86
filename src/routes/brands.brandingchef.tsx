import { createFileRoute } from "@tanstack/react-router";
import { ChefHat, Palette, PenTool, Layout, Sparkles, Megaphone } from "lucide-react";
import { BrandPage } from "@/components/site/BrandPage";
import brandingchefLogo from "@/assets/brandingchef-logo.png.asset.json";

export const Route = createFileRoute("/brands/brandingchef")({
  head: () => ({
    meta: [
      { title: "BrandingChef — Brand & Creative Studio | BDA Technologies" },
      {
        name: "description",
        content:
          "BrandingChef is the creative brand of BDA Technologies — identity, design systems, and brand storytelling for growing businesses.",
      },
      { property: "og:title", content: "BrandingChef — Brand & Creative Studio" },
      {
        property: "og:description",
        content: "Redefining the art of branding — identity, design systems, and storytelling.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <BrandPage
      name="BrandingChef"
      tagline="Redefining the art of branding."
      description="BrandingChef is the creative studio inside BDA Technologies. We build brand identity, design systems, and messaging that make growing businesses look and sound credible."
      icon={ChefHat}
      logo={brandingchefLogo.url}
      website="brandingchef.com"
      bestFor="Businesses that need a credible, consistent brand presence"
      offerings={[
        { title: "Brand Identity", body: "Logo, colour, and typography built as a usable system.", icon: Palette },
        { title: "Design Systems", body: "Reusable components so every asset stays on brand.", icon: Layout },
        { title: "Messaging", body: "Clear positioning and copy that explains what you actually do.", icon: PenTool },
        { title: "Website Design", body: "Conversion-focused pages designed around real buyer journeys.", icon: Sparkles },
        { title: "Campaign Creative", body: "Creative assets for launches, ads, and social campaigns.", icon: Megaphone },
        { title: "Brand Guidelines", body: "Documented rules so the team applies the brand consistently.", icon: ChefHat },
      ]}
      approach={[
        { title: "Discover", body: "We learn the business, the audience, and the competitive picture." },
        { title: "Define", body: "Positioning, tone, and visual direction agreed before design starts." },
        { title: "Design", body: "Identity and assets built as a system, not one-off files." },
        { title: "Deliver", body: "Guidelines and templates so the brand holds up in daily use." },
      ]}
      outcomes={[
        "A brand that matches the quality of the work",
        "Consistent assets across web, social, and sales material",
        "Faster creative output using reusable templates",
        "Clear messaging that shortens sales conversations",
      ]}
    />
  ),
});
