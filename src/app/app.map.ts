/**
 * Single map of major systems — extend as modules land (checklist §4).
 */
export const appMap = {
  root: 'src/app',
  config: 'src/config',
  design: 'src/design',
  features: 'src/features',
  shared: 'src/shared',
  firebase: 'src/firebase',
  docs: 'src/docs',
} as const;

export type AppMapKey = keyof typeof appMap;
