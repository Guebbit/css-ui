# Solar System Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">loading</Badge>

## Code

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/animations/SolarSystemLoad.html -->
</div>

::: code-group
<<< @/public/components-html/atoms/animations/SolarSystemLoad.html
<<< @/../components/atoms/animations/SolarSystemLoad.scss
:::


## SCSS variables

| Variable                              | Description     | Accepted Values | Default   |
|:--------------------------------------|:----------------|:----------------|:----------|
| `$solar-system-load-central-color`    | Center color    | `color`         | `#000000` |
| `$solar-system-load-satellite-color`  | Satellite color | `color`         | `#000000` |
| `$solar-system-load-size`             | Pulsation color | `size`          | `24px`    |
| `$solar-system-load-speed`            | Pulsation speed | `time`          | `1s`      |


<style lang="scss">
@import "docs/theme.scss"

$solar-system-load-central-color: $primary-color;
$solar-system-load-satellite-color: $secondary-color;

@import "components/atoms/animations/SolarSystemLoad.scss";
</style>