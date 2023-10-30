# Expressive button
<Badge type="tip">Molecule</Badge> <Badge type="info">buttons</Badge>

::: danger WORK IN PROGRESS
Will be a collection of strange and various buttons
:::

::: tip MOLECULE Dependencies
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
<<< @/../components/molecules/buttons/ExpressiveButton.scss [CSS]
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
<<< @/../components/molecules/buttons/ExpressiveButton.scss [CSS]
:::

## Classes

| Class               | Description                 |
|:--------------------|:----------------------------|
| `animate-active`    | Animation active            |
| `animate-on-active` | Animation active on .active |
| `animate-on-hover`  | Animation active on hover   |
| `rollup-button`     | HighlightRollup mode        |
| `popup-button`      | HighlightPopup mode         |

## SCSS variables

| Variable                              | Description          | Accepted Values | Default                |
|:--------------------------------------|:---------------------|:----------------|:-----------------------|
| `$simple-button-duration`             | Animation durations  | `time`          | `0.3s`                 |
| `$expressive-button-color`            | Main color           | `color`         | `transparent`          |
| `$expressive-button-on-color`         | Text color           | `color`         | `contrast of {$color}` |
| `$expressive-button-special-color`    | Text color           | `color`         | `contrast of {$color}` |
| `$expressive-button-special-on-color` | Text color           | `color`         | `contrast of {$color}` |
| `$expressive-button-border-color`     | Text color           | `color`         | `contrast of {$color}` |

<style lang="scss">
@import "docs/theme.scss";

$expressive-button-color: $primary-color;
$expressive-button-active-color: $secondary-color;
$expressive-button-special-color: $secondary-color;

@import "components/molecules/buttons/ExpressiveButton.scss";
</style>