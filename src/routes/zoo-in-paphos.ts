import { createFileRoute } from "@tanstack/react-router";

// Legacy excursion URL → 301 to closest matching content (things to do in Paphos).
export const Route = createFileRoute("/zoo-in-paphos")({
  server: {
    handlers: {
      GET: () =>
        new Response(null, {
          status: 301,
          headers: {
            Location: "https://taxicyprus24.com/blog/things-to-do-in-paphos",
          },
        }),
    },
  },
});
