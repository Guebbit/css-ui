# Book Front Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/book-front-load/index";
```

Colors and design tokens are controlled via CSS custom properties:
```html
<div class="book-front-load" style="--book-front-load-border-color: #ff6b35;">
```

## Default

::: raw
<div class="dev-section">
    <div class="book-front-load">
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>
:::

```html
<div class="book-front-load">
    <span></span>
    <span></span>
    <span></span>
</div>
```

## Component CSS

<<< @/../src/atoms/animations/book-front-load/index.scss

## CSS Custom Properties

| Property                          | Description                  | Default           |
|:----------------------------------|:-----------------------------|:------------------|
| `--book-front-load-border-color`  | Border color                 | `primary-500`     |
| `--book-front-load-background`    | Page/fill background         | `on-primary-500`  |
| `--book-front-load-shadow-color`  | Shadow during page flip      | `primary-700`     |
| `--book-front-load-size`          | Size of the animation        | `100px`           |
| `--book-front-load-duration`      | Animation duration           | `1s`              |

<style lang="scss">
@use "../src/atoms/animations/book-front-load/index";
</style>