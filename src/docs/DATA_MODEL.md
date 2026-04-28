# Data model — iCollected.it

**Status:** Stub — contracts and Firestore shapes are **TBD until implementation**; refine with the Data Model and Backend agents ([`/agents/DataModel.md`](/agents/DataModel.md), [`/agents/BackendFirebase.md`](/agents/BackendFirebase.md)).

**Related truth:** [`/prompt.md`](/prompt.md) **Data Model Direction** and **Core MVP Features**; [`/Agent.md`](/Agent.md) (ownership, no client-spoofed achievements).

---

## Core entities (names from product spec)

Document canonical TypeScript types and Firestore paths as you implement:

| Area | Concepts |
|------|----------|
| Identity | `User`, `UserProfile` |
| Collection-first | `Collection`, `Item`, `ItemDraft` |
| Social | `Follow`, `Like`, `Comment` |
| Feed | `FeedEvent` |
| Recognition | `Achievement`, `Badge`, `AchievementEvent` |
| Monetization | `Entitlement`, `SubscriptionTier` |
| Scanner / AI | `ScannerResult`, `RecognitionResult`, `VerificationSignal` |

## Relationships (TBD)

- How collections nest items; public vs private visibility.
- Follow graph: user ↔ user, user ↔ collection.
- How feed events are produced and consumed (fan-out vs aggregation — decide and document).

## Ownership and writes (TBD)

For each collection path, specify **who may create/update/delete** and whether **Security rules** + optional **Cloud Functions** are the source of truth.

**Hard constraint:** achievements and other trust-sensitive state must **not** be trivially spoofable from the client; align with [`/agents/Security.md`](/agents/Security.md).

## Counters and denormalization (TBD)

- Item counts on collections, follower counts, etc.
- Strategy for keeping UI fast without expensive queries.

## Indexes (TBD)

List required composite indexes (`firestore.indexes.json` or equivalent) next to each query pattern as it is implemented.

## Query patterns (TBD)

- Home feed, profile grids, explore — document expected reads per screen and pagination cursors.

Update this file whenever schema or query strategy changes; keep [`/checklist.md`](/checklist.md) **§22** in sync.
