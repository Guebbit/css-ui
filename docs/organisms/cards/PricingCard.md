# Pricing cards
<Badge type="tip">Atom</Badge> <Badge type="info">Cards</Badge>

## Code

::: raw
<div class="dev-section with-restrictions">
    <!--@include: ../../public/components-html/organisms/cards/PricingCard.html -->
</div>
:::

::: code-group
<<< @/public/components-html/organisms/cards/PricingCard.html#default [default]
<<< @/public/components-html/organisms/cards/PricingCard.html#shadowless [shadowless]
<<< @/public/components-html/organisms/cards/PricingCard.html#border [border]
<<< @/public/components-html/organisms/cards/PricingCard.html#header&footer [header&footer]
<<< @/../components/organisms/cards/PricingCard.scss [CSS]
:::

## Custom
Custom CSS (or SCSS) variables to change style

::: raw
<div class="dev-section with-restrictions" style="background: #212121; padding: 50px; background-image: url(https://www.virtual-room.com/app/themes/virtual-room/build/images/bg-pattern.jpg);">
    <!--@include: ../../public/components-html/organisms/cards/PricingCard-alternate.html -->
</div>
:::

## Classes

| Class               | Description                 |
|:--------------------|:----------------------------|
| `horizontal-list`   | Horizontal mode             |
| `animate-active`    | Animation active            |
| `animate-on-active` | Animation active on .active |
| `animate-on-hover`  | Animation active on hover   |

## SCSS variables

| Variable                            | Description                | Accepted Values | Default                      |
|:------------------------------------|:---------------------------|:----------------|:-----------------------------|
| `$pricing-card-color`               | Main color                 | `color`         | `#fff`                       |
| `$pricing-card-on-color`            | Text on main color         | `color`         | `contrast of {*-color}`      |
| `$pricing-card-border-color`        | Border color               | `color`         | `same as {*-on-color}`       |
| `$pricing-card-border-width`        | Border width               | `size`          | `6px`                        |
| `$pricing-card-border-radius`       | Border radius              | `size`          | `6px`                        |
| `$pricing-card-padding`             | Padding                    | `size`          | `48px`                       |
| `$simple-list-duration`             | Transition's duration      | `duration`      | `0.3s`                       |
| `$pricing-card-shadow-color`        | Shadow color               | `color`         | `#000`                       |
| `$pricing-card-shadow`              | Box-shadow CSS instruction | `CSS`           | `0.2`                        |
| `$pricing-card-base-size`           | Card font-size             | `size`          | `1.2em`                      |
| `$pricing-card-title-size`          | Title font-size            | `size`          | `2em`                        |
| `$pricing-card-price-size`          | Price font-size            | `size`          | `5em`                        |
| `$pricing-card-price-color`         | Price font color           | `color`         | `contrast of {*-on-color}`   |
| `$pricing-card-button-color`        | Button color               | `color`         | `contrast of {*-background}` |
| `$pricing-card-button-shadow-color` | Button shadow color        | `color`         | `contrast of {*-color}`      |
| `$pricing-card-button-shadow`       | Box-shadow CSS instruction | `CSS`           | `*`                          |
| `$pricing-card-shadow-elevated`     | Box-shadow CSS instruction | `CSS`           | `*`                          |
| `$pricing-card-header-color`        | Header color               | `color`         | `same as {*-color}`          |
| `$pricing-card-header-on-color`     | Header text color          | `color`         | `same as {*-on-color}`       |
| `$pricing-card-footer-color`        | Footer color               | `color`         | `same as {*-color}`          |
| `$pricing-card-footer-on-color`     | Footer text color          | `color`         | `same as {*-on-color}`       |

<style lang="scss">
@import "docs/theme.scss";

$pricing-card-on-color: $primary-color; 
$pricing-card-price-color: $secondary-color; 
$pricing-card-button-color: #fff;


@import "components/organisms/cards/PricingCard.scss";


// alternate test in the same page trick
$scss-library-prefix: "alternate-";
$pricing-card-color: transparent; 
$pricing-card-price-color: $secondary-color;
$pricing-card-button-background: transparent;

$pricing-card-footer-color: #fff;
$pricing-card-footer-on-color: rgba($primary-color, 0.2);
$pricing-card-header-color: #fff;
$pricing-card-header-on-color: rgba($primary-color, 0.2);

$pricing-card-shadow-color: $primary-color;
$pricing-card-button-shadow-color: $primary-color;
// re-calc
$pricing-card-shadow:
        0 2px 4px -1px rgba($pricing-card-shadow-color, .2),
        0 4px 5px 0 rgba($pricing-card-shadow-color, .14),
        0 1px 10px 0 rgba($pricing-card-shadow-color, .12);
$pricing-card-shadow-elevated:
        0px 11px 15px -7px rgba($pricing-card-shadow-color, 0.2),
        0px 24px 38px 3px rgba($pricing-card-shadow-color, 0.14),
        0px 9px 46px 8px rgba($pricing-card-shadow-color, 0.12);
$pricing-card-button-shadow:
        0 2px 4px -1px rgba($pricing-card-button-shadow-color, .2),
        0 4px 5px 0 rgba($pricing-card-button-shadow-color, .14),
        0 1px 10px 0 rgba($pricing-card-button-shadow-color, .12);

@import "components/organisms/cards/PricingCard.scss";
</style>