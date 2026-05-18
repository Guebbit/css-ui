# Observability

Observability is the part of the workflow that answers these questions quickly:

- what changed?
- what public surface moved?
- what user-facing states were exercised?
- what failed?
- where can I inspect the failure without reading raw logs?

In this repository, observability is not only about runtime metrics.
It is broader: it means making CSS, package, docs, and visual changes easy to
see, explain, and review.

## Why observability matters in a CSS library

A CSS library can regress in ways that are hard to spot from a single failing
command.

Examples:

- a selector disappears but the build still passes
- a custom property is renamed without being documented
- a package export breaks even though the source SCSS still exists
- a component still renders in the default path but breaks in RTL or forced
  colors
- visual parity fails, but the useful diff image is buried in CI artifacts

Observability reduces this ambiguity.
Instead of only saying **pass/fail**, the repo tries to also say:

- **what was checked**
- **what changed in the public API**
- **what coverage exists today**
- **what artifacts can be opened next**

## Main observability layers

## 1. CI artifacts and summaries

GitHub Actions is the top-level observability surface.

Workflow: `/home/runner/work/css-ui/css-ui/.github/workflows/ci.yml`

What it publishes:

- built CSS from `dist/`
- generated docs output from `docs/.vitepress/dist`
- Playwright outputs from `test-results/` and `playwright-report/`
- report artifacts from `artifacts/`

What it communicates:

- whether the repo built, tested, linted, and built docs successfully
- whether visual checks failed once or failed again after retry
- which generated outputs are available to inspect next

Why it helps:

- reviewers do not need to rerun the build locally just to inspect output files
- visual regressions are easier to inspect from screenshots, traces, and reports
- report JSON/Markdown files can be downloaded directly from the run

Useful official docs:

- [GitHub Actions](https://docs.github.com/actions)
- [GitHub Actions workflow artifacts](https://docs.github.com/actions/using-workflows/storing-workflow-data-as-artifacts)
- [GitHub Actions job summaries](https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary)

## 2. CI summary generation

Summary script:
`/home/runner/work/css-ui/css-ui/scripts/quality/write-ci-summary.js`

This script creates a short Markdown summary for the job and, when available,
also writes it into the GitHub Actions step summary UI.

It communicates:

- the checks that ran
- changed component directories detected from git diff
- CSS size deltas from the CSS contract diff
- fixture coverage counts
- edge-case context counts
- whether the visual run looks flaky or persistently failing

This is intentionally compact.
It is meant to answer: **what should I look at first?**

## 3. CSS contract reporting

Scripts:

- `/home/runner/work/css-ui/css-ui/scripts/quality/css-contract.js`
- `/home/runner/work/css-ui/css-ui/scripts/quality/write-css-contract-report.js`
- `/home/runner/work/css-ui/css-ui/scripts/quality/diff-css-contract-reports.js`

Commands:

```bash
npm run report:css-contract
node scripts/quality/diff-css-contract-reports.js \
  --base artifacts/css-contract.base.json \
  --current artifacts/css-contract.current.json
```

What it observes:

- public package exports from `package.json`
- emitted class selectors from compiled CSS
- emitted custom properties
- declared cascade layers
- built file sizes for the main CSS artifacts

What it communicates:

- exact exported-path additions/removals
- exact selector additions/removals
- exact custom property additions/removals
- exact layer additions/removals
- file-size deltas between base and current builds

Why this is stronger than a generic CSS snapshot:

- it is semantic enough to describe **what public surface moved**
- it is stable enough to diff in CI without relying on binary screenshots
- it gives reviewers API-level language instead of only file hashes or raw CSS

Implementation note:

- it prefers `dist/css-ui.css` if the build already ran
- otherwise it can compile `index.scss` directly as a fallback

Official docs for the toolchain involved:

- [PostCSS](https://postcss.org/)
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- [Dart Sass](https://sass-lang.com/dart-sass/)

## 4. Fixture coverage reporting

Scripts:

- `/home/runner/work/css-ui/css-ui/scripts/quality/fixture-coverage.js`
- `/home/runner/work/css-ui/css-ui/scripts/quality/write-fixture-coverage-report.js`
- `/home/runner/work/css-ui/css-ui/visual-fixtures/edge-case-matrix.js`

Command:

```bash
npm run report:fixture-coverage
```

What it observes:

- how many manifest components exist
- how many are renderable in the harness
- how many have docs-backed scenarios
- how many have enforced parity coverage
- how many only have draft parity coverage
- how many are inventory-only
- which edge-case contexts touch each component

What it communicates:

- overall coverage breadth
- which components are observable today vs not yet covered
- which contexts are represented in the matrix
- which components are missing manifest coverage entirely

Why this matters:

pass/fail tells you whether current tests succeeded.
Coverage reporting tells you **where you are still blind**.

That makes roadmap work easier, because new coverage can be planned from actual
numbers instead of memory.

## 4.5 Token contract reporting

Scripts:

- `scripts/quality/token-contract.js`
- `scripts/quality/write-token-contract-report.js`

Command:

```bash
npm run report:token-contract
```

Output files:

- `artifacts/token-contract.current.json`
- `artifacts/token-contract.current.md`

What it communicates:

- which SCSS token source files are exported
- canonical token category names
- scalar and map token keys per token layer

Why it matters:

this gives tooling and tests a machine-readable token contract while keeping the
existing SCSS-first token authoring model.

## 5. Consumer install smoke testing

Test file:
`/home/runner/work/css-ui/css-ui/test/consumer-smoke.test.js`

What it does:

- runs `npm pack`
- unpacks the tarball into a temporary consumer-like workspace
- verifies expected export paths and packaged files exist
- verifies non-public repository folders such as docs/tests are not shipped
- compiles consumer-facing SCSS entrypoints from the packed output

What it communicates:

- whether the packed artifact is actually consumable
- whether package metadata and file inclusion still match expectations
- whether consumers can still compile the shipped SCSS surface

Why it matters:

this catches a different class of bug than unit tests.
A source file may exist locally while the published tarball is still broken.

Useful official docs:

- [npm pack](https://docs.npmjs.com/cli/v10/commands/npm-pack)
- [package.json exports](https://nodejs.org/api/packages.html#exports)

## 6. Visual parity and edge-case smoke coverage

Files:

- `/home/runner/work/css-ui/css-ui/playwright.visual.config.js`
- `/home/runner/work/css-ui/css-ui/test/visual/parity.spec.js`
- `/home/runner/work/css-ui/css-ui/test/visual/edge-cases.spec.js`
- `/home/runner/work/css-ui/css-ui/visual-fixtures/render.js`
- `/home/runner/work/css-ui/css-ui/visual-fixtures/manifest.js`

What parity testing observes:

- whether the local branch still visually matches the published v1 reference for
  covered fixtures

What edge-case smoke testing observes:

- whether representative fixtures still render under:
  - RTL
  - forced colors
  - reduced motion
  - dark mode

What these tests communicate:

- whether a regression is default-path only or state/preference-specific
- whether a failure is screenshot-diff related or harness-render related
- whether a retry converted a failure into a likely flake

How it is achieved:

- Vite serves the visual harness
- Playwright loads one fixture at a time
- the harness waits until `data-ready="true"` before capture/smoke assertions
- media preferences are emulated with Playwright instead of mutating fixture
  markup
- draft parity can be enabled separately from enforced parity

Useful official docs:

- [Playwright](https://playwright.dev/)
- [Playwright emulation](https://playwright.dev/docs/emulation)
- [Vite](https://vite.dev/)

## 7. Shared docs examples as an observability source

Files:

- `/home/runner/work/css-ui/css-ui/docs/examples/`
- `/home/runner/work/css-ui/css-ui/visual-fixtures/components/_helpers.js`

This is observability too, because it keeps docs and fixtures tied to a shared
markup source.

What it communicates:

- the examples shown in docs are closer to the ones exercised in tests
- fixture markup drift becomes less likely
- a docs example change can have testing consequences immediately

In practice, this means documentation is not only explanatory content.
It is also part of the validation input surface.

## 8. Scheduled monitoring vs PR monitoring

The repository now uses two speeds of observability.

### PR / push observability

Goal: fast enough for normal review.

Includes:

- build
- test
- lint
- docs build
- consumer smoke validation
- CSS contract reporting
- fixture coverage reporting
- main visual suite
- artifact upload
- compact summary generation

### Scheduled observability

Goal: broader monitoring without slowing down normal PR work.

Includes:

- scheduled workflow runs
- broader browser coverage
- visual runs with draft coverage enabled
- artifact collection for later inspection

This split matters because observability is only useful if people actually keep
it enabled.
A very slow PR workflow often gets bypassed.

## How the observability pieces work together

A typical PR flow looks like this:

1. **Build/test/lint/docs** answer whether the repo is basically healthy
2. **Consumer smoke test** answers whether the packed artifact is still usable
3. **CSS contract report** answers whether the public CSS/package surface moved
4. **Fixture coverage report** answers how much of the library is currently seen
5. **Visual checks** answer whether covered fixtures still render and match
6. **Artifacts + summary** answer where to inspect the result quickly

That layered approach is important.
No single tool is enough:

- screenshots are good at appearance
- contract reports are good at API drift
- smoke tests are good at publish-time safety
- coverage reports are good at identifying blind spots
- CI summaries are good at routing human attention

## Current limits

Observability here is strong, but not complete yet.

Still useful future additions include:

- explicit focus-visible, disabled, loading, error, and empty-state coverage
- long-text, text-zoom, and density coverage
- docs integrity checks for broken links, anchors, and documented API drift
- browserslist/support drift checks
- flaky fixture history over time instead of single-run retry signals

## Related pages

- [Library guide](/library/)
- [Global patterns](/library/global-patterns)
- [Quality workflow](/library/quality-workflow)
