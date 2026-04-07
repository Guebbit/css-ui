# Cyberpunk Button
<Badge type="tip">Atom</Badge> <Badge type="info">Buttons</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/buttons/cyberpunk-button/index";
```

Color is now always applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color
- `.use-{role}` → sets `--css-ui-main-color` for internal component color usage

```html
<div class="text-primary">...</div>
<button class="bg-primary">...</button>
<button class="border-primary text-primary">...</button>
<div class="use-primary">...</div>
```


## Default

::: raw
<div class="dev-section">
    <button
        class="cyberpunk-button animate-on-hover"
        data-flicker-text="test toast"
    >
        Lorem Ipsum
    </button>
</div>
:::

```html
<button
    class="cyberpunk-button animate-on-hover"
    data-flicker-text="test toast"
>
    Lorem Ipsum
</button>
```

## Component CSS

<<< @/../src/atoms/buttons/cyberpunk-button/index.scss

## Data attribute

| Class               | Description                                          |
|:--------------------|:-----------------------------------------------------|
| `data-flicker-text` | Optional text shown in glitch layer on interaction   |

## Classes

| Class               | Description                 |
|:--------------------|:----------------------------|
| `animate-active`    | Animation active            |
| `animate-on-active` | Animation active on `.active` |
| `animate-on-hover`  | Animation active on hover   |

## Theming

Use theme utility classes (`.bg-{role}`, `.text-{role}`, `.border-{role}`) to apply colors.

<style lang="scss">
@use "../src/atoms/buttons/cyberpunk-button/index";
</style>
