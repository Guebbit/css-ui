# Rotating Squares
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/rotating-squares/index";
```

Colors and design tokens are controlled via CSS custom properties or `.color-*` utility classes:
```html
<div class="rotating-squares color-primary">
<div class="rotating-squares color-secondary">
```
Or override inline:
```html
<div class="rotating-squares" style="--color-background: #ff6b35;">
```

## Rotating Squares

::: raw
<div class="dev-section">
    <div class="rotating-squares rotating-squares">
        <div></div>
        <div></div>
    </div>
</div>
:::

```html
<div class="rotating-squares rotating-squares">
    <div></div>
    <div></div>
</div>
```

# Commons

::: code-group
<<< @/../src/atoms/animations/rotating-squares/index.scss
:::

## CSS Custom Properties

| Property                            | Description                                       | Default       |
|:------------------------------------|:--------------------------------------------------|:--------------|
| `--rotating-squares-color`          | Main color                                        | `primary-500` |
| `--rotating-squares-background`     | Background of body (transparency not available)   | `surface-100` |
| `--rotating-squares-size`           | Main size                                         | `200px`       |
| `--rotating-squares-border-size`    | Border size                                       | `5px`         |
| `--rotating-squares-duration`       | Animation duration                                | `2s`          |


<style lang="scss">
@use "../src/atoms/animations/rotating-squares/index";
</style>