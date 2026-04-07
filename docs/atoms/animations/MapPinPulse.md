# Map Pin Pulse
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Pin</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/map-pin-pulse/index";
```

Colors and design tokens are controlled via CSS custom properties:
```html
<div class="map-pin-pulse" style="--map-pin-pulse-color: #ff6b35;">
```

## Default

::: raw
<div class="dev-section">
    <div class="map-pin-pulse">
        <span></span>
        <span></span>
    </div>
    <div class="map-pin-pulse animation-bounce">
        <span></span>
        <span></span>
    </div>
    <div class="map-pin-pulse animation-drop">
        <span></span>
        <span></span>
    </div>
</div>
:::

::: code-group
```html [default]
<div class="map-pin-pulse">
    <div></div>
    <div></div>
</div>
```
```html [bounce]
<div class="map-pin-pulse animation-bounce">
    <div></div>
    <div></div>
</div>
```
```html [drop]
<div class="map-pin-pulse animation-drop">
    <div></div>
    <div></div>
</div>
```
:::


## Component CSS

<<< @/../src/atoms/animations/map-pin-pulse/index.scss

## Classes

| Class              | Description              |
|:-------------------|:-------------------------|
| `animation-drop`   | Fall from top            |
| `animation-bounce` | Fall from top and bounce |

## CSS Custom Properties

| Property                           | Description       | Default              |
|:-----------------------------------|:------------------|:---------------------|
| `--map-pin-pulse-color`            | Main color        | `primary-500`        |
| `--map-pin-pulse-center-color`     | Center color      | `on-primary-500`     |
| `--map-pin-pulse-pulse-color`      | Pulsation color   | `primary-500/0.3`    |
| `--map-pin-pulse-shadow-color`     | Shadow color      | `primary-900/0.3`    |
| `--map-pin-pulse-size`             | Size              | `24px`               |
| `--map-pin-pulse-duration`         | Animation duration| `1s`                 |

<style lang="scss">
@use "../src/atoms/animations/map-pin-pulse/index";
</style>