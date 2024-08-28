# Map Pin Pulse
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Pin</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/animations/MapPinPulse" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/animations/MapPinPulse" with (
    $color: theme.$primary-color
);
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

<<< @/../src/atoms/animations/MapPinPulse.scss

## Classes

| Class              | Description              |
|:-------------------|:-------------------------|
| `animation-drop`   | Fall from top            |
| `animation-bounce` | Fall from top and bounce |

## SCSS variables

| Variable          | Description                                        | Accepted Values | Default                 |
|:------------------|:---------------------------------------------------|:----------------|:------------------------|
| `$color`          | Main color                                         | `color`         | `#000` / `#fff`         |
| `$center-color`   | :first_quarter_moon_with_face: Center color        | `color`         | `same as {$color}`      |
| `$pulse-color`    | :first_quarter_moon_with_face: Pulsation color     | `color`         | `tint 50% of {$color}`  |
| `$color-shadow`   | :first_quarter_moon_with_face: Shadow color        | `color`         | `rgba({$color}, 0.3)`   |
| `$duration`       | Animation duration                                 | `time`          | `1s`                    |


<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/animations/MapPinPulse" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
</style>