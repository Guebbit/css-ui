# Solar System Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Loading</Badge>

## Code

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
<<< @/../components/atoms/animations/SolarSystemLoad.scss
:::


## SCSS variables

| Variable                             | Description                                    | Accepted Values | Default |
|:-------------------------------------|:-----------------------------------------------|:----------------|:--------|
| `$solar-system-load-central-color`   | Center color                                   | `color`         | `#000`  |
| `$solar-system-load-satellite-color` | Satellite color                                | `color`         | `#000`  |
| `$solar-system-load-size`            | Pulsation color                                | `size`          | `24px`  |
| `$solar-system-load-duration`        | Animation duration (NO CSS var)                | `time`          | `1s`    |
| `$solar-system-load-multiplier`      | Speed and distance loop multipler (NO CSS var) | `number`        | `1`     |
| `$solar-system-load-number`          | For optimization purposes (NO CSS var)         | `number`        | `4`     |


<style lang="scss">
@import "docs/theme.scss";

$solar-system-load-sun-color: $primary-color;
$solar-system-load-planet-color: $secondary-color;

@import "components/atoms/animations/SolarSystemLoad.scss";
</style>