# Architecture — iCollected.it

**Status:** Stub — extend during implementation (Expo app, Firebase wiring, app shell).

**Owners:** Frontend Engineering and Backend / Firebase agents ([`/agents/FrontendEngineering.md`](/agents/FrontendEngineering.md), [`/agents/BackendFirebase.md`](/agents/BackendFirebase.md)).

**Related truth:** [`/prompt.md`](/prompt.md) (stack, modularity), [`/Agent.md`](/Agent.md) (rules, scanner and entitlement pipelines).

---

## Stack (from product spec)

- **Client:** Expo React Native, TypeScript, development builds (not Expo Go as the long-term ceiling).
- **Backend:** Firebase Auth, Firestore, Storage; App Check; Cloud Functions and FCM later.

## Target folder layout

Aligned with [`/prompt.md`](/prompt.md) **Required Folder Structure**:

```txt
/src
  /app
  /config
  /design
  /features
  /shared
  /firebase
  /docs
```

## Modularity (non-negotiable)

Summarized from [`/Agent.md`](/Agent.md):

- Screens stay thin; **no Firebase calls in screens** — use feature services under `/src/features/*/services` and `/src/firebase`.
- **Design:** all styling from `/src/design` tokens (no ad-hoc visual constants in features).
- **Navigation:** central registry + [`/src/app/app.map.ts`](/src/app/app.map.ts) (create with app shell — not present yet).
- **Scanner:** `ScannerInput → ScannerEngine → ScannerResult → ItemDraft`; Add Item accepts `ItemDraft` only.
- **Paid capabilities:** `Feature UI → Entitlement check → Capability service → Result` — no scattered `isPremium` in screens.

## Environment and secrets

- Document env var strategy here when [`/src/config/env.config.ts`](/src/config/env.config.ts) exists.
- Never commit secrets; see root [`.gitignore`](/.gitignore).

## Cursor / agent process

Process-level “read before coding” is enforced via:

- [`/AGENTS.md`](/AGENTS.md) and [`/Agent.md`](/Agent.md) read order  
- [`/agents/README.md`](/agents/README.md) for lane routing  
- [`.cursor/rules/icollected-agents.mdc`](../../.cursor/rules/icollected-agents.mdc)

Once code exists under `src/`, agents should read the relevant **`/src/docs/*.md`** for the area they touch, in addition to the root truth files.

## Open decisions (TBD)

- Import alias strategy (`@/` vs package-relative).
- State management approach (document choice here).
- Emulator vs staging workflow.

Update this file when the Expo project is initialized and the app shell lands.
