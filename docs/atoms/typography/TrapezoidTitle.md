# Trapezoid Title
<Badge type="tip">Atom</Badge> <Badge type="info">typography</Badge>

## Code

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/typography/TrapezoidTitle.html -->
</div>

::: code-group
<<< @/public/components-html/atoms/typography/TrapezoidTitle.html
<<< @/../components/atoms/typography/TrapezoidTitle.scss
:::

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/typography/TrapezoidTitle.html -->
</div>

<<< @/public/components-html/atoms/typography/SimpleTextIcon-column.html

## Classes

| Class                          | Description                 |
|:-------------------------------|:----------------------------|
| `animate-active`               | Animation active            |
| `animate-on-active`            | Animation active on .active |
| `animate-on-hover`             | Animation active on hover   |


## SCSS variables

| Variable                     | Description               | Accepted Values | Default |
|:-----------------------------|:--------------------------|:----------------|:--------|
| `$trapezoid-title-primary`   | Primary color             | `color`         | `#fff`  |
| `$trapezoid-title-secondary` | Secondary color           | `color`         | `#fff`  |
| `$trapezoid-title-border`    | Size of `outlined` border | `size`          | `0.1em` |

<style lang="scss">
@import "docs/theme.scss";

$trapezoid-title-primary: $primary-color;
$trapezoid-title-secondary: $secondary-color;
$trapezoid-title-border: 0.2em;

@import "components/atoms/typography/TrapezoidTitle.scss";
</style>