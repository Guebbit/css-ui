# Expressive button
<Badge type="tip">Molecule</Badge> <Badge type="info">buttons</Badge>

::: danger WORK IN PROGRESS
Will be a collection of strange and various buttons
:::

## Code

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/buttons/ExpressiveButton-rollup.html -->
</div>
:::

::: code-group
<<< @/public/components-html/molecules/buttons/ExpressiveButton-rollup.html
<<< @/../components/molecules/buttons/ExpressiveButton.scss
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

$expressive-button-primary: $primary-color;
$expressive-button-secondary: $secondary-color;

@import "components/molecules/buttons/ExpressiveButton.scss";
</style>