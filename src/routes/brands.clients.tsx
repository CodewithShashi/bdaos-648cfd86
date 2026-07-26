import { createFileRoute } from "@tanstack/react-router";
import { Users, Target, Megaphone, Handshake, LineChart, Search } from "lucide-react";
import { BrandPage } from "@/components/site/BrandPage";

export const Route = createFileRoute("/brands/clients")({
  head: () => ({
    meta: [
      { title: "Clients.co.in — Client Acquisition Brand | BDA Technologies" },
      {
        name: "description",
        content:
          "Clients.co.in helps service businesses build a predictable client acquisition engine with positioning, outreach, and follow-up systems.",
      },
      { property: "og:title", content: "Clients.co.in — Client Acquisition Brand" },
      {
        property: "og:description",
        content: "Predictable client acquisition for founder-led service businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <BrandPage
      name="Clients.co.in"
      tagline="A predictable way to win better clients."
      description="Clients.co.in is the BDA Technologies brand focused on client acquisition — positioning, outreach, and follow-up built as a repeatable system instead of scattered effort."
      icon={Users}
      website="clients.co.in"
      bestFor="Service businesses that want steady, qualified client flow"
      offerings={[
        { title: "Positioning", body: "Sharpen the offer so the right buyers understand the value quickly.", icon: Target },
        { title: "Lead Generation", body: "Structured outbound and inbound activity that fills the pipeline.", icon: Search },
        { title: "Outreach Systems", body: "Sequences and cadences the team can actually run every week.", icon: Megaphone },
        { title: "Follow-Up Discipline", body: "No lead goes cold because someone forgot to reply.", icon: Handshake },
        { title: "Pipeline Visibility", body: "One view of every opportunity, stage, and next action.", icon: LineChart },
        { title: "Conversion Review", body: "Regular reviews of what converts so effort goes to what works.", icon: Users },
      ]}
      approach={[
        { title: "Understand the offer", body: "We map your services, buyers, and current acquisition activity." },
        { title: "Design the system", body: "Channels, messaging, and cadence built around your capacity." },
        { title: "Run and refine", body: "The team executes with clear ownership and weekly review points." },
        { title: "Scale what works", body: "Double down on proven channels and remove the noise." },
      ]}
      outcomes={[
        "A clearer offer that resonates with the right buyers",
        "A pipeline that does not depend on referrals alone",
        "Follow-ups that happen on time, every time",
        "Visibility into what actually converts",
      ]}
    />
  ),
});
