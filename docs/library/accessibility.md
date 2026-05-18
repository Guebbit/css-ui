# Accessibility (a11y) testing

This page explains how automated accessibility testing works in this
repository, what is verified automatically, what must be verified manually,
and how to run the tests locally.

## Quick start

```bash
# Install Chromium (first time only)
npm run playwright:install

# Run the full a11y suite (axe assertions + keyboard/focus tests)
npm run test:a11y

# Open Playwright's interactive UI for debugging
npm run test:a11y:ui
```

## Why automated a11y testing matters for a CSS library

A CSS library is multiplied across every downstream product that uses it.
An accessibility regression at the library level propagates to all consumers.
Automated checks catch a subset of issues — especially structural and semantic
violations — before they ship, without requiring a manual audit of every
component on every PR.

## What automated testing covers

### `test/a11y/axe.spec.js` — axe violations

Each test loads a fixture with semantically correct HTML through the a11y
harness, then runs [axe-core](https://github.com/dequelabs/axe-core) against
the rendered DOM.

| Fixture | States covered |
| --- | --- |
| `button-simple` | Default, outlined, disabled, link variant, icon-only with `aria-label` |
| `button-simple` | Dark theme (no new violations) |
| `button-simple` | `prefers-reduced-motion: reduce` (no new violations) |
| `input-simple` | Labeled default, outlined, underlined, filled, disabled, required |
| `card-simple` | Heading structure, card with action button |
| `icon-focus-button` | Link (`<a>`) and action (`<button>`) variants |

axe-core tests for, among other things:

- **ARIA attribute validity** — no invalid or conflicting ARIA usage.
- **Button accessible name** — every button has a programmatic name.
- **Form label association** — every input has a label.
- **Link name** — every link has accessible text.
- **Image alt text** — decorative images use `alt=""`.
- **Landmark / heading structure** — page regions are usable by screen readers.
- **Semantic HTML validity** — elements are used correctly.

### `test/a11y/keyboard.spec.js` — keyboard and focus

| Test | What it checks |
| --- | --- |
| Tab reaches first button | Interactive elements receive focus in document order |
| Tab progresses in order | Focus moves forward through the DOM |
| Disabled is skipped | Disabled `<button>` / `<input>` not in tab sequence |
| Visible focus indicator | The focused element has a non-zero outline or box-shadow |
| Space activates button | Keyboard activation dispatches a click event |
| Enter activates button | Keyboard activation dispatches a click event |
| Shift+Tab moves backwards | Reverse tab order is correct |
| Input accepts keyboard text | Focused `<input>` accepts typed characters |

## What is NOT covered automatically

The `color-contrast` axe rule is **disabled** in the automated suite.
The library's color system uses CSS custom properties (`var(--color-500)`,
`var(--primary-600)`) that axe cannot resolve at scan time.
You must verify contrast manually using the design-token palette or a
browser DevTools color picker.

The following topics always require human judgment:

- Screen reader announcement quality (VoiceOver, NVDA, JAWS).
- Complex widget interaction patterns (focus traps, accordions, modals).
- Gesture-only or pointer-only activation flows.
- Real-world zoom behaviour at 200 % and 400 %.
- Content authored inside components (consumer responsibility).

## Manual accessibility checklist

Run this checklist before every significant release or when a component's
interaction model changes:

### Keyboard

- [ ] Tab through the entire component set without a mouse — every interactive
  element must be reachable.
- [ ] Confirm disabled controls cannot receive focus.
- [ ] Activate each button/link with **Space** and **Enter**.
- [ ] Verify focus is never lost or trapped unexpectedly.
- [ ] Verify the focus ring is always visible when using the keyboard.

### Screen reader

- [ ] Navigate with **NVDA + Firefox** or **VoiceOver + Safari**.
- [ ] Confirm button names, link names, and form labels are announced correctly.
- [ ] Verify state changes (disabled, active) are announced.
- [ ] Check that decorative SVG icons are not read aloud.

### Zoom and layout

- [ ] Zoom to **200 %** — content must not be clipped or overlapped.
- [ ] Zoom to **400 %** — single-column layout should remain usable.

### Reduced motion

- [ ] Enable `prefers-reduced-motion: reduce` in OS settings or DevTools.
- [ ] Verify that animations stop or simplify without breaking visual hierarchy.

### Color-only signaling

- [ ] Confirm that no state (error, success, warning, disabled) is communicated
  by color alone — a text label, icon, or pattern must also be present.

### Forced colors (Windows High Contrast)

- [ ] Enable Forced Colors mode in Windows or DevTools
  (`Rendering → Emulate CSS media feature forced-colors`).
- [ ] Verify buttons, inputs, and cards are still distinguishable.

## Adding new a11y fixtures

1. Add a fixture HTML string to `a11y-fixtures/manifest.js` under a new key.
   Use proper semantic HTML: `<button>`, `<a href>`, `<label>` + `<input>`.
2. Add an axe test case in `test/a11y/axe.spec.js`.
3. If the fixture includes interactive elements, add a keyboard test case in
   `test/a11y/keyboard.spec.js`.

## A11y harness architecture

```
a11y-fixtures/
  harness.html     HTML page served by the Vite dev server
  harness.js       Imports all component styles + renders fixture from URL param
  manifest.js      Semantic-HTML fixture catalog (keyed by fixture ID)

test/a11y/
  axe.spec.js      axe-core violation assertions
  keyboard.spec.js Keyboard navigation and focus management tests

playwright.a11y.config.js   Playwright config for the a11y suite
```

The a11y harness is served by the same `vite --port 4173` process as the
visual fixture harness. No extra server is needed.
