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

| Class               | Description                                          |
|:--------------------|:-----------------------------------------------------|
| `animate-active`    | Animation active (needed for programmatic activation |
| `animate-only-once` | Animation count becomes 1                            |

## SCSS variables

| Variable                             | Description                             | Accepted Values | Default |
|:-------------------------------------|:----------------------------------------|:----------------|:--------|
| `$raindrop-concentric-color`         | Primary color                           | `color`         | `#000`  |
| `$raindrop-concentric-color-change`  | Color transformation                    | `color`         | `#000`  |
| `$raindrop-concentric-size`          | Main size                               | `size`          | `150px` |
| `$raindrop-concentric-border-size`   | Border size                             | `size`          | `10px`  |
| `$raindrop-concentric-duration`      | Duration of animation (speed)           | `time`          | `15s`   |
| `$raindrop-concentric-number`        | For optimization purposes (NO CSS var)  | `number`        | `4`     | 

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/RaindropConcentric.scss" as * with (
    $raindrop-concentric-color: theme.$primary-color,
    $raindrop-concentric-color-change: theme.$secondary-color,
);
</style>