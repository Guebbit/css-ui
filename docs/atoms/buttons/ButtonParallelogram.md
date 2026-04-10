# Button Parallelogram
<Badge type="tip">Atom</Badge> <Badge type="info">Button</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/buttons/button-parallelogram";
```

Color is now always applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color
- `.use-{role}` → "jolly" class: sets `--main-color` / `--on-main-color` / `--active-main-color` / `--active-on-main-color` for a full single-class semantic color override

```html
<div class="text-primary">...</div>
<button class="use-primary">...</button>
<button class="border-primary text-primary">...</button>
<button class="use-primary">...</button>
```


## Default

::: raw
<div class="dev-section">
    <button class="button-parallelogram animate-on-hover">
        Lorem Ipsum
    </button>
    <button class="button-parallelogram animate-on-hover focus-on-hover">
        More focus
    </button>
</div>
:::

::: code-group
```html
<button class="button-parallelogram animate-on-hover">
    Lorem Ipsum
</button>
```
```html [focus]
<button class="button-parallelogram animate-on-hover focus-on-hover">
    Focus
</button>
```
:::

## Component CSS

<<< @/../src/atoms/buttons/button-parallelogram/index.scss

## Classes

| Class               | Description                 |
|:--------------------|:----------------------------|
| `animate-active`    | Animation active            |
| `animate-on-active` | Animation active on `.active` |
| `animate-on-hover`  | Animation active on hover   |
| `focus-active`      | Focus side borders active   |
| `focus-on-active`   | Focus side borders on `.active` |
| `focus-on-hover`    | Focus side borders on hover |

## Theming

Use theme utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`) to apply colors.

For a full single-class semantic color override, use the **"jolly"** `.use-{role}` class (e.g., `.use-primary`, `.use-success`):

```html
<div class="component use-primary">...</div>
```

<style lang="scss">
@use "../src/atoms/buttons/button-parallelogram";
</style>
