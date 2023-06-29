# Simple Button
<Badge type="tip">Atom</Badge> <Badge type="info">buttons</Badge>

## Code

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/buttons/SimpleButton.html -->
</div>
:::

::: code-group
<<< @/public/components-html/atoms/buttons/SimpleButton.html
<<< @/../components/atoms/buttons/SimpleButton.scss
:::

## Classes

| Class               | Description                 |
|:--------------------|:----------------------------|
| `animate-active`    | Animation active            |
| `animate-on-active` | Animation active on .active |
| `animate-on-hover`  | Animation active on hover   |
| `button-outlined`   | Outlined mode               |
| `button-plain`      | Plain mode                  |
| `button-tonal`      | Tonal mode                  |
| `button-shadowless` | Remove box-shadow           |

## SCSS variables

| Variable                                      | Description                  | Accepted Values | Default                |
|:----------------------------------------------|:-----------------------------|:----------------|:-----------------------|
| `$simple-button-color`                        | Main color                   | `color`         | `transparent`          |
| `$simple-button-on-color`                     | Text color                   | `color`         | `contrast of {$color}` |
| `$simple-button-shadow-color`                 | Shadow color                 | `color`         | `#000`                 |
| `$simple-button-shadow`                       | Box-shadow instruction       | `css`           | `box-shadow`           |
| `$simple-button-padding`                      | Padding                      | `size`          | `8px`                  |
| `$simple-button-border`                       | Border                       | `size`          | `2px`                  |
| `$simple-button-border-radius`                | Border radius                | `size`          | `4px`                  |
| `$simple-button-tonal-opacity`                | Tonal mode bg opacity        | `number`        | `0.2`                  |
| `$simple-button-hover-shadow-color`           | HOVER Shadow color           | `color`         | `#000`                 |
| `$simple-button-hover-shadow`                 | HOVER Box-shadow instruction | `css`           | `box-shadow`           |
| `$simple-button-hover-hover-tonal-opacity`    | HOVER tonal opacity          | `color`         | `standard * 2`         |
| `$simple-button-hover-hover-plain-opacity`    | HOVER tonal opacity          | `color`         | `standard * 2`         |
| `$simple-button-hover-hover-outlined-opacity` | HOVER outlined opacity       | `color`         | `0.05`                 |

<style lang="scss">
@import "docs/theme.scss";

$simple-button-color: $primary-color;

@import "components/atoms/buttons/SimpleButton.scss";
</style>