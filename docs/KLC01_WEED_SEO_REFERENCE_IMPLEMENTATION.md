# KLC01 Weed SEO Reference Implementation

Date: 2026-09-01

Branch: `codex/klc01-weed-seo-reference-pilot`

Base: `origin/main` at `5d379a09a90a5cbaf082918ab6ea7920b81c61d9`

State: feature-branch implementation complete; production not authorized or touched

## Approval and consultation

- Tri approved the exact GPT-authored KLC01 public-content package on 2026-09-01.
- The implementation gate was reviewed in the Tri-approved GPT SEO strategy thread.
- GPT verdict: `GO — safe to implement the approved package with these boundaries`.
- The accessible KLC product snapshot remains stale at 2026-06-28. Find Your Weed is static and contains no stock, price, availability, promotion, popularity or product claims.

## Implemented surface

- Protected owner: `/weed-dispensary-brampton/`
- Exact approved title, meta description and H1
- Complete approved owner-page body and H2/H3 structure
- Static Find Your Weed category discovery
- Weed/Cannabis/Bud/Flower semantic section
- Visit information, supporting guides and FAQs
- Homepage Weed bridge after Explore Categories and before Featured Strains
- Approved contextual inbound anchors from the resource hub and six resource guides
- Existing trailing-slash canonical and `index, follow` preserved

No new Weed URL, redirect, canonical/noindex change, NAP/hours/GBP change, dynamic inventory, schema expansion, overlapping-page disposition, future Weedpedia route or production deployment was made.

## Reusable-boundary findings

### Weed Owner standard

Keep one protected owner per store. The owner should combine a store-specific H1, verified local facts, Weed/Cannabis semantic coexistence, static or freshness-gated discovery, relevant supporting resources and genuine FAQs. The owner URL, page ownership and existing GSC performance must be established before implementation.

### Find Your Weed shared component

`FindYourWeed` accepts typed discovery groups and an optional guide link. The component structure is reusable; KLC labels, descriptions, routes and category membership are not. Each store packet must provide a verified route set.

### Cannabis ↔ Weed internal-link standard

Homepage and relevant resources may link contextually into the protected Weed owner. The Weed owner links outward to verified categories and resources. Anchor choice must be intentional and inspectable; brand/entity anchors are the default, while exact-match Weed anchors are limited to naturally relevant placements. Forced `weed near me` anchors are prohibited.

### FMD-backed discovery data contract

The pilot uses static navigation because inventory freshness failed. A future dynamic implementation must require exact StoreCode, source/message identifier, effective/run/verification timestamps, resolved master SKU, exact-store visibility or quantity state, status/visibility filters, a configured freshness threshold and fail-closed fallback to static navigation.

### Future Weedpedia integration

The owner page now has semantic and discovery sections that can later link to terminology, flower-type, strain-profile and category-education resources. No future route was created. New Weedpedia pages require independent value, verified facts and an ownership/cannibalization review.

### Local/use-case entry points

Existing visit, menu-map, flower-tier and 24-hour resources are the initial KLC entry points. Future neighbourhood or use-case content must be supported by verified store facts and distinct search intent; city-swapped or service-area prose is not acceptable.

### Supporting Weed category/content architecture

The owner routes into existing flower tiers and product-format categories. Supporting pages should be introduced only where the owner cannot satisfy the intent well and GSC evidence supports a separate owner. Category routes remain browsing destinations rather than copied Weed landing pages.

### Store-specific differentiation requirements

Reusable code may cover component structure, accessibility, responsive layout and data interfaces. Every store must separately supply brand voice, city/local facts, protected URL, category routes, discovery labels, useful local questions, resource inventory and approved anchors. KLC prose and route choices must never become fleet template copy.

### GSC ownership/cannibalization rules

- Segment Weed and Cannabis query families separately.
- Record query, landing page, clicks, impressions and average position.
- Preserve existing winners unless evidence supports a reviewed ownership change.
- Treat multiple ranking URLs for the same family as a review signal, not automatic cannibalization.
- Do not create, redirect, canonicalize or noindex a page without a page-ownership decision supported by current GSC evidence.
- After launch, compare owner-page, Weed-family and Cannabis-family movement while fleet packet preparation continues in parallel.

## What must never be templated

- public prose;
- store identity, NAP or hours;
- local facts, landmarks or service-area statements;
- page-owner selection;
- exact anchors;
- category availability or routes;
- inventory, price, promotion, popularity or product claims;
- GSC ownership decisions.

## QA record

### Passed

- GPT implementation gate: GO
- Clean isolated worktree created from refreshed `origin/main`
- Changed-copy Agent Content Audit: PASS
- Targeted ESLint for new owner, discovery, bridge, metadata and resource-renderer files: zero errors; one pre-existing `<img>` optimization warning remains in `ResourceView.tsx`
- `npm run build`: PASS; 185 static pages generated
- Resource route verifier: PASS; eight resource routes checked
- Owner page: HTTP 200
- All approved Find Your Weed destinations: HTTP 200
- All approved supporting resource routes: HTTP 200
- Exact metadata rendered: PASS
- Canonical: `https://kennedyloudcannabis.com/weed-dispensary-brampton/`
- Robots: `index, follow`
- Visible owner-page H1 count: one
- Desktop rendered review: PASS
- 390px mobile rendered review: PASS; no horizontal overflow
- Homepage H1 preserved as `KENNEDY LOUD CANNABIS`
- Homepage Weed bridge placement: after Explore Categories, before Featured Strains
- Seven approved inbound resource anchors: PASS
- Browser error overlay/log check: PASS; no errors detected
- `git diff --check`: PASS

### Baseline-only exceptions

- Repository-wide `npm run lint` remains red because of pre-existing errors in unrelated files including `Magnifier.tsx`, game routes, TV routes and legacy scripts. Changed implementation files pass targeted lint; those unrelated files were not edited.
- The full-store Agent Content Audit still reports one pre-existing BLOCK sentence in unchanged `app/resources/resourceData.ts` plus legacy review warnings. The required changed-copy audit passes. The unrelated legacy resource copy was deliberately left untouched because the approved pilot permits only bounded inbound-link changes.
- The prescribed `agent-browser` CLI could not be reused after its first launch because npm registry TLS validation failed. TLS protections were not bypassed. Rendered desktop/mobile QA was completed through the connected Chrome verification surface instead.

## Protected existing work

The original checkout already contained an uncommitted draft on `codex/klc01-weed-seo-pilot`. It was not modified, overwritten, staged or deleted. This implementation was created in an isolated clean worktree and a separate feature branch.

## Post-implementation handoff

Stop after feature-branch rendered QA. The SEO strategy thread should review this implementation and these boundary findings before producing `MASTER_WEED_SEO_STANDARD`. Fleet Coordinator's Competitor Content Radar remains a separate evidence lane based initially on CAFE, 6IX Dispensary and Pink House, with competitor material restricted to topic/search-intent and architecture intelligence.
