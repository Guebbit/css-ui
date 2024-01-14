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
```html
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
#### Plus [SimpleButton](/atoms/buttons/SimpleButton) classes

## SCSS variables
#### Plus [SimpleButton](/atoms/buttons/SimpleButton) variables

| Variable                     | Description         | Accepted Values | Default                     |
|:-----------------------------|:--------------------|:----------------|:----------------------------|
| `$animation-duration`        | :zap: Duration      | `time`          | `1.2s`, `half` (:zap:)      |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/molecules/buttons/NeonButton.scss" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color
);
</style>