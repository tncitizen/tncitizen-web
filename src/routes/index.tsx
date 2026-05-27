import { createFileRoute } from "@tanstack/react-router";
import Landing from "@/components/landing/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TNCitizen — Smarter Communities, Safer Lives" },
      { name: "description", content: "TNCitizen helps Tamil Nadu citizens report issues, receive alerts, access emergency SOS, and connect with local government offices." },
      { property: "og:title", content: "TNCitizen — Smarter Communities, Safer Lives" },
      { property: "og:description", content: "Civic safety and public engagement platform for Tamil Nadu — report, respond, and stay connected with your local government." },
    ],
  }),
  component: Index,
});

function Index() {
  return <Landing />;
}
