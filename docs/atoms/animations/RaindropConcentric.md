# Raindrop Concentric
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge>

## Code

::: raw
<div class="dev-section" style="height: 500px">
    <div class="raindrop-concentric animate-active">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>
:::

::: code-group
```html
<div class="raindrop-concentric animate-active">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
```
<<< @/../components/atoms/animations/RaindropConcentric.scss
:::

## Classes

| Class            | Description                                          |
|:-----------------|:-----------------------------------------------------|
| `animate-active` | Animation active (needed for programmatic activation |
| `animate-once`   | Animation count becomes 1                            |

## SCSS variables

| Variable        | Description                             | Accepted Values | Default            |
|:----------------|:----------------------------------------|:----------------|:-------------------|
| `$color`        | Primary color                           | `color`         | `#000`             |
| `$color-change` | Color transformation                    | `color`         | `same as {$color}` |
| `$size`         | Main size                               | `size`          | `150px`            |
| `$border-size`  | Border size                             | `size`          | `10px`             |
| `$duration`     | Duration of animation (speed)           | `time`          | `15s`              |
| `$number`       | For optimization purposes (NO CSS var)  | `number`        | `4`                | 

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/RaindropConcentric.scss" as * with (
    $color: theme.$primary-color,
    $color-change: theme.$secondary-color,
);
</style>