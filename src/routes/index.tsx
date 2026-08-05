import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";
import { IndiaHero } from "@/components/site/IndiaHero";
import { UaeHero } from "@/components/site/UaeHero";
import type { RegionPrefix } from "@/lib/region";

const META: Record<RegionPrefix, { title: string; description: string }> = {
  "": {
    title: "BDA Technologies — Business operating systems for service teams",
    description:
      "BDA Technologies builds custom business operating systems for founder-led service businesses — dashboards, workflows, automation, and team adoption.",
  },
  "/in": {
    title: "BDA Technologies India — Business operating systems",
    description:
      "BDA Technologies India builds custom business operating systems for founder-led service businesses — dashboards, workflows, automation, and team adoption.",
  },
  "/ae": {
    title: "BDA Technologies UAE — Business operating systems for the Gulf",
    description:
      "BDA Technologies UAE builds business operating systems for founder-led service businesses in Dubai, Abu Dhabi and Sharjah — with local implementation support.",
  },
};

export const Route = createFileRoute("/")({
  loader: ({ context }) => ({ region: context.region.current }),
  head: ({ loaderData }) => {
    const meta = META[loaderData?.region ?? ""] ?? META[""];
    return {
      meta: [
        { title: meta.title },
        { name: "description", content: meta.description },
        { property: "og:title", content: meta.title },
        { property: "og:description", content: meta.description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: meta.title },
        { name: "twitter:description", content: meta.description },
      ],
    };
  },
  component: Index,
});

function Index() {
  const { region } = Route.useLoaderData();
  if (region === "/in") return <HomePage hero={<IndiaHero />} />;
  if (region === "/ae") return <HomePage hero={<UaeHero />} />;
  return <HomePage />;
}
