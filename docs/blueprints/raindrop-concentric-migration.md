# Migration Blueprint: Animation Component (RaindropConcentric pattern)

> **Reference migration:** `old-src/atoms/animations/RaindropConcentric.scss` → `src/atoms/animations/raindrop-concentric/`
>
> Use this blueprint for self-contained animation components: loaders, pulses, ripples, geometric effects,
> scroll indicators, and any other atom whose primary purpose is motion rather than interaction.

---

## What changed at a glance

| Aspect | v1.3 (old) | v2.0 (new) |
|---|---|---|
| File structure | Single monolithic `.scss` | `_variables.scss` + `index.scss` |
| Token ownership | All tokens inline, including color trees | Component tokens only in `_variables.scss` |
| Variable generation | `utils.var-builder` (includes color/active-color mapping) | `generics.generate-vars` with a plain token map |
| Base layout | Inline `position: absolute` + manual sizing | `generics.base-layout(...)` + component-specific positioning |
| Activation model | `.animate-active` / `.animate-once` handled by manual selectors | `generics.interaction-states { }` for activation; `.animate-once` kept as standalone modifier |
| Color source | Component-owned `$color--light/dark`, emitted as `--color` | Semantic vars `--main-color` / `--active-main-color` consumed from outside |
| Dark theme | `@mixin theme-dark-builder` + two call-sites | Removed — semantic vars handle it |
| Unique animation logic | Shared file | Still local: `@keyframes`, nth-child stagger, irregular-mode multipliers |
| Enhancements introduced during migration | None | `duration` added to generated vars; `animate-irregular` mode added |

---

## Phase 1 — Inventory the old component

Before writing any new code, identify these five buckets in the old file:

1. **Public API** — root class, activation classes (`.animate-active`, `.animate-once`), any modifier classes.
2. **Design tokens** — size, border/stroke, duration, count/number, multipliers.
3. **Color tokens** — `$color--light/dark`, `$active-color--light/dark`.
4. **Animation mechanics** — `@keyframes`, `animation-*` properties, nth-child delay/duration formulas.
5. **Dark-theme fork** — `@mixin theme-dark-builder` and its two call-sites.

> Do not start rewriting until this inventory is clear and written down.

---

## Phase 2 — Create `_variables.scss`

Keep this file minimal. It should only contain component-specific tokens:

```scss
// _variables.scss
@use '../../../_generics/variables' as globals;
@forward '../../../_generics/variables';

$css-ui-component-name: 'your-animation-name' !default;

// Geometry / timing tokens only — no color trees
$size:     150px !default;
$duration: 8s    !default;
$number:   4     !default;
// … any other tokens unique to this animation

$css-ui-component-prefix: globals.$css-ui-prefix + $css-ui-component-name + '-';
```

**Rules:**
- Keep size, stroke/border, duration, count, and any multiplier lists.
- Do **not** copy the old `$color--light`, `$color--dark`, or `$active-color--*` trees.
  Color is consumed from semantic vars; it is not the component's responsibility.
- If the animation exposes a `$duration` default that differs from the global default, keep it;
  otherwise it can be omitted and the global var used directly.

---

## Phase 3 — Create a thin `index.scss`

The entry file should follow this shape:

```scss
// index.scss
@use 'sass:math';
@use '../../../_generics' as generics;
@use 'variables' as vars;
@forward 'variables';

// Token map — only geometry/timing tokens, no colors
$component-map: (
    size:        vars.$size,
    border-size: vars.$border-size,
    duration:    vars.$duration,
);

%#{vars.$css-ui-class-prefix}#{vars.$css-ui-component-name},
.#{vars.$css-ui-class-prefix}#{vars.$css-ui-component-name} {

    // 1. Emit CSS custom properties
    @include generics.generate-vars($component-map, vars.$css-ui-component-prefix);

    // 2. Shared structural layout
    @include generics.base-layout(vars.$css-ui-component-prefix);

    // 3. Component-specific positioning/sizing not covered by base-layout
    position: absolute;
    transform: translate(-50%, -50%);
    font-size: var(--#{vars.$css-ui-prefix}#{vars.$css-ui-component-name}-size);

    // 4. Child element rules (keep these local — unique to this animation)
    & > * {
        position: absolute;
        top: -0.5em;
        left: -0.5em;
        width: 1em;
        height: 1em;
        border-width: var(--#{vars.$css-ui-component-prefix}border-size, 1px);
        border-style: solid;
        // Consume semantic color var (replaces old --color)
        border-color: rgba(var(--#{vars.$css-ui-prefix}main-color) / var(--#{vars.$css-ui-prefix}main-color-opacity, 1));
        border-radius: 50%;
        transform: scale(0);
        animation-iteration-count: infinite;

        // nth-child stagger — keep local, unique animation logic
        @for $i from 1 through vars.$number {
            &:nth-child(#{$i}) {
                animation-duration: var(--#{vars.$css-ui-component-prefix}duration);
                animation-delay: calc(var(--#{vars.$css-ui-component-prefix}duration) * #{math.div(1 - $i, vars.$number)});
            }
        }
    }

    // 5. Activation — use shared interaction-states mixin
    @include generics.interaction-states {
        & > * {
            animation-name: #{generics.$css-ui-class-prefix}#{vars.$css-ui-component-name}-animation;
        }
    }

    // 6. Standalone modifier that does not fit interaction-states
    //    (animate-once is a one-shot override, not a hover/active trigger)
    &.animate-once > * {
        animation-iteration-count: 1;
    }

    // 7. Keyframes — always local; never move to generics
    @keyframes #{generics.$css-ui-class-prefix}#{vars.$css-ui-component-name}-animation {
        80% { opacity: 1; }

        100% {
            opacity: 0;
            transform: scale(5);
            // Consume active semantic var; fall back to main-color
            border-color: rgba(
                var(--#{vars.$css-ui-prefix}active-main-color, var(--#{vars.$css-ui-prefix}main-color))
                / var(--#{vars.$css-ui-prefix}active-main-color-opacity, var(--#{vars.$css-ui-prefix}main-color-opacity, 1))
            );
        }
    }
}
```

---

## Phase 4 — Replace old color token model with semantic vars

**Old pattern:**
```scss
$color--light: guebbit.no-null-var(($color, #000));
$color--dark:  guebbit.no-null-var(($color, #fff));
// emitted as --color, --active-color

// + @mixin theme-dark-builder { ... }
// + .theme--dark { @include theme-dark-builder; }
// + @media (prefers-color-scheme: dark) { @include theme-dark-builder; }
```

**New pattern:** consume semantic CSS vars set by the theme or by the user:
```scss
// Default / idle state
border-color: rgba(var(--main-color) / var(--main-color-opacity, 1));

// Active / end-of-animation state
border-color: rgba(
    var(--active-main-color, var(--main-color))
    / var(--active-main-color-opacity, var(--main-color-opacity, 1))
);
```

Users can apply color via utility classes (`.use-brand`, `.text-primary`) or by setting the CSS vars
directly in HTML (`style="--main-color: var(--primary-500)"`).

**Rule:** if a component color changes only based on "current semantic color," remove all internal
dark-theme branches entirely.

---

## Phase 5 — Normalize the activation model

Replace old activation selectors with the shared mixin:

| Old selector | Replacement |
|---|---|
| `&.animate-active > * { animation-name: ... }` | inside `@include generics.interaction-states { }` |
| `&.animate-on-hover:hover` | inside `@include generics.interaction-states { }` |
| `&.animate-on-active.active` | inside `@include generics.interaction-states { }` |

Selectors that are truly one-shot or do not belong to the standard hover/active/selected model stay as
standalone modifiers **outside** `interaction-states`:

```scss
// These stay local — they are not standard interaction triggers
&.animate-once > * { animation-iteration-count: 1; }
&.animate-irregular > * { /* custom stagger overrides */ }
```

---

## Phase 6 — Preserve unique animation logic locally

Animation components are expected to keep local code that cannot be generalized:

✅ Always keep local:
- `@keyframes` blocks
- `nth-child` delay/duration stagger formulas
- Irregular or randomized timing multiplier lists
- Unique geometry (scale targets, rotation angles, opacity curves)
- Special pseudo-element choreography

❌ Move to generics or remove:
- Light/dark theme color duplication
- Generic activation logic → `interaction-states`
- `utils.var-builder` calls with color maps → `generate-vars` with a plain token map
- Structural reset shared with other components → `base-layout`

---

## Phase 7 — Introduce safe enhancements during migration (optional)

Migration is not limited to a 1:1 port. The v2.0 `raindrop-concentric` introduced several improvements
that fit naturally into the new architecture:

| Enhancement | Why it was added |
|---|---|
| `duration` added to `$component-map` | Makes timing overridable via CSS var at runtime |
| `animate-irregular` modifier | New feature, unique to this animation, kept entirely local |
| Active color fallback to `main-color` | Semantic improvement — graceful degradation when no active color is set |

**Rule:** add enhancements only when they fit the new token/semantic-var architecture without
requiring new shared generics. If a new behavior would need a new generic, scope it to the next
planned rework cycle.

---

## Checklist for each migrated animation component

- [ ] `_variables.scss` created with geometry/timing tokens only (no color trees)
- [ ] `index.scss` created with `@forward 'variables'`
- [ ] `generate-vars` called with a plain token map (no color entries)
- [ ] `base-layout` applied; component-specific positioning added after
- [ ] All `& > *` child rules kept local with nth-child stagger formulas
- [ ] `interaction-states` used for the main activation trigger (replaces `.animate-active` selector)
- [ ] `.animate-once` (or equivalent one-shot modifier) kept as standalone modifier outside `interaction-states`
- [ ] Old `$color--light/dark` trees removed; `--main-color` / `--active-main-color` consumed instead
- [ ] Old `theme-dark-builder` mixin and its two call-sites removed
- [ ] All `@keyframes` kept local inside the component block
- [ ] Public class names unchanged (root class + all modifier classes)
- [ ] Visual output and animation timing match old behavior in default activation
- [ ] Color responds correctly to utility classes (`.use-brand`, `.text-primary`, etc.)
- [ ] Color responds correctly to inline CSS var overrides
- [ ] `.animate-once` still limits animation to a single iteration
