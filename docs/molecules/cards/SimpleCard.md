# Simple Card
<Badge type="tip">Molecules</Badge> <Badge type="info">Card</Badge>

::: tip INCLUDED
- [SimpleButton](/atoms/buttons/SimpleButton)
:::


## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/molecules/cards/SimpleCard" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/molecules/cards/SimpleCard" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/molecules/cards/SimpleCard" with (
    $color: (var(--primary-500) / .5),
    $active-color: (var(--secondary-500) / .5)
);
```

## Basics

::: raw
<div class="dev-section">
    <!--@include: ../../molecules/cards/SimpleCard.html -->
</div>
:::

::: code-group
<<< @/molecules/cards/SimpleCard.html#basic [basic]
<<< @/molecules/cards/SimpleCard.html#flat [flat]
<<< @/molecules/cards/SimpleCard.html#elevated [elevated]
:::

## Icons

::: raw
<div class="dev-section">
    <!--@include: ../../molecules/cards/SimpleCard-icons.html -->
</div>
:::

::: code-group
<<< @/molecules/cards/SimpleCard-icons.html#icons
<<< @/molecules/cards/SimpleCard-icons.html#icons2
:::

## Images

::: raw
<div class="dev-section">
    <!--@include: ../../molecules/cards/SimpleCard-image.html -->
</div>
:::

::: code-group
<<< @/molecules/cards/SimpleCard-image.html#basic-grayscale [basic-grayscale]
<<< @/molecules/cards/SimpleCard-image.html#background [background]
<<< @/molecules/cards/SimpleCard-image.html#left-image [left-image]
<<< @/molecules/cards/SimpleCard-image.html#right-image [right-image]
:::

## Alert

::: raw
<div class="dev-section">
    <!--@include: ../../molecules/cards/SimpleCard-alert.html -->
</div>
:::

::: code-group
<<< @/molecules/cards/SimpleCard-alert.html#red-alert [red-alert]
<<< @/molecules/cards/SimpleCard-alert.html#right-icon [right-icon]
<<< @/molecules/cards/SimpleCard-alert.html#left-image [left-image]
<<< @/molecules/cards/SimpleCard-alert.html#icon-center [icon-center]
<<< @/molecules/cards/SimpleCard-alert.html#background [background]
:::

## Component CSS

<<< @/../src/molecules/cards/SimpleCard.scss

## Classes

| Class                          | Description                                                                                            |
|:-------------------------------|:-------------------------------------------------------------------------------------------------------|
| `{effect}-active`              | {effect} active                                                                                        |
| `{effect}-on-active`           | {effect} active on .active                                                                             |
| `{effect}-on-hover`            | {effect} active on hover                                                                               |
| `border-active`                | border (all) active                                                                                    |
| `border-on-active`             | border (all) active on .active                                                                         |
| `border-on-hover`              | border (all) active on hover                                                                           |
| `border-{direction}-active`    | Border active                                                                                          |
| `border-{direction}-on-active` | Border active on .active                                                                               |
| `border-{direction}-on-hover`  | Border active on hover                                                                                 |
| `shadow-active`                | shadow active                                                                                          |
| `shadow-on-active`             | shadow active on .active                                                                               |
| `shadow-on-hover`              | shadow active on hover                                                                                 |
| `alert-left-top`               | alert card icon is left top                                                                            |
| `alert-left-center`            | alert card icon is left center                                                                         |
| `alert-right-top`              | alert card icon is right top                                                                           |
| `alert-right-center`           | alert card icon is right center                                                                        |
| `card-outlined`                | border (all) active at half size + background transparent                                              |
| `card-plain`                   | background transparent and $background color become text color (inherit if $background is transparent) |
| `card-flat`                    | Remove box shadow                                                                                      |
| `card-shadow`                  | Put a after the background and images and before the text                                              |
| `card-actions-absolute`        | card-actions `absolute` position, top left. Apply to **.card-actions**                                 |
| `card-actions-center`          | card-actions `center` align, apply to **.card-actions**                                                |
| `card-actions-end`             | card-actions `end` align, apply to **.card-actions**                                                   |
| `card-actions-vertical`        | card-actions `column`  direction. Apply to **.card-actions**                                           |
| `show-on-active`               | [ON ITEM] SHOW on `active`, HIDE on default                                                            |
| `hide-on-active`               | [ON ITEM] HIDE on `active`                                                                             |

## SCSS variables

| Variable                | Description                                                                                                    | Accepted Values | Default                       |
|:------------------------|:---------------------------------------------------------------------------------------------------------------|:----------------|:------------------------------|
| `$color`                | :x: MAIN color                                                                                                 | `color`         | `transparent`                 |
| `$background`           | :zap: :first_quarter_moon_with_face: Background color                                                          | `color`         | `same as {$color}`            |
| `$on-background`        | :zap: :first_quarter_moon_with_face: Text color                                                                | `color`         | `contrast of {$background}`   |
| `$title-color`          | :zap: :first_quarter_moon_with_face: Text color of titles                                                      | `color`         | `inherit`                     |
| `$icon-color`           | :zap: :first_quarter_moon_with_face: Icon color                                                                | `color`         | `currentcolor`                |
| `$shadow-color`         | :zap: :first_quarter_moon_with_face: Shadow color (on `var()` MUST be RGB)                                     | `color`         | `0,0,0`                       |
| `$shadow-on-background` | :zap: :first_quarter_moon_with_face: Shadow text color of text                                                 | `color`         | `contrast of {$shadow-color}` |
| `$shadow-title-color`   | :zap: :first_quarter_moon_with_face: Shadow text color of titles                                               | `color`         | `inherit`                     |
| `$overlay`              | :first_quarter_moon_with_face: Overlay\shadow over image (under text) for legibility (on `var()` MUST be RGB)  | `color`         | `#000`                        |
| `$on-overlay`           | :first_quarter_moon_with_face: Text color for further legibility                                               | `color`         | `contrast of {$overlay}`      |
| `$overlay-opacity`      | :zap: Overlay opacity                                                                                          | `percentage`    | `0.75`                        |
| `$outlined-color`       | :zap: :first_quarter_moon_with_face: Outlined color variant                                                    | `color`         | `same as {color}`             |
| `$plain-color`          | :zap: :first_quarter_moon_with_face: Plain color variant                                                       | `color`         | `same as {color}`             |
| `$border-color`         | :zap: :first_quarter_moon_with_face: Border color                                                              | `color`         | `same as {color}`             |
| `$divider-color`        | :zap: :first_quarter_moon_with_face: Divider color                                                             | `color`         | `same as {color}`             |
| `$border-width`         | Border width                                                                                                   | `size`          | `6px`                         |
| `$border-radius`        | Border radius                                                                                                  | `size`          | `6px`                         |
| `$image-border-radius`  | Border radius                                                                                                  | `size`          | `same as {$border-radius}`    |
| `$divider-color`        | :zap: :first_quarter_moon_with_face: Divider color                                                             | `color`         | `contrast of {$background}`   |
| `$divider-height`       | Divider height                                                                                                 | `size`          | `2px`                         |
| `$padding`              | Padding of content                                                                                             | `size`          | `24px`                        |
| `$duration`             | Padding                                                                                                        | `duration`      | `0.3s`                        |
| `$elevated-shadow`      | Box-shadow instruction                                                                                         | `css`           | `box-shadow`                  |


<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/buttons/SimpleButton" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
@use "../src/molecules/cards/SimpleCard" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix,
);
</style>