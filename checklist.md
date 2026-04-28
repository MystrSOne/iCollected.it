# iCollected.it Master Checklist

## Status

Phase: Foundation

Current priority:

- establish source-of-truth docs
- create modular Expo React Native + TypeScript foundation
- protect the product direction
- prepare future scanner, recognition, verification, achievements, and paywall architecture

Rule:

Every new task must be added here.
Completed tasks must be checked off.
No major work should happen outside this checklist.

---

## 1. Source of Truth

- [x] Create `/prompt.md`
- [x] Create `/checklist.md`
- [x] Create `/Agent.md`
- [x] Create `/agents`
- [x] Create `/agents/ProductArchitect.md`
- [x] Create `/agents/UIUX.md`
- [x] Create `/agents/DesignSystem.md`
- [x] Create `/agents/FrontendEngineering.md`
- [x] Create `/agents/BackendFirebase.md`
- [x] Create `/agents/DataModel.md`
- [x] Create `/agents/ScannerRecognition.md`
- [x] Create `/agents/EntitlementsMonetization.md`
- [x] Create `/agents/QATesting.md`
- [x] Create `/agents/Performance.md`
- [x] Create `/agents/Security.md`
- [x] Add automatic agent routing rules to `/Agent.md`
- [x] Create `/agents/README.md` (lane routing, checklist § index, handoffs)
- [x] Add `.cursor/rules/icollected-agents.mdc` (read playbook before substantive work)
- [x] Add `/AGENTS.md` (Cursor/agent entry pointer to `Agent.md`)
- [x] Add `/.cursorignore` (exclude deps/builds from indexing when present)
- [x] Add `/README.md` (human + agent entry, links to truth files)
- [x] Create `/src/docs/ARCHITECTURE.md`
- [x] Create `/src/docs/DATA_MODEL.md`
- [x] Create `/src/docs/DESIGN_SYSTEM.md`
- [x] Create `/src/docs/UX_WIREFRAMES.md`
- [x] Confirm Cursor reads these docs before implementation tasks (process: `AGENTS.md` + `Agent.md` + `.cursor/rules/icollected-agents.mdc`; task-area: read relevant `/src/docs/*.md` once `src/` exists)

---

## 2. Project Setup

- [ ] Initialize Expo React Native project
- [ ] Configure TypeScript
- [ ] Install Firebase SDK
- [ ] Install navigation dependencies
- [ ] Install Expo development build support
- [ ] Confirm project runs on iOS simulator/device
- [ ] Confirm project runs on Android simulator/device
- [ ] Confirm web build path is understood
- [ ] Configure environment variable strategy
- [ ] Confirm no secrets are committed

---

## 3. Core Architecture

- [ ] Create `/src/app`
- [ ] Create `/src/app/app.map.ts`
- [ ] Create `/src/app/navigation.registry.ts`
- [ ] Create `/src/app/providers.tsx`
- [ ] Create `/src/app/platform.registry.ts`
- [ ] Create `/src/config`
- [ ] Create `/src/design`
- [ ] Create `/src/features`
- [ ] Create `/src/shared`
- [ ] Create `/src/firebase`
- [x] Create `/src/docs`
- [ ] Define import alias strategy
- [ ] Document architecture in `/src/docs/ARCHITECTURE.md`

---

## 4. App Map

- [ ] Define auth module location
- [ ] Define onboarding module location
- [ ] Define profile module location
- [ ] Define collections module location
- [ ] Define items module location
- [ ] Define scanner module location
- [ ] Define recognition module location
- [ ] Define verification module location
- [ ] Define achievements module location
- [ ] Define entitlements module location
- [ ] Define subscriptions module location
- [ ] Define feed module location
- [ ] Define social module location
- [ ] Define explore module location
- [ ] Define shared components location
- [ ] Define Firebase services location
- [ ] Define design system location

---

## 5. Design System

- [ ] Create `/src/design/colors.ts`
- [ ] Create `/src/design/typography.ts`
- [ ] Create `/src/design/spacing.ts`
- [ ] Create `/src/design/radius.ts`
- [ ] Create `/src/design/shadows.ts`
- [ ] Create `/src/design/themes.ts`
- [ ] Create `/src/design/tokens.ts`
- [ ] Create `/src/design/index.ts`
- [ ] Define warm off-white background
- [ ] Define ink/near-black text
- [ ] Define muted text
- [ ] Define subtle line/border colors
- [ ] Define primary accent
- [ ] Define typography variants
- [ ] Define spacing scale
- [ ] Define radius scale
- [ ] Confirm no hardcoded colors
- [ ] Confirm no random spacing values
- [ ] Confirm light mode support
- [ ] Confirm dark mode readiness
- [ ] Document design system in `/src/docs/DESIGN_SYSTEM.md`

---

## 6. Shared Components

- [ ] Create `/src/shared/components/AppScreen.tsx`
- [ ] Create `/src/shared/components/AppText.tsx`
- [ ] Create `/src/shared/components/AppButton.tsx`
- [ ] Create `/src/shared/components/AppInput.tsx`
- [ ] Create `/src/shared/components/AppCard.tsx`
- [ ] Create `/src/shared/components/AppImage.tsx`
- [ ] Create `/src/shared/components/AppDivider.tsx`
- [ ] Create `/src/shared/components/AppHeader.tsx`
- [ ] Create `/src/shared/components/EmptyState.tsx`
- [ ] Create `/src/shared/components/LoadingState.tsx`
- [ ] Create shared component barrel exports
- [ ] Ensure all shared components use design tokens
- [ ] Ensure shared components are platform-safe

---

## 7. Firebase Foundation

- [ ] Create Firebase project
- [ ] Configure Firebase Auth
- [ ] Configure Firestore
- [ ] Configure Firebase Storage
- [ ] Configure Firebase App Check
- [ ] Create `/src/config/firebase.config.ts`
- [ ] Create `/src/config/env.config.ts`
- [ ] Create `/src/firebase/auth.ts`
- [ ] Create `/src/firebase/firestore.ts`
- [ ] Create `/src/firebase/storage.ts`
- [ ] Create `/src/firebase/functions.ts`
- [ ] Define emulator strategy
- [ ] Define security rules strategy
- [ ] Confirm Firebase calls stay out of screens

---

## 8. Auth Feature

- [ ] Create `/src/features/auth`
- [ ] Create auth types
- [ ] Create auth service layer
- [ ] Add Apple login
- [ ] Add Google login
- [ ] Add email/password login
- [ ] Add signup flow
- [ ] Add logout
- [ ] Add auth state listener
- [ ] Add profile setup handoff
- [ ] Add auth screens
- [ ] Test auth flows

---

## 9. Onboarding Feature

- [ ] Create `/src/features/onboarding`
- [ ] Create onboarding types
- [ ] Build opening statement screen
- [ ] Build interests screen
- [ ] Build create first collection screen
- [ ] Build add first item screen
- [ ] Build onboarding completion handoff
- [ ] Ensure first item flow is camera-first
- [ ] Ensure onboarding can be completed quickly

---

## 10. Profile Feature

- [ ] Create `/src/features/profile`
- [ ] Define `UserProfile` type
- [ ] Create profile service layer
- [ ] Build profile screen
- [ ] Add avatar display
- [ ] Add username
- [ ] Add bio
- [ ] Add collection grid
- [ ] Add item count
- [ ] Add collection count
- [ ] Add accomplishments area
- [ ] Add profile edit flow
- [ ] Avoid vanity dashboard feel

---

## 11. Collections Feature

- [ ] Create `/src/features/collections`
- [ ] Define `Collection` type
- [ ] Create collection service layer
- [ ] Build collection grid
- [ ] Build collection card
- [ ] Build create collection flow
- [ ] Build edit collection flow
- [ ] Add collection cover
- [ ] Add category
- [ ] Add item count
- [ ] Add optional set/completion target
- [ ] Add completion progress
- [ ] Add follow collection action
- [ ] Ensure collections are primary navigation objects

---

## 12. Items Feature

- [ ] Create `/src/features/items`
- [ ] Define `Item` type
- [ ] Define `ItemDraft` type
- [ ] Create item service layer
- [ ] Build item card
- [ ] Build item grid
- [ ] Build item detail screen
- [ ] Build add item flow
- [ ] Add camera-first capture
- [ ] Add gallery upload
- [ ] Assign item to collection
- [ ] Add optional name
- [ ] Add optional note
- [ ] Add optional rarity
- [ ] Add collected date
- [ ] Add image upload
- [ ] Ensure item creation can accept scanner output later

---

## 13. Scanner Module

Future upgrade architecture. Do not overbuild in MVP.

- [ ] Create placeholder `/src/features/scanner`
- [ ] Define `ScannerInput`
- [ ] Define `ScannerResult`
- [ ] Define `ScannerEngine`
- [ ] Define barcode scanner adapter interface
- [ ] Define photo scanner adapter interface
- [ ] Define NFC scanner adapter interface placeholder
- [ ] Ensure scanner outputs can become `ItemDraft`
- [ ] Ensure scanner is separate from Add Item flow
- [ ] Document scanner architecture

---

## 14. Recognition Module

Future paid upgrade architecture. Do not overbuild in MVP.

- [ ] Create placeholder `/src/features/recognition`
- [ ] Define `RecognitionInput`
- [ ] Define `RecognitionResult`
- [ ] Define confidence model
- [ ] Define suggested item model
- [ ] Define AI recognition service interface
- [ ] Ensure recognition returns suggestions, not final items
- [ ] Ensure recognition can be paywalled
- [ ] Document recognition architecture

---

## 15. Verification Module

Future paid upgrade architecture. Do not overbuild in MVP.

- [ ] Create placeholder `/src/features/verification`
- [ ] Define `VerificationStatus`
- [ ] Define `VerificationSignal`
- [ ] Define verification confidence model
- [ ] Define community review placeholder
- [ ] Define expert review placeholder
- [ ] Ensure language avoids false authenticity claims
- [ ] Ensure verification can be paywalled
- [ ] Document verification architecture

---

## 16. Achievements Module

Recognition is core retention.

- [ ] Create `/src/features/achievements`
- [ ] Define `Achievement`
- [ ] Define `Badge`
- [ ] Define `AchievementEvent`
- [ ] Define achievement trigger interface
- [ ] Define first item achievement
- [ ] Define first collection achievement
- [ ] Define set started achievement
- [ ] Define set completed achievement
- [ ] Define item count milestones
- [ ] Define social recognition milestones
- [ ] Ensure achievements are separate from profile logic
- [ ] Ensure advanced achievements can be paywalled later

---

## 17. Entitlements Module

Required for future paid upgrades.

- [ ] Create placeholder `/src/features/entitlements`
- [ ] Define `Entitlement`
- [ ] Define `EntitlementKey`
- [ ] Define free capability flags
- [ ] Define premium capability flags
- [ ] Define entitlement checking service
- [ ] Define paywall decision helper
- [ ] Ensure paid feature checks are centralized
- [ ] Ensure screens do not contain scattered paywall logic

---

## 18. Subscriptions Module

Future monetization architecture. Do not overbuild in MVP.

- [ ] Create placeholder `/src/features/subscriptions`
- [ ] Define `SubscriptionTier`
- [ ] Define free tier
- [ ] Define premium tier placeholder
- [ ] Define future billing provider interface
- [ ] Define subscription status model
- [ ] Connect subscription status to entitlements conceptually
- [ ] Document future paid upgrade model

---

## 19. Social Feature

- [ ] Create `/src/features/social`
- [ ] Define `Follow`
- [ ] Define `Like`
- [ ] Define `Comment`
- [ ] Create follow service
- [ ] Create like service
- [ ] Create comment service
- [ ] Build follow user action
- [ ] Build follow collection action
- [ ] Build like item action
- [ ] Build comment action
- [ ] Build comment list
- [ ] Ensure social interactions can trigger achievements

---

## 20. Feed Feature

- [ ] Create `/src/features/feed`
- [ ] Define `FeedEvent`
- [ ] Build feed service
- [ ] Build home feed screen
- [ ] Build new pickup card
- [ ] Show recent items from followed users
- [ ] Show recent items from followed collections
- [ ] Add pagination
- [ ] Avoid loud algorithmic feel
- [ ] Ensure feed feels like a living archive

---

## 21. Explore Feature

- [ ] Create `/src/features/explore`
- [ ] Build explore screen
- [ ] Add trending collections
- [ ] Add recent items
- [ ] Add category discovery
- [ ] Add collectors to follow
- [ ] Ensure discovery feels like finding, not shopping

---

## 22. Firestore Data Models

- [ ] Define `User`
- [ ] Define `UserProfile`
- [ ] Define `Collection`
- [ ] Define `Item`
- [ ] Define `ItemDraft`
- [ ] Define `Follow`
- [ ] Define `Like`
- [ ] Define `Comment`
- [ ] Define `FeedEvent`
- [ ] Define `Achievement`
- [ ] Define `Badge`
- [ ] Define `Entitlement`
- [ ] Define `SubscriptionTier`
- [ ] Define `ScannerResult`
- [ ] Define `RecognitionResult`
- [ ] Define `VerificationSignal`
- [ ] Document relationships in `/src/docs/DATA_MODEL.md`
- [ ] Identify required indexes
- [ ] Identify counter strategy
- [ ] Confirm no expensive query patterns

---

## 23. Storage

- [ ] Define avatar image path structure
- [ ] Define collection cover path structure
- [ ] Define item image path structure
- [ ] Define scanner image path strategy
- [ ] Define image compression plan
- [ ] Define thumbnail strategy
- [ ] Define delete/cleanup behavior
- [ ] Write Storage security rules

---

## 24. Security

- [ ] Write Firestore security rules
- [ ] Write Storage security rules
- [ ] Validate user-owned write behavior
- [ ] Validate public profile reads
- [ ] Validate collection reads
- [ ] Validate item reads
- [ ] Validate comments writes
- [ ] Validate likes writes
- [ ] Validate follow writes
- [ ] Validate achievements cannot be spoofed by clients
- [ ] Validate entitlement checks cannot be trusted only on client
- [ ] Document security model

---

## 25. Performance

- [ ] Add image compression
- [ ] Add thumbnails
- [ ] Add lazy loading
- [ ] Add feed pagination
- [ ] Add collection grid pagination
- [ ] Cache profile data
- [ ] Cache collection previews
- [ ] Minimize Firestore reads
- [ ] Track high-cost queries
- [ ] Review Firebase cost risk

---

## 26. UX Wireframes

- [ ] Onboarding statement screen
- [ ] Login screen
- [ ] Signup screen
- [ ] Interest selection screen
- [ ] Create first collection screen
- [ ] Add first item screen
- [ ] Home feed screen
- [ ] Profile screen
- [ ] Collection screen
- [ ] Item detail screen
- [ ] Add item screen
- [ ] Explore screen
- [ ] Achievements view
- [ ] Settings screen
- [ ] Paywall placeholder screen
- [ ] Document wireframes in `/src/docs/UX_WIREFRAMES.md`

---

## 27. Core UX Validation

- [ ] Add item flow can be completed in under 5 seconds
- [ ] Camera-first flow works
- [ ] Minimal required fields
- [ ] Collections are primary
- [ ] Items clearly belong to collections
- [ ] Profile feels like a home
- [ ] Achievements feel meaningful
- [ ] Badges do not feel arcade-like
- [ ] UI feels quiet and intentional
- [ ] No marketplace behavior appears in MVP
- [ ] No spreadsheet-style screens
- [ ] No dashboard-heavy screens

---

## 28. Future Paid Features

Architect only unless explicitly requested.

- [ ] Advanced barcode scanning
- [ ] AI item recognition
- [ ] Pin/set recognition
- [ ] Authenticity/fake verification signals
- [ ] NFC scanning
- [ ] AR display cases
- [ ] Advanced achievements and badges
- [ ] Premium profile customization
- [ ] Advanced collection analytics
- [ ] Boosted collection visibility
- [ ] Premium collection layouts
- [ ] Sponsored category placements

---

## 29. Testing

- [ ] TypeScript passes
- [ ] Lint passes
- [ ] Auth flows tested
- [ ] Onboarding tested
- [ ] Create collection tested
- [ ] Add item tested
- [ ] Image upload tested
- [ ] Follow user tested
- [ ] Follow collection tested
- [ ] Like item tested
- [ ] Comment tested
- [ ] Feed load tested
- [ ] Collection progress tested
- [ ] Achievement trigger tested
- [ ] Entitlement helper tested
- [ ] Security rules tested
- [ ] Poor connection behavior tested

---

## 30. Definition of Done

A task is complete only when:

- [ ] Code works
- [ ] TypeScript passes
- [ ] Relevant UI uses design tokens
- [ ] No hardcoded visual values were introduced
- [ ] Firebase access is routed through service layers
- [ ] Business logic stays out of screens
- [ ] Relevant docs are updated
- [ ] `checklist.md` is updated
- [ ] Feature is tested
- [ ] No new architecture drift was introduced

---

## 31. Explicit Do Not Build Yet

Do not build these until requested:

- [ ] Marketplace
- [ ] Payments between users
- [ ] Trading system
- [ ] Full authenticity guarantee
- [ ] Public valuation engine
- [ ] Complex leaderboards
- [ ] Heavy marketplace-style pricing UI

These may be discussed or architected, but they are not MVP features.
