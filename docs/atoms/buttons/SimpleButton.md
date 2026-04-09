# Simple Button
<Badge type="tip">Atom</Badge> <Badge type="info">buttons</Badge>


## Use

```scss
@use "@guebbit/css-ui/src/atoms/buttons/simple-button";
```

Color is now always applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color
- `.use-{role}` → sets `--css-ui-main-color` for internal component color usage

```html
<div class="text-primary">...</div>
<button class="bg-primary">...</button>
<button class="border-primary text-primary">...</button>
<button class="use-primary">...</button>
```


## Default

::: raw
<div class="dev-section">
    <!--@include: ../../atoms/buttons/SimpleButton-regular-default.html -->
</div>
<div class="dev-section">
    <!--@include: ../../atoms/buttons/SimpleButton-regular-primary.html -->
</div>
:::

::: code-group
<<< @/atoms/buttons/SimpleButton-regular-default.html#default [default]
<<< @/atoms/buttons/SimpleButton-regular-default.html#disabled [disabled]
<<< @/atoms/buttons/SimpleButton-regular-default.html#image [image]
<<< @/atoms/buttons/SimpleButton-regular-default.html#rounded [rounded]
<<< @/atoms/buttons/SimpleButton-regular-default.html#circular [circular]
<<< @/atoms/buttons/SimpleButton-regular-default.html#pill [pill]
<<< @/atoms/buttons/SimpleButton-regular-default.html#flat [flat]
<<< @/atoms/buttons/SimpleButton-regular-default.html#plain [plain]
<<< @/atoms/buttons/SimpleButton-regular-default.html#plain-flat [plain-flat]
<<< @/atoms/buttons/SimpleButton-regular-default.html#elevated [elevated]
<<< @/atoms/buttons/SimpleButton-regular-default.html#outlined [outlined]
:::


## Sizes

::: raw
<div class="dev-section">
    <!--@include: ../../atoms/buttons/SimpleButton-sizes-default.html -->
</div>
<div class="dev-section">
    <!--@include: ../../atoms/buttons/SimpleButton-sizes-primary.html -->
</div>
:::

::: code-group
<<< @/atoms/buttons/SimpleButton-sizes-default.html#xs [XS]
<<< @/atoms/buttons/SimpleButton-sizes-default.html#sm [SM]
<<< @/atoms/buttons/SimpleButton-sizes-default.html#md [default]
<<< @/atoms/buttons/SimpleButton-sizes-default.html#lg [LG]
<<< @/atoms/buttons/SimpleButton-sizes-default.html#xl [XL]
:::


::: raw
<div class="dev-section">
    <!--@include: ../../atoms/buttons/SimpleButton-sizes-icons-default.html -->
</div>
<div class="dev-section">
    <!--@include: ../../atoms/buttons/SimpleButton-sizes-icons-primary.html -->
</div>
:::

::: code-group
<<< @/atoms/buttons/SimpleButton-sizes-icons-default.html#xs [XS]
<<< @/atoms/buttons/SimpleButton-sizes-icons-default.html#sm [SM]
<<< @/atoms/buttons/SimpleButton-sizes-icons-default.html#md [default]
<<< @/atoms/buttons/SimpleButton-sizes-icons-default.html#lg [LG]
<<< @/atoms/buttons/SimpleButton-sizes-icons-default.html#xl [XL]
:::


## Icons

::: raw
<div class="dev-section">
    <!--@include: ../../atoms/buttons/SimpleButton-icons-default.html -->
</div>
<div class="dev-section">
    <!--@include: ../../atoms/buttons/SimpleButton-icons-primary.html -->
</div>
:::

::: code-group
<<< @/atoms/buttons/SimpleButton-icons-default.html#default [default]
<<< @/atoms/buttons/SimpleButton-icons-default.html#disabled [disabled]
<<< @/atoms/buttons/SimpleButton-icons-default.html#image [image]
<<< @/atoms/buttons/SimpleButton-icons-default.html#rounded [rounded]
<<< @/atoms/buttons/SimpleButton-icons-default.html#circular [circular]
<<< @/atoms/buttons/SimpleButton-icons-default.html#image-rounded [image rounded]
<<< @/atoms/buttons/SimpleButton-icons-default.html#image-circular [image circular]
<<< @/atoms/buttons/SimpleButton-icons-default.html#pill [pill]
<<< @/atoms/buttons/SimpleButton-icons-default.html#flat [flat]
<<< @/atoms/buttons/SimpleButton-icons-default.html#plain [plain]
<<< @/atoms/buttons/SimpleButton-icons-default.html#plain-flat [plain & flat]
<<< @/atoms/buttons/SimpleButton-icons-default.html#elevated [elevated]
<<< @/atoms/buttons/SimpleButton-icons-default.html#outlined [outlined]
:::


## Social buttons
They are simple buttons but with the right colors they can be color coded

::: raw
<div class="dev-section">
    <!--@include: ../../atoms/buttons/SimpleButton-socials.html -->
</div>
:::

::: code-group
<<< @/atoms/buttons/SimpleButton-socials.html#default [default]
<<< @/atoms/buttons/SimpleButton-socials.html#default [disabled]
<<< @/atoms/buttons/SimpleButton-socials.html#plain [plain]
<<< @/atoms/buttons/SimpleButton-socials.html#outlined [outlined]
<<< @/atoms/buttons/SimpleButton-socials.html#default-icon [default-icon]
<<< @/atoms/buttons/SimpleButton-socials.html#outlined-icon [outlined-icon]
<<< @/atoms/buttons/SimpleButton-socials.html#expressive-social [outlined+rollup]
:::


## Component CSS

<<< @/../src/atoms/buttons/simple-button/index.scss


## Classes

| Class               | Description                      |
|:--------------------|:---------------------------------|
| `animate-active`    | Animation active                 |
| `animate-on-active` | Animation active on .active      |
| `animate-on-hover`  | Animation active on hover        |
| `button-sm`         | Small size                       |
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
| `$duration`               | Transition duration                                                                 | `time`          | `0.3s`                            |
| `$border-radius`          | Border radius                                                                       | `size`          | `2px`                             |

## Theming

Use theme utility classes (`.bg-{role}`, `.text-{role}`, `.border-{role}`) to apply colors.

<style lang="scss">
@use "../src/atoms/buttons/simple-button/index.scss";
</style>
