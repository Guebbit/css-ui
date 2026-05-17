# Quality workflow

This page explains the repository-level checks and support files that keep the
library stable beyond individual component SCSS.

## Validation commands

- `npm run build` builds the published CSS artifacts
- `npm run test` runs the Mocha suite for compile checks, package-surface
  boundaries, and shared example helpers
- `npm run lint` runs style, markdown, and JavaScript linting together
- `npm run docs:build` builds the VitePress documentation site
- `npm run report:css-contract` writes a machine-readable report for selectors,
  custom properties, layers, exports, and built CSS sizes
- `npm run report:fixture-coverage` writes a machine-readable report for fixture,
  parity, docs-backed, and edge-case coverage
- `npm run complete:check` runs the main build, test, lint, and prettier checks
  in one pass

Why this matters:

- docs, package output, tests, and tooling are all part of the shipped library
  experience
- the combined checks catch regressions from different angles before release

## What the linting covers

- **Stylelint** checks CSS and SCSS source
- **Markdownlint** keeps the docs pages consistent
- **ESLint** checks the JavaScript that exists for build scripts, docs tooling,
  tests, and fixtures

Why this matters:

- the package publishes CSS and SCSS, but the repository still depends on
  JavaScript infrastructure to build, validate, and document the library
- markdown linting keeps the docs maintainable as the component surface grows

## Shared docs examples

Reusable example markup lives in `docs/examples/`.

These HTML files are the shared source of truth for example snippets that are
used in the docs and reused by visual fixtures.

Why this matters:

- docs pages and fixture scenarios stay aligned instead of drifting into
  separate copies
- adding or updating an example once is usually enough for both documentation
  and parity coverage
- helper utilities can sanitize and reuse that markup safely in test contexts

## Visual fixtures and parity tests

The visual fixture system lives under `visual-fixtures/`.

Key pieces:

- `manifest.js` catalogs renderable components, fixture groups, parity mode, and
  style imports
- `components/*.fixtures.js` defines scenario markup per component
- `components/docs-derived.fixtures.js` re-exports scenarios copied from docs
  examples
- `render.js` mounts one fixture at a time into a deterministic harness
- `styles-v1.scss` and `styles-v2.scss` load the published reference styles and
  the local branch styles for comparison

The Playwright suite renders the same fixture twice:

- `v1.html` uses the published `@guebbit/css-ui-v1` package as the oracle
- `v2.html` uses the local repository code under review

Why this matters:

- parity testing compares the current branch directly against a published
  baseline instead of relying on stored image snapshots
- the harness disables animation during screenshots and sanitizes remote assets
  so comparisons stay deterministic
- draft parity can be opted in without making the default suite permanently red

The repo also keeps a smaller edge-case smoke matrix for:

- RTL document flow
- forced colors / high-contrast mode
- reduced motion
- dark mode preference

Why this matters:

- default parity can stay stable while still checking common preference and
  layout edge cases that tend to break CSS libraries in production
- the coverage report makes it visible which components already have explicit
  edge-case exercise and which ones still need it

## Package-surface tests

The Mocha suite also checks the package boundary itself.

Those tests verify that:

- published files stay focused on CSS and SCSS assets
- JavaScript tooling files are not exposed as public package entrypoints
- public subpath exports exist for component tiers

Why this matters:

- the repository contains a lot of support tooling, but consumers should only
  depend on the intended package surface
- package changes that accidentally leak internal tooling are caught quickly

## CI, release, and dependency automation

GitHub Actions automation is split by responsibility:

- `ci.yml` runs lint, test, build, docs build, consumer smoke validation, CSS
  contract reporting, fixture coverage reporting, the visual parity suite, and
  edge-case visual smoke coverage
- `lint.yml` provides a faster lint-focused workflow
- `release.yml` uses Release Please to open versioning PRs and publish to npm
  when a release is created
- `.github/dependabot.yml` keeps npm and GitHub Actions dependencies updated on
  a weekly schedule

Why this matters:

- the repository gets both quick feedback and full validation coverage
- artifacts such as built CSS, docs output, visual diffs, and quality reports
  are preserved so PR failures can be understood without digging through raw
  logs
- the step summary shows changed components, CSS size deltas, and the current
  quality coverage snapshot directly in GitHub Actions
- release automation keeps publishing tied to reviewed version changes
- dependency update automation reduces the chance of stale tooling and action
  versions
