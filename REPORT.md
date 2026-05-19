# Quality audit report

Snapshot of the four diagnostic runs requested after `npm run complete:check`
was brought back to a clean state. The goal of this document is **planning,
not fixing**: every issue is recorded together with the proposed remediation
so the work can be picked up later in dedicated PRs.

| Command | Status | Notable findings |
| --- | --- | --- |
| `npm run test:visual` | ❌ 20 failed / 142 passed (~15.5 min) | 17 axe a11y violations + 2 dark-mode contrast violations + 1 fixture ready-timeout |
| `npm run report:css-contract` | ✅ clean run, JSON+MD emitted to `/tmp` | Surface snapshot only — no defects |
| `npm run report:token-contract` | ✅ clean run, artifacts written to `artifacts/` | Token surface snapshot — no defects |
| `npm run report:fixture-coverage` | ✅ clean run | Coverage gaps in fixtures/edge-cases (see §4) |

The CSS- and token-contract reports are inventories. They are healthy on their
own; the items below come from the *coverage* and *visual* commands, which are
the only ones that can fail.

---

## 1. Visual + a11y test failures (`npm run test:visual`)

20 of 162 tests fail. They split into three groups: axe a11y violations, dark
mode contrast violations, and one fixture readiness timeout. Critical and
serious WCAG findings should be triaged first because they are real product
defects, not just test-harness noise.

### 1.1 Axe a11y assertions (`test/visual/a11y.spec.js:138`)

17 fixtures fail `has no critical a11y violations`. Grouped by rule:

#### `color-contrast` (serious — WCAG 2 AA)

10 fixtures fail with contrast ratios well below the required 4.5:1
(observed ratios in the 1.49–2.07 range). Most cases involve the `.disabled`
state of buttons/cards rendering near-white text on a near-white background.

| Fixture | Failing element / pattern |
| --- | --- |
| `simple-button / defaults` | `.simple-button.disabled` |
| `simple-button / outlined` | `.simple-button.button-outlined.disabled` |
| `simple-button / plain` | `.simple-button.button-plain.disabled` |
| `shape-slash-container / default` | inner text on slash background |
| `scroll-down-arrow / default` | label/text in arrow chip |
| `choose-option-card / default` | option labels on light surface |
| `event-lite-card / default` | meta text |
| `event-lite-card / with-mobile-active` | meta text |
| `event-lite-card / with-border-active` | meta text |
| `event-long-card / default` | meta / muted text |
| `timeline-tree / default` | node label vs. track |

**Plan:** introduce a single shared "disabled" recipe that lowers contrast via
opacity on a colored token (not by switching to grey), then audit each muted
text token. Likely fixes live in `src/_generics/_base.scss` and the affected
components' `_variables.scss`. Track as one umbrella issue with one PR per
component family (`button-*`, `card-event-*`, `timeline-tree`,
`choose-option-card`, the two animation fixtures) to keep diffs reviewable.

#### `image-alt` (critical — WCAG 2 A)

4 fixtures render `<img>` elements with no `alt` attribute or
`role="presentation"`:

- `advancing-moon / default`
- `advancing-moon / fade-in-to-left`
- `advancing-moon / fade-out`
- `overflow-card / default`

**Plan:** the fixtures themselves are wrong — decorative animation images
should declare `alt=""` (or `role="presentation"`) and content images should
have meaningful alt text. Update the source HTML in
`docs/examples/atoms/animations/AdvancingMoon-*.html` and
`docs/examples/organisms/cards/OverflowCard-*.html`; the fixtures are derived
from those (see `visual-fixtures/components/**`). No CSS changes needed.

#### `aria-progressbar-name` (serious — WCAG 2 A)

- `circular-progress-bar-css / default`
- `circular-progress-bar-css / default-2`

The progress bars expose `role="progressbar"` (implicitly or explicitly) with
no accessible name.

**Plan:** update the example HTML for
`molecules/progress-circular-css` to add `aria-label` / `aria-labelledby` on
the progressbar node. Document the requirement in the component's MD page.

#### `link-name` (serious — WCAG 2 A)

- `event-long-card / default` — an `<a>` has no discernible text (likely an
  icon-only anchor without `aria-label`).

**Plan:** add `aria-label` to the icon-only anchor in
`docs/examples/organisms/cards/EventLongCard-*.html` and add a
"use `aria-label` for icon-only links" note to the component docs.

### 1.2 Dark-mode contrast (`a11y.spec.js:182`)

- `simple-button / defaults` — disabled state contrast 1.69 in dark mode.
- `simple-button / outlined` — disabled state contrast 1.69 in dark mode.

**Plan:** same root cause as §1.1 `color-contrast`. The dark-mode token for
the disabled state needs to keep enough delta from the surface. Fix together
with the light-mode `simple-button` disabled work in §1.1.

### 1.3 Fixture readiness timeout (`parity.spec.js:128`)

- `trapezoid-form-regular` never reaches `data-ready="true"` in **v1** within
  889s. This is the only inventory-load failure and it points at v1's
  legacy stylesheet, not the v2 surface (v2 renders normally).

**Plan:**

1. Reproduce locally with `VISUAL_INCLUDE_DRAFTS=0 npm run test:visual --
   --grep "trapezoid-form-regular"` to confirm whether the v1 import is the
   blocker.
2. If v1 is genuinely broken, downgrade this fixture's `parityMode` to
   `inventory-only` in `visual-fixtures/manifest.js`, or temporarily exclude
   `trapezoid-form-regular` from the smoke inventory while keeping it in v2
   coverage. Document the carve-out in
   `visual-fixtures/README.md`.

---

## 2. CSS contract report (`npm run report:css-contract`)

Healthy snapshot:

- Selectors: 158
- Custom properties: 301
- Cascade layers: 7
- Public exports: 17
- Dist sizes: `css-ui.css` 504 KB, `css-ui.min.css` 416 KB, `components.css`
  504 KB, `utilities.css` 9 KB, `core.css` 0 B

Nothing flagged. Two observations worth recording for future work (not
warnings):

- `core.css` weighs 0 bytes — expected (the file intentionally produces no
  CSS) but easy to misread in a dashboard. **Plan:** consider documenting
  the empty `core.css` in `docs/library/quality-workflow.md` so reviewers do
  not chase a phantom regression.
- The min/full ratio is ~82%. Reasonable, but if size matters consider
  whether the `components.css` bundle (identical bytes to `css-ui.css`)
  should be regenerated as a true component-only subset. Out of scope for
  this cleanup pass.

---

## 3. Token contract report (`npm run report:token-contract`)

Healthy snapshot:

- Token source files: 5
- Token categories: 10 (color, typography, spacing, border-radius, border,
  motion, elevation, opacity, sizing, z-index)
- Scalar tokens: 81
- Map tokens: 5
- Total tokens: 86

Nothing flagged. No follow-up work needed beyond keeping the snapshot in
sync. The generated `artifacts/token-contract.current.{json,md}` should be
committed only as part of the consciously-released contract baseline (see
existing workflow notes in `docs/library/quality-workflow.md`).

---

## 4. Fixture coverage report (`npm run report:fixture-coverage`)

The script exits 0 (no errors), but the surface it summarises has real gaps.

**Headline numbers:**

- Source components: 58
- Renderable components: 58 (100%)
- Docs-backed: 56 of 58 (≈97%)
- Enforced parity: **2 of 58 (3%)**
- Draft parity: 45 of 58 (78%)
- Inventory-only: 13 of 58 (22%)
- Edge-covered: **5 of 58 (≈9%)**

### 4.1 Components with no docs-backed fixture (2)

| Component | Status / parity |
| --- | --- |
| `raindrop-concentric` (v2 `animation-raindrop-concentric`) | finished / enforced |
| `simple-button` (v2 `button-simple`) | finished / enforced |

These two are the only enforced-parity components, yet neither has a
docs-derived fixture. The fixtures appear to be hand-authored. **Plan:** add
shared example HTML for both under `docs/examples/...` and update their
`*.fixtures.js` to use `createSharedExampleScenario` (see the convention used
by other animations and panels). This makes the canonical example a single
source of truth for docs + tests.

### 4.2 Components flagged `missing-equivalent` (8)

These are catalogued for migration tracking only; no v2 implementation
exists yet. Several do have v2 directories but no working oracle:

- `blog-post-card`, `popup-card` — no v2 component at all (0 scenarios).
- `button-large-icon`, `image-hover-card`, `simple-chip`, `simple-input`,
  `simple-text-icon`, `simple-typography` — have v2 directories but the
  manifest entry stays inventory-only.

**Plan:** revisit each as part of the css-ui 1.3 migration board and either
(a) promote to `draft`/`enforced` once a workable oracle exists, or
(b) delete the entry if the component is abandoned.

### 4.3 Components flagged `blocked-oracle` (5)

`action-panel`, `choose-option-card`, `opening-hours-list`, `simple-list`,
`simple-panel` — v2 exists, v1 oracle is broken. **Plan:** for each, either
patch the v1 import path or remove the v1 column from the manifest (and
document the divergence) so they can move to enforced parity over time.

### 4.4 Edge-case coverage gaps

Only 5 components have any edge-case context registered:

- RTL: 4 components (`event-long-card`, `pricing-card`, `simple-button`,
  `simple-input`).
- Forced-colors: 3 (`pricing-card`, `simple-button`, `simple-input`).
- Reduced-motion: 3 (`pricing-card`, `raindrop-concentric`, `simple-button`).
- Dark mode: 3 (`event-long-card`, `pricing-card`, `simple-button`).

**Plan:** define a minimum edge-case bar (e.g. every `enforced` and `draft`
component must declare RTL + dark-mode coverage) and extend
`visual-fixtures/edge-case-matrix.js` accordingly. Tackle in batches by
fixture group (`atoms/buttons`, `molecules/cards`, ...).

### 4.5 Parity-mode distribution

97% of components are still in `draft` or `inventory-only`. Promoting them
to `enforced` is the long-term goal once the issues above are resolved.
**Plan:** track promotions component-by-component in the migration board;
gate each promotion on (a) docs-backed fixture, (b) green axe pass, and
(c) at least one edge-case context.

---

## Suggested follow-up order

1. **Fixture / docs HTML fixes** (cheap, high WCAG value)
   - Add `alt=""` / `role="presentation"` to decorative animation images
     (advancing-moon, overflow-card image).
   - Add `aria-label` to the icon-only link in event-long-card and to the
     progressbar nodes in circular-progress-bar-css.
2. **Disabled-state contrast overhaul** (one PR per component family)
   - simple-button (`disabled`, `disabled.outlined`, `disabled.plain`,
     dark-mode), then ripple to event-lite-card, event-long-card,
     choose-option-card, shape-slash-container, scroll-down-arrow,
     timeline-tree.
3. **Stabilise the v1 oracle for `trapezoid-form-regular`** or remove it
   from the enforced inventory.
4. **Promote `simple-button` and `raindrop-concentric` to docs-backed
   fixtures** so the only two enforced-parity components match the project
   convention.
5. **Expand edge-case coverage** (RTL + dark mode minimums first), starting
   with the buttons family.
6. **Triage the `missing-equivalent` and `blocked-oracle` lists** as part
   of the 1.3 migration board — either fix or remove.

---

## Reproduction commands

```bash
npm run test:visual                  # full visual + a11y suite (Playwright)
npm run report:css-contract          # exit 0, no output by default
node scripts/quality/write-css-contract-report.js \
    --json artifacts/css-contract.current.json \
    --markdown artifacts/css-contract.current.md
npm run report:token-contract        # writes artifacts/token-contract.current.{json,md}
npm run report:fixture-coverage      # exit 0, no output by default
node scripts/quality/write-fixture-coverage-report.js \
    --json artifacts/fixture-coverage.current.json \
    --markdown artifacts/fixture-coverage.current.md
```

> Note: `npm run report:css-contract` and `npm run report:fixture-coverage`
> are wired without `--json` / `--markdown` flags, so they currently exit
> successfully but write nothing. Calling the underlying scripts with the
> flags above (or adjusting the package.json scripts) is the only way to
> capture the report files.
