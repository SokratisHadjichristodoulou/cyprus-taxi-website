import { createFileRoute } from "@tanstack/react-router";
import "@tanstack/start-client-core";

// Legacy fleet detail URL → 301 to current fleet page.
export const Route = createFileRoute("/mercedes-w213-vip")({
  server: {
    handlers: {
      GET: () =>
        new Response(null, {
          status: 301,
          headers: { Location: "https://taxicyprus24.com/fleet" },
        }),
    },
  },
});
