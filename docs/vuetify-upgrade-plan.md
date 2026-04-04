# Vuetify-Upgrade Plan for css-ui

> Branch: `copilot/vuetify-upgrades-css-ui`  
> Blueprint components: `SimpleButton` · `ExpressiveButton`  
> Scope: reuse patterns only – no folder churn, no JS

---

## 1. Vuetify-Style Reuse Patterns Catalog

The following patterns are drawn from Vuetify's SCSS architecture and
translated to an HTML/CSS-only context. Each entry includes the Vuetify name,
its CSS/SCSS equivalent, and why it matters for maintainability.

### 1.1 Token Layering (Base → Semantic → Component)

**Pattern:** CSS custom properties are defined in three cascade layers so that
any layer can be overridden without touching others.

| Layer | Vuetify equivalent | css-ui layer name |
|---|---|---|
| Design token defaults | `_variables.scss` | `theme-base` |
| Role-mapped tokens | `_settings.scss` semantic aliases | `theme-semantic` |
| Variant/state tokens | component-level `--v-*` vars | `component-tokens` |
| Theme overrides | `theme.ts` color overrides | `theme-variants` |

**CSS Cascade Layers order (declared in `src/styles/core.scss`):**
```
@layer css-ui-utilities {
  @layer theme-base, theme-semantic, component-tokens, theme-variants;
}
```

Rule: a token at a deeper layer (e.g. `component-tokens`) always wins over
`theme-base`, so you can override per-component without `!important`.

### 1.2 Component File Split (_variables / _mixins / Entry)

**Pattern:** Every component is three files, matching Vuetify's per-component
`_variables.sass / _mixins.sass / VComponentName.sass` split.

```
component-name/
  _variables.scss   # All $sass-variables with !default
  _mixins.scss      # Component-private mixins (token builder, dark builder)
  ComponentName.scss # Entry: @use all three, output CSS rules
```

**Benefits:**
- Variables can be overridden at `@use` time with `with ($key: value)`.
- Mixins don't pollute the global SCSS namespace.
- The entry file is the only file that emits CSS.

### 1.3 Shared Infrastructure Files (Generic Layer)

**Pattern:** Cross-component helpers live in `src/generic/` and `src/styles/tools/`.
They contain *only* mixins/functions – zero CSS output – so they can be
`@use`d freely without side effects.

| File | Purpose |
|---|---|
| `src/generic/_button-base.scss` | Button layout, subpart, disabled-state mixins |
| `src/generic/_tokens.scss` | `token-layer()` and `component-token-block()` scaffolding |
| `src/styles/tools/_theme-builder.scss` | `interaction-states()`, `dark-theme-layer()` |
| `src/styles/tools/_var-builder.scss` | CSS custom property construction helpers |

### 1.4 Variant System

**Pattern:** Variants (filled, outlined, plain, tonal) are expressed as
CSS class modifiers (`.button-outlined`, `.button-plain`, …) that swap CSS
custom properties, not duplicate property blocks.

```scss
// ✅ Variant swaps tokens only – shared layout rules run once
&.button-outlined {
  background-color: var(--variant-outlined-background);
  color:            var(--variant-outlined-on-background);
}
```

No raw colour values appear inside variant rules. All colours are CSS vars
resolved at the component-token layer.

### 1.5 State Handling via `interaction-states` Mixin

**Pattern:** Hover, active, and focus-equivalent states are applied through a
single shared mixin rather than repeated selectors.

```scss
// src/styles/tools/_theme-builder.scss
@mixin interaction-states {
  &.animate-active,
  &.animate-on-active.active,
  &.animate-on-hover:hover {
    @content;
  }
}
```

This means every component gets consistent interaction behaviour from one
definition. Adding a new state (e.g. `.animate-on-focus:focus-visible`) is a
one-line change in one file.

### 1.6 Dark Theme via `dark-theme-layer`

**Pattern:** Dark theme is applied by a mixin that emits both the explicit
class selector (`.theme--dark`) and `@media (prefers-color-scheme: dark)` from
a single `@include`, so neither path is ever forgotten.

```scss
@layer css-ui-utilities {
  @layer theme-variants {
    @include tools.dark-theme-layer(vars.$css-ui-dark-theme-class) {
      @include theme-dark-builder;
    }
  }
}
```

### 1.7 Composition (Extend) for Component Inheritance

**Pattern:** Child components extend their parent using `@extend … !optional`.
The `!optional` flag keeps partial builds safe when the parent isn't in scope.

```scss
// ExpressiveButton inherits all SimpleButton styles
@extend .simple-button !optional;
```

This avoids duplicating the full base style set in the child component.

### 1.8 Naming Conventions

| Concept | Convention | Example |
|---|---|---|
| CSS custom property | `--{var-prefix}{component-name}-{layer}-{slot}` | `--simple-button-semantic-surface` |
| Variant token | `--{prefix}{component-prefix}{name}-variant-{mode}-{slot}` | `--simple-button-variant-filled-background` |
| State+variant token | `--{prefix}{component-prefix}{name}-state-active-variant-{mode}-{slot}` | `--simple-button-state-active-variant-filled-background` |
| SCSS variable | `$css-ui-{purpose}` (with `!default`) | `$css-ui-var-prefix` |
| Modifier class | `.button-{modifier}` | `.button-outlined`, `.button-lg` |
| Subpart class | `.button-{slot}` | `.button-icon`, `.button-image` |

---

## 2. Current css-ui Patterns vs Proposed Patterns

### 2.1 What Already Matches Vuetify Patterns ✅

The `copilot/refactor-css-ui-library` work (PR #13) already introduced:

- **Component file split** – `simple-button/` and `expressive-button/` directories with `_variables`, `_mixins`, and entry files.
- **Three-tier token system** – `theme-base → theme-semantic → component-tokens` cascade layers in `SimpleButton.scss`.
- **`interaction-states` mixin** – defined once in `src/styles/tools/_theme-builder.scss` and used in both button entry files.
- **`!default` variable overrides** – all `$css-ui-*` variables are `!default` so consumers can configure per-`@use`.
- **`@extend !optional`** – `ExpressiveButton` composes `SimpleButton` safely.

### 2.2 Gaps Addressed in This PR

| Gap (before) | Solution (after) |
|---|---|
| Button layout, subparts, and disabled rules were raw CSS in `SimpleButton.scss` – any future button component would copy-paste them | Extracted to `src/generic/_button-base.scss` mixins: `button-base-layout()`, `button-parts()`, `button-disabled-state()` |
| Dark-theme section in both button files repeated `.theme--dark { … }` + `@media (prefers-color-scheme: dark) { … }` verbatim | Both entry files now use `@include tools.dark-theme-layer(…) { … }` |
| No documented blueprint for generalising to other components | This document + the generic abstractions serve as the reference |

### 2.3 Intentionally Retained Duplication

| Duplication | Reason it stays |
|---|---|
| Prefix variables (`$css-ui-class-prefix`, `$css-ui-var-prefix`, etc.) declared in both `_variables.scss` files | SCSS module system requires `!default` in the file being `@use`d with `with (…)`. Sharing via `@forward` would prevent consumer overrides. Each component must own its own configurable defaults. |
| `$color`, `$color--light`, `$active-color` in both `_variables.scss` files | `ExpressiveButton` uses these to derive its shadow colour independently of whether `SimpleButton` is in scope. They are a controlled, documented cross-component API mirror. |
| `simple-button-vars()` mixin (14 params) local to `SimpleButton` | The mixin references `SimpleButton`-specific token names. `ExpressiveButton` has a structurally similar but semantically different token set. Merging them would create a fragile mega-mixin. |

---

## 3. Blueprint Application: SimpleButton

### Files changed

```
src/atoms/buttons/simple-button/SimpleButton.scss  ← uses shared mixins
src/generic/_button-base.scss                       ← new shared primitives
src/generic/_index.scss                             ← forwards button-base
```

### What changed

1. **`@use "../../../generic/button-base" as base`** added to imports.
2. Raw layout block (position, display, flex, font-weight, text-transform, gap,
   padding, cursor, transition) replaced by `@include base.button-base-layout(vars.$css-ui-var-prefix)`.
3. Raw `.button-icon` / `.button-image` subpart block replaced by
   `@include base.button-parts(vars.$css-ui-var-prefix)`.
4. Raw `&.button-disabled { … }` block replaced by
   `@include base.button-disabled-state`.
5. Dark-theme section uses `@include tools.dark-theme-layer(…)` instead of
   repeating the class selector and media query.

### What stays the same (by design)

- All token assignment, variant rules, size/shape modifiers, and interaction
  states remain in the entry file – they are component-specific.
- The three-tier token cascade layers are unchanged.
- The public CSS API is identical; zero breaking changes.

---

## 4. Blueprint Application: ExpressiveButton

### Files changed

```
src/molecules/buttons/expressive-button/ExpressiveButton.scss ← dark-theme-layer
```

### What changed

Dark-theme section uses `@include tools.dark-theme-layer(…)` instead of the
repeated selector + media-query pattern. This matches the SimpleButton change
exactly, demonstrating the shared pattern.

### What stays the same (by design)

- Token definitions, variant integrations (rollup, popup, strong-elevation),
  and `@extend` inheritance are unchanged.
- The public CSS API is identical; zero breaking changes.

---

## 5. Shared Abstractions: `src/generic/_button-base.scss`

```scss
// Three mixins, zero CSS output when not @include-d

@mixin button-base-layout($var-prefix: "") { … }  // layout + flex + transition
@mixin button-parts($var-prefix: "") { … }         // .button-icon, .button-image
@mixin button-disabled-state { … }                 // .button-disabled
```

**Rules for using these mixins in new components:**

1. Always pass `vars.$css-ui-var-prefix` as `$var-prefix` so the spacing/timing
   tokens resolve to the component's own custom property namespace.
2. `button-base-layout` provides the structural foundation. Any component that
   looks like a button but differs in shape/colour still gets consistent focus,
   cursor, and transition behaviour.
3. `button-parts` enforces the shared `.button-icon` / `.button-image` API.
   All button-shaped components must use these class names for slots so that
   icon sizing and image clipping stay consistent across the system.
4. `button-disabled-state` uses a CSS class (`.button-disabled`) instead of
   the `:disabled` pseudo-class, making it applicable to `<a>`, `<div>`, and
   `<button>` elements equally.

---

## 6. Phased Migration Strategy

### Phase 1 – Button Blueprint ✅ (this PR)

- [x] Create `src/generic/_button-base.scss` with three mixins.
- [x] Apply mixins to `SimpleButton` (demonstrates the pattern).
- [x] Apply `dark-theme-layer()` to both button components.
- [x] Document the reuse strategy in this file.

### Phase 2 – Button Family

Apply the same three-file split and generic-mixin pattern to all remaining
button-family components. Candidates (in dependency order):

1. `ButtonLargeIcon` – extend `SimpleButton`, add icon-size override.
2. `ButtonParallelogram` – extend `SimpleButton`, add clip-path variant.
3. `CyberpunkButton` – standalone variant; use `button-base-layout` + its own
   variable file.
4. `IconFocusButton` – extend `ExpressiveButton`.
5. `NeonButton` – standalone; use `button-base-layout`.

For each:
- Create `component-name/` directory with `_variables`, `_mixins`, entry.
- Keep the flat `ComponentName.scss` shim for backward compatibility
  (`@use` or `@forward` the new canonical path).
- Replace any copy-pasted layout/parts/disabled blocks with the shared mixins.

### Phase 3 – Non-Button Components

Non-button components (cards, lists, panels, highlights) will not use
`button-base-layout` but will follow the same pattern for their own structural
primitives. For each category, introduce a corresponding file:

| Category | Shared primitive file |
|---|---|
| Cards | `src/generic/_card-base.scss` |
| Lists | `src/generic/_list-base.scss` |
| Panels | `src/generic/_panel-base.scss` |

Each follows the same principle: only mixins, no CSS output, forwarded via
`src/generic/_index.scss`.

### Phase 4 – Token Audit

Once all components are split and using shared mixins, run a token audit:
- Identify any CSS custom property that appears in more than one component's
  `_variables.scss` with the same name and semantics.
- Promote genuinely shared tokens to `src/styles/settings/_semantic.scss`.
- Document which tokens are "component-scoped" (intentional duplication) vs
  "system-wide" (should be in settings).

---

## 7. Validation Notes

### What repetition was removed

| Before | After | Lines saved |
|---|---|---|
| Raw layout block (position, display, flex, font, cursor, transition) in `SimpleButton.scss` | `@include base.button-base-layout(…)` | ~10 |
| Raw `.button-icon` / `.button-image` block | `@include base.button-parts(…)` | ~8 |
| Raw `&.button-disabled { … }` block | `@include base.button-disabled-state` | ~3 |
| Repeated `.theme--dark { … }` + `@media` in `SimpleButton.scss` | `@include tools.dark-theme-layer(…)` | ~4 |
| Repeated `.theme--dark { … }` + `@media` in `ExpressiveButton.scss` | `@include tools.dark-theme-layer(…)` | ~4 |

Total: approximately **29 lines removed** from the two component entry files,
replaced by 5 mixin calls and 1 additional `@use` import.

### What remains intentionally duplicated

- **Prefix `$css-ui-*` variables** in both `_variables.scss` files: required
  by the SCSS module `@use … with (…)` override pattern.
- **`$color`, `$active-color` inputs** in `ExpressiveButton/_variables.scss`:
  needed to derive shadow colours when `SimpleButton` is not in scope.
- **`simple-button-vars()` mixin** and the 14-param call in `SimpleButton.scss`:
  too component-specific to share without coupling the two components.
- **Three-tier token cascade** (`theme-base`, `theme-semantic`,
  `component-tokens`) in `SimpleButton.scss`: intentional and correct; it
  defines the token flow for `SimpleButton` alone. `ExpressiveButton` adds
  only its own tokens on top via `@extend`.

### How the button blueprint generalises

Any future component that is button-shaped follows this checklist:

1. `@use "src/generic/button-base"` in the component entry.
2. Call `button-base-layout`, `button-parts`, `button-disabled-state`.
3. Define component-specific tokens in `_variables.scss`.
4. Write a `token-builder` mixin in `_mixins.scss`.
5. Use `dark-theme-layer()` for the dark section.
6. Use `interaction-states()` for hover/active/focus.

The result is a component whose **structure, dark theme, and interaction
behaviour are 100 % consistent** with every other button in the library,
while its colours, sizes, and shape modifiers remain fully customisable.
