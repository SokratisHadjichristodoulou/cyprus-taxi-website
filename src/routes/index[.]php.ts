import { createFileRoute } from "@tanstack/react-router";

// Legacy URL from the previous WordPress site → 301 to homepage.
export const Route = createFileRoute("/index.php")({
  server: {
    handlers: {
      GET: () =>
        new Response(null, {
          status: 301,
          headers: { Location: "https://taxicyprus24.com/" },
        }),
    },
  },
});
