# Simple Card
<Badge type="tip">Molecules</Badge> <Badge type="info">Card</Badge>

## Use

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/molecules/card-simple";
```

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/molecules/card-simple";
```

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/molecules/card-simple" with (
    $color: rgb(var(--main-color) / .5),
    $active-color: rgb(var(--active-main-color) / .5)
);
```

## Basics

::: raw
<div class="dev-section">
<!--@include: ../examples/molecules/card-simple-no-theme-basics.html -->
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
<!--@include: ../examples/molecules/card-simple.html -->
</div>
:::

::: code-group
<<< @/examples/molecules/card-simple.html#outlined [Outlined]
<<< @/examples/molecules/card-simple.html#plain [Plain]
<<< @/examples/molecules/card-simple.html#flat [Flat]
<<< @/examples/molecules/card-simple.html#plain-flat [Plain-flat]
<<< @/examples/molecules/card-simple.html#elevated [Elevated]
<<< @/examples/molecules/card-simple.html#rounded [Rounded]
<<< @/examples/molecules/card-simple.html#blurred [Blurred]
<<< @/examples/molecules/card-simple.html#monoline [Monoline]
:::


## Borders

::: raw
<div class="dev-section">
<!--@include: ../examples/molecules/card-simple-borders.html -->
</div>
:::

::: code-group
<<< @/examples/molecules/card-simple-borders.html#right [right]
<<< @/examples/molecules/card-simple-borders.html#full [full]
<<< @/examples/molecules/card-simple-borders.html#top-bottom [top-bottom]
<<< @/examples/molecules/card-simple-borders.html#left-right [left-right]
:::


## Icons

::: tip Included in the example:
- [SimpleButton](/atoms/button-simple)
  :::

::: raw
<div class="dev-section">
<!--@include: ../examples/molecules/card-simple-icons.html -->
</div>
:::

::: code-group
<<< @/examples/molecules/card-simple-icons.html#icons [Example 1]
<<< @/examples/molecules/card-simple-icons.html#icons2 [Example 2]
<<< @/examples/molecules/card-simple-icons.html#icons3 [Example 3]
:::

::: raw
<div class="dev-section">
<!--@include: ../examples/molecules/card-simple-alert.html -->
</div>
:::

::: code-group
<<< @/examples/molecules/card-simple-alert.html#left-icon [left-icon]
<<< @/examples/molecules/card-simple-alert.html#right-icon [right-icon]
<<< @/examples/molecules/card-simple-alert.html#right-icon-centered [right-icon-centered]
<<< @/examples/molecules/card-simple-alert.html#top-center-icon [top-center-icon]
<<< @/examples/molecules/card-simple-alert.html#bottom-right-icon [bottom-right-icon]
<<< @/examples/molecules/card-simple-alert.html#background [background]
<<< @/examples/molecules/card-simple-alert.html#some-customization [some-customization]
:::

## Images
::: tip
Use *--image-aspect-ratio* on big images that are top or bottom, since they could take up a lot of space
:::

::: raw
<div class="dev-section">
<!--@include: ../examples/molecules/card-simple-media.html -->
</div>
:::

::: code-group
<<< @/examples/molecules/card-simple-media.html#default [default]
<<< @/examples/molecules/card-simple-media.html#default-bottom [default-bottom]
<<< @/examples/molecules/card-simple-media.html#background [background]
<<< @/examples/molecules/card-simple-media.html#left-image [left-image]
<<< @/examples/molecules/card-simple-media.html#right-image [right-image]
<<< @/examples/molecules/card-simple-media.html#background-hover [background-hover]
<<< @/examples/molecules/card-simple-media.html#image-hover [image-hover]
<<< @/examples/molecules/card-simple-media.html#video [video]
<<< @/examples/molecules/card-simple-media.html#video-background [video-background]
<<< @/examples/molecules/card-simple-media.html#mix [mix]
:::

## Component CSS

::: code-group
<<< @/../src/components/molecules/card-simple/_architecture.scss [_architecture.scss]
<<< @/../src/components/molecules/card-simple/index.scss [index.scss]
:::

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
| `card-overlay`                 | Put a after the background and images and before the text                                              |
| `card-section-absolute`        | card-actions `absolute` position, top left. Apply to **.card-actions**                                 |
| `card-section-center`          | card-actions `center` align, apply to **.card-actions**                                                |
| `card-section-end`             | card-actions `end` align, apply to **.card-actions**                                                   |
| `card-section-column`          | card-actions `column`  direction. Apply to **.card-actions**                                           |
| `show-on-active`               | [ON ITEM] SHOW on `active`, HIDE on default                                                            |
| `hide-on-active`               | [ON ITEM] HIDE on `active`                                                                             |

## SCSS variables

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `$color` | `--simple-card-main-color` | :x: MAIN color | `color` | `transparent` |
| `$background` | — | :zap: :first_quarter_moon_with_face: Background color | `color` | `same as {$color}` |
| `$on-background` | `--simple-card-on-main-color` | :zap: :first_quarter_moon_with_face: Text color | `color` | `contrast of {$background}` |
| `$title-color` | — | :zap: :first_quarter_moon_with_face: Text color of titles | `color` | `inherit` |
| `$icon-color` | — | :zap: :first_quarter_moon_with_face: Icon color | `color` | `currentcolor` |
| `$shadow-color` | `--shadow-color` | :zap: :first_quarter_moon_with_face: Shadow color (on `var()` MUST be RGB) | `color` | `0,0,0` |
| `$shadow-on-background` | — | :zap: :first_quarter_moon_with_face: Shadow text color of text | `color` | `contrast of {$shadow-color}` |
| `$shadow-title-color` | — | :zap: :first_quarter_moon_with_face: Shadow text color of titles | `color` | `inherit` |
| `$overlay` | — | :first_quarter_moon_with_face: Overlay\shadow over image (under text) for legibility (on `var()` MUST be RGB) | `color` | `#000` |
| `$on-overlay` | — | :first_quarter_moon_with_face: Text color for further legibility | `color` | `contrast of {$overlay}` |
| `$overlay-opacity` | `--simple-card-overlay-opacity` | :zap: Overlay opacity | `percentage` | `0.75` |
| `$outlined-color` | — | :zap: :first_quarter_moon_with_face: Outlined color variant | `color` | `same as {$color}` |
| `$plain-color` | — | :zap: :first_quarter_moon_with_face: Plain color variant | `color` | `same as {$color}` |
| `$border-color` | `--simple-card-border-color` | :zap: :first_quarter_moon_with_face: Border color | `color` | `same as {$color}` |
| `$border-width` | `--simple-card-border-width` | Border width | `size` | `6px` |
| `$border-radius` | `--simple-card-border-radius` | Border radius | `size` | `6px` |
| `$rounded-border-radius` | `--simple-card-rounded-border-radius` | Border radius in card-rounded | `size` | `{$border-radius} * 5` |
| `$image-border-radius` | `--simple-card-image-border-radius` | Border radius of image | `size` | `same as {$border-radius}` |
| `$image-aspect-ratio` | `--simple-card-image-aspect-ratio` | Aspect ratio of image. WARNING: use fraction (/) on img.card-media and percentage (%) for .card-media > img | `size` | `none` |
| `$divider-color` | — | :zap: :first_quarter_moon_with_face: Divider color | `color` | `contrast of {$background}` |
| `$divider-height` | `--simple-card-divider-height` | Divider height | `size` | `2px` |
| `$alert-size` | `--simple-card-alert-size` | Alert icon\image size | `size` | `1.5em` |
| `$padding` | `--simple-card-padding` | Padding of content | `size` | `24px` |
| `$duration` | `--simple-card-duration` | Padding | `duration` | `0.3s` |
| `$elevated-shadow` | — | Box-shadow instruction | `css` | `box-shadow` |

<style lang="scss">
@use "../src/components/atoms/button-simple";
@use "../src/components/molecules/card-simple";
</style>
