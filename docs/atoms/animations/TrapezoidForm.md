# Trapezoid Form
<Badge type="tip">Atom</Badge> <Badge type="info">animations</Badge>

## Regular

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/animations/TrapezoidForm.html -->
</div>
:::

::: code-group
<<< @/public/components-html/atoms/animations/TrapezoidForm.html
<<< @/../components/atoms/animations/TrapezoidForm.scss
:::

## Buttons

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/animations/TrapezoidForm-buttons.html -->
</div>
:::

::: code-group
<<< @/public/components-html/atoms/animations/TrapezoidForm-buttons.html
:::

## Cards

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/animations/TrapezoidForm-cards.html -->
</div>
:::

::: code-group
<<< @/public/components-html/atoms/animations/TrapezoidForm-cards.html
:::


## Classes

| Class               | Description                 |
|:--------------------|:----------------------------|
| `form-outlined`     | Outlined mode               |
| `form-big`          | Enlarge form                |
| `form-bottom`       | Move bottom                 |
| `form-left`         | Move left                   |
| `form-reverse`      | Form reverse                |
| `animate-active`    | Animation active            |
| `animate-on-active` | Animation active on .active |
| `animate-on-hover`  | Animation active on hover   |


## SCSS variables

| Variable                          | Description           | Accepted Values | Default                |
|:----------------------------------|:----------------------|:----------------|:-----------------------|
| `$simple-form-color`              | Main color            | `color`         | `transparent`          |
| `$simple-form-opacity`            | Text color            | `color`         | `contrast of {$color}` |
| `$simple-form-border`             | Shadow color          | `color`         | `#000`                 |
| `$simple-form-border-radius`      | Padding               | `size`          | `8px`                  |
| `$simple-form-position-top`       | Border                | `size`          | `2px`                  |
| `$simple-form-position-left`      | Border radius         | `size`          | `4px`                  |
| `$simple-form-position-modifier`  | Tonal mode bg opacity | `number`        | `0.2`                  |


<style lang="scss">
@import "docs/theme.scss";

$simple-form-color: $primary-color;

@import "components/atoms/animations/TrapezoidForm.scss";
@import "components/atoms/buttons/SimpleButton.scss";
@import "components/molecules/cards/SimpleCard.scss";
</style>