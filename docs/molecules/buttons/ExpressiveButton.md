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
    <!--@include: ../../molecules/buttons/ExpressiveButton-rollup.html -->
</div>
:::

::: code-group
<<< @/molecules/buttons/ExpressiveButton-rollup.html#down-to-up [down-to-up]
<<< @/molecules/buttons/ExpressiveButton-rollup.html#right-to-left [right-to-left]
<<< @/molecules/buttons/ExpressiveButton-rollup.html#up-to-down [up-to-down]
<<< @/molecules/buttons/ExpressiveButton-rollup.html#left-to-right [left-to-right]
<<< @/molecules/buttons/ExpressiveButton-rollup.html#skew-right-to-left [skew-right-to-left]
<<< @/molecules/buttons/ExpressiveButton-rollup.html#skew-left-to-right [skew-left-to-right]
:::

## Popup button

::: raw
<div class="dev-section">
    <!--@include: ../../molecules/buttons/ExpressiveButton-popup.html -->
</div>
:::

::: code-group
<<< @/molecules/buttons/ExpressiveButton-popup.html#horizontal [horizontal]
<<< @/molecules/buttons/ExpressiveButton-popup.html#vertical [vertical]
<<< @/molecules/buttons/ExpressiveButton-popup.html#explosion [explosion]
<<< @/molecules/buttons/ExpressiveButton-popup.html#fill [fill]
<<< @/molecules/buttons/ExpressiveButton-popup.html#fill-circle [fill-circle]
<<< @/molecules/buttons/ExpressiveButton-popup.html#fill-icon [fill-icon]
<<< @/molecules/buttons/ExpressiveButton-popup.html#drop [drop]
<<< @/molecules/buttons/ExpressiveButton-popup.html#bounce [bounce]
:::

## Strong elevation button

::: raw
<div class="dev-section">
    <!--@include: ../../molecules/buttons/ExpressiveButton-elevation.html -->
</div>
:::

::: code-group
<<< @/molecules/buttons/ExpressiveButton-elevation.html#default [default]
<<< @/molecules/buttons/ExpressiveButton-elevation.html#image [image]
<<< @/molecules/buttons/ExpressiveButton-elevation.html#small [small]
<<< @/molecules/buttons/ExpressiveButton-elevation.html#rounded [rounded]
<<< @/molecules/buttons/ExpressiveButton-elevation.html#outlined [outlined]
<<< @/molecules/buttons/ExpressiveButton-elevation.html#custom [custom]
:::


## Component CSS

<<< @/../src/molecules/buttons/ExpressiveButton.scss

## Documentation CSS

```scss
@use "docs/theme.scss" as theme;
@use "src/molecules/buttons/ExpressiveButton.scss" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
    $special-color: theme.$secondary-color,
);
```

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

| Variable                                                 | Description         | Accepted Values | Default                                                |
|:---------------------------------------------------------|:--------------------|:----------------|:-------------------------------------------------------|
| `:zap: :first_quarter_moon_with_face: $special-color`    | Text color          | `color`         | `contrast of {$color}`                                 |
| `:zap: :first_quarter_moon_with_face: $special-on-color` | Text color          | `color`         | `contrast of {$color}`                                 |
| `$border-width`                                          | Border width        | `size`          | `inherited from SimpleButton {$outlined-border-width}` |
| `:zap: :first_quarter_moon_with_face: $border-color`     | Border color        | `color`         | `same as {$color}`                                     |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "src/molecules/buttons/ExpressiveButton.scss" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
    $special-color: theme.$secondary-color,
);
</style>