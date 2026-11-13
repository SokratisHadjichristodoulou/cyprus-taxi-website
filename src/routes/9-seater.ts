import { createFileRoute } from "@tanstack/react-router";
import "@tanstack/start-client-core";

// Legacy WordPress vehicle URL (still crawled by Google, returned 404) → 301 to current fleet page.
export const Route = createFileRoute("/9-seater")({
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
