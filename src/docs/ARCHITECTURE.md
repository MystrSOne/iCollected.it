# Architecture — iCollected.it

**Status:** Living — Expo app shell and `/src` layout are initialized; extend as Firebase and features land.

**Owners:** Frontend Engineering and Backend / Firebase agents ([`/agents/FrontendEngineering.md`](/agents/FrontendEngineering.md), [`/agents/BackendFirebase.md`](/agents/BackendFirebase.md)).

**Related truth:** [`/prompt.md`](/prompt.md) (stack, modularity), [`/Agent.md`](/Agent.md) (rules, scanner and entitlement pipelines).

---

## Stack (from product spec)

- **Client:** Expo SDK **54**, React Native **0.81**, React **19**, TypeScript **5.9** (strict). Entry: root [`index.ts`](/index.ts) → [`src/shell/App.tsx`](/src/shell/App.tsx).
- **Dev builds:** [`expo-dev-client`](https://docs.expo.dev/develop/development-builds/introduction/) + `expo-dev-client` plugin in [`app.json`](/app.json). Run `npx expo prebuild` when native projects are needed; long-term ceiling is **development builds**, not Expo Go-only.
- **Expo Router:** This project does **not** use file-based Expo Router. The directory must **not** be named `src/app` — Expo treats that as Router. Use [`src/shell/`](/src/shell/) for `App`, providers, and navigation registry.
- **Backend:** Firebase Auth, Firestore, Storage (SDK installed; bootstrap stub in [`src/firebase/index.ts`](/src/firebase/index.ts)); App Check and Cloud Functions later.

## Folder layout (implemented)

Aligned with [`/prompt.md`](/prompt.md) **Required Folder Structure** (`/src/shell` replaces the old `/src/app` name to avoid Router collision):

```txt
/src
  /shell      — App.tsx, providers, navigation.registry.tsx, app.map.ts, platform.registry.ts
  /config     — env.config.ts (EXPO_PUBLIC_* pattern)
  /design     — tokens (colors.ts starter)
  /features   — feature modules (empty)
  /shared     — shared UI (empty)
  /firebase   — Firebase bootstrap (placeholder)
  /docs       — architecture, data model, design, UX wireframes
```

## Import aliases

- **`@/*` → `./src/*`** via [`babel.config.js`](/babel.config.js) (`babel-plugin-module-resolver`) and [`tsconfig.json`](/tsconfig.json) `paths`.
- Prefer `@/design`, `@/config/...` in app code.

## Modularity (non-negotiable)

Summarized from [`/Agent.md`](/Agent.md):

- Screens stay thin; **no Firebase calls in screens** — use feature services under `/src/features/*/services` and `/src/firebase`.
- **Design:** all styling from [`/src/design`](/src/design) tokens (starter in `colors.ts`).
- **Navigation:** [`src/shell/navigation.registry.tsx`](/src/shell/navigation.registry.tsx) + [`src/shell/app.map.ts`](/src/shell/app.map.ts) for system locations.
- **Scanner:** `ScannerInput → ScannerEngine → ScannerResult → ItemDraft`; Add Item accepts `ItemDraft` only.
- **Paid capabilities:** `Feature UI → Entitlement check → Capability service → Result` — no scattered `isPremium` in screens.

## Environment and secrets

- Public env only: **`EXPO_PUBLIC_*`** read from [`src/config/env.config.ts`](/src/config/env.config.ts); list keys in [`.env.example`](/.env.example).
- Never commit `.env` or service accounts; see root [`.gitignore`](/.gitignore).

## Scripts

| Command | Purpose |
|--------|---------|
| `npm start` | Expo dev server |
| `npm run ios` / `npm run android` | Dev client + simulator (requires dev build installed — see below) |
| `npm run ios:go` / `npm run android:go` | **Expo Go** (quick iteration; no custom native modules) |
| `npm run ios:build` / `npm run android:build` | `expo run:*` — builds and installs a **development client** locally |
| `npm run web` | Web — Metro (`react-dom` + `react-native-web` required) |
| `npm run typecheck` | `tsc --noEmit` |

## Local run troubleshooting

- **iOS “No development build installed”:** Run `npm run ios:build` once (needs Xcode), or use `npm run ios:go` with Expo Go on the simulator.
- **Android `adb` / SDK:** Install [Android Studio](https://developer.android.com/studio), open SDK Manager, then set `export ANDROID_HOME=$HOME/Library/Android/sdk` (macOS default) in your shell profile.
- **Web missing deps:** `npx expo install react-dom react-native-web` (already in `package.json` after fix).

## Cursor / agent process

- [`/AGENTS.md`](/AGENTS.md), [`/Agent.md`](/Agent.md), [`/agents/README.md`](/agents/README.md), [`.cursor/rules/icollected-agents.mdc`](../../.cursor/rules/icollected-agents.mdc)
- When touching code under `src/`, read the relevant **`/src/docs/*.md`**.

## Open decisions (TBD)

- State management approach.
- Firebase emulator vs staging-only workflow.
- `npx expo prebuild` cadence for iOS/Android CI.

Update this file when native projects, Firebase, or navigation structure materially change.
