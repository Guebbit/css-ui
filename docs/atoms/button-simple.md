# Simple Button
<Badge type="tip">Atom</Badge> <Badge type="info">buttons</Badge>

Base button component — the reference blueprint for all other button atoms.


## Use

```scss
@use "@guebbit/css-ui/atoms/button-simple";
```



## Default

::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/buttons/SimpleButton-regular-default.html -->
</div>
<div class="dev-section">
<!--@include: ../examples/atoms/buttons/SimpleButton-regular-primary.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/buttons/SimpleButton-regular-default.html#default [default]
<<< @/examples/atoms/buttons/SimpleButton-regular-default.html#disabled [disabled]
<<< @/examples/atoms/buttons/SimpleButton-regular-default.html#image [image]
<<< @/examples/atoms/buttons/SimpleButton-regular-default.html#rounded [rounded]
<<< @/examples/atoms/buttons/SimpleButton-regular-default.html#circular [circular]
<<< @/examples/atoms/buttons/SimpleButton-regular-default.html#pill [pill]
<<< @/examples/atoms/buttons/SimpleButton-regular-default.html#flat [flat]
<<< @/examples/atoms/buttons/SimpleButton-regular-default.html#plain [plain]
<<< @/examples/atoms/buttons/SimpleButton-regular-default.html#plain-flat [plain-flat]
<<< @/examples/atoms/buttons/SimpleButton-regular-default.html#elevated [elevated]
<<< @/examples/atoms/buttons/SimpleButton-regular-default.html#outlined [outlined]
:::


## Sizes

::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/buttons/SimpleButton-sizes-default.html -->
</div>
<div class="dev-section">
<!--@include: ../examples/atoms/buttons/SimpleButton-sizes-primary.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/buttons/SimpleButton-sizes-default.html#xs [XS]
<<< @/examples/atoms/buttons/SimpleButton-sizes-default.html#sm [SM]
<<< @/examples/atoms/buttons/SimpleButton-sizes-default.html#md [default]
<<< @/examples/atoms/buttons/SimpleButton-sizes-default.html#lg [LG]
<<< @/examples/atoms/buttons/SimpleButton-sizes-default.html#xl [XL]
:::


::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/buttons/SimpleButton-sizes-icons-default.html -->
</div>
<div class="dev-section">
<!--@include: ../examples/atoms/buttons/SimpleButton-sizes-icons-primary.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/buttons/SimpleButton-sizes-icons-default.html#xs [XS]
<<< @/examples/atoms/buttons/SimpleButton-sizes-icons-default.html#sm [SM]
<<< @/examples/atoms/buttons/SimpleButton-sizes-icons-default.html#md [default]
<<< @/examples/atoms/buttons/SimpleButton-sizes-icons-default.html#lg [LG]
<<< @/examples/atoms/buttons/SimpleButton-sizes-icons-default.html#xl [XL]
:::


## Icons

::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/buttons/SimpleButton-icons-default.html -->
</div>
<div class="dev-section">
<!--@include: ../examples/atoms/buttons/SimpleButton-icons-primary.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/buttons/SimpleButton-icons-default.html#default [default]
<<< @/examples/atoms/buttons/SimpleButton-icons-default.html#disabled [disabled]
<<< @/examples/atoms/buttons/SimpleButton-icons-default.html#image [image]
<<< @/examples/atoms/buttons/SimpleButton-icons-default.html#rounded [rounded]
<<< @/examples/atoms/buttons/SimpleButton-icons-default.html#circular [circular]
<<< @/examples/atoms/buttons/SimpleButton-icons-default.html#image-rounded [image rounded]
<<< @/examples/atoms/buttons/SimpleButton-icons-default.html#image-circular [image circular]
<<< @/examples/atoms/buttons/SimpleButton-icons-default.html#pill [pill]
<<< @/examples/atoms/buttons/SimpleButton-icons-default.html#flat [flat]
<<< @/examples/atoms/buttons/SimpleButton-icons-default.html#plain [plain]
<<< @/examples/atoms/buttons/SimpleButton-icons-default.html#plain-flat [plain & flat]
<<< @/examples/atoms/buttons/SimpleButton-icons-default.html#elevated [elevated]
<<< @/examples/atoms/buttons/SimpleButton-icons-default.html#outlined [outlined]
:::


## Social buttons
They are simple buttons but with the right colors they can be color coded

::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/buttons/SimpleButton-socials.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/buttons/SimpleButton-socials.html#default [default]
<<< @/examples/atoms/buttons/SimpleButton-socials.html#default [disabled]
<<< @/examples/atoms/buttons/SimpleButton-socials.html#plain [plain]
<<< @/examples/atoms/buttons/SimpleButton-socials.html#outlined [outlined]
<<< @/examples/atoms/buttons/SimpleButton-socials.html#default-icon [default-icon]
<<< @/examples/atoms/buttons/SimpleButton-socials.html#outlined-icon [outlined-icon]
<<< @/examples/atoms/buttons/SimpleButton-socials.html#expressive-social [outlined+rollup]
:::


## Component CSS

::: code-group
<<< @/../src/components/atoms/button-simple/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/button-simple/index.scss [index.scss]
:::


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

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `$color` | `--simple-button-main-color` | :x: MAIN color | `color` | `transparent` |
| `$background` | — | :zap: :first_quarter_moon_with_face: Background color | `color` | `same as {$color}` |
| `$on-background` | `--simple-button-on-main-color` | :zap: :first_quarter_moon_with_face: Text color | `color` | `same as {$on-color}` |
| `$shadow-color` | `--shadow-color` | :zap: :first_quarter_moon_with_face: Shadow color (on `var()` MUST be RGB) | `color` | `0,0,0 (#000)` |
| `$outlined-border-width` | `--simple-button-outlined-border-width` | Border width | `size` | `2px` |
| `$outlined-on-background` | — | :zap: :first_quarter_moon_with_face: Text color of outlined mode | `color` | `same as {$color}` |
| `$border-color` | `--simple-button-border-color` | :zap: :first_quarter_moon_with_face: Border color of outlined mode | `color` | `same as {$color}` |
| `$plain-color` | — | :zap: :first_quarter_moon_with_face: *TEXT* color of plain mode (BG is transparent) | `color` | `same as {$color}` |
| `$padding` | `--simple-button-padding` | Padding | `size` | `8px` |
| `$duration` | `--simple-button-duration` | Transition duration | `time` | `0.3s` |
| `$border-radius` | `--simple-button-border-radius` | Border radius | `size` | `2px` |
<style lang="scss">
@use "../src/components/atoms/button-simple/index.scss";
</style>
