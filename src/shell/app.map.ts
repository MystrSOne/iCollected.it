/**
 * Canonical paths for every major system — single source of truth (checklist §4).
 * Import from `@/shell/app.map` or use string paths for tooling/docs only.
 */
const root = 'src';

export const appMap = {
  shell: `${root}/shell`,
  config: `${root}/config`,
  design: `${root}/design`,
  docs: `${root}/docs`,
  shared: `${root}/shared`,
  firebase: `${root}/firebase`,
  features: {
    auth: `${root}/features/auth`,
    onboarding: `${root}/features/onboarding`,
    profile: `${root}/features/profile`,
    collections: `${root}/features/collections`,
    items: `${root}/features/items`,
    scanner: `${root}/features/scanner`,
    recognition: `${root}/features/recognition`,
    verification: `${root}/features/verification`,
    achievements: `${root}/features/achievements`,
    entitlements: `${root}/features/entitlements`,
    subscriptions: `${root}/features/subscriptions`,
    feed: `${root}/features/feed`,
    social: `${root}/features/social`,
    explore: `${root}/features/explore`,
  },
} as const;

export type FeatureKey = keyof typeof appMap.features;
