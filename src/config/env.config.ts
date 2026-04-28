/**
 * Environment — no secrets in repo. Copy .env.example to .env locally.
 * Wire Firebase keys here once env vars exist (see checklist §2).
 */

export type PublicEnv = {
  /** Set in .env as EXPO_PUBLIC_* for client-safe values only */
  firebaseApiKey?: string;
};

export function getPublicEnv(): PublicEnv {
  return {
    firebaseApiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  };
}
