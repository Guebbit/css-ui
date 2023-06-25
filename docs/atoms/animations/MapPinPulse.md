# Arrow Scroll Down
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Pin</Badge>

## Code

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/animations/MapPinPulse.html -->
</div>

::: code-group
<<< @/public/components-html/atoms/animations/MapPinPulse.html
<<< @/../components/atoms/animations/MapPinPulse.scss
:::

## Classes

| Class              | Description              |
|:-------------------|:-------------------------|
| `animation-drop`   | Fall from top            |
| `animation-bounce` | Fall from top and bounce |

## SCSS variables

| Variable                      | Description     | Accepted Values | Default   |
|:------------------------------|:----------------|:----------------|:----------|
| `$map-pin-pulse-color-border` | Border color    | `color`         | `#000000` |
| `$map-pin-pulse-color-center` | Center color    | `color`         | `#000000` |
| `$map-pin-pulse-color-shadow` | Shadow color    | `color`         | `#3ff9dc` |
| `$map-pin-pulse-pulse-color`  | Pulsation color | `color`         | `#fb5b53` |
| `$map-pin-pulse-speed`        | Pulsation speed | `time`          | `1s`      |


<style lang="scss">
@import "docs/theme.scss";

$map-pin-pulse-color-border: $primary-color;
$map-pin-pulse-color-center: $secondary-color;

@import "components/atoms/animations/MapPinPulse.scss";
</style>