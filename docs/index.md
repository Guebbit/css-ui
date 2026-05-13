<!-- @include: ../README.md -->

## Cascade Layers

CSS-UI declares its layer order upfront so that specificity and source order are explicit and predictable — later layers always win, regardless of where their rules appear in the source:

```css
@layer css-ui-generic, css-ui-elements, css-ui-components, css-ui-utilities, semantic-utilities;
```

| Layer | Purpose |
|---|---|
| `css-ui-generic` | Resets and base defaults |
| `css-ui-elements` | Bare HTML element styles |
| `css-ui-components` | Component styles (atoms → organisms) |
| `css-ui-utilities` | Layout and structural utility classes |
| `semantic-utilities` | Color/theme utility classes (`.bg-*`, `.text-*`, `.use-*`) — highest priority |

Declaring the order once at the top means any rule added to a layer later in the codebase is automatically slotted into the right position in the cascade without relying on source order.

## Color

Color is now always applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color
- `.use-{role}` → "jolly" class: sets `--main-color` / `--on-main-color` / `--active-main-color` / `--active-on-main-color` for a full single-class semantic color override

## Theming

Use theme utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`) to apply colors.

For a full single-class semantic color override, use the **"jolly"** `.use-{role}` class (e.g., `.use-primary`, `.use-success`):

```html
<div class="text-primary">...</div>
<div class="bg-primary">...</div>
<div class="border-primary">...</div>
<div class="use-primary">...</div>
```