# Test suite

This page explains what each test file is trying to prove.

If you have to scan quickly, use this rule:

- **compile tests** ask "does the library still build into usable CSS?"
- **package tests** ask "does the published package still expose the right surface?"
- **report tests** ask "can tooling still observe the library in a stable way?"
- **visual tests** ask "does the UI still render like the expected reference?"

## Fast map

| File | Main question |
| --- | --- |
| `test/compile.test.js` | Does the public stylesheet compile, import everything, and respect prefix configuration? |
| `test/lint.test.js` | Can the shared Stylelint setup still lint a real stylesheet sample? |
| `test/package-surface.test.js` | Is the npm package surface still limited to the intended CSS/SCSS entrypoints? |
| `test/shared-examples.test.js` | Can docs examples still be reused safely by fixtures and tests? |
| `test/quality-reports.test.js` | Can the machine-readable quality reports still describe selectors, fixtures, and tokens? |
| `test/consumer-smoke.test.js` | Does the tarball behave like a real install for downstream consumers? |
| `test/visual/parity.spec.js` | Does the branch still render like the published visual baseline, and is coverage complete enough? |
| `test/visual/edge-cases.spec.js` | Do representative fixtures still render under accessibility and preference edge cases? |

## `test/compile.test.js`

**Theory:** this is the "core compilation contract" suite.

It checks four ideas:

1. the public entry stylesheet still compiles at all
2. component CSS sources still flow into the compiled output
3. known declarations still survive the build pipeline
4. prefix configuration still behaves as a consumer-facing feature

Why this matters:

- a CSS library can fail before runtime if Sass compilation breaks
- a component can silently disappear from the final CSS even when its source file
  still exists
- prefix behavior is part of the public API, not only an implementation detail

In other words, this suite answers:
**"Is the default compiled CSS still structurally correct?"**

## `test/lint.test.js`

**Theory:** this is a "validator wiring" test.

It is not trying to replace `npm run lint`.
Instead, it proves that the repository's Stylelint configuration can be invoked
from JavaScript test code against a real stylesheet fixture.

Why this matters:

- the repo depends on lint tooling as part of quality control
- if the config path, ignore path, formatter, or API shape drifts, automation can
  break even when the styles themselves are fine

This suite answers:
**"Does the linting setup itself still work as expected?"**

## `test/package-surface.test.js`

**Theory:** this is a "public boundary" suite.

It treats `package.json` as a contract with consumers and checks that:

- internal JavaScript tooling is not exposed as package entrypoints
- the published file list stays focused on CSS/SCSS assets
- public subpath exports exist for component imports

Why this matters:

- npm publishes exactly what the package metadata says
- tooling files leaking into the public surface creates confusing or unstable
  consumer expectations
- missing exports push people toward unsafe deep imports

This suite answers:
**"Is the package boundary still intentional and minimal?"**

## `test/shared-examples.test.js`

**Theory:** this is a "docs-to-fixtures bridge" suite.

The repository reuses HTML examples from `docs/examples/` as fixture input.
These tests verify that:

- the loader can read full example files
- the loader can read only a named region of an example file
- fixture helpers sanitize docs markup before using it in test contexts

Why this matters:

- documentation and test fixtures stay closer to a single source of truth
- unstable remote content should not leak into deterministic tests
- a docs edit can safely become a test input instead of a second copy

This suite answers:
**"Can documentation examples still act as safe test data?"**

## `test/quality-reports.test.js`

**Theory:** this is a "machine-readable observability" suite.

It validates three report families:

- **CSS contract report:** selectors, custom properties, exports, and other
  public CSS signals
- **fixture coverage report:** whether components are represented in docs,
  fixtures, and edge-case coverage
- **token contract report:** token names and categories exported from the SCSS
  settings source

Why this matters:

- humans read docs, but tooling needs structured data
- release review is easier when selectors, fixtures, and tokens can be measured
- reports become less trustworthy if they silently stop reflecting the library

This suite answers:
**"Can the repo still describe itself in a stable machine-readable form?"**

## `test/consumer-smoke.test.js`

**Theory:** this is a "publish reality" suite.

It does not trust the repository checkout alone.
Instead it:

1. runs `npm pack`
2. unpacks the tarball into a temporary consumer-like workspace
3. checks the expected exported files
4. verifies that docs/tests are not shipped
5. compiles the installed Sass entrypoints from `node_modules`

Why this matters:

- a repo can look healthy locally while the actual published tarball is broken
- file-inclusion mistakes usually appear only at pack/publish time
- consumer Sass imports must work from the installed package, not just from source

This suite answers:
**"Would a real consumer install still work?"**

## `test/visual/parity.spec.js`

**Theory:** this is the main "rendered behavior" suite.

It combines three levels of checking:

### 1. Inventory checks

These tests verify that:

- v2 component folders are represented in the visual manifest
- practical components have at least one renderable fixture scenario
- the manifest still separates renderable components from inventory-only ones

This is theory-wise important because visual coverage starts with inventory.
If a component is missing from the manifest, screenshot comparison never even
gets a chance to observe it.

### 2. Render smoke checks

The suite loads every renderable fixture in both:

- `v1.html` = published reference package
- `v2.html` = local branch under review

This proves the harness can render the scenarios before any pixel comparison is
attempted.

### 3. Parity comparison

For enforced parity scenarios, the suite:

- captures a screenshot from v1
- captures the same fixture from v2
- computes a pixel diff ratio
- fails if the diff exceeds the scenario threshold

Draft parity uses the same theory, but it stays opt-in through
`VISUAL_INCLUDE_DRAFTS=1` so unfinished migrations do not block the default run.

Why this matters:

- it compares the branch against a published reference, not an old screenshot
- failures can be localized to a specific fixture
- visual regressions become measurable instead of subjective

This suite answers:
**"Does the current branch still render like the intended visual baseline?"**

## `test/visual/edge-cases.spec.js`

**Theory:** this is an "environment stress" smoke suite.

It renders representative fixtures under contexts such as:

- RTL layout
- forced colors / high contrast
- reduced motion
- dark mode

The goal is not strict screenshot parity here.
The goal is simpler:
the fixture should still render successfully and stay visible.

Why this matters:

- CSS libraries often break first in accessibility or preference-driven contexts
- these modes change layout, color, or motion assumptions that normal parity may
  not exercise
- catching a broken render is often enough to detect a serious regression early

This suite answers:
**"Does the library still render in important non-default user contexts?"**

## Test helpers: `test/_utils.js`

This file is not a test suite by itself.
It is the small support layer behind compilation tests.

Theory-wise, it exists so the assertions can focus on contracts instead of
repeating low-level compile and filename logic in every test.

## Command map

- `npm run test` runs the Mocha suites under `test/*.test.js`
- `npm run test:visual` runs the Playwright suites under `test/visual/`
- `npm run report:css-contract`, `npm run report:token-contract`, and
  `npm run report:fixture-coverage` generate the reports that the quality tests
  validate

If you change docs examples, package exports, token settings, fixture manifests,
or visual harness logic, these are the tests to re-check first.
