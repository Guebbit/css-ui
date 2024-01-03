# Neon Button
<Badge type="tip">Molecule</Badge> <Badge type="info">buttons</Badge>

::: tip VARIANT Dependencies
- [SimpleButton](/atoms/buttons/SimpleButton)
:::

## Code

::: raw
<div class="dev-section">
    <button class="neon-button button-shadowless animate-on-hover">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Lorem Ipsum
    </button>
</div>
:::

::: code-group
``` html
<button class="neon-button button-shadowless animate-on-hover">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Lorem Ipsum
</button>
```
<<< @/../components/molecules/buttons/NeonButton.scss [css]
:::


## Classes

| Class                    | Description                 |
|:-------------------------|:----------------------------|
| `animate-active`         | Animation active            |
| `animate-on-active`      | Animation active on .active |
| `animate-on-hover`       | Animation active on hover   |

## SCSS variables

| Variable                        | Description        | Accepted Values | Default                |
|:--------------------------------|:-------------------|:----------------|:-----------------------|
| `$neon-button-color`            | Main color         | `color`         | `transparent`          |
| `$neon-button-on-color`         | Text color         | `color`         | `contrast of {$color}` |
| `$neon-button-duration`         | Duration           | `color`         | `#000`                 |
| `$neon-button-active-duration`  | Duration on active | `css`           | `box-shadow`           |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/molecules/buttons/NeonButton.scss" as * with (
    $color: theme.$primary-color,
    $border-color: theme.$secondary-color,
    $active-color: theme.$secondary-color,
    $active-border-color: theme.$primary-color,
);
</style>