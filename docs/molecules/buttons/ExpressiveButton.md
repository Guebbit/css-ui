# Expressive button
<Badge type="tip">Molecule</Badge> <Badge type="info">buttons</Badge>

::: danger WORK IN PROGRESS
Will be a collection of strange and various buttons
:::

::: tip MOLECULE Dependencies
- [HighlightRollup](/atoms/highlights/HighlightRollup)
- [SimpleButton](/atoms/buttons/SimpleButton)
:::


## Rollup button

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/buttons/ExpressiveButton-rollup.html -->
</div>
:::

::: code-group
<<< @/public/components-html/molecules/buttons/ExpressiveButton-rollup.html
<<< @/../components/molecules/buttons/ExpressiveButton.scss
:::

## Social button

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/buttons/ExpressiveButton-social.html -->
</div>
:::

::: code-group
<<< @/public/components-html/molecules/buttons/ExpressiveButton-social.html#default [default]
<<< @/public/components-html/molecules/buttons/ExpressiveButton-social.html#plain [plain]
<<< @/public/components-html/molecules/buttons/ExpressiveButton-social.html#outlined [outlined]
<<< @/public/components-html/molecules/buttons/ExpressiveButton-social.html#tonal [tonal]
<<< @/public/components-html/molecules/buttons/ExpressiveButton-social.html#default-icon [default-icon]
<<< @/public/components-html/molecules/buttons/ExpressiveButton-social.html#outlined-icon [outlined-icon]
<<< @/public/components-html/molecules/buttons/ExpressiveButton-social.html#expressive-social [outlined-icon]
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
@include guebbit-include-colors(("brand"), ("border", "pseudo", "hover"));

$expressive-button-primary: $primary-color;
$expressive-button-secondary: $secondary-color;

@import "components/molecules/buttons/ExpressiveButton.scss";
</style>