# Status Circle
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge>

## Code

::: raw
<div class="dev-section">
    <span class="status-circle" />
    <span class="status-circle animate-active" />
</div>
:::

::: code-group
```html
<span class="status-circle" />
<span class="status-circle animate-active" />
```
<<< @/../components/atoms/animations/StatusCircle.scss
:::


## Classes

| Class             | Description       |
|:------------------|:------------------|
| `animate-active`  | Pulsing animation |

## SCSS variables

| Variable                     | Description        | Accepted Values | Default               |
|:-----------------------------|:-------------------|:----------------|:----------------------|
| `$status-circle-color`       | Main color         | `color`         | `#000`                |
| `$status-circle-color-pulse` | Pulse color        | `color`         | `rgba({$color}, 0.3)` |
| `$status-circle-duration`    | Animation duration | `time`          | `1s`                  |


<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/StatusCircle.scss" as * with (
    $status-circle-color: theme.$primary-color,
);
</style>