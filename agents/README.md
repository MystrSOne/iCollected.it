# iCollected.it — Agent playbook

This folder defines **expert lanes** (how to think, scope, validate, and hand off). It does not replace product truth: **`/prompt.md`**, **`/checklist.md`**, **`/Agent.md`** stay authoritative for vision, work tracking, and global rules.

## Read order (every substantive task)

1. `/prompt.md` — product, stack, architecture rules  
2. `/checklist.md` — find or add the task; note the **section number** (see index below)  
3. `/Agent.md` — operating rules, modularity, scanner/entitlements/design constraints  
4. `/agents/README.md` (this file) — pick **primary** and **supporting** agents  
5. One or more `/agents/<Role>.md` files for the lanes you will touch  

If routing is unclear: **Product Architect first**, then narrow to specialists.

## Primary vs supporting

- **Primary agent**: owns the change, checklist updates for that area, and final quality for that lane.  
- **Supporting agents**: read their file for constraints only; do not let a supporting lane silently override the primary contract (resolve conflicts via Product Architect + `prompt.md`).

For multi-area work: read all relevant role files → declare primary + supporting in your first response or PR description → one coherent change set.

## Quick routing (task → start here)

| Task theme | Primary role file |
|------------|-------------------|
| MVP scope, roadmap, retention, “should we build X”, do-not-build | `ProductArchitect.md` |
| Flows, onboarding, screen behavior, copy tone, empty/loading feel | `UIUX.md` |
| Colors, type, spacing, tokens, themes, a11y, shared visual primitives | `DesignSystem.md` |
| Expo RN, TS, navigation, screens, app structure, platform behavior | `FrontendEngineering.md` |
| Firebase Auth, Firestore, Storage, App Check, indexes, Cloud Functions plan | `BackendFirebase.md` |
| Schemas, relationships, counters, feeds, events, ownership, query shape | `DataModel.md` |
| Scanner / recognition / verification / `ItemDraft` pipeline | `ScannerRecognition.md` |
| Paywalls, tiers, entitlement keys, capability gating (not billing UI only) | `EntitlementsMonetization.md` |
| Test plans, regressions, bug reports, release readiness, a11y QA | `QATesting.md` |
| Images, pagination, caching, bundle size, Firestore read/cost risk | `Performance.md` |
| Rules review, abuse, privacy, spoofing, server-side enforcement gaps | `Security.md` |

## Example prompts → primary (+ typical support)

Use this table to pick lanes fast; adjust if the user narrows scope.

| User prompt (examples) | Primary | Often also read |
|------------------------|---------|------------------|
| “Should we add marketplace in MVP?” | ProductArchitect | Security |
| “Onboarding feels slow / form-like” | UIUX | ProductArchitect |
| “Add paywall for AI recognition later” | EntitlementsMonetization | ProductArchitect, ScannerRecognition |
| “Define `FeedEvent` and counters” | DataModel | BackendFirebase, Performance |
| “Firestore rules for comments” | Security | DataModel, BackendFirebase |
| “Image thumbnails + lazy grid” | Performance | DesignSystem, BackendFirebase (Storage) |
| “Wire home feed pagination” | FrontendEngineering | Performance, DataModel |
| “Barcode scan → item draft” | ScannerRecognition | DataModel, Items checklist §12 |
| “Centralize premium checks” | EntitlementsMonetization | FrontendEngineering, Security |
| “Achievement granted on first item” | DataModel (+ feature work) | Security, BackendFirebase |
| “Token for card radius / shadow” | DesignSystem | UIUX |

## Checklist index (`/checklist.md`)

Use these **section numbers** when pointing agents at work (mirrors `## N.` headings).

| § | Title |
|---|--------|
| 1 | Source of Truth |
| 2 | Project Setup |
| 3 | Core Architecture |
| 4 | App Map |
| 5 | Design System |
| 6 | Shared Components |
| 7 | Firebase Foundation |
| 8 | Auth Feature |
| 9 | Onboarding Feature |
| 10 | Profile Feature |
| 11 | Collections Feature |
| 12 | Items Feature |
| 13 | Scanner Module |
| 14 | Recognition Module |
| 15 | Verification Module |
| 16 | Achievements Module |
| 17 | Entitlements Module |
| 18 | Subscriptions Module |
| 19 | Social Feature |
| 20 | Feed Feature |
| 21 | Explore Feature |
| 22 | Firestore Data Models |
| 23 | Storage |
| 24 | Security |
| 25 | Performance |
| 26 | UX Wireframes |
| 27 | Core UX Validation |
| 28 | Future Paid Features |
| 29 | Testing |
| 30 | Definition of Done |
| 31 | Explicit Do Not Build Yet |

## Handoffs (who consumes what)

Order is logical, not strict time order.

1. **ProductArchitect** — scope and sequencing; flags checklist §31 risks.  
2. **DataModel** — contracts in `/src/docs/DATA_MODEL.md` (when it exists), types, relationships, counter/feed notes.  
3. **BackendFirebase** — services, paths, indexes, emulator; implements **against** Data Model contracts.  
4. **Security** — rules and enforcement review; may **block** release until Data Model + Backend alignment is clear.  
5. **UIUX** + **DesignSystem** — flows and tokens; UIUX leads copy/structure, DesignSystem leads measurable visuals.  
6. **FrontendEngineering** — screens compose services + tokens; **no** direct Firebase in screens.  
7. **ScannerRecognition** — produces **`ItemDraft`** only; does not own final item persistence.  
8. **EntitlementsMonetization** — defines keys and capability pipe; Security + Backend validate server truth.  
9. **Performance** — reviews hot paths after Data Model query shapes exist.  
10. **QATesting** — verifies acceptance + §30 Definition of Done; files gaps in §29.

**Rule of thumb**: ambiguous ownership of *shape of data* → **DataModel** first. Ambiguous *who may read/write* → **Security** + DataModel. Ambiguous *product intent* → **ProductArchitect**.

## Efficiency habits

- State **primary agent** and **checklist §** in the first planning message.  
- Touch **one checklist section** as primary when possible; split PRs if scope explodes.  
- After work: update **`checklist.md`** and any **`/src/docs/*`** owned by the task.  
- Do not duplicate long policy text across role files; **`Agent.md`** and **`prompt.md`** stay canonical for global rules.

## Role file index

| File | Role |
|------|------|
| `ProductArchitect.md` | Vision, scope, sequencing, anti-drift |
| `UIUX.md` | Flows, UX language, screen-level behavior |
| `DesignSystem.md` | Tokens, themes, visual primitives |
| `FrontendEngineering.md` | App structure, RN/TS, navigation, composition |
| `BackendFirebase.md` | Firebase services, infra, cost-aware access |
| `DataModel.md` | Contracts, Firestore shapes, events, counters |
| `ScannerRecognition.md` | Scan → result → `ItemDraft`; careful claims |
| `EntitlementsMonetization.md` | Paid capability architecture |
| `QATesting.md` | Verification, regressions, release readiness |
| `Performance.md` | Speed, images, pagination, Firebase reads |
| `Security.md` | Rules, abuse, privacy, enforcement |

Each `*.md` in this folder includes **checklist map**, **before you start**, **done means**, **handoffs**, and **example tasks** for that lane.
