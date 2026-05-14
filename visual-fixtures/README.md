# Visual parity harness architecture

This folder now uses a manifest-driven setup so parity tests can scale component-by-component across the css-ui 1.3 surface area.

## Files

- `manifest.js`: migration/parity catalog (shared components, draft vs finished parity mode, legacy-only inventory entries, fixture groups, thresholds, v1↔v2 import metadata).
- `components/*.fixtures.js`: hand-authored fixtures for finished components.
- `components/docs-derived.fixtures.js`: broader fixture coverage copied from the existing component docs so v1 remains the fixture oracle.
- `styles-v1.scss` / `styles-v2.scss`: v1 and local v2 style entrypoints. They intentionally use explicit import lists generated from the renderable manifest entries because a few published 1.3 files still contain broken hard-coded imports.
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
    - `status` (`finished`, `draft`, or `missing-equivalent`)
    - `parityMode` (`enforced`, `draft`, or `inventory-only`)
    - `defaultMaxDiffRatio`
    - `styleImports` metadata
    - `scenarios`
3. If the best fixture source already exists in the docs, prefer copying that markup into `components/docs-derived.fixtures.js` instead of inventing a new example.
4. Keep the explicit `@use` entries in `styles-v1.scss` and `styles-v2.scss` aligned with the renderable manifest components.
5. Run the default smoke + finished parity suite:

```bash
npm run test:visual
```

6. To include draft-vs-draft-component parity during automated migration/refactor work, opt in explicitly:

```bash
VISUAL_INCLUDE_DRAFTS=1 npm run test:visual
```

The Playwright runner (`test/visual/parity.spec.js`) always smoke-renders every practical shared fixture in both v1 and v2. It only enforces pixel parity for `parityMode: "enforced"` components by default, while `parityMode: "draft"` components stay available for broader automated refactor loops without making the default suite permanently red.
