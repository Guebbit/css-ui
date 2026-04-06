# Solar System Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Loading</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/solar-system-load/index";
```

Colors and design tokens are controlled via CSS custom properties:
```html
<div class="solar-system-load" style="--solar-system-load-central-color: #ff6b35;">
```

## Default

::: raw
<div class="dev-section">
    <div class="solar-system-load">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>
:::

::: code-group
```html
<div class="solar-system-load">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
```
:::

## Component CSS

<<< @/../src/atoms/animations/solar-system-load/index.scss


## CSS Custom Properties

| Property                               | Description       | Default       |
|:---------------------------------------|:------------------|:--------------|
| `--solar-system-load-central-color`    | Center color      | `primary-500` |
| `--solar-system-load-satellite-color`  | Satellite color   | `primary-300` |
| `--solar-system-load-size`             | Size              | `24px`        |


<style lang="scss">
@use "../src/atoms/animations/solar-system-load/index";
</style>