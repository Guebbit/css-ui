# Simple Button
<Badge type="tip">Atom</Badge> <Badge type="info">buttons</Badge>

## Code

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/buttons/SimpleButton.html -->
</div>
:::

::: code-group
<<< @/public/components-html/atoms/buttons/SimpleButton.html#default [default]
<<< @/public/components-html/atoms/buttons/SimpleButton.html#image [image]
<<< @/public/components-html/atoms/buttons/SimpleButton.html#small [small]
<<< @/public/components-html/atoms/buttons/SimpleButton.html#rounded [rounded]
<<< @/public/components-html/atoms/buttons/SimpleButton.html#boxshadowless [boxshadowless]
<<< @/public/components-html/atoms/buttons/SimpleButton.html#plain [plain]
<<< @/public/components-html/atoms/buttons/SimpleButton.html#outlined [outlined]
<<< @/public/components-html/atoms/buttons/SimpleButton.html#tonal [tonal]
<<< @/../components/atoms/buttons/SimpleButton.scss [CSS]
:::

## Icons

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/buttons/SimpleButton-icons.html -->
</div>
:::

::: code-group
<<< @/public/components-html/atoms/buttons/SimpleButton-icons.html#default [default]
<<< @/public/components-html/atoms/buttons/SimpleButton-icons.html#image [image]
<<< @/public/components-html/atoms/buttons/SimpleButton-icons.html#image-rounded [image-rounded]
<<< @/public/components-html/atoms/buttons/SimpleButton-icons.html#outlined-icon [outlined]
<<< @/public/components-html/atoms/buttons/SimpleButton-icons.html#circle-icon [circle]
<<< @/public/components-html/atoms/buttons/SimpleButton-icons.html#plain [plain]
<<< @/public/components-html/atoms/buttons/SimpleButton-icons.html#tonal [tonal]
:::


## Social buttons
They are simple buttons but with the right colors they can be color coded

::: tip GLOBAL dependences
- [guebbit-include-colors](/global/includers/colors.md)
:::

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/buttons/SimpleButton-socials.html -->
</div>
:::

::: code-group
<<< @/public/components-html/atoms/buttons/SimpleButton-socials.html#default [default]
<<< @/public/components-html/atoms/buttons/SimpleButton-socials.html#plain [plain]
<<< @/public/components-html/atoms/buttons/SimpleButton-socials.html#outlined [outlined]
<<< @/public/components-html/atoms/buttons/SimpleButton-socials.html#default-icon [default-icon]
<<< @/public/components-html/atoms/buttons/SimpleButton-socials.html#outlined-icon [outlined-icon]
<<< @/public/components-html/atoms/buttons/SimpleButton-socials.html#expressive-social [outlined-icon]
:::


## Classes

| Class                  | Description                       |
|:-----------------------|:----------------------------------|
| `animate-active`       | Animation active                  |
| `animate-on-active`    | Animation active on .active       |
| `animate-on-hover`     | Animation active on hover         |
| `button-small`         | Small size                        |
| `button-rounded`       | Rounded border                    |
| `button-outlined`      | Outlined mode                     |
| `button-plain`         | Plain mode                        |
| `button-tonal`         | Tonal mode                        |
| `button-boxshadowless` | Remove box-shadow                 |
| `button-icon-only`     | Single icon/image/character mode  |

## SCSS variables

| Variable                                       | Description                  | Accepted Values | Default                |
|:-----------------------------------------------|:-----------------------------|:----------------|:-----------------------|
| `$simple-button-color`                         | Main color                   | `color`         | `transparent`          |
| `$simple-button-on-color`                      | Text color                   | `color`         | `contrast of {$color}` |
| `$simple-button-shadow-color`                  | Shadow color                 | `color`         | `#000`                 |
| `$simple-button-shadow`                        | Box-shadow instruction       | `css`           | `box-shadow`           |
| `$simple-button-padding`                       | Padding                      | `size`          | `8px`                  |
| `$simple-button-border-radius`                 | Border radius                | `size`          | `2px`                  |
| `$simple-button-outlined-border-width`         | Border width                 | `size`          | `2px`                  |
| `$simple-button-outlined-border-color`         | Border color                 | `color`         | `as {$color}`          |
| `$simple-button-tonal-opacity`                 | Tonal mode bg opacity        | `number`        | `0.2`                  |
| `$simple-button-active-shadow-color`           | HOVER Shadow color           | `color`         | `#000`                 |
| `$simple-button-active-shadow`                 | HOVER Box-shadow instruction | `css`           | `box-shadow`           |
| `$simple-button-active-hover-tonal-opacity`    | HOVER tonal opacity          | `color`         | `standard * 2`         |
| `$simple-button-active-hover-plain-opacity`    | HOVER tonal opacity          | `color`         | `standard * 2`         |
| `$simple-button-active-hover-outlined-opacity` | HOVER outlined opacity       | `color`         | `0.05`                 |

<style lang="scss">
@import "docs/theme.scss";
@include guebbit-include-colors(("brand"), ("border", "pseudo", "hover"));

$simple-button-color: $primary-color;

@import "components/atoms/buttons/SimpleButton.scss";
</style>