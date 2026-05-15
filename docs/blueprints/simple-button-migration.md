# Migration Blueprint: Interactive Component (SimpleButton pattern)

> **Reference migration:** `old-src/atoms/buttons/SimpleButton.scss` → `src/atoms/buttons/simple-button/`
>
> Use this blueprint for any interactive component (buttons, chips, toggles, links) that has size/shape
> variants, active/hover states, and appearance modes (outlined, plain, flat, elevated).

---

## What changed at a glance

| Aspect | v1.3 (old) | v2.0 (new) |
|---|---|---|
| File structure | Single monolithic `.scss` | `_variables.scss` + `index.scss` |
| Token ownership | All tokens inline | Component tokens only in `_variables.scss` |
| Structural CSS | Written directly | `generics.base-layout` + `generics.button-layout` |
| Size variants | Explicit `button-xs/sm/lg/xl` blocks | `generics.generate-button-sizes(...)` |
| Interaction states | Manual `.animate-active`, `.animate-on-hover:hover`, `.animate-on-active.active` | `generics.interaction-states { ... }` |
| Theme handling | Component-owned `$color--light/dark` + `@mixin theme-dark-builder` | Semantic vars (`--main-color`, `--active-main-color`) consumed externally |
| Elevation | Hardcoded `box-shadow` values per level | `generics.elevation-generator($level)` + `generics.elevation-transition()` |

---

## Phase 1 — Inventory the old component

Before writing any new code, identify these five buckets in the old file:

1. **Public API** — root class, modifier classes, child element classes, state classes.
2. **Design tokens** — size, spacing, radius, duration, opacity, border widths.
3. **Color tokens** — `$color--light/dark`, `$active-color--light/dark`, derived variants (outlined, plain, shadow…).
4. **Interaction selectors** — which classes trigger the "active" visual state.
5. **Dark-theme fork** — the `@mixin theme-dark-builder` block and the two call-sites that apply it.

> Do not start rewriting until this inventory is clear and written down.

---

## Phase 2 — Create `_variables.scss`

Keep this file minimal. It should contain only:

```scss
// _variables.scss
@use '../../../_generics/variables' as globals;
@forward '../../../_generics/variables';

$css-ui-component-name: 'your-component-name' !default;

// Component-specific tokens only
$padding:              8px  !default;
$border-radius:        2px  !default;
$duration:             0.3s !default;
// … other tokens unique to this component

$css-ui-component-prefix: globals.$css-ui-prefix + $css-ui-component-name + '-';
```

**Rules:**
- Keep tokens that only make sense for this component.
- Do **not** copy the old `$color--light`, `$color--dark`, or `$active-color--*` trees. Color is now provided by semantic vars.
- Keep `$duration` only if the component has its own default that differs from the global default.

---

## Phase 3 — Create a thin `index.scss`

> **For button components that extend simple-button** (e.g. expressive-button), use the
> `simple-button-architecture` mixin from
> `src/atoms/buttons/simple-button/_architecture.scss` instead of the expanded form below.
> See `docs/blueprints/component-extension-architecture.md` for that pattern.

For other interactive components (or as a reference showing what the mixin does internally),
the entry file should follow this shape:

```scss
// index.scss
@use '../../../_generics' as generics;
@use 'variables' as vars;
@forward 'variables';

$component-map: (
    padding:              vars.$padding,
    duration:             vars.$duration,
    border-radius:        vars.$border-radius,
    // … other component tokens
);

%#{vars.$css-ui-class-prefix}#{vars.$css-ui-component-name},
.#{vars.$css-ui-class-prefix}#{vars.$css-ui-component-name} {

    // 1. Emit CSS custom properties
    @include generics.generate-vars($component-map, vars.$css-ui-component-prefix);

    // 2. Shared structural layout
    @include generics.base-layout(vars.$css-ui-component-prefix);
    @include generics.button-layout(vars.$css-ui-component-prefix);

    // 3. Elevation (for components that have shadow)
    @include generics.elevation-generator(2);
    @include generics.elevation-transition();

    // 4. Component-specific CSS that does not belong in any generic
    font-weight: 500;
    text-transform: uppercase;
    @include generics.transition-properties(
        (box-shadow, transform, opacity, background, color, border),
        var(--#{vars.$css-ui-class-prefix}duration)
    );

    // 5. Variant size tiers — map-driven, no manual blocks needed
    @include generics.generate-button-sizes(vars.$css-ui-component-prefix);

    // 6. Mode/appearance variants
    &.button-flat     { @include generics.elevation-generator(0); }
    &.button-elevated { @include generics.elevation-generator(4); }
    &.button-icon-only { padding: 0.5em; }

    &.button-outlined {
        color: rgba(var(--#{vars.$css-ui-prefix}main-color) / var(--#{vars.$css-ui-prefix}main-color-opacity, 1));
        background-color: transparent;
        border-width: var(--#{vars.$css-ui-component-prefix}outlined-border-width);
        border-style: solid;
        border-color: currentColor;
    }

    &.button-plain {
        color: rgba(var(--#{vars.$css-ui-prefix}main-color) / var(--#{vars.$css-ui-prefix}main-color-opacity, 1));
        background: transparent;
    }

    // 7. Disabled state
    &.#{vars.$css-ui-prefix}disabled,
    [disabled] {
        opacity: 0.25;
        cursor: not-allowed;
    }

    // 8. Interaction states (replaces all old animate-active / hover / on-active selectors)
    @include generics.interaction-states {
        @include generics.elevation-generator(4);

        &.button-elevated { @include generics.elevation-generator(5); }
        &.button-flat     { @include generics.elevation-generator(0); }

        &.button-outlined {
            color: rgba(var(--#{vars.$css-ui-prefix}active-main-color) / var(--#{vars.$css-ui-prefix}active-main-color-opacity, 1));
            border-color: currentColor;
            background: transparent;
        }

        &.button-plain {
            color: rgba(var(--#{vars.$css-ui-prefix}active-main-color) / var(--#{vars.$css-ui-prefix}active-main-color-opacity, 1));
            background: transparent;
        }
    }
}
```

---

## Phase 4 — Replace old color token model with semantic vars

**Old pattern:**
```scss
$color--light: ...;
$color--dark: ...;
$active-color--light: ...;
$active-color--dark: ...;
// + @mixin theme-dark-builder { ... }
// + .theme--dark { @include theme-dark-builder; }
// + @media (prefers-color-scheme: dark) { @include theme-dark-builder; }
```

**New pattern:** consume semantic CSS vars set by utility classes or by the user:
```scss
color: rgba(var(--#{vars.$css-ui-prefix}main-color) / var(--#{vars.$css-ui-prefix}main-color-opacity, 1));
// active state:
color: rgba(var(--#{vars.$css-ui-prefix}active-main-color) / var(--#{vars.$css-ui-prefix}active-main-color-opacity, 1));
```

**Rule:** if a component only changes appearance based on "current semantic color," remove all internal dark-theme branches. The component does not own the theme; it responds to it.

---

## Phase 5 — Normalize interaction states

Replace every occurrence of:

| Old selector | Replacement |
|---|---|
| `&.animate-active` | inside `@include generics.interaction-states { }` |
| `&.animate-on-hover:hover` | inside `@include generics.interaction-states { }` |
| `&.animate-on-active.active` | inside `@include generics.interaction-states { }` |

Any behavior that truly belongs exclusively to one trigger (e.g., one-shot animation on `.animate-once`) can remain as a standalone modifier outside the shared mixin.

---

## Phase 6 — Convert size/variant tiers to generators

**Old — explicit blocks:**
```scss
&.button-xs { font-size: 0.5em;  gap: ...; padding: ...; }
&.button-sm { font-size: 0.75em; gap: ...; padding: ...; }
&.button-lg { font-size: 1.25em; gap: ...; padding: ...; }
&.button-xl { font-size: 1.5em;  gap: ...; padding: ...; }
```

**New — single generator call:**
```scss
@include generics.generate-button-sizes(vars.$css-ui-component-prefix);
```

For components with non-button tiers (e.g., a card with size variants), either use an existing generator or, if at least two other components will benefit, create a new shared generator in `_generics`.

---

## Phase 7 — Keep truly unique behavior local

Only keep inside the component what cannot be expressed through shared generics:

✅ Keep local:
- Unique padding/shape math (e.g., the `button-circular` horizontal padding formula)
- Component-specific border-radius overrides
- Non-standard child element sizing rules

❌ Move to generics or remove:
- Light/dark theme duplication
- Generic hover/active shadow logic → use `interaction-states` + `elevation-generator`
- Standard icon/image slot rules → use `button-layout`
- Repeated size tiers → use `generate-button-sizes`

---

## Checklist for each migrated interactive component

- [ ] `_variables.scss` created with component-specific tokens only
- [ ] `index.scss` created with `@forward 'variables'`
- [ ] `generate-vars` called with token map
- [ ] `base-layout` applied
- [ ] `button-layout` applied (or equivalent for non-button interactive components)
- [ ] `elevation-generator` + `elevation-transition` used for shadow levels
- [ ] `generate-button-sizes` used for size tiers (or generator equivalent)
- [ ] All interaction selectors migrated into `interaction-states`
- [ ] Old `$color--light/dark` trees removed; semantic vars consumed instead
- [ ] Old `theme-dark-builder` mixin and its two call-sites removed
- [ ] Public class names unchanged (root class + all modifier classes)
- [ ] Visual output matches old behavior at default, hover/active, and disabled states
- [ ] Size and shape modifier classes still work
- [ ] Outlined, plain, flat, elevated modes still work
