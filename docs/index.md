<!-- @include: ../README.md -->

## Cascade Layers

CSS-UI declares its layer order upfront so that specificity and source order are explicit and predictable — later layers always win, regardless of where their rules appear in the source:

```css
@layer reset, elements, layout-utils, components, composite-components, semantic-utils, overrides;
```

| Layer | Purpose | Typical contents | Override priority |
|---|---|---|---|
| `reset` | Global reset and low-level baseline rules that normalize browser behavior and establish defaults. | reset rules, box-sizing, base custom property defaults, normalization styles | Lowest |
| `elements` | Bare styling for native HTML elements without assigning component semantics. | `button`, `input`, `a`, `hr`, `table`, headings, lists, form element defaults | Low |
| `layout-utils` | Utility classes for layout, spacing, display, alignment, and other structural adjustments. | `.flex`, `.grid`, `.gap-*`, `.stack`, `.cluster`, `.w-*`, `.hidden` | Medium-low |
| `components` | Reusable UI components and component-specific styling. | buttons, cards, popups, rollups, inputs, badges, tabs, alerts | Medium |
| `composite-components` | Higher-level components composed from base components. | composite/extended components built from other components | Medium-high |
| `semantic-utils` | Semantic and theme-oriented utility classes intended to win over most library styles. | `.bg-*`, `.text-*`, `.use-*`, theme/state mapping classes | High |
| `overrides` | Application-level overrides intended to take precedence over all library styles. | targeted application-specific overrides | Highest |

Declaring the order once at the top means any rule added to a layer later in the codebase is automatically slotted into the right position in the cascade without relying on source order.

## Color

Color is now always applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color
- `.use-{role}` → "jolly" class: sets `--main-color` / `--on-main-color` / `--active-main-color` / `--active-on-main-color` for a full single-class semantic color override

## Theming

Use theme utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`) to apply colors.

For a full single-class semantic color override, use the **"jolly"** `.use-{role}` class (e.g., `.use-brand`, `.use-success`):

```html
<div class="text-primary">...</div>
<div class="bg-primary">...</div>
<div class="border-primary">...</div>
<div class="use-brand">...</div>
```