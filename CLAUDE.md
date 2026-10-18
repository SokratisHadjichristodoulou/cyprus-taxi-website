# Taxi Cyprus 24 — rules for AI agents working in this repo

Site: taxicyprus24.com (Cyprus airport transfers, Paphos-based). Stack: TanStack Start (React 19, file-based routes, SSR), Vite 7, Tailwind 4, shadcn/Radix. Locales: en (no prefix), el (/el), ru (/ru), de (/de, partial).

## Hard rules
1. PRICES ARE FROZEN. Never edit src/lib/pricing.ts or change any displayed price, "from €X" label, JSON-LD offer, FAQ price or llms.txt price. New euro figures must be copied from pricing.ts for the exact origin→destination. If a displayed price disagrees with pricing.ts, report it; do not edit it.
2. New pages are clones of existing pages (src/routes/taxi-to-coral-bay.tsx + el./ru./de. siblings; taxi-to-chloraka.tsx for inline route FAQs). Same TransferPage component, same props, same section order. No new components, CSS or colors.
3. Never push to main (it syncs to Lovable/production). Work on a `claude/…` branch, commit per logical change, leave merging to the owner.
4. No invented facts, reviews, awards, customer counts or partnerships. Unsure → generic wording and list under "Owner to verify".
5. defaultPickup/defaultDropoff passed to TransferPage/BookingForm must be the exact canonical strings from pricing.ts, in every locale.
6. Messages sent to the business (WhatsApp booking text) stay in English.
7. Never touch wrangler.jsonc or the legacy redirect routes; never delete routes.

## Adding a page — checklist
en route + el + ru (+ de when German exists for that path) → sitemap arrays (src/routes/sitemap[.]xml.ts) → Footer lists → hub relatedLinks and PriceTable linkMap → public/llms.txt → regenerate and commit src/routeTree.gen.ts.

## Before finishing any task
npm run build, npm run lint, npm run verify:prices; confirm `git diff --stat -- src/lib/pricing.ts` is empty.
