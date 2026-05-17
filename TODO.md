# TODO / Deferred Backlog

This repository is currently a **curated SCSS component collection**.  
It is **not yet** a full standalone framework, and the items below are intentionally deferred until after the current rework.

## Theming and token-system follow-up (deferred)

- [ ] Define an `@supports` progressive-enhancement strategy for advanced CSS features.
- [ ] Plan and apply a broader `color-mix()` overhaul plus modern color pipeline improvements.
- [ ] Generate JSON/design-token exports from the token source.
- [ ] Improve token schema strength and the dual-layer runtime token contract.
- [ ] Evaluate possible OKLCH/modern color migration path.

## Tier 2 quality/testing/CI backlog (deferred)

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
