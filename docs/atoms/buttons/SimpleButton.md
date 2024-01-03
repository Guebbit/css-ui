# Simple Button
<Badge type="tip">Atom</Badge> <Badge type="info">buttons</Badge>

## Code

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/buttons/SimpleButton.html -->
</div>
:::

::: code-group
<<< @/public/components-html/atoms/buttons/SimpleButton.html#default [default]
<<< @/public/components-html/atoms/buttons/SimpleButton.html#image [image]
<<< @/public/components-html/atoms/buttons/SimpleButton.html#small [small]
<<< @/public/components-html/atoms/buttons/SimpleButton.html#rounded [rounded]
<<< @/public/components-html/atoms/buttons/SimpleButton.html#circular [circular]
<<< @/public/components-html/atoms/buttons/SimpleButton.html#pill [pill]
<<< @/public/components-html/atoms/buttons/SimpleButton.html#shadowless [shadowless]
<<< @/public/components-html/atoms/buttons/SimpleButton.html#plain [plain]
<<< @/public/components-html/atoms/buttons/SimpleButton.html#outlined [outlined]
<<< @/public/components-html/atoms/buttons/SimpleButton.html#tonal [tonal]
<<< @/../components/atoms/buttons/SimpleButton.scss [CSS]
:::

## Icons

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/buttons/SimpleButton-icons.html -->
</div>
:::

::: code-group
<<< @/public/components-html/atoms/buttons/SimpleButton-icons.html#default [default]
<<< @/public/components-html/atoms/buttons/SimpleButton-icons.html#image [image]
<<< @/public/components-html/atoms/buttons/SimpleButton-icons.html#image-rounded [image-rounded]
<<< @/public/components-html/atoms/buttons/SimpleButton-icons.html#outlined [outlined]
<<< @/public/components-html/atoms/buttons/SimpleButton-icons.html#rounded [rounded]
<<< @/public/components-html/atoms/buttons/SimpleButton-icons.html#circular [circular]
<<< @/public/components-html/atoms/buttons/SimpleButton-icons.html#pill [pill]
<<< @/public/components-html/atoms/buttons/SimpleButton-icons.html#plain [plain]
<<< @/public/components-html/atoms/buttons/SimpleButton-icons.html#tonal [tonal]
:::

## Social buttons
They are simple buttons but with the right colors they can be color coded

::: tip GLOBAL dependences
- [include-colors](/global/includers/colors.md)
:::

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/buttons/SimpleButton-socials.html -->
</div>
:::

::: code-group
<<< @/public/components-html/atoms/buttons/SimpleButton-socials.html#default [default]
<<< @/public/components-html/atoms/buttons/SimpleButton-socials.html#plain [plain]
<<< @/public/components-html/atoms/buttons/SimpleButton-socials.html#outlined [outlined]
<<< @/public/components-html/atoms/buttons/SimpleButton-socials.html#default-icon [default-icon]
<<< @/public/components-html/atoms/buttons/SimpleButton-socials.html#outlined-icon [outlined-icon]
<<< @/public/components-html/atoms/buttons/SimpleButton-socials.html#expressive-social [outlined-icon]
:::


## Classes

| Class                | Description                      |
|:---------------------|:---------------------------------|
| `animate-active`     | Animation active                 |
| `animate-on-active`  | Animation active on .active      |
| `animate-on-hover`   | Animation active on hover        |
| `button-small`       | Small size                       |
| `button-rounded`     | Rounded border                   |
| `button-circular`    | Circular border                  |
| `button-pill`        | Pill border                      |
| `button-outlined`    | Outlined mode                    |
| `button-plain`       | Plain mode                       |
| `button-tonal`       | Tonal mode                       |
| `button-shadowless`  | Remove box-shadow                |
| `button-icon-only`   | Single icon/image/character mode |

## SCSS variables

| Variable                                  | Description                                   | Accepted Values | Default                           |
|:------------------------------------------|:----------------------------------------------|:----------------|:----------------------------------|
| `$simple-button-color`                    | Main color                                    | `color`         | `transparent`                     |
| `$simple-button-on-color`                 | Text color                                    | `color`         | `contrast of {$color}`            |
| `$simple-button-shadow-color`             | Shadow color (on `var()` MUST be RGB)         | `color`         | `0,0,0 (#000)`                    | 
| `$simple-button-padding`                  | Padding                                       | `size`          | `8px`                             |
| `$simple-button-duration`                 | Animation durations                           | `time`          | `0.3s`                            |
| `$simple-button-border-radius`            | Border radius                                 | `size`          | `2px`                             |
| `$simple-button-outlined-border-width`    | Border width                                  | `size`          | `2px`                             |
| `$simple-button-outlined-on-color`        | Text and Border color of outlined mode        | `color`         | `as {$color}`                     |
| `$simple-button-tonal-color`              | Background of tonal mode                      | `number`        | `0.2`                             |
| `$simple-button-active-color`             | ACTIVE Main color                             | `color`         | `transparent`                     |
| `$simple-button-active-on-color`          | ACTIVE Text color                             | `color`         | `Same as {$color}`                |
| `$simple-button-active-shadow-color`      | ACTIVE Shadow color (on `var()` MUST be RGB)  | `color`         | `Same as {shadow-color}`          |
| `$simple-button-active-outlined-color`    | ACTIVE Background color of outlined mode      | `color`         | `rgba of {$active-color} at 0.05` |
| `$simple-button-active-outlined-on-color` | ACTIVE Text and Border color of outlined mode | `color`         | `Same as {$active-color}`         |
| `$simple-button-active-tonal-color`       | ACTIVE tonal background color                 | `color`         | `rgba of {$active-color} at 0.5`  |
| `$simple-button-active-tonal-on-color`    | ACTIVE tonal text color                       | `color`         | `same as {$active-on-color}`      |
| `$simple-button-active-plain-color`       | ACTIVE plain background color                 | `color`         | `rgba of {$active-color} at 0.05` |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/buttons/SimpleButton.scss" as * with (
    $simple-button-color: theme.$primary-color,
    $simple-button-active-color: theme.$secondary-color,
);
</style>