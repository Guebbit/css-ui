# CI/CD pipelines

This page is a quick map of the repository automation used for validation,
release, and dependency maintenance.

## `ci.yml` (full CI + observability)

- **Purpose:** runs the full quality gate and keeps build/test/docs/reporting
  artifacts available for debugging
- **Triggers:** pull requests, pushes to `main`, manual runs, and a nightly
  schedule
- **Main jobs:**
  - `quality-observability`: lint, test, build, docs build, CSS contract and
    fixture coverage reports, visual suite with one retry, and artifact upload
  - `visual-monitoring` (scheduled only): browser-matrix visual monitoring for
    Chromium, Firefox, and WebKit

## `lint.yml` (fast lint pass)

- **Purpose:** gives quicker feedback when only linting status is needed
- **Triggers:** pull requests and pushes to `main`
- **Main job:** runs stylelint, markdownlint, ESLint, and the component-name lint

## `release.yml` (release automation)

- **Purpose:** automates release PR management and npm publishing
- **Triggers:** pushes to `main` and manual runs
- **Main jobs:**
  - `release-please`: opens/updates release PRs from conventional commits
  - `publish`: runs only when a release is created, then publishes to npm

## `.github/dependabot.yml` (dependency automation)

- **Purpose:** keeps npm packages and GitHub Actions dependencies current
- **Triggers:** Dependabot monthly update checks (configured per ecosystem)
- **Behavior:** updates are grouped so npm changes land in one PR and GitHub
  Actions changes land in one PR, reducing PR volume
