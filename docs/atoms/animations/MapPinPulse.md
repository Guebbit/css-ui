# Map Pin Pulse
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Pin</Badge>

## Code

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
<<< @/../components/atoms/animations/MapPinPulse.scss
:::

## Classes

| Class              | Description              |
|:-------------------|:-------------------------|
| `animation-drop`   | Fall from top            |
| `animation-bounce` | Fall from top and bounce |

## SCSS variables

| Variable                        | Description                           | Accepted Values | Default                |
|:--------------------------------|:--------------------------------------|:----------------|:-----------------------|
| `$map-pin-pulse-primary`        | Primary color (NO CSS var)            | `color`         | `#000`                 |
| `$map-pin-pulse-secondary`      | Secondary color (NO CSS var)          | `color`         | `#000`                 |
| `$map-pin-pulse-color-border`   | Border color                          | `color`         | `same as {$primary}`   |
| `$map-pin-pulse-color-center`   | Center color                          | `color`         | `same as {$secondary}` |
| `$map-pin-pulse-pulse-color`    | Pulsation color                       | `color`         | `same as {$secondary}` |
| `$map-pin-pulse-color-shadow`   | Shadow color (on `var()` MUST be RGB) | `color`         | `same as {$secondary}` |
| `$map-pin-pulse-shadow-opacity` | Shadow opacity                        | `0 - 1`         | `0.4`                  |
| `$map-pin-pulse-duration`       | Animation duration                    | `time`          | `1s`                   |


<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/MapPinPulse.scss" as * with (
    $map-pin-pulse-primary: theme.$primary-color,
    $map-pin-pulse-secondary: theme.$secondary-color,
);
</style>