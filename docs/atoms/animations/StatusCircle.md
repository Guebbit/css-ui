# Status Circle
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge>

## Code

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/animations/StatusCircle.html -->
</div>

::: code-group
<<< @/public/components-html/atoms/animations/StatusCircle.html
<<< @/../components/atoms/animations/StatusCircle.scss
:::


## Classes

| Class        | Description       |
|:-------------|:------------------|
| `pulse-mode` | Pulsing animation |

## SCSS variables

| Variable                 | Description     | Accepted Values | Default |
|:-------------------------|:----------------|:----------------|:--------|
| `$status-circle-color`   | Main color      | `color`         | `#000`  |
| `$status-circle-speed`   | Animation speed | `time`          | `1s`    |


<style lang="scss">
@import "docs/theme.scss"

$status-circle-color: $primary-color;

@import "components/atoms/animations/StatusCircle.scss";
</style>