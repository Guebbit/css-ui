# Neon Button
<Badge type="tip">Molecule</Badge> <Badge type="info">buttons</Badge>

## Code

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/buttons/NeonButton.html -->
</div>
:::

::: code-group
<<< @/public/components-html/molecules/buttons/NeonButton.html
<<< @/../components/molecules/buttons/NeonButton.scss
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
@import "docs/theme.scss";

$neon-button-color: $primary-color;
$neon-button-on-color: $secondary-color;

@import "components/molecules/buttons/NeonButton.scss";
</style>