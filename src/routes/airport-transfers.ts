import { createFileRoute } from "@tanstack/react-router";
import "@tanstack/start-client-core";

// Legacy WordPress URL (still crawled by Google, returned 404) → 301 to the all-routes overview.
export const Route = createFileRoute("/airport-transfers")({
  server: {
    handlers: {
      GET: () =>
        new Response(null, {
          status: 301,
          headers: { Location: "https://taxicyprus24.com/cyprus-airport-transfers" },
        }),
    },
  },
});
