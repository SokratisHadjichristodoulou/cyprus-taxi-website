import { createFileRoute } from "@tanstack/react-router";
import "@tanstack/start-client-core";

// Legacy URL from the previous WordPress site → 301 to homepage.
const redirect = () =>
  new Response(null, {
    status: 301,
    headers: {
      Location: "https://taxicyprus24.com/",
      "Cache-Control": "public, max-age=3600",
    },
  });

export const Route = createFileRoute("/index.php")({
  server: {
    handlers: {
      GET: redirect,
      HEAD: redirect,
    },
  },
});
