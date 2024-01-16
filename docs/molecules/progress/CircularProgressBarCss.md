# Circular Progress Bar Svg
<Badge type="tip">Molecule</Badge> <Badge type="info">Progress</Badge>


::: danger TODO
Transition\animation not working
REDO (https://codepen.io/fuzzywalrus/pen/OxYENY/ ??)
:::

::: tip
Suggested aria attributes:

- role="progressbar"
- aria-valuenow="60" (value)
- aria-valuemin="0"
- aria-valuemax="100"
  :::


## Code

::: raw
<div class="dev-section">
    <div class="circular-progress-bar-css" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="--value: 60"></div>
    <div class="circular-progress-bar-css numberless-mode simplified-mode" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="--value: 60"></div>
</div>
:::

::: code-group
```html [default]
<div 
    class="circular-progress-bar-css" 
    role="progressbar" 
    aria-valuenow="60" 
    aria-valuemin="0" 
    aria-valuemax="100" 
    style="--value: 50"
></div>
```
```html [simplified]
<div 
    class="circular-progress-bar-css numberless-mode simplified-mode" 
    role="progressbar" 
    aria-valuenow="60" 
    aria-valuemin="0" 
    aria-valuemax="100" 
    style="--value: 50"
></div>
```
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
| `$color`      | Main color       | `color`         | `transparent`          |
| `$on-color`   | Secondary color  | `color`         | `transparent`          |
| `$background` | Background color | `color`         | `transparent`          |
| `$text-color` | Text color       | `color`         | `transparent`          |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/molecules/progress/CircularProgressBarCss.scss" as * with (
    $color: theme.$primary-color
);
</style>