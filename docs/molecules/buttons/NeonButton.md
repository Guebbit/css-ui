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
### Plus [SimpleButton](/atoms/buttons/SimpleButton) variables

| Variable                     | Description         | Accepted Values | Default                     |
|:-----------------------------|:--------------------|:----------------|:----------------------------|
| `$border-color`              | Border color        | `color`         | `#000`                      |
| `$animation-duration`        | Duration            | `time`          | `1.2s`                      |
| `$active-border-color`       | ACTIVE border color | `color`         | `as ${border-color}`        |
| `$active-animation-duration` | ACTIVE Duration     | `time`          | `${animation-duration} / 2` |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/molecules/buttons/NeonButton.scss" as * with (
    $on-color: theme.$primary-color,
    $border-color: theme.$secondary-color,
    $active-on-color: theme.$secondary-color,
    $active-border-color: theme.$primary-color,
);
</style>