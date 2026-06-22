# Component Handoff — $component-variables-map Migration

**Date:** 2026-06-19
**Objective:** Remove `$component-variables-map` from `.scss` files where it was defined inline (index.scss / _architecture.scss) and move it into `_variables.scss` within each component folder. Import via `vars.$component-variables-map` where needed.

---

## Atoms

| Component | Had `$component-variables-map` | Action Taken |
|---|---|---|
| `text` | ✅ Yes (`index.scss`) | Moved to `_variables.scss`, updated `index.scss` → `vars.$component-variables-map` |
| `button` | ✅ Yes (`index.scss`) | Moved to `_variables.scss`, updated `index.scss` → `vars.$component-variables-map` |
| `card` | ✅ Yes (`index.scss`) | Moved to `_variables.scss`, updated `index.scss` → `vars.$component-variables-map` |
| `button-cyberpunk` | ✅ Yes (`index.scss`) | Moved to `_variables.scss`, updated `index.scss` → `vars.$component-variables-map` |
| `button-parallelogram` | ✅ Yes (`index.scss`) | Moved to `_variables.scss`, updated `index.scss` → `vars.$component-variables-map` |
| `highlight-belt` | ✅ Yes (`index.scss`) | Moved to `_variables.scss`, updated `index.scss` → `vars.$component-variables-map` |
| `highlight-border` | ✅ Yes (`index.scss`) | Moved to `_variables.scss`, updated `index.scss` → `vars.$component-variables-map` |
| `highlight-corner-ribbon` | ✅ Yes (`index.scss`) | Moved to `_variables.scss`, updated `index.scss` → `vars.$component-variables-map` |
| `highlight-line` | ✅ Yes (`index.scss`) | Moved to `_variables.scss`, updated `index.scss` → `vars.$component-variables-map` |
| `highlight-popup` | ✅ Yes (`index.scss`) | Moved to `_variables.scss`, updated `index.scss` → `vars.$component-variables-map` |
| `highlight-rollup` | ✅ Yes (`index.scss`) | Moved to `_variables.scss`, updated `index.scss` → `vars.$component-variables-map` |
| `input` | ✅ Yes (`index.scss`) | Moved to `_variables.scss`, updated `index.scss` → `vars.$component-variables-map` |
| `progression-book-front` | ✅ Yes (`index.scss`) | Moved to `_variables.scss`, updated `index.scss` → `vars.$component-variables-map` |
| `progression-book-side` | ✅ Yes (`index.scss`) | Moved to `_variables.scss`, updated `index.scss` → `vars.$component-variables-map` |
| `progression-gear` | ✅ Yes (`index.scss`) | Moved to `_variables.scss`, updated `index.scss` → `vars.$component-variables-map` |
| `progression-icon-showcase` | ✅ Yes (`index.scss`) | Moved to `_variables.scss`, updated `index.scss` → `vars.$component-variables-map` |
| `progression-solar-system` | ✅ Yes (`index.scss`) | Moved to `_variables.scss`, updated `index.scss` → `vars.$component-variables-map` |
| `reveal-advancing-moon` | ✅ Yes (`index.scss`) | Moved to `_variables.scss`, updated `index.scss` → `vars.$component-variables-map` |
| `reveal-slash-container` | ✅ Yes (`index.scss`) | Moved to `_variables.scss`, updated `index.scss` → `vars.$component-variables-map` |
| `typography-special-title` | ✅ Yes (`index.scss`) | Moved to `_variables.scss`, updated `index.scss` → `vars.$component-variables-map` |
| `typography-svg-title` | ✅ Yes (`index.scss`) | Moved to `_variables.scss`, updated `index.scss` → `vars.$component-variables-map` |
| `animation-map-pin-pulse` | ❌ No | Skipped — no `$component-variables-map` found |
| `animation-raindrop-concentric` | ❌ No | Skipped — no `$component-variables-map` found |
| `animation-rotating-squares` | ❌ No | Skipped — no `$component-variables-map` found |
| `animation-scroll-down-arrow` | ❌ No | Skipped — no `$component-variables-map` found |
| `animation-scroll-down-mouse` | ❌ No | Skipped — no `$component-variables-map` found |
| `animation-status-circle` | ❌ No | Skipped — no `$component-variables-map` found |
| `animation-trapezoid` | ❌ No | Skipped — no `$component-variables-map` found |
| `blockquote` | ❌ No | Skipped — no `$component-variables-map` found |
| `card-image-hover` | ❌ No | Skipped — no `$component-variables-map` found |
| `card-media-icons` | ❌ No | Skipped — no `$component-variables-map` found |
| `card-showcase` | ❌ No | Skipped — no `$component-variables-map` found |
| `card-unstyled` | ❌ No | Skipped — no `$component-variables-map` found |
| `card-variants` | ❌ No | Skipped — no `$component-variables-map` found |
| `card-book` | ❌ No | Skipped — no `$component-variables-map` found |
| `card-calendar` | ❌ No | Skipped — no `$component-variables-map` found |
| `card-countdown` | ❌ No | Skipped — no `$component-variables-map` found |
| `card-credit` | ❌ No | Skipped — no `$component-variables-map` found |

---

## Molecules

| Component | Had `$component-variables-map` | Action Taken |
|---|---|---|
| `button-expressive` | ✅ Yes (`index.scss`) | Moved to `_variables.scss`, updated `index.scss` → `vars.$component-variables-map` |
| `button-icon-focus` | ✅ Yes (`index.scss`) | Moved to `_variables.scss`, updated `index.scss` → `vars.$component-variables-map` |
| `button-neon` | ✅ Yes (`index.scss`) | Moved to `_variables.scss`, updated `index.scss` → `vars.$component-variables-map` |
| `list` | ✅ Yes (`index.scss`) | Moved to `_variables.scss`, updated `index.scss` → `vars.$component-variables-map` |
| `list-opening-hours` | ✅ Yes (`index.scss`) | Moved to `_variables.scss`, updated `index.scss` → `vars.$component-variables-map` |
| `panel` | ✅ Yes (`index.scss`) | Moved to `_variables.scss`, updated `index.scss` → `vars.$component-variables-map` |
| `panel-action` | ✅ Yes (`index.scss`) | Moved to `_variables.scss`, updated `index.scss` → `vars.$component-variables-map` |
| `panel-simple-typography` | ❌ No | Skipped — no `$component-variables-map` found |
| `progress-circular-css` | ❌ No | Skipped — no `$component-variables-map` found |
| `progress-circular-svg` | ❌ No | Skipped — no `$component-variables-map` found |

---

## Organisms

| Component | Had `$component-variables-map` | Action Taken |
|---|---|---|
| `card-choose-option` | ✅ Yes (`index.scss` + `_architecture.scss`) | Moved to `_variables.scss`, updated `_architecture.scss` → `vars.$component-variables-map`, removed duplicate from `index.scss` |
| `card-overflow` | ✅ Yes (`index.scss` — unused) | Removed unused `$component-variables-map` from `index.scss` (not referenced in `_architecture.scss`) |
| `card-event-lite` | ❌ No | Skipped — no `$component-variables-map` found |
| `card-event-long` | ❌ No | Skipped — no `$component-variables-map` found |
| `card-event-minimal` | ❌ No | Skipped — no `$component-variables-map` found |
| `card-image-slash` | ❌ No | Skipped — no `$component-variables-map` found |
| `card-info-hover` | ❌ No | Skipped — no `$component-variables-map` found |
| `card-pricing` | ❌ No | Skipped — no `$component-variables-map` found |
| `panel-timeline-tree` | ❌ No | Skipped — no `$component-variables-map` found |

---

## Summary

- **Total folders visited:** 60 (37 atoms + 10 molecules + 9 organisms + 4 other molecule folders)
- **Folders modified:** 36
- **Folders skipped (no map):** 24

## Pattern Applied

**Before (in index.scss):**
```scss
$component-variables-map: (
    some-prop: vars.$some-prop,
    another-prop: vars.$another-prop
);
```

**After (in _variables.scss):**
```scss
$component-variables-map: (
    some-prop: $some-prop,
    another-prop: $another-prop
);
```

**Usage (in index.scss / _architecture.scss):**
```scss
@include generics.generate-vars(vars.$component-variables-map, $prefix);
```

## Notes

- Some components (e.g., `card-choose-option`) had the map defined in both `index.scss` and `_architecture.scss`. Both were consolidated into `_variables.scss`.
- `card-overflow` had an unused `$component-variables-map` in `index.scss` that was removed (the `_architecture.scss` only references `card-vars.$component-variables-map` from the card atom).
- Components that already had `$component-variables-map` in `_variables.scss` (like most atoms processed earlier) were not touched during this pass.
- **Post-migration fixes:**
  - `button-parallelogram/_variables.scss`: Added missing `$duration: 0.5s !default;` variable that was referenced in `$component-variables-map` but not defined.
  - `highlight-line/_architecture.scss`: Refactored nested `@mixin` declarations (`_move`, `_scale`, `_opacity`) to top-level helper mixins (`_highlight-line-move`, `_highlight-line-scale`, `_highlight-line-opacity`) since Dart Sass doesn't allow mixin declarations inside other mixins. Keyframes are now generated inside the main mixin.
  - `panel/index.scss`: Fixed `$component-variables-map` reference to `vars.$component-variables-map` (was missing `vars.` prefix).

## Build Status

- **Final build:** ✅ Successful — all files compile without errors.
