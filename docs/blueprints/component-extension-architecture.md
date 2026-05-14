# Component Extension Architecture Blueprint

> **Canonical example in this repo:**
> - Internal foundation: `src/_generics/_base_buttons.scss` → `button-component-core` mixin
> - Base component: `src/atoms/buttons/simple-button/index.scss`
> - Extended component: `src/molecules/buttons/expressive-button/index.scss`

---

## What this document covers

How to build a component library where some components are **architectural extensions** of others — e.g. `expressive-button` is a specialized button built on the same internal foundation as `simple-button` — without using brittle CSS selector inheritance between concrete public components.

---

## The problem with `@extend` on concrete public selectors

You might be tempted to write:

```scss
// ❌ Do NOT do this
.expressive-button {
    @extend .simple-button !optional;
    // ... extra rules
}
```

This is fragile because:

1. **Compile-order dependent.** If `simple-button` is not loaded before `expressive-button` in the current compilation unit, `!optional` silently skips the extend and the component is unstyled.
2. **Couples two public contracts.** The extended component becomes hard-wired to the exact selector output of the base component, not to a stable architectural contract.
3. **Token-prefix mismatch.** `simple-button` emits `--simple-button-*` CSS custom properties; `expressive-button` needs `--expressive-button-*` ones. Merging selectors does not fix that mismatch.
4. **Hard to reason about.** A reader of `expressive-button/index.scss` cannot predict what styles the component has without tracing the full extend chain across modules.

---

## The recommended model: three layers

```
┌───────────────────────────────────────────────────────┐
│  Layer 1 — Internal foundation (NOT a public selector) │
│  e.g. button-component-core mixin in _generics         │
│  Contains: layout, elevation, typography, variants,     │
│            interaction states, size tiers              │
└──────────────────────────┬────────────────────────────┘
                           │  @include
          ┌────────────────┴────────────────┐
          ▼                                 ▼
┌─────────────────────┐           ┌──────────────────────────┐
│ Layer 2             │           │ Layer 3                  │
│ Base component      │           │ Extended component        │
│ simple-button       │           │ expressive-button         │
│ (public selector)   │           │ (public selector)         │
│                     │           │                          │
│ @include foundation │           │ @include foundation      │
│ (no extras needed)  │           │ + expressive-only rules  │
└─────────────────────┘           └──────────────────────────┘
```

### Layer 1 — Internal foundation

A **mixin** (or set of mixins/placeholders) that lives in `src/_generics/` and:

- Is **not** a public component; it emits no selector on its own.
- Accepts a `$prefix` and `$color-map` so each consuming component keeps its own namespaced CSS custom properties.
- Covers every behavior shared by all button-like components.

```scss
// src/_generics/_base_buttons.scss
@mixin button-component-core($prefix, $color-map) {
    @include utils.generate-vars($color-map, $prefix);
    @include base.base-layout($prefix);
    @include button-layout($prefix);
    @include elev.elevation-generator(2);
    @include elev.elevation-transition();
    font-weight: 500;
    text-transform: uppercase;
    // … size tiers, shape variants, appearance variants, disabled state, interaction states
}
```

### Layer 2 — Base component

A public component that composes **entirely** from the internal foundation.

```scss
// src/atoms/buttons/simple-button/index.scss
%#{vars.$css-ui-class-prefix}#{vars.$css-ui-component-name},
.#{vars.$css-ui-class-prefix}#{vars.$css-ui-component-name} {
    @include generics.button-component-core(vars.$css-ui-component-prefix, $component-color-map);
    // Nothing else required — the foundation covers all standard behavior.
}
```

### Layer 3 — Extended (specialized) component

A public component that also composes from the same internal foundation and **adds its own extras**.

```scss
// src/molecules/buttons/expressive-button/index.scss
%#{vars.$css-ui-class-prefix}#{vars.$css-ui-component-name},
.#{vars.$css-ui-class-prefix}#{vars.$css-ui-component-name} {
    // Same foundation as simple-button, using expressive-button's own prefix.
    @include generics.button-component-core(vars.$css-ui-component-prefix, $component-color-map);

    // expressive-button-specific additions only:
    &.rollup-button  { @extend .highlight-rollup  !optional; }
    &.popup-button   { @extend .highlight-popup   !optional; /* … */ }
    &.strong-elevation { /* … */ }
}
```

---

## What belongs where

| Concern | Layer 1 (foundation mixin) | Layer 2 (base component) | Layer 3 (extended component) |
|---------|----------------------------|--------------------------|------------------------------|
| CSS custom property emission | ✅ via `generate-vars` | token map definition only | token map definition only (may add extra tokens) |
| Structural layout (`display`, `position`, `cursor`) | ✅ | — | — |
| Typography (`font-weight`, `text-transform`) | ✅ | — | — |
| Elevation (`box-shadow`) | ✅ resting level | — | ✅ if alternative resting level or special mode |
| Transition | ✅ | — | — |
| Size tiers (`button-sm`, `button-lg`, …) | ✅ | — | — |
| Shape variants (`button-rounded`, `button-pill`, …) | ✅ | — | — |
| Appearance variants (`button-outlined`, `button-plain`) | ✅ | — | — |
| Disabled state | ✅ | — | — |
| Shared interaction states | ✅ | — | ✅ if additional interaction rules are needed |
| Component-specific tokens only | — | ✅ in `_variables.scss` | ✅ in `_variables.scss` |
| Extended-only features (rollup, popup, strong-elevation) | — | — | ✅ |

---

## Dos and Don'ts

### ✅ Do

```scss
// Compose from a shared internal mixin using the component's own prefix.
.expressive-button {
    @include generics.button-component-core(vars.$css-ui-component-prefix, $component-color-map);
}
```

```scss
// Add component-specific tokens with !default so consumers can override.
$padding: 8px !default;
$border-radius: 2px !default;
$elevation-height: 8px !default; // expressive-button-specific
```

```scss
// Extend highlight components (non-button public selectors) with !optional.
// This is acceptable for orthogonal "widget-level" composition.
&.rollup-button {
    @extend .highlight-rollup !optional;
}
```

### ❌ Don't

```scss
// Never extend one concrete button selector from another.
.expressive-button {
    @extend .simple-button !optional; // ← brittle; broken when compiled separately
}
```

```scss
// Never duplicate the foundation body manually in the extended component.
.expressive-button {
    @include generics.generate-vars(...);
    @include generics.base-layout(...);
    @include generics.button-layout(...);
    // 100 lines copied from simple-button ← hard to maintain
}
```

```scss
// Never hard-code the base component's prefix inside the extended component.
.expressive-button {
    padding: var(--simple-button-padding); // ← wrong; uses base component's namespace
}
```

---

## How to add a new button extension

Follow this checklist for every new component that extends the button foundation.

- [ ] Create `src/<tier>/buttons/<name>/_variables.scss`
  - Forward `_generics/variables`
  - Add the required base token defaults: `$padding`, `$duration`, `$border-radius`, `$tonal-opacity`, `$outlined-border-width`
  - Add component-specific extra tokens
  - Derive `$css-ui-component-prefix`
- [ ] Create `src/<tier>/buttons/<name>/index.scss`
  - `@use '../../../_generics' as generics;`
  - `@use 'variables' as vars; @forward 'variables';`
  - Build a `$component-color-map` that includes all required keys plus your extras
  - Inside the root selector: `@include generics.button-component-core(vars.$css-ui-component-prefix, $component-color-map);`
  - Add only the component-specific rules **after** the foundation include
- [ ] Run `npm run build` — verify no Sass errors
- [ ] Run `npm run test` — verify all tests pass
- [ ] Update component documentation to note that the public class contract includes all standard button variants (via the shared foundation)
- [ ] **Do not** add `@extend .simple-button !optional` or any other concrete-selector extend across button components

---

## Difference between architectural extension and CSS selector inheritance

| | Architectural extension (✅ recommended) | CSS selector inheritance (`@extend`) |
|---|---|---|
| **How it works** | Both components include a shared mixin with their own prefix | One component's selector is appended to another component's rules |
| **Compile-order dependency** | None — each file is self-contained | Yes — base component must be compiled first |
| **CSS custom-property namespace** | Each component has its own `--<name>-*` tokens | Tokens from the base component bleed into the extension |
| **Output readability** | Each component's CSS is self-contained | Rules are scattered across merged selector lists |
| **Independent deliverability** | ✅ Each component can ship standalone | ⚠️ Extension is broken if base is absent |
| **Future-proofing** | ✅ Add tokens/variants without touching other components | ⚠️ Changes to base propagate unpredictably |

---

## See also

- `docs/blueprints/simple-button-migration.md` — how to migrate an existing component to the v2 generics pattern
- `src/_generics/_base_buttons.scss` — `button-component-core` mixin source
- `src/_generics/_base.scss` — `base-layout`, `transition-properties`
- `src/_generics/_elevation.scss` — `elevation-generator`, `elevation-transition`
- `src/_generics/_utils.scss` — `generate-vars`, `interaction-states`
