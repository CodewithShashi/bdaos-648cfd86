import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";
import { UaeHero } from "@/components/site/UaeHero";

export const Route = createFileRoute("/uae")({
  head: () => ({
    meta: [
      { title: "BDA Technologies UAE — Business operating systems for the Gulf" },
      {
        name: "description",
        content:
          "BDA Technologies UAE builds business operating systems for founder-led service businesses in Dubai, Abu Dhabi and Sharjah — with local implementation support.",
      },
      { property: "og:title", content: "BDA Technologies UAE" },
      {
        property: "og:description",
        content: "Business operating systems built for the Gulf — implemented in weeks, not quarters.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: UaeHome,
});

function UaeHome() {
  return <HomePage hero={<UaeHero />} />;
}
