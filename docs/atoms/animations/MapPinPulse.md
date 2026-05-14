# Map Pin Pulse
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Pin</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/map-pin-pulse";
```



## Default

::: raw
    <div class="dev-section">
    <!--@include: ../../examples/atoms/animations/MapPinPulse-default.html -->
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

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--map-pin-pulse-size` | `30px` |
| `--map-pin-pulse-duration` | `1s` |


<style lang="scss">
@use "../src/atoms/animations/map-pin-pulse";
</style>
