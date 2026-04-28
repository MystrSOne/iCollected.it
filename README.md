# iCollected.it

**Repository:** [github.com/MystrSOne/iCollected.it](https://github.com/MystrSOne/iCollected.it)

Mobile-first social platform for collectors. The repo includes **Expo + TypeScript** app code under `src/`, **product/agent docs** at the root, and **`checklist.md`** for phased work (see current **Phase** there).

## Where to start

| Audience | Start here |
|----------|------------|
| Cursor / coding agents | `AGENTS.md` → `Agent.md` → `agents/README.md` |
| Product + architecture rules | `prompt.md` |
| Work status | `checklist.md` |

## Key paths

- `prompt.md` — vision, MVP, stack, non-negotiables  
- `checklist.md` — phased tasks  
- `Agent.md` — how to work in this repo (modularity, Firebase, entitlements, scanner pipeline)  
- `agents/README.md` — lane routing and handoffs between expert roles  
- `agents/*.md` — per-role checklists and constraints  
- `.cursor/rules/icollected-agents.mdc` — workspace reminder for agents  

### Implementation docs (`src/docs/`)

- `src/docs/ARCHITECTURE.md` — stack, folders, modularity, open decisions  
- `src/docs/DATA_MODEL.md` — entities, ownership, indexes (stubs; grow with code)  
- `src/docs/DESIGN_SYSTEM.md` — visual principles and token plan  
- `src/docs/UX_WIREFRAMES.md` — screen inventory and UX intent  

## Development

```bash
npm install
npm run typecheck   # TypeScript
npm start           # Expo dev server
npm run ios:go      # iOS simulator with Expo Go (quickest)
npm run android:go  # Android with Expo Go
npm run ios:build   # Build & install dev client (Xcode); use when you need expo-dev-client
npm run web         # Web — Metro
```

- **Env:** copy [`.env.example`](.env.example) to `.env` and set `EXPO_PUBLIC_*` only (no secrets).
- **Why `src/shell` not `src/app`:** Expo treats a folder named `app` as **Expo Router**; this app uses React Navigation in `src/shell/`.
- **Metro “Cannot find module babel-preset-expo”:** `babel-preset-expo` must be a direct dependency (installed via `npx expo install babel-preset-expo`).
- **iOS “no development build”:** use `npm run ios:go` or run `npm run ios:build` once to install the dev client (`it.icollected.app`).
- **Android SDK / `adb`:** install Android Studio, then `export ANDROID_HOME=$HOME/Library/Android/sdk` (macOS default).
- **Native dev builds:** `expo run:ios` / `expo run:android` generate `ios/` / `android/` (gitignored here unless you commit them).
