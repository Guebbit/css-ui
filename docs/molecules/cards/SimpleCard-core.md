# Simple Card
<Badge type="tip">Molecules</Badge> <Badge type="info">Card</Badge>

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
    <div class="simple-card">
        <div class="card-content">
            <h2 class="card-title">Title of lorem ipsum</h2>
            <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
            <br/>
            <p>
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            </p>
        </div>
    </div>
</div>
:::

::: code-group
```html
<div class="simple-card">
    <div class="card-content">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
```
:::


## Variants

::: raw
<div class="dev-section">
    <!--@include: ../../molecules/cards/SimpleCard.html -->
</div>
:::

::: code-group
<<< @/molecules/cards/SimpleCard.html#outlined [Outlined]
<<< @/molecules/cards/SimpleCard.html#plain [Plain]
<<< @/molecules/cards/SimpleCard.html#flat [Flat]
<<< @/molecules/cards/SimpleCard.html#plain-flat [Plain-flat]
<<< @/molecules/cards/SimpleCard.html#elevated [Elevated]
<<< @/molecules/cards/SimpleCard.html#rounded [Rounded]
<<< @/molecules/cards/SimpleCard.html#blurred [Blurred]
:::


## Borders

::: raw
<div class="dev-section">
    <!--@include: ../../molecules/cards/SimpleCard-borders.html -->
</div>
:::

::: code-group
<<< @/molecules/cards/SimpleCard-borders.html#right [right]
<<< @/molecules/cards/SimpleCard-borders.html#full [full]
<<< @/molecules/cards/SimpleCard-borders.html#top-bottom [top-bottom]
<<< @/molecules/cards/SimpleCard-borders.html#left-right [left-right]
:::


## Icons

::: tip Included in the example:
- [SimpleButton](/atoms/buttons/SimpleButton)
:::

::: raw
<div class="dev-section">
    <!--@include: ../../molecules/cards/SimpleCard-icons.html -->
</div>
:::

::: code-group
<<< @/molecules/cards/SimpleCard-icons.html#icons [Example 1]
<<< @/molecules/cards/SimpleCard-icons.html#icons2 [Example 2]
<<< @/molecules/cards/SimpleCard-icons.html#icons3 [Example 3]
:::

::: raw
<div class="dev-section">
    <!--@include: ../../molecules/cards/SimpleCard-alert.html -->
</div>
:::

::: code-group
<<< @/molecules/cards/SimpleCard-alert.html#left-icon [left-icon]
<<< @/molecules/cards/SimpleCard-alert.html#right-icon [right-icon]
<<< @/molecules/cards/SimpleCard-alert.html#right-icon-centered [right-icon-centered]
<<< @/molecules/cards/SimpleCard-alert.html#top-center-icon [top-center-icon]
<<< @/molecules/cards/SimpleCard-alert.html#bottom-right-icon [bottom-right-icon]
<<< @/molecules/cards/SimpleCard-alert.html#background [background]
<<< @/molecules/cards/SimpleCard-alert.html#some-customization [some-customization]
:::

## Images
::: tip
Use *--image-aspect-ratio* on big images that are top or bottom, since they could take up a lot of space
:::

::: raw
<div class="dev-section">
    <!--@include: ../../molecules/cards/SimpleCard-media.html -->
</div>
:::

::: code-group
<<< @/molecules/cards/SimpleCard-media.html#default [default]
<<< @/molecules/cards/SimpleCard-media.html#default-bottom [default-bottom]
<<< @/molecules/cards/SimpleCard-media.html#background [background]
<<< @/molecules/cards/SimpleCard-media.html#left-image [left-image]
<<< @/molecules/cards/SimpleCard-media.html#right-image [right-image]
<<< @/molecules/cards/SimpleCard-media.html#background-hover [background-hover]
<<< @/molecules/cards/SimpleCard-media.html#image-hover [image-hover]
<<< @/molecules/cards/SimpleCard-media.html#video [video]
<<< @/molecules/cards/SimpleCard-media.html#video-background [video-background]
<<< @/molecules/cards/SimpleCard-media.html#mix [mix]
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
| `card-overlay`                  | Put a after the background and images and before the text                                              |
| `card-section-absolute`        | card-actions `absolute` position, top left. Apply to **.card-actions**                                 |
| `card-section-center`          | card-actions `center` align, apply to **.card-actions**                                                |
| `card-section-end`             | card-actions `end` align, apply to **.card-actions**                                                   |
| `card-section-column`          | card-actions `column`  direction. Apply to **.card-actions**                                           |
| `show-on-active`               | [ON ITEM] SHOW on `active`, HIDE on default                                                            |
| `hide-on-active`               | [ON ITEM] HIDE on `active`                                                                             |

## SCSS variables

| Variable                 | Description                                                                                                   | Accepted Values | Default                       |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------|:----------------|:------------------------------|
| `$color`                 | :x: MAIN color                                                                                                | `color`         | `transparent`                 |
| `$background`            | :zap: :first_quarter_moon_with_face: Background color                                                         | `color`         | `same as {$color}`            |
| `$on-background`         | :zap: :first_quarter_moon_with_face: Text color                                                               | `color`         | `contrast of {$background}`   |
| `$title-color`           | :zap: :first_quarter_moon_with_face: Text color of titles                                                     | `color`         | `inherit`                     |
| `$icon-color`            | :zap: :first_quarter_moon_with_face: Icon color                                                               | `color`         | `currentcolor`                |
| `$shadow-color`          | :zap: :first_quarter_moon_with_face: Shadow color (on `var()` MUST be RGB)                                    | `color`         | `0,0,0`                       |
| `$shadow-on-background`  | :zap: :first_quarter_moon_with_face: Shadow text color of text                                                | `color`         | `contrast of {$shadow-color}` |
| `$shadow-title-color`    | :zap: :first_quarter_moon_with_face: Shadow text color of titles                                              | `color`         | `inherit`                     |
| `$overlay`               | :first_quarter_moon_with_face: Overlay\shadow over image (under text) for legibility (on `var()` MUST be RGB) | `color`         | `#000`                        |
| `$on-overlay`            | :first_quarter_moon_with_face: Text color for further legibility                                              | `color`         | `contrast of {$overlay}`      |
| `$overlay-opacity`       | :zap: Overlay opacity                                                                                         | `percentage`    | `0.75`                        |
| `$outlined-color`        | :zap: :first_quarter_moon_with_face: Outlined color variant                                                   | `color`         | `same as {$color}`            |
| `$plain-color`           | :zap: :first_quarter_moon_with_face: Plain color variant                                                      | `color`         | `same as {$color}`            |
| `$border-color`          | :zap: :first_quarter_moon_with_face: Border color                                                             | `color`         | `same as {$color}`            |
| `$divider-color`         | :zap: :first_quarter_moon_with_face: Divider color                                                            | `color`         | `same as {$color}`            |
| `$border-width`          | Border width                                                                                                  | `size`          | `6px`                         |
| `$border-radius`         | Border radius                                                                                                 | `size`          | `6px`                         |
| `$rounded-border-radius` | Border radius in card-rounded                                                                                 | `size`          | `{$border-radius} * 5`        |
| `$image-border-radius`   | Border radius of image                                                                                        | `size`          | `same as {$border-radius}`    |
| `$image-aspect-ratio`    | Aspect ratio of image. WARNING: use fraction (/) on img.card-media and percentage (%) for .card-media > img   | `size`          | `none`                        |
| `$divider-color`         | :zap: :first_quarter_moon_with_face: Divider color                                                            | `color`         | `contrast of {$background}`   |
| `$divider-height`        | Divider height                                                                                                | `size`          | `2px`                         |
| `$alert-size`            | Alert icon\image size                                                                                         | `size`          | `1.5em`                       |
| `$padding`               | Padding of content                                                                                            | `size`          | `24px`                        |
| `$duration`              | Padding                                                                                                       | `duration`      | `0.3s`                        |
| `$elevated-shadow`       | Box-shadow instruction                                                                                        | `css`           | `box-shadow`                  |
