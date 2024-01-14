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
:::


## Component CSS

<<< @/../components/atoms/animations/MapPinPulse.scss

## Documentation CSS

```scss
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/MapPinPulse.scss" as * with (
    $primary: theme.$primary-color,
    $secondary: theme.$secondary-color,
);
```

## Classes

| Class              | Description              |
|:-------------------|:-------------------------|
| `animation-drop`   | Fall from top            |
| `animation-bounce` | Fall from top and bounce |

## SCSS variables

| Variable          | Description                                                          | Accepted Values | Default                   |
|:------------------|:---------------------------------------------------------------------|:----------------|:--------------------------|
| `$primary`        | :x: :first_quarter_moon_with_face: Primary color                     | `color`         | `#000` / `#fff`           |
| `$secondary`      | :x: :first_quarter_moon_with_face: Secondary color                   | `color`         | `#000` / `#fff`           |
| `$border-color`   | :first_quarter_moon_with_face: Border color                          | `color`         | `same as {$primary}`      |
| `$center-color`   | :first_quarter_moon_with_face: Center color                          | `color`         | `same as {$secondary}`    |
| `$pulse-color`    | :first_quarter_moon_with_face: Pulsation color                       | `color`         | `same as {$secondary}`    |
| `$color-shadow`   | :first_quarter_moon_with_face: Shadow color                          | `color`         | `rgba({$secondary}, 0.3)` |
| `$duration`       | Animation duration                                                   | `time`          | `1s`                      |


<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/MapPinPulse.scss" as * with (
    $primary: theme.$primary-color,
    $secondary: theme.$secondary-color,
);
</style>