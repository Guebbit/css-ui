# Animation Map Pin Pulse
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Pin</Badge>

## Use

```scss
@use "@guebbit/css-ui/atoms/animation-map-pin-pulse";
```



## Default

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/MapPinPulse-default.html -->
</div>
:::

::: code-group
```html [default]
<div class="animation-map-pin-pulse use-brand">
    <div></div>
    <div></div>
</div>
```
```html [bounce]
<div class="animation-map-pin-pulse use-brand animation-bounce">
    <div></div>
    <div></div>
</div>
```
```html [drop]
<div class="animation-map-pin-pulse use-brand animation-drop">
    <div></div>
    <div></div>
</div>
```
:::


## Component CSS

::: code-group
<<< @/../src/components/atoms/animation-map-pin-pulse/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/animation-map-pin-pulse/index.scss [index.scss]
:::

## Classes

| Class              | Description              |
|:-------------------|:-------------------------|
| `animation-drop`   | Fall from top            |
| `animation-bounce` | Fall from top and bounce |

## CSS Custom Properties

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--animation-map-pin-pulse-size` | `30px` |
| `--animation-map-pin-pulse-duration` | `1s` |


## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$size` | `--animation-map-pin-pulse-size` | Component size | `30px` |
| `$duration` | `--animation-map-pin-pulse-duration` | Animation duration | `1s` |

<style lang="scss">
@use "../src/components/atoms/animation-map-pin-pulse";
</style>
