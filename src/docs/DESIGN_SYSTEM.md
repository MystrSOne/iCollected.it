# Design system — iCollected.it

**Status:** Living — token files implemented under [`src/design/`](/src/design/); extend with ThemeProvider and a11y audits as UI grows.

**Owner:** Design System agent ([`/agents/DesignSystem.md`](/agents/DesignSystem.md)). UX tone: [`/agents/UIUX.md`](/agents/UIUX.md).

**Related truth:** [`/prompt.md`](/prompt.md) **Visual Direction** and **Brand Language**; [`/Agent.md`](/Agent.md) (no ad-hoc colors, spacing, or typography in feature UI).

---

## Principles

- Quiet, premium, **warm neutrals**, strong typography, minimal chrome.
- Feels like a **personal archive** — not a dashboard, marketplace, or trading UI.
- All feature screens consume **`tokens`** (or `lightTheme` / `darkTheme`) from [`src/design`](/src/design) — not raw hex in `src/features`.

---

## File layout (implemented)

| File | Role |
|------|------|
| [`colors.ts`](/src/design/colors.ts) | `colors` (light), `colorsDark` — surface, text, border, accent, `danger` |
| [`typography.ts`](/src/design/typography.ts) | `title`, `titleLarge`, `body`, `bodySmall`, `caption` |
| [`spacing.ts`](/src/design/spacing.ts) | `xs`–`xxl` scale |
| [`radius.ts`](/src/design/radius.ts) | `sm`, `md`, `lg`, `full` |
| [`shadows.ts`](/src/design/shadows.ts) | `none`, `card` (uses semantic shadow from text token opacity) |
| [`themes.ts`](/src/design/themes.ts) | `lightTheme`, `darkTheme` — composed objects |
| [`tokens.ts`](/src/design/tokens.ts) | `tokens` = default **light** bundle for imports |
| [`index.ts`](/src/design/index.ts) | Barrel exports |

## Usage

```ts
import { tokens, typography, colors } from '@/design';
```

- Prefer **`tokens`** in `StyleSheet.create` so spacing, type, and colors stay aligned.
- **`darkTheme`** is available for a future `ThemeProvider` + `useColorScheme` hook; screens are not yet forced dark.

## Semantic naming

Roles are semantic (`surface`, `textPrimary`, `accent`) rather than literal color names (`green500`). Add new roles in `colors.ts` + both light/dark maps when needed.

## Light / dark

- **Light:** default `tokens` / `lightTheme`.
- **Dark:** `darkTheme` mirrors the same role keys with dark values — keep keys in sync when adding roles.

## Shared components

Primitives live in [`src/shared/components`](/src/shared/components) and are re-exported from [`index.ts`](/src/shared/components/index.ts). **Prefer these over raw React Native** (`Text`, ad-hoc `TextInput` styling, undifferentiated `View` cards) in feature screens so spacing, type, and color stay on the token system.

| Export | Role |
|--------|------|
| `AppScreen` | Screen wrapper / safe area |
| `AppText` | Token typography + muted |
| `AppButton` | Primary / ghost actions |
| `AppInput` | Labeled `TextInput` with error border (`tokens.colors.danger`) |
| `AppCard` | Elevated surface + optional `onPress` |
| `AppImage` | `Image` with default `resizeMode="cover"` and optional `rounded`; upgrade to `expo-image` later if you need caching / blur placeholders |
| `AppDivider` | Hairline rule using `borderSubtle` |
| `AppHeader` | In-screen row chrome (not the stack header) |
| `EmptyState` | Centered title + message + optional action |
| `LoadingState` | Centered `ActivityIndicator` + optional message |

## Accessibility (next)

- Verify contrast for `textPrimary` / `textMuted` on `surface` (WCAG AA) when type scales finalize.
- Shared primitives (`AppText`, `AppButton`, …) should expose minimum hit areas (44pt) where interactive.

## Exceptions

Document one-offs here with owner, reason, and deadline to tokenize.

Update this file when tokens or usage rules change.
