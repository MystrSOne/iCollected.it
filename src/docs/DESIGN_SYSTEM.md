# Design system — iCollected.it

**Status:** Stub — token files under `/src/design` do not exist yet; fill as the Design System agent implements [`/checklist.md`](/checklist.md) **§5**.

**Owner:** Design System agent ([`/agents/DesignSystem.md`](/agents/DesignSystem.md)). UX tone and hierarchy: [`/agents/UIUX.md`](/agents/UIUX.md).

**Related truth:** [`/prompt.md`](/prompt.md) **Visual Direction** and **Brand Language**; [`/Agent.md`](/Agent.md) (no hardcoded colors, spacing, typography in UI).

---

## Principles

From product spec — UI should feel like:

- a notebook, museum tag, personal archive, collection label — **not** a trading floor, dashboard, or marketplace.

Directional keywords: quiet, premium, warm neutrals, strong typography, minimal chrome, subtle recognition moments.

## Token layout (planned)

When implemented, centralize in:

- `/src/design/colors.ts`
- `/src/design/typography.ts`
- `/src/design/spacing.ts`
- `/src/design/radius.ts`
- `/src/design/shadows.ts`
- `/src/design/themes.ts`
- `/src/design/tokens.ts`
- `/src/design/index.ts`

## Naming conventions (TBD)

- Prefer **semantic** token names (`surfaceArchive`, `textInk`) over raw color names in components.
- Document **light** theme first; keep **dark** slots ready per checklist **§5**.

## Accessibility (TBD)

- Contrast targets for text and interactive elements.
- Focus and hit-area guidance for shared primitives.

## Exceptions

If a ship-blocking exception needs a one-off value, document it here with **owner**, **reason**, and **deadline** to tokenize.

Update this file whenever the visual system or token contract changes.
