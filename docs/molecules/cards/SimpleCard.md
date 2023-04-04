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

## Example: mix

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/cards/SimpleCard-mix.html -->
</div>
:::

<<< @/public/components-html/molecules/cards/SimpleCard-mix.html

## Classes

| Class                         | Description                                               |
|:------------------------------|:----------------------------------------------------------|
| `{effect}-active`             | {effect} active                                           |
| `{effect}-on-active`          | {effect} active on .active                                |
| `{effect}-on-hover`           | {effect} active on hover                                  |
| `border-active`               | border active                                             |
| `border-on-active`            | border active on .active                                  |
| `border-on-hover`             | border active on hover                                    |
| `shadow-active`               | shadow active                                             |
| `shadow-on-active`            | shadow active on .active                                  |
| `shadow-on-hover`             | shadow active on hover                                    |
| `grayscale-active`            | grayscale active                                          |
| `grayscale-on-active`         | grayscale active on .active                               |
| `grayscale-on-hover`          | grayscale active on hover                                 |
| `grayscale-reverse-active`    | reverse grayscale active                                  |
| `grayscale-reverse-on-active` | reverse grayscale active on .active                       |
| `grayscale-reverse-on-hover`  | reverse grayscale active on hover                         |
| `alert-left-top`              | alert card icon is left top                               |
| `alert-left-center`           | alert card icon is left center                            |
| `alert-right-top`             | alert card icon is right top                              |
| `alert-right-center`          | alert card icon is right center                           |
| `card-borderless`             | Remove box shadow                                         |
| `card-shadow`                 | Put a after the background and images and before the text |
| `card-actions-center`         | card-actions `center` align, apply to .card-actions       |
| `card-actions-end`            | card-actions `end` align, apply to .card-actions          |


## SCSS variables

| Variable                           | Description        | Accepted Values | Default                           |
|:-----------------------------------|:-------------------|:----------------|:----------------------------------|
| `$simple-card-color`               | Primary color      | `color`         | `#000000`                         |
| `$simple-card-background`          | Background color   | `color`         | `transparent`                     |
| `$simple-card-text-color`          | Text color         | `color`         | `contrast of {$background}`       |
| `$simple-card-shadow-color`        | Shadow color       | `color`         | `#000000`                         |
| `$simple-card-icon-color`          | Icon color         | `color`         | `as {$simple-card-color}`         |
| `$simple-card-border-color`        | Border color       | `color`         | `as {$simple-card-color}`         |
| `$simple-card-border-width`        | Border width       | `size`          | `6px`                             |
| `$simple-card-border-radius`       | Border radius      | `size`          | `6px`                             |
| `$simple-card-image-border-radius` | Border radius      | `size`          | `as {$simple-card-border-radius}` |
| `$simple-card-padding`             | Padding of content | `size`          | `24px`                            |
| `$simple-card-duration`            | Padding            | `duration`      | `0.3s`                            |

<style lang="scss">
@import "docs/theme.scss";

$simple-card-color: $primary-color;

@import "components/molecules/cards/SimpleCard.scss";
</style>