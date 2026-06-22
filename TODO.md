# TODO ASAP

Search in every file for every interaction of "text-shadow" and replace it with text-shadow-generator helper



# TODO / Deferred Backlog

This repository is currently a **curated SCSS component collection**.  
It is **not yet** a full standalone framework, and the items below are intentionally deferred until after the current rework.

## Theming and token-system follow-up (deferred)

- [ ] Define an `@supports` progressive-enhancement strategy for advanced CSS features.
- [ ] Add a very small modern CSS note: `@supports` = safe feature detection, `color-mix()` = runtime color mixing, `oklch()` = modern color space; they are related but not the same thing.
- [ ] Keep the current SCSS system as the default because it is stable and already works well.
- [ ] Introduce CSS custom properties for a few core theme tokens first.
- [ ] Use `color-mix()` only where it clearly simplifies hover/active/subtle states.
- [ ] Evaluate possible OKLCH/modern color migration path for better perceptual color scales.
- [ ] Prefer a progressive enhancement path over a full rewrite.
- [ ] Generate JSON/design-token exports from the token source.
- [ ] Improve token schema strength and the dual-layer runtime token contract.
- [ ] Review naming methodology consistency and evaluate a stricter convention (BEM-like or similar) if it proves useful; this is under consideration, not a final decision.

## Tier 2 testing/CI backlog (deferred)

- [ ] Add hosted visual regression pipeline (Chromatic/Percy/Lost Pixel) on top of the local Playwright parity harness.
- [ ] Enable Playwright browser matrix coverage (`chromium`, `firefox`, `webkit`) for visual checks.
- [ ] Add component sandbox/docs workflow integration (for example Storybook or Histoire).
- [ ] Add CI a11y checks for fixtures/pages with `@axe-core/playwright`.
- [ ] Add CSS output snapshot tests (for example `sass.compile` + snapshot assertions).
- [ ] Add docs site publish/deploy workflow with preview validation.

## Tier 3 platform/tooling backlog (deferred)

- [ ] Add design-token sync/export pipeline (SCSS → JSON/tokens contract, Style Dictionary-style flow).
- [ ] Add CSS contract tests that validate exposed selector/API stability.
- [ ] Add explicit CSS size/performance budgets for generated outputs.
- [ ] Add cross-OS CI browser matrix execution (`ubuntu`, `macos`, `windows`) when pipeline cost is acceptable.
- [ ] Add preview deploys per PR for docs/demo surfaces.
- [ ] Generate typed/structured component manifest output for downstream tooling.

## Future component backlog (post-rework)

### Core form components

- [ ] Checkbox
- [ ] Radio
- [ ] Switch
- [ ] Select
- [ ] Textarea
- [ ] Range
- [ ] Form layout primitives (field/group/help/error)

### Navigation and interaction

- [ ] Modal/Dialog
- [ ] Dropdown/Menu
- [ ] Tooltip/Popover
- [ ] Tabs
- [ ] Accordion
- [ ] Navbar
- [ ] Sidebar
- [ ] Drawer

### Feedback and data display

- [ ] Alert
- [ ] Toast
- [ ] Table
- [ ] Pagination
- [ ] Breadcrumb
- [ ] Avatar
- [ ] Badge (dedicated component)
- [ ] Skeleton
- [ ] Stepper

## Tooling backlog

- [ ] Add pre-commit hooks (husky + lint-staged) after current CI/release baseline stabilizes.
