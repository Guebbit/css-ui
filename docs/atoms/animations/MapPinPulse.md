# Map Pin Pulse
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Pin</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/map-pin-pulse/index";
```

Color is now always applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color

```html
<div class="text-primary">...</div>
<button class="bg-primary">...</button>
<button class="border-primary text-primary">...</button>
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