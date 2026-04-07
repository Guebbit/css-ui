# Book Side Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

::: danger
Can't change $size, must be 32px, need to be fixed
:::

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/book-side-load/index";
```

Colors and design tokens are controlled via CSS custom properties or `.color-*` utility classes:
```html
<div class="book-side-load color-primary animate-active">
<div class="book-side-load color-secondary animate-active">
```
Or override inline:
```html
<div class="book-side-load" style="--color-background: #ff6b35;">
```

## Default

::: raw
<div class="dev-section">
    <div class="book-side-load animate-active">
        <div class="book">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <ul class="pages">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</div>
:::

```html
<div class="book-side-load animate-active">
    <div class="book">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <ul class="pages">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>
```

## Component CSS

<<< @/../src/atoms/animations/book-side-load/index.scss

## Classes

| Class               | Description          |
|:--------------------|:---------------------|
| `animate-active`    | Animation active     |
| `animate-on-active` | Animation on .active |
| `animate-on-hover`  | Animation on hover   | 

## CSS Custom Properties

| Property                   | Description        | Default       |
|:---------------------------|:-------------------|:--------------|
| `--book-side-load-color`   | Pages color        | `primary-500` |
| `--book-side-load-size`    | Pages size         | `32px`        |
| `--book-side-load-duration`| Animation duration | `7s`          |

<style lang="scss">
@use "../src/atoms/animations/book-side-load/index";
</style>