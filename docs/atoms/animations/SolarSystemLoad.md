# Solar System Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">loading</Badge>

## Code

<div class="dev-section">
    <div class="solar-system-load"></div>
</div>

```html
<div class="solar-system-load"></div>
```

## SCSS variables

| Variable                              | Description     | Accepted Values | Default   |
|:--------------------------------------|:----------------|:----------------|:----------|
| `$solar-system-load-central-color`    | Center color    | `color`         | `#000000` |
| `$solar-system-load-satellite-color`  | Satellite color | `color`         | `#000000` |
| `$solar-system-load-size`             | Pulsation color | `size`          | `24px`    |
| `$solar-system-load-speed`            | Pulsation speed | `time`          | `1s`      |


<style lang="scss">
@import "../../theme.scss";

$solar-system-load-central-color: $primary-color;
$solar-system-load-satellite-color: $secondary-color;

@import "components/atoms/animations/SolarSystemLoad.scss";
</style>