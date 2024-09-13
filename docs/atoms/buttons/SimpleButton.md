# Simple Button
<Badge type="tip">Atom</Badge> <Badge type="info">buttons</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/buttons/SimpleButton" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/buttons/SimpleButton" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/buttons/SimpleButton" with (
    $color: (var(--primary-500) / .5),
    $active-color: (var(--secondary-500) / .5)
);
```

## Default

::: raw
<div class="dev-section">
    <!--@include: ../../atoms/buttons/SimpleButton.html -->
</div>
:::

::: code-group
<<< @/atoms/buttons/SimpleButton.html#default [default]
<<< @/atoms/buttons/SimpleButton.html#image [image]
<<< @/atoms/buttons/SimpleButton.html#large [large]
<<< @/atoms/buttons/SimpleButton.html#small [small]
<<< @/atoms/buttons/SimpleButton.html#rounded [rounded]
<<< @/atoms/buttons/SimpleButton.html#circular [circular]
<<< @/atoms/buttons/SimpleButton.html#pill [pill]
<<< @/atoms/buttons/SimpleButton.html#flat [flat]
<<< @/atoms/buttons/SimpleButton.html#plain [plain]
<<< @/atoms/buttons/SimpleButton.html#outlined [outlined]
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
:::

## Social buttons
They are simple buttons but with the right colors they can be color coded

::: tip GLOBAL dependences
- "create-colors" from @guebbit/css-toolkit
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

<<< @/../src/atoms/buttons/SimpleButton.scss


## Classes

| Class               | Description                      |
|:--------------------|:---------------------------------|
| `animate-active`    | Animation active                 |
| `animate-on-active` | Animation active on .active      |
| `animate-on-hover`  | Animation active on hover        |
| `button-small`      | Small size                       |
| `button-rounded`    | Rounded border                   |
| `button-circular`   | Circular border                  |
| `button-pill`       | Pill border                      |
| `button-outlined`   | Outlined mode                    |
| `button-plain`      | Plain mode                       |
| `button-flat`       | Remove box-shadow                |
| `button-icon-only`  | Single icon/image/character mode |

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
| `$plain-color`            | :zap: :first_quarter_moon_with_face: *TEXT* color of plain mode (BG is transparent) | `color`         | `same as {$color}`                |
| `$padding`                | Padding                                                                             | `size`          | `8px`                             |
| `$duration`               | Transition durations                                                                | `time`          | `0.3s`                            |
| `$border-radius`          | Border radius                                                                       | `size`          | `2px`                             |

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/buttons/SimpleButton" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix,
    // $color: theme.$primary-color,
    // $active-color: theme.$secondary-color,
);
</style>
