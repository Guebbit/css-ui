# Circular Progress Bar Svg
<Badge type="tip">Molecule</Badge> <Badge type="info">Progress</Badge>

## Code

::: tip
Suggested aria attributes:

- role="progressbar"
- aria-valuenow="60" (value)
- aria-valuemin="0"
- aria-valuemax="100"
:::

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/progress/CircularProgressBarCss.html -->
</div>
:::

::: code-group
<<< @/public/components-html/molecules/progress/CircularProgressBarCss.html#default [default]
<<< @/public/components-html/molecules/progress/CircularProgressBarCss.html#simplified [simplified]
<<< @/../components/molecules/progress/CircularProgressBarCss.scss [CSS]
:::

## Classes

| Class               | Description                               |
|:--------------------|:------------------------------------------|
| `numberless-mode`   | Remove central number                     |
| `simplified-mode`   | Remove central hole, becomes regular cake |

## SCSS variables

| Variable                                | Description      | Accepted Values | Default                |
|:----------------------------------------|:-----------------|:----------------|:-----------------------|
| `$circular-progress-bar-css-color`      | Main color       | `color`         | `transparent`          |
| `$circular-progress-bar-css-on-color`   | Secondary color  | `color`         | `transparent`          |
| `$circular-progress-bar-css-background` | Background color | `color`         | `transparent`          |
| `$circular-progress-bar-css-text-color` | Text color       | `color`         | `transparent`          |

<style lang="scss">
@import "docs/theme.scss";

$circular-progress-bar-css-color: $primary-color;

@import "components/molecules/progress/CircularProgressBarCss.scss";
</style>