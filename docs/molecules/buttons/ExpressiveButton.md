# Expressive button
<Badge type="tip">Molecule</Badge> <Badge type="info">buttons</Badge>

::: danger WORK IN PROGRESS
Will be a collection of strange and various buttons
:::

::: tip VARIANT Dependencies
- [SimpleButton](/atoms/buttons/SimpleButton.md)
- [HighlightRollup](/atoms/highlights/HighlightRollup.md)
- [HighlightPopup](/atoms/highlights/HighlightPopup.md)
:::


## Rollup button

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/buttons/ExpressiveButton-rollup.html -->
</div>
:::

::: code-group
<<< @/public/components-html/molecules/buttons/ExpressiveButton-rollup.html#down-to-up [down-to-up]
<<< @/public/components-html/molecules/buttons/ExpressiveButton-rollup.html#right-to-left [right-to-left]
<<< @/public/components-html/molecules/buttons/ExpressiveButton-rollup.html#up-to-down [up-to-down]
<<< @/public/components-html/molecules/buttons/ExpressiveButton-rollup.html#left-to-right [left-to-right]
<<< @/public/components-html/molecules/buttons/ExpressiveButton-rollup.html#skew-right-to-left [skew-right-to-left]
<<< @/public/components-html/molecules/buttons/ExpressiveButton-rollup.html#skew-left-to-right [skew-left-to-right]
:::

## Popup button

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/buttons/ExpressiveButton-popup.html -->
</div>
:::

::: code-group
<<< @/public/components-html/molecules/buttons/ExpressiveButton-popup.html#horizontal [horizontal]
<<< @/public/components-html/molecules/buttons/ExpressiveButton-popup.html#vertical [vertical]
<<< @/public/components-html/molecules/buttons/ExpressiveButton-popup.html#explosion [explosion]
<<< @/public/components-html/molecules/buttons/ExpressiveButton-popup.html#fill [fill]
<<< @/public/components-html/molecules/buttons/ExpressiveButton-popup.html#fill-circle [fill-circle]
<<< @/public/components-html/molecules/buttons/ExpressiveButton-popup.html#fill-icon [fill-icon]
<<< @/public/components-html/molecules/buttons/ExpressiveButton-popup.html#drop [drop]
<<< @/public/components-html/molecules/buttons/ExpressiveButton-popup.html#bounce [bounce]
:::

## Strong elevation button

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/buttons/ExpressiveButton-elevation.html -->
</div>
:::

::: code-group
<<< @/public/components-html/molecules/buttons/ExpressiveButton-elevation.html#default [default]
<<< @/public/components-html/molecules/buttons/ExpressiveButton-elevation.html#image [image]
<<< @/public/components-html/molecules/buttons/ExpressiveButton-elevation.html#small [small]
<<< @/public/components-html/molecules/buttons/ExpressiveButton-elevation.html#rounded [rounded]
<<< @/public/components-html/molecules/buttons/ExpressiveButton-elevation.html#outlined [outlined]
<<< @/public/components-html/molecules/buttons/ExpressiveButton-elevation.html#custom [custom]
:::

## Component CSS

::: code-group
<<< @/../components/molecules/buttons/ExpressiveButton.scss
:::

## Classes
#### Plus [SimpleButton](/atoms/buttons/SimpleButton) classes


| Class               | Description                 |
|:--------------------|:----------------------------|
| `animate-active`    | Animation active            |
| `animate-on-active` | Animation active on .active |
| `animate-on-hover`  | Animation active on hover   |
| `rollup-button`     | HighlightRollup mode        |
| `popup-button`      | HighlightPopup mode         |


## SCSS variables
##### Plus [SimpleButton](/atoms/buttons/SimpleButton) variables
##### Plus [HighlightRollup](/atoms/highlights/HighlightRollup.md) variables (prefix: "rollup-")
##### Plus [HighlightPopup](/atoms/highlights/HighlightPopup.md) variables (prefix: "popup-")


| Variable               | Description         | Accepted Values | Default                                                |
|:-----------------------|:--------------------|:----------------|:-------------------------------------------------------|
| `$special-color`       | Text color          | `color`         | `contrast of {$color}`                                 |
| `$special-on-color`    | Text color          | `color`         | `contrast of {$color}`                                 |
| `$border-width`        | Border width        | `size`          | `inherited from SimpleButton {$outlined-border-width}` |
| `$border-color`        | Border color        | `color`         | `same as {$color}`                                     |
| `$active-border-color` | ACTIVE border color | `color`         | `same as {$active-color}`                              |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/molecules/buttons/ExpressiveButton.scss" as * with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
    $special-color: theme.$secondary-color,
);
</style>