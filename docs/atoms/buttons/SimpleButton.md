# Simple Button
<Badge type="tip">Atom</Badge> <Badge type="info">buttons</Badge>

## Code

::: raw
<div class="dev-section">
    <!--@include: ../../atoms/buttons/SimpleButton.html -->
</div>
:::

::: code-group
<<< @/atoms/buttons/SimpleButton.html#default [default]
<<< @/atoms/buttons/SimpleButton.html#image [image]
<<< @/atoms/buttons/SimpleButton.html#small [small]
<<< @/atoms/buttons/SimpleButton.html#rounded [rounded]
<<< @/atoms/buttons/SimpleButton.html#circular [circular]
<<< @/atoms/buttons/SimpleButton.html#pill [pill]
<<< @/atoms/buttons/SimpleButton.html#shadowless [shadowless]
<<< @/atoms/buttons/SimpleButton.html#plain [plain]
<<< @/atoms/buttons/SimpleButton.html#outlined [outlined]
<<< @/atoms/buttons/SimpleButton.html#tonal [tonal]
:::

## Icons

::: raw
<div class="dev-section">
    <!--@include: ../../atoms/buttons/SimpleButton-icons.html -->
</div>
:::

::: code-group
<<< @/atoms/buttons/SimpleButton-icons.html#default [default]
<<< @/atoms/buttons/SimpleButton-icons.html#image [image]
<<< @/atoms/buttons/SimpleButton-icons.html#image-rounded [image-rounded]
<<< @/atoms/buttons/SimpleButton-icons.html#outlined [outlined]
<<< @/atoms/buttons/SimpleButton-icons.html#rounded [rounded]
<<< @/atoms/buttons/SimpleButton-icons.html#circular [circular]
<<< @/atoms/buttons/SimpleButton-icons.html#pill [pill]
<<< @/atoms/buttons/SimpleButton-icons.html#plain [plain]
<<< @/atoms/buttons/SimpleButton-icons.html#tonal [tonal]
:::

## Social buttons
They are simple buttons but with the right colors they can be color coded

::: tip GLOBAL dependences
- [include-colors](/global/includers/colors.md)
:::

::: raw
<div class="dev-section">
    <!--@include: ../../atoms/buttons/SimpleButton-socials.html -->
</div>
:::

::: code-group
<<< @/atoms/buttons/SimpleButton-socials.html#default [default]
<<< @/atoms/buttons/SimpleButton-socials.html#plain [plain]
<<< @/atoms/buttons/SimpleButton-socials.html#outlined [outlined]
<<< @/atoms/buttons/SimpleButton-socials.html#default-icon [default-icon]
<<< @/atoms/buttons/SimpleButton-socials.html#outlined-icon [outlined-icon]
<<< @/atoms/buttons/SimpleButton-socials.html#expressive-social [outlined-icon]
:::


## Component CSS

<<< @/../components/atoms/buttons/SimpleButton.scss

## Documentation CSS

```scss
@use "docs/theme.scss" as theme;
@use "components/atoms/buttons/SimpleButton.scss" as * with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
```


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

| Variable                  | Description                                                                         | Accepted Values | Default                           |
|:--------------------------|:------------------------------------------------------------------------------------|:----------------|:----------------------------------|
| `$color`                  | :x: MAIN color                                                                      | `color`         | `transparent`                     |
| `$background`             | :zap: :first_quarter_moon_with_face: Background color                               | `color`         | `same as {$color}`                |
| `$on-background`          | :zap: :first_quarter_moon_with_face: Text color                                     | `color`         | `same as {$on-color}`             |
| `$shadow-color`           | :zap: :first_quarter_moon_with_face: Shadow color (on `var()` MUST be RGB)          | `color`         | `0,0,0 (#000)`                    | 
| `$outlined-border-width`  | Border width                                                                        | `size`          | `2px`                             |
| `$outlined-on-background` | :zap: :first_quarter_moon_with_face: Text color of outlined mode                    | `color`         | `same as {$color}`                |
| `$border-color`           | :zap: :first_quarter_moon_with_face: Border color of outlined mode                  | `color`         | `same as {$color}`                |
| `$tonal-background`       | :zap: :first_quarter_moon_with_face: Background of tonal mode                       | `color`         | `rgba of {$color} at 0.1`         |
| `$tonal-on-background`    | :zap: :first_quarter_moon_with_face: Color of tonal mode                            | `color`         | `same as {$color}`                |
| `$plain-color`            | :zap: :first_quarter_moon_with_face: *TEXT* color of plain mode (BG is transparent) | `color`         | `same as {$color}`                |
| `$padding`                | Padding                                                                             | `size`          | `8px`                             |
| `$duration`               | Transition durations                                                                | `time`          | `0.3s`                            |
| `$border-radius`          | Border radius                                                                       | `size`          | `2px`                             |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/buttons/SimpleButton.scss" as * with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
</style>
