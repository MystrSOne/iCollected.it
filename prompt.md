# iCollected.it Master Prompt

## Project

iCollected.it is a mobile-first social platform for collectors.

The product is built around one simple human sentence:

**I collected it.**

This is not a marketplace.
This is not an inventory tool.
This is not a spreadsheet.

This is a personal, visual, social record of what people have collected over time.

The product must make collectors feel like they have a home: a place where their collections live, grow, earn recognition, and connect them with people who understand why those things matter.

## The Why

Collectors need a place to exist.

Not just a place to track what they own, but a place to:

- show what they found
- preserve what mattered
- complete sets
- build reputation
- earn recognition
- discover what is missing
- follow other collectors
- feel known for what they collect

The emotional center of the app is:

**This mattered enough for me to keep it.**

The product loop is:

1. User finds something.
2. User collects it.
3. User adds it to a collection.
4. User receives recognition.
5. User progresses toward sets, badges, and accomplishments.
6. User discovers more.
7. User returns.

## Core Positioning

iCollected.it is a social identity platform for collectors.

Instagram is post-first.
Inventory apps are item-first.
iCollected.it is collection-first.

Collections are not folders. They are identity, memory, progress, and reputation.

## Non-Negotiable Product Principles

1. The app must feel like a personal archive, not a tool.
2. Collections are the primary unit, not posts.
3. Items belong inside collections.
4. Posting must be fast, ideally under 5 seconds.
5. The experience must be camera-first.
6. Required inputs must be minimal.
7. Identity and ownership are central.
8. Recognition, badges, accomplishments, and set completion are core retention mechanics.
9. No marketplace features in early versions.
10. UI must be quiet, minimal, intentional, and beautiful.
11. No clutter, no noise, no marketplace energy.
12. Future upgrades must be plug-in capabilities, not rewrites.

## Brand Language

Use natural human phrases:

- I collected it.
- I collected this.
- What did you collect?
- Collect it.
- Show it.
- My collection
- What I collected
- Set completed
- First find
- People are noticing

Avoid tool/database language:

- Create item
- Upload asset
- Inventory entry
- Submit record
- Database object
- SKU

## Visual Direction

The UI must feel like:

- a notebook
- a museum tag
- a personal record
- an archive
- a collection label
- something written down because it mattered

The UI must not feel like:

- a trading platform
- a dashboard
- inventory software
- a marketplace
- a loud social media clone
- a game arcade

Design should be quiet and premium:

- visual-first
- warm neutrals
- strong typography
- reusable cards
- minimal chrome
- thoughtful spacing
- subtle recognition moments

## Platform Strategy

Build for:

1. iOS
2. Android
3. Web
4. Later expanded app ecosystem

The mobile app is for collecting, scanning, posting, and engagement.
The web app is for sharing, browsing, public profiles, public collections, SEO, and later richer collection management.

## Technical Stack

Frontend:

- Expo React Native
- TypeScript
- Expo development builds, not Expo Go as the long-term ceiling

Backend:

- Firebase Auth
- Firestore
- Firebase Storage
- Cloud Functions later
- Firebase Cloud Messaging later
- Firebase App Check

Authentication:

- Apple
- Google
- Email/password

## Expo Strategy

Expo is acceptable only if the app is structured for production-grade native capability.

Use Expo React Native with development builds so the project can support future native capabilities, including:

- barcode scanning
- advanced camera workflows
- AI item recognition
- pin and set recognition
- authenticity/fake verification signals
- NFC
- AR display cases
- custom native modules

Do not assume Expo Go is the final environment.

## Architecture Rules

Modularity is imperative.

The app must be built so future capabilities can be added, removed, replaced, or paywalled without rewriting core flows.

Rules:

1. Every feature must be compartmentalized.
2. No hardcoded colors, spacing, typography, routes, labels, or config values.
3. All styling must come from centralized design tokens.
4. Firebase logic must live in service layers.
5. Screens consume module outputs. Screens do not own business logic.
6. Shared components must be reusable.
7. Every module must define inputs, outputs, and dependencies.
8. Future upgrades must sit behind interfaces/services.
9. Paywall logic must be centralized through entitlements.
10. No feature should be tightly coupled to another feature unless required.

Core rule:

**Future upgrades must be plug-in capabilities, not rewrites.**

## Agent Role Requirement

Each major system must be handled through a specific expert role.

Each role represents a world-class expert with 35+ years of experience in that field.

Agents must operate inside their responsibility lane, validate before acting, document decisions, and update `/checklist.md`.

Required expert lanes:

- Product Architect Agent
- UI/UX Agent
- Design System Agent
- Frontend Engineering Agent
- Backend / Firebase Agent
- Data Model Agent
- Scanner / Recognition Agent
- Entitlements / Monetization Agent
- QA / Testing Agent
- Performance Agent
- Security Agent

These roles do not replace the source-of-truth files. They exist to make work more efficient and higher quality.

### Agent playbook (process)

For **lane routing** (which expert role is primary), **supporting roles**, the **checklist section index (§1–§31)**, and **handoffs** between lanes, read **`/agents/README.md`**, then the specific **`/agents/<Role>.md`** files that apply. This is in addition to `/Agent.md`, not a replacement for `/prompt.md` or `/checklist.md`.

## Required Folder Structure

```txt
/src
  /shell
  /config
  /design
  /features
  /shared
  /firebase
  /docs
```

Use **`/src/shell`** for the app entry, providers, and navigation registry — not **`/src/app`**, because Expo treats a directory named `app` as **Expo Router** routes.

## Required Source-of-Truth Files

The project must maintain:

- `/prompt.md`
- `/checklist.md`
- `/Agent.md`
- `/AGENTS.md` (short Cursor/agent entry; points to `Agent.md` and `/agents/README.md`)
- `/src/docs/ARCHITECTURE.md`
- `/src/docs/DATA_MODEL.md`
- `/src/docs/DESIGN_SYSTEM.md`
- `/src/docs/UX_WIREFRAMES.md`

`prompt.md` defines what the product is.
`checklist.md` defines what work exists and current status.
`Agent.md` defines how Cursor/agents should work efficiently.

Before any meaningful coding task, read these files, then **`/agents/README.md`** and the relevant **`/agents/<Role>.md`** files for the task (see **Agent playbook (process)** above).

## Required App Map

Create and maintain:

```txt
/src/shell/app.map.ts
```

This file must define where major systems live:

- auth
- onboarding
- profile
- collections
- items
- scanner
- recognition
- verification
- achievements
- entitlements
- subscriptions
- feed
- social
- explore
- design system
- Firebase services
- shared components

The app map exists so there is no confusion about where functionality belongs.

## Core MVP Features

Auth:

- Apple login
- Google login
- email/password login
- signup
- onboarding

Profile:

- avatar
- username
- bio
- collection grid
- stats
- accomplishments
- featured collections later

Collections:

- create collection
- edit collection
- collection cover
- item count
- set/completion target
- completion progress
- follow collection

Items:

- add item camera-first
- optional name
- optional note
- optional rarity
- image display
- assign to collection

Social:

- follow users
- follow collections
- like items
- comment
- recognition events

Feed:

- recent items from followed users
- recent items from followed collections
- new pickup moments

Explore:

- trending collections
- recent items
- categories
- collectors to follow

Achievements:

- first item
- first collection
- set started
- set completed
- collection milestones
- social recognition
- category accomplishments

## Future Upgrade Modules

These may start as placeholders, but the architecture must anticipate them from day one:

- `/src/features/scanner`
- `/src/features/recognition`
- `/src/features/verification`
- `/src/features/achievements`
- `/src/features/entitlements`
- `/src/features/subscriptions`

Scanner, recognition, verification, achievements, and premium features must be modular capabilities.

They must not be hardwired into screens.

## Future Paid Features

The following are future upgrades and must be designed so they can sit behind a paywall:

- advanced barcode scanning
- AI item recognition
- pin/set recognition
- authenticity/fake verification signals
- NFC scanning
- AR display cases
- advanced achievements and badges
- premium profile customization
- advanced collection analytics
- boosted collection visibility
- premium collection layouts

Do not fully build these in MVP unless explicitly requested.

Do architect for them.

Paywalled features must be unlocked through `/src/features/entitlements`, not through scattered conditional checks inside screens.

## Recognition System

Recognition is core to retention.

Users should earn accomplishments and badges for meaningful collector behavior:

- adding first item
- creating first collection
- completing a set
- reaching item count milestones
- adding rare items
- consistent collecting
- receiving followers
- receiving likes/comments
- being featured
- helping identify or verify items later

Tone must be collector-native.

Avoid:

- XP language
- arcade-style gamification
- loud confetti everywhere

Prefer:

- First find
- Set started
- Set completed
- Collection growing
- Rare find
- Known collector
- People are noticing

## UX Flows

Onboarding:

1. Sign up.
2. Choose interests.
3. Create first collection.
4. Add first item.
5. Land in feed.

Add Item:

1. Open camera.
2. Capture or scan.
3. Assign to collection.
4. Optional details.
5. Collect it.

Scanner as Input:

Scanning is not the Add Item flow.
Scanning is one input method into the Add Item flow.

The model is:

```txt
ScannerInput -> ScannerEngine -> ScannerResult -> ItemDraft
```

The item flow receives an `ItemDraft` regardless of whether the source was:

- manual entry
- camera photo
- barcode scan
- AI recognition
- NFC
- future AR scan

## Data Model Direction

Core models:

- User
- Collection
- Item
- Follow
- Like
- Comment
- FeedEvent
- Achievement
- Badge
- Entitlement
- SubscriptionTier
- ScannerResult
- RecognitionResult
- VerificationSignal

Firestore must be modeled to avoid expensive query patterns.

Counters, feeds, follows, achievements, and collection progress must be designed carefully.

## Competitor Lessons

Avoid Gemr failure patterns:

- weak identity layer
- weak retention loop
- no meaningful progress
- too much inventory behavior
- marketplace drift

Avoid Mantel traps:

- trading-first energy
- sports-card-only feel
- value/market focus over meaning

Avoid iCollect Everything feel:

- software-first
- database-first
- inventory-heavy

iCollected.it must feel like:

**a home for what you collect and the people who understand why it matters.**

## Final Goal

Build a product that feels like:

**This mattered enough for me to keep it.**

Always choose:

- simplicity over complexity
- clarity over features
- meaning over mechanics
- modularity over shortcuts
- social belonging over utility alone
