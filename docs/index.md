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

## Naming grammar (current, lightweight)

CSS-UI currently follows a practical, lightweight naming style focused on consistency rather than strict BEM.

- **Component/root classes**: readable component names like `.guebbit-simple-button`, `.guebbit-simple-card`.
- **Modifier/variant classes**: flat companion classes like `.button-pill`, `.card-outlined`, typically used together with the component root class on the same element; modifier names themselves currently do not get the global `guebbit-` prefix.
- **Utility classes**: concise `u-` helpers such as `.u-d-flex`, `.u-m-2`.
- **Prefix/namespace**: by default component/modifier class names use `guebbit-` through `$css-ui-class-prefix` (derived from `$css-ui-prefix`), and can still be overridden by consumers.

> TODO: keep reviewing naming consistency and evaluate whether a stricter convention (BEM-like or similar) should be adopted later. This is under consideration, not a final decision.

## Color

Color is now always applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color
- `.use-{role}` → "jolly" class: sets `--main-color` / `--on-main-color` / `--active-main-color` / `--active-on-main-color` for a full single-class semantic color override

## Theming

Default recommendation: use theme utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`) to apply colors.

`docs/.vitepress/theme/theme.scss` is the reference example of how the theming layer is assembled in this repo.

Current public reality:

- `src/theme.scss` is not currently shipped.
- The helper used to emit utility classes is `generics.generate-theme-utilities(...)`.
- Utility/class application is the default model; root/global application is also supported.

### Theme model in simple terms

- **Theme source**: tokens/semantic values (SCSS variables/maps).
- **Theme emission**: generate CSS vars/classes from those values (for example with `generate-theme-utilities`).
- **Theme application**: where you attach theme values (default: `.use-*` class scope, alternative: `:root`/`body` global scope).

For a full single-class semantic color override, use the **"jolly"** `.use-{role}` class (e.g., `.use-brand`, `.use-success`):

```html
<div class="text-primary">...</div>
<div class="bg-primary">...</div>
<div class="border-primary">...</div>
<div class="use-brand">...</div>
```

## Accessibility and responsive baseline

- Use `:focus-visible` so keyboard users get visible focus without noisy mouse-only outlines.
- Add ARIA-state selectors when relevant (for example `[aria-disabled="true"]`) so visual state matches semantic state.
- Keep disabled-state behavior consistent (`[disabled]`, `.disabled`, and ARIA-disabled patterns where applicable).
- Respect `prefers-reduced-motion` to reduce non-essential animations for motion-sensitive users.
- Prefer semantic HTML first (`button`, `input`, `label`, headings, lists) before custom wrappers.
- Prefer shared breakpoints/tokens over ad-hoc local media thresholds to keep behavior consistent across components.

## Deferred roadmap

See [`TODO.md` in the repository root](https://github.com/Guebbit/css-ui/blob/main/TODO.md) for deferred theming/platform work and future component backlog.
