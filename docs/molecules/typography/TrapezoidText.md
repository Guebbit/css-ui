# Trapezoid Text
<Badge type="tip">Molecules</Badge> <Badge type="info">Typography</Badge>

::: tip ORGANISM Dependencies
- [TrapezoidForm](/atoms/animations/TrapezoidForm.md)
- [SimpleButton](/atoms/buttons/SimpleButton.md)
:::

## Regular

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/typography/TrapezoidText.html -->
</div>
:::

::: code-group
<<< @/public/components-html/molecules/typography/TrapezoidText.html
<<< @/../components/molecules/typography/TrapezoidText.scss
:::

## Animated

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/typography/TrapezoidText-animated.html -->
</div>
:::

::: code-group
<<< @/public/components-html/molecules/typography/TrapezoidText-animated.html
:::

## Dark

::: raw
<div class="dev-section dark-mode">
    <!--@include: ../../public/components-html/molecules/typography/TrapezoidText-animated.html -->
</div>
:::

::: code-group
<<< @/public/components-html/molecules/typography/TrapezoidText-animated.html
:::

## Classes

| Class                     | Description                           |
|:--------------------------|:--------------------------------------|
| `animate-active`          | Animation active                      |
| `animate-on-active`       | Animation active on .active           |
| `animate-on-hover`        | Animation active on hover             |
| `animate-cross-active`    | Alternate animation active            |
| `animate-cross-on-active` | Alternate animation active on .active |
| `animate-cross-on-hover`  | Alternate animation active on hover   |


## SCSS variables

| Variable                     | Description               | Accepted Values | Default |
|:-----------------------------|:--------------------------|:----------------|:--------|
| `$trapezoid-title-primary`   | Primary color             | `color`         | `#fff`  |
| `$trapezoid-title-secondary` | Secondary color           | `color`         | `#fff`  |
| `$trapezoid-title-border`    | Size of `outlined` border | `size`          | `0.1em` |

<style lang="scss">
@import "docs/theme.scss";

$trapezoid-text-secondary: $primary-color;

.dev-section.dark-mode{
    .simple-button.trapezoid-text{
        color: #fff !important; 
    }
    .trapezoid-form{
        &:last-of-type{
            color: #fff !important;    
        }
    }
}

@import "components/atoms/animations/TrapezoidForm.scss";
@import "components/atoms/buttons/SimpleButton.scss";
@import "components/molecules/typography/TrapezoidText.scss";
</style>