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
```html [html]
<span class="status-circle" />
<span class="status-circle animate-active" />
```
<<< @/../components/atoms/animations/StatusCircle.scss [css]
:::


## Classes

| Class               | Description                  |
|:--------------------|:-----------------------------|
| `animate-active`    | Pulsing animation            |
| `animate-on-active` | Pulsing animation on .active |
| `animate-on-hover`  | Pulsing animation on hover   | 

## SCSS variables

| Variable       | Description        | Accepted Values | Default               |
|:---------------|:-------------------|:----------------|:----------------------|
| `$color`       | Main color         | `color`         | `#000`                |
| `$color-pulse` | Pulse color        | `color`         | `rgba({$color}, 0.3)` |
| `$duration`    | Animation duration | `time`          | `1s`                  |


<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/StatusCircle.scss" as * with (
    $color: theme.$primary-color,
);
</style>