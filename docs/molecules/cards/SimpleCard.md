# Simple Card
<Badge type="tip">Molecules</Badge> <Badge type="info">Card</Badge>

## Example: basic

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/cards/SimpleCard.html -->
</div>
:::

::: code-group
<<< @/public/components-html/molecules/cards/SimpleCard.html
<<< @/../components/molecules/cards/SimpleCard.scss
:::

## Example: icons

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/cards/SimpleCard-icons.html -->
</div>
:::

<<< @/public/components-html/molecules/cards/SimpleCard-icons.html

## Example: image

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/cards/SimpleCard-image.html -->
</div>
:::

<<< @/public/components-html/molecules/cards/SimpleCard-image.html

## Example: alert

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/cards/SimpleCard-alert.html -->
</div>
:::

## Example: borders

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/cards/SimpleCard-borders.html -->
</div>
:::

<<< @/public/components-html/molecules/cards/SimpleCard-borders.html

## Example: mix

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/cards/SimpleCard-mix.html -->
</div>
:::

<<< @/public/components-html/molecules/cards/SimpleCard-mix.html

## Custom
Custom CSS (or SCSS) variables to change style

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/cards/SimpleCard-alternate.html -->
</div>
:::

## Classes

| Class                          | Description                                                             |
|:-------------------------------|:------------------------------------------------------------------------|
| `{effect}-active`              | {effect} active                                                         |
| `{effect}-on-active`           | {effect} active on .active                                              |
| `{effect}-on-hover`            | {effect} active on hover                                                |
| `border-active`                | border (all) active                                                     |
| `border-on-active`             | border (all) active on .active                                          |
| `border-on-hover`              | border (all) active on hover                                            |
| `border-{direction}-active`    | border active                                                           |
| `border-{direction}-on-active` | border active on .active                                                |
| `border-{direction}-on-hover`  | border active on hover                                                  |
| `shadow-active`                | shadow active                                                           |
| `shadow-on-active`             | shadow active on .active                                                |
| `shadow-on-hover`              | shadow active on hover                                                  |
| `grayscale-active`             | grayscale active                                                        |
| `grayscale-on-active`          | grayscale active on .active                                             |
| `grayscale-on-hover`           | grayscale active on hover                                               |
| `grayscale-reverse-active`     | reverse grayscale active                                                |
| `grayscale-reverse-on-active`  | reverse grayscale active on .active                                     |
| `grayscale-reverse-on-hover`   | reverse grayscale active on hover                                       |
| `alert-left-top`               | alert card icon is left top                                             |
| `alert-left-center`            | alert card icon is left center                                          |
| `alert-right-top`              | alert card icon is right top                                            |
| `alert-right-center`           | alert card icon is right center                                         |
| `card-boxshadowless`           | Remove box shadow                                                       |
| `card-shadow`                  | Put a after the background and images and before the text               |
| `card-actions-absolute`        | card-actions `absolute` position, top left. Apply to **.card-actions**  |
| `card-actions-center`          | card-actions `center` align, apply to **.card-actions**                 |
| `card-actions-end`             | card-actions `end` align, apply to **.card-actions**                    |
| `show-on-active`               | [ON ITEM] SHOW on `active`, HIDE on default                             |
| `hide-on-active`               | [ON ITEM] HIDE on `active`                                              |

## SCSS variables

| Variable                           | Description                 | Accepted Values | Default                           |
|:-----------------------------------|:----------------------------|:----------------|:----------------------------------|
| `$simple-card-background`          | Background color            | `color`         | `transparent`                     |
| `$simple-card-text-color`          | Text color                  | `color`         | `contrast of {$background}`       |
| `$simple-card-shadow-color`        | Shadow color                | `color`         | `#000`                            |
| `$simple-card-shadow-opacity`      | Shadow color                | `percentage`    | `0.75`                            |
| `$simple-card-shadow`              | Box-shadow instruction      | `css`           | `box-shadow`                      |
| `$simple-card-icon-color`          | Icon color                  | `color`         | `currentcolor`                    |
| `$simple-card-border-color`        | Border color                | `color`         | `as {$simple-card-color}`         |
| `$simple-card-border-width`        | Border width                | `size`          | `6px`                             |
| `$simple-card-border-radius`       | Border radius               | `size`          | `6px`                             |
| `$simple-card-image-border-radius` | Border radius               | `size`          | `as {$simple-card-border-radius}` |
| `$simple-card-padding`             | Padding of content          | `size`          | `24px`                            |
| `$simple-card-duration`            | Padding                     | `duration`      | `0.3s`                            |
| `$simple-card-active-*`            | All classes active variants | `*`             | `*`                               |

<style lang="scss">
@import "docs/theme.scss";

$simple-card-color: $primary-color;


@import "components/molecules/cards/SimpleCard.scss";


// alternate test in the same page trick
$scss-library-prefix: "alternate1-";
$simple-card-icon-color: $secondary-color;
$simple-card-border-color: $primary-color;
$simple-card-shadow-color: $primary-color;

// re-calc
$simple-card-shadow:
        0 2px 4px -1px rgba($simple-card-shadow-color, .2),
        0 4px 5px 0 rgba($simple-card-shadow-color, .14),
        0 1px 10px 0 rgba($simple-card-shadow-color, .12);
$simple-card-shadow-elevated:
        0 11px 15px -7px rgba($simple-card-shadow-color, 0.2),
        0 24px 38px 3px rgba($simple-card-shadow-color, 0.14),
        0 9px 46px 8px rgba($simple-card-shadow-color, 0.12);


@import "components/molecules/cards/SimpleCard.scss";


$scss-library-prefix: "alternate2-";
$simple-card-active-background: red;
$simple-card-active-text-color: guebbit-contrast($simple-card-active-background);
$simple-card-active-icon-color: green;
$simple-card-active-shadow-color: purple;
$simple-card-active-shadow:
        0 7px 9px -4px rgba($simple-card-active-shadow-color, .6),
        0 14px 21px 2px rgba($simple-card-active-shadow-color, .4),
        0 5px 26px 4px rgba($simple-card-active-shadow-color, .2);

@import "components/molecules/cards/SimpleCard.scss";
</style>