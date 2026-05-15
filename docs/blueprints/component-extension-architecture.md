# Component Extension Architecture Blueprint

> **Canonical example in this repo:**
> - Component architecture blueprint: `src/atoms/buttons/simple-button/_architecture.scss` → `simple-button-architecture` mixin
> - Base component: `src/atoms/buttons/simple-button/index.scss`
> - Extended component: `src/molecules/buttons/expressive-button/index.scss`

---

## What this document covers

How to build and maintain a component library where components can be **architectural extensions** of others — e.g. `expressive-button` is a specialized button built on the same internal foundation as `simple-button` — without using brittle CSS selector inheritance between concrete public components.

This standard applies to **every component directory under `src/*`** (`atoms`, `molecules`, `organisms`, etc.): each component owns a local architecture blueprint module (`_architecture.scss`), even if it is not currently extended.

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
┌───────────────────────────────────────────────────────────┐
│  Layer 1 — Component architecture blueprint               │
│  e.g. simple-button-architecture mixin in                 │
│       src/atoms/buttons/simple-button/_architecture.scss  │
│  Contains: layout, elevation, typography, variants,        │
│            interaction states, size tiers                 │
└──────────────────────────┬────────────────────────────────┘
                           │  @include
          ┌────────────────┴────────────────┐
          ▼                                 ▼
┌─────────────────────┐           ┌──────────────────────────┐
│ Layer 2             │           │ Layer 3                  │
│ Base component      │           │ Extended component        │
│ simple-button       │           │ expressive-button         │
│ (public selector)   │           │ (public selector)         │
│                     │           │                          │
│ @include blueprint  │           │ @include blueprint       │
│ (no extras needed)  │           │ + expressive-only rules  │
└─────────────────────┘           └──────────────────────────┘
```

### Layer 1 — Component architecture blueprint

A **mixin** that lives next to the base component it belongs to (e.g.
`src/atoms/buttons/simple-button/_architecture.scss`) and:

- Is **not** a public component; it emits no selector on its own.
- Accepts a `$prefix` and `$color-map` so each consuming component keeps its own namespaced CSS custom properties.
- Covers every behavior shared by the base component and all its extensions.
- Lives in the base component's directory, **not** in `_generics/`, because it
  encodes that component's specific composition strategy.

```scss
// src/atoms/buttons/simple-button/_architecture.scss
@use '../../../_generics' as generics;

@mixin simple-button-architecture($prefix, $color-map) {
    @include generics.generate-vars($color-map, $prefix);
    @include generics.base-layout($prefix);
    @include generics.button-layout($prefix);
    @include generics.elevation-generator(2);
    @include generics.elevation-transition();
    font-weight: 500;
    text-transform: uppercase;
    // … size tiers, shape variants, appearance variants, disabled state, interaction states
}
```

### Layer 2 — Base component

A public component that composes **entirely** from the architecture blueprint.

```scss
// src/atoms/buttons/simple-button/index.scss
@use 'architecture' as arch;
@use 'variables' as vars;
@forward 'variables';

%#{vars.$css-ui-class-prefix}#{vars.$css-ui-component-name},
.#{vars.$css-ui-class-prefix}#{vars.$css-ui-component-name} {
    @include arch.simple-button-architecture(vars.$css-ui-component-prefix, $component-color-map);
    // Nothing else required — the blueprint covers all standard behavior.
}
```

### Layer 3 — Extended (specialized) component

A public component that composes from the **same architecture blueprint** and **adds its own extras**.

```scss
// src/molecules/buttons/expressive-button/index.scss
@use '../../../_generics' as generics;
@use '../../../atoms/buttons/simple-button/architecture' as simple-button-arch;
@use 'variables' as vars;
@forward 'variables';

%#{vars.$css-ui-class-prefix}#{vars.$css-ui-component-name},
.#{vars.$css-ui-class-prefix}#{vars.$css-ui-component-name} {
    // Same blueprint as simple-button, using expressive-button's own prefix.
    @include simple-button-arch.simple-button-architecture(vars.$css-ui-component-prefix, $component-color-map);

    // expressive-button-specific additions only:
    &.rollup-button  { @include highlight-rollup-arch.highlight-rollup-architecture(); }
    &.popup-button   { @include highlight-popup-arch.highlight-popup-architecture(); /* … */ }
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
// Compose from the component's own architecture blueprint using its own prefix.
.expressive-button {
    @include simple-button-arch.simple-button-architecture(vars.$css-ui-component-prefix, $component-color-map);
}
```

```scss
// Add component-specific tokens with !default so consumers can override.
$padding: 8px !default;
$border-radius: 2px !default;
$elevation-height: 8px !default; // expressive-button-specific
```

```scss
// Compose highlight behavior through its architecture blueprint.
&.rollup-button {
    @include highlight-rollup-arch.highlight-rollup-architecture();
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
// Never duplicate the blueprint body manually in the extended component.
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
- [ ] Create `src/<tier>/buttons/<name>/_architecture.scss`
  - `@use '../../../atoms/buttons/simple-button/architecture' as simple-button-arch;`
  - `@use 'variables' as vars;`
  - Build a `$component-color-map` that includes all required keys plus your extras
  - Define `@mixin <name>-architecture()` and include `simple-button-architecture(...)` first
  - Add only the component-specific rules **after** the blueprint include
- [ ] Create or update `src/<tier>/buttons/<name>/index.scss`
  - `@use 'architecture' as arch;`
  - `@use 'variables' as vars; @forward 'variables';`
  - Root selector only composes the local blueprint: `@include arch.<name>-architecture();`
- [ ] Run `npm run build` — verify no Sass errors
- [ ] Run `npm run test` — verify all tests pass
- [ ] Update component documentation to note that the public class contract includes all standard button variants (via the shared blueprint)
- [ ] **Do not** add `@extend .simple-button !optional` or any other concrete-selector extend across button components

---

## Naming convention and file placement standard

Every component under `src/*` should own its architecture blueprint in its own directory:

| Component | Blueprint file | Mixin name |
|---|---|---|
| `simple-button` | `src/atoms/buttons/simple-button/_architecture.scss` | `simple-button-architecture` |
| `simple-card` | `src/molecules/cards/simple-card/_architecture.scss` | `simple-card-architecture` |
| `pricing-card` | `src/organisms/cards/pricing-card/_architecture.scss` | `pricing-card-architecture` |

**Rules:**
- The blueprint file is named `_architecture.scss` and lives in the component directory.
- The mixin is named `<component-name>-architecture`.
- Each component `index.scss` composes its own local architecture mixin.
- Extension components `@use` the base component's architecture file directly.
- Truly generic, broadly reusable primitives (e.g. `button-layout`, `generate-button-sizes`) continue to live in `src/_generics/`.
- Component-specific composition logic does **not** live in `src/_generics/`.

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
- `src/atoms/buttons/simple-button/_architecture.scss` — `simple-button-architecture` mixin source
- `src/_generics/_base_buttons.scss` — generic button primitives (`button-layout`, `generate-button-sizes`)
- `src/_generics/_base.scss` — `base-layout`, `transition-properties`
- `src/_generics/_elevation.scss` — `elevation-generator`, `elevation-transition`
- `src/_generics/_utils.scss` — `generate-vars`, `interaction-states`
