# Button Component Blueprint
<Badge type="tip">Architecture Guide</Badge>

This document explains the **Vuetify-inspired reuse patterns** introduced for
`SimpleButton` and `ExpressiveButton`.  It serves as the canonical blueprint
for creating any future button-like component in this library.

---

## Background and motivation

Prior to this refactor the two button components (`SimpleButton` and
`ExpressiveButton`) repeated the same structural layout, sub-element styles
(`button-icon`, `button-image`), and disabled-state logic verbatim.  Variant
modifiers (size, shape, colour mode) were expressed as hard-coded nested
`&.button-*` selectors with no shared abstraction.

The goals of this blueprint are:

1. **Extract shared primitives** into single-source mixins that can be
   composed into any button-like component.
2. **Replace hard-coded modifier selectors** with parameterised tool mixins
   from `src/tools/`.
3. **Document the layering strategy** so future contributors follow the same
   pattern instead of inventing a new one.

---

## Architecture overview

```
src/
├── generic/
│   ├── _button-base.scss   ← NEW: shared layout/parts/disabled primitives
│   └── _tokens.scss        ← existing: token-layer + component-token-block mixins
├── tools/
│   ├── _size.scss          ← button-size() mixin  → generates &.button-{xs,sm,lg,xl}
│   ├── _shape.scss         ← button-shape() mixin → generates &.button-{rounded,circular,pill}
│   ├── _variant.scss       ← button-variant() mixin → generates &.button-{flat,outlined,...}
│   └── _states.scss        ← interaction-states() mixin (hover/active)
└── atoms/buttons/
    └── simple-button/
        ├── _variables.scss ← all SCSS config variables with !default
        ├── _mixins.scss    ← component-specific token-builder mixin
        └── SimpleButton.scss ← assembly: uses all of the above
```

---

## Shared primitives (`src/generic/_button-base.scss`)

Three mixins cover everything that is **identical** across all button components:

### `button-base-layout($var-prefix)`

Applies structural layout, typography scale, and CSS transitions.

```scss
@use "src/generic/button-base" as button-base;

.my-button {
  @include button-base.button-base-layout("");
  // Emits: position, z-index, display, align-items, justify-content,
  //        font-weight, text-transform, gap, padding, border-radius,
  //        cursor, transition-property, transition-duration,
  //        transition-timing-function
}
```

The `$var-prefix` must match the prefix used when the component defines its
design tokens.  Pass `""` for the global (un-namespaced) convention used by
this library.

### `button-parts($var-prefix)`

Styles `.button-icon` and `.button-image` child elements.

```scss
.my-button {
  @include button-base.button-parts("");
}
```

### `button-disabled-state($variant-class)`

Applies `opacity: 0.25; cursor: not-allowed` for the disabled modifier.

```scss
.my-button {
  @include button-base.button-disabled-state(); // → &.button-disabled { … }
}
```

---

## Tool mixins (`src/tools/`)

These generate modifier selectors without hard-coding `&.button-*` everywhere.

| Mixin | Generates | Import path |
|-------|-----------|-------------|
| `tools.button-size("xs")` | `&.button-xs { … }` | `src/tools/_size.scss` |
| `tools.button-shape("rounded")` | `&.button-rounded { … }` | `src/tools/_shape.scss` |
| `tools.button-variant("flat")` | `&.button-flat { … }` | `src/tools/_variant.scss` |
| `tools.interaction-states` | `&.animate-active, &.animate-on-active.active, &.animate-on-hover:hover { … }` | `src/tools/_states.scss` |

All are available from the single aggregator `src/tools/_index.scss`:

```scss
@use "src/tools" as tools;

.my-button {
  @include tools.button-size("lg") { font-size: 1.25em; }
  @include tools.button-shape("pill") { border-radius: 5em; }
  @include tools.button-variant("outlined") { border-style: solid; }
  @include tools.interaction-states { background-color: var(--active-bg); }
}
```

---

## Design token layering strategy (base → semantic → component)

Every button component uses three `@layer` blocks to keep token overrides
predictable and composable:

```
@layer css-ui-utilities {
  @layer theme-base { … }      ← raw Sass variable → CSS custom property
  @layer theme-semantic { … }  ← semantic alias (surface, on-surface, outline…)
  @layer component-tokens { … }← variant tokens consumed by the component CSS
}
```

This mirrors the **Material Design 3 / Vuetify** token cascade:

```
Sass variable ($color)
  ↓  [theme-base layer]
--{component}-base-color
  ↓  [theme-semantic layer]
--{component}-semantic-surface
  ↓  [component-tokens layer]
--{component}-variant-filled-background
  ↓  [CSS rule]
background-color: var(--{component}-variant-filled-background)
```

Dark-theme overrides only need to re-declare the **Sass-variable level** via
the `theme-dark-builder` mixin, which calls the component's token-builder
mixin with the dark-theme variable set.

---

## How `ExpressiveButton` extends `SimpleButton`

`ExpressiveButton` demonstrates the **variant layering strategy**:

1. `@extend .simple-button !optional` — inherits ALL of SimpleButton's CSS
   rules (layout, sizes, shapes, variants, interactions) without duplication.
2. Declares its own expressive-specific tokens (`--expressive-color`,
   `--elevation-height`, etc.) on top of the inherited token chain.
3. Adds extra variant classes (`.rollup-button`, `.popup-button`,
   `.strong-elevation`) that consume those new tokens.

```scss
// expressive-button/ExpressiveButton.scss (excerpt)
.expressive-button {
  @extend .simple-button !optional;        // ← inherit everything

  // layer expressive tokens on top
  --expressive-color: …;
  --elevation-height: …;

  // add expressive-only variant selectors
  &.rollup-button { … }
  &.popup-button  { … }
  &.strong-elevation { … }
}
```

---

## How to create a new button-like component

Follow these steps:

### 1. Create the component directory

```
src/atoms/buttons/my-button/
  _variables.scss   ← all !default SCSS variables
  _mixins.scss      ← token-builder mixin + dark-theme-builder mixin
  MyButton.scss     ← assembly file
```

### 2. Write `_variables.scss`

Copy the prefix/naming block from SimpleButton's `_variables.scss` and add
component-specific color and layout variables.

### 3. Write `_mixins.scss`

Define a `my-button-vars($bg, $on-bg, …)` mixin that writes the component's
CSS custom properties.  Include a `theme-dark-builder` mixin that calls it
with the dark-theme variable set.

### 4. Write `MyButton.scss` (assembly)

```scss
@use "variables" as vars;
@use "mixins" as *;
@use "../../../tools" as tools;            // size + shape + variant + interaction-states
@use "../../../generic/button-base" as button-base; // layout + parts + disabled

.my-button {
  @include my-button-vars(vars.$background, …);  // write tokens

  // Shared layout (blueprint)
  @include button-base.button-base-layout(vars.$css-ui-var-prefix);

  // Component-specific appearance
  background-color: var(--my-button-variant-filled-background);
  color:            var(--my-button-variant-filled-on-background);

  // Sub-elements (blueprint)
  @include button-base.button-parts(vars.$css-ui-var-prefix);

  // Size variants (blueprint)
  @include tools.button-size("xs") { font-size: 0.5em; … }
  @include tools.button-size("sm") { font-size: 0.75em; … }
  @include tools.button-size("lg") { font-size: 1.25em; … }
  @include tools.button-size("xl") { font-size: 1.5em; … }

  // Shape variants (blueprint)
  @include tools.button-shape("rounded")  { border-radius: 28%; … }
  @include tools.button-shape("circular") { border-radius: 50%; … }
  @include tools.button-shape("pill")     { border-radius: 5em; … }

  // Colour/appearance variants (blueprint)
  @include tools.button-variant("outlined") { border-style: solid; … }
  @include tools.button-variant("plain")    { background: transparent; … }

  // Disabled state (blueprint)
  @include button-base.button-disabled-state();

  // Interaction states (blueprint)
  @include tools.interaction-states {
    background-color: var(--my-button-state-active-variant-filled-background);
    …
  }
}

// Token flow layers
@layer css-ui-utilities {
  @layer theme-base     { .my-button { … } }
  @layer theme-semantic { .my-button { … } }
  @layer component-tokens { .my-button { … } }
}

// Dark theme
@layer css-ui-utilities {
  @layer theme-variants {
    .theme--dark { @include theme-dark-builder; }
    @media (prefers-color-scheme: dark) { @include theme-dark-builder; }
  }
}
```

### 5. Register in the index

Add a forward in `src/index.scss`:

```scss
@forward "atoms/buttons/MyButton.scss" as button-my-*;
```

---

## Before / after: code repetition reduction

| Before (pre-refactor) | After (blueprint) |
|-----------------------|-------------------|
| Each component had its own `@mixin simple-button-interaction-selectors` | Single `tools.interaction-states` mixin from `src/tools` |
| `&.button-xs {}`, `&.button-sm {}` hard-coded in each component | `@include tools.button-size("xs") {}` — generated by shared mixin |
| `&.button-rounded {}`, `&.button-circular {}` hard-coded | `@include tools.button-shape("rounded") {}` — shared mixin |
| `&.button-flat {}`, `&.button-outlined {}` hard-coded | `@include tools.button-variant("flat") {}` — shared mixin |
| Layout properties copy-pasted between SimpleButton & ExpressiveButton | `@include button-base.button-base-layout()` — single source of truth |
| `.button-icon` / `.button-image` copy-pasted | `@include button-base.button-parts()` — single source of truth |
| Disabled state copy-pasted | `@include button-base.button-disabled-state()` — single source of truth |
| ExpressiveButton re-implemented all SimpleButton styles | `@extend .simple-button !optional` — zero repetition |

---

## Next-step rollout recommendations

1. **Apply to other atoms/molecules**: `ButtonLargeIcon`, `CyberpunkButton`,
   `NeonButton`, etc. follow the same three-file split and import the same
   `button-base` + `tools` utilities.  Replace `@import` with `@use`.
2. **Migrate legacy `@import` files**: `ButtonLargeIcon.scss` and
   `IconFocusButton.scss` still use `@import` (deprecated).  Convert them to
   `@use`/`@forward` and wire them to the new split directory.
3. **Expand `_button-base.scss`**: As more components are migrated, additional
   shared behaviours (e.g. focus-visible ring, loading spinner slot, icon-only
   padding logic) can be added as opt-in mixins alongside the existing three.
4. **Generalise to non-button components**: The same
   `_variables.scss` / `_mixins.scss` / `Component.scss` split and the same
   `@layer` token cascade apply to cards, panels, and any other component.
   Only the `button-base` import is button-specific; `tools` mixins are
   already generic.
