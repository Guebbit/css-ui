# Visual parity harness architecture

This folder now uses a manifest-driven setup so parity tests can scale component-by-component.

## Files

- `manifest.js`: migration/parity catalog (shared components, finished status, fixture groups, thresholds, parity-enabled flags).
- `components/*.fixtures.js`: per-component fixture scenarios.
- `styles-v1.scss` / `styles-v2.scss`: v1 and local v2 style entrypoints.
- `render.js`: loads one fixture by ID into `data-testid="fixture-root"` and emits a readiness signal.
- `harness.css`: deterministic neutral test environment styles.

## Add a new shared component parity suite

1. Create `visual-fixtures/components/<component>.fixtures.js` and export scenarios with:
   - `scenarioId`
   - `fixtureGroup`
   - `markup`
   - optional `maxDiffRatio`
2. Register the component in `visual-fixtures/manifest.js` with:
   - `componentId`
   - `status` (`finished` or `draft`)
   - `parityEnabled` (`true`/`false`)
   - `defaultMaxDiffRatio`
   - `styleImports` metadata
   - `scenarios`
3. Add matching `@use` imports to both:
   - `visual-fixtures/styles-v1.scss`
   - `visual-fixtures/styles-v2.scss`
4. Run:

```bash
npm run test:visual
```

The Playwright runner (`test/visual/parity.spec.js`) automatically iterates manifest scenarios where `parityEnabled: true`.
