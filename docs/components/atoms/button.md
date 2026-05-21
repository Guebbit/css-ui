# Button
<Badge type="tip">Atom</Badge> <Badge type="info">buttons</Badge>

Base button component — the reference blueprint for all other button atoms.


## Use

```scss
@use "@guebbit/css-ui/atoms/button";
```



## Default

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/button-regular-default.html -->
</div>
<div class="dev-section">
<!--@include: ../../examples/atoms/button-regular-primary.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/button-regular-default.html#default [default]
<<< @/examples/atoms/button-regular-default.html#disabled [disabled]
<<< @/examples/atoms/button-regular-default.html#image [image]
<<< @/examples/atoms/button-regular-default.html#rounded [rounded]
<<< @/examples/atoms/button-regular-default.html#circular [circular]
<<< @/examples/atoms/button-regular-default.html#pill [pill]
<<< @/examples/atoms/button-regular-default.html#flat [flat]
<<< @/examples/atoms/button-regular-default.html#plain [plain]
<<< @/examples/atoms/button-regular-default.html#plain-flat [plain-flat]
<<< @/examples/atoms/button-regular-default.html#elevated [elevated]
<<< @/examples/atoms/button-regular-default.html#outlined [outlined]
:::


## Sizes

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/button-sizes-default.html -->
</div>
<div class="dev-section">
<!--@include: ../../examples/atoms/button-sizes-primary.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/button-sizes-default.html#xs [XS]
<<< @/examples/atoms/button-sizes-default.html#sm [SM]
<<< @/examples/atoms/button-sizes-default.html#md [default]
<<< @/examples/atoms/button-sizes-default.html#lg [LG]
<<< @/examples/atoms/button-sizes-default.html#xl [XL]
:::


::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/button-sizes-icons-default.html -->
</div>
<div class="dev-section">
<!--@include: ../../examples/atoms/button-sizes-icons-primary.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/button-sizes-icons-default.html#xs [XS]
<<< @/examples/atoms/button-sizes-icons-default.html#sm [SM]
<<< @/examples/atoms/button-sizes-icons-default.html#md [default]
<<< @/examples/atoms/button-sizes-icons-default.html#lg [LG]
<<< @/examples/atoms/button-sizes-icons-default.html#xl [XL]
:::


## Icons

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/button-icons-default.html -->
</div>
<div class="dev-section">
<!--@include: ../../examples/atoms/button-icons-primary.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/button-icons-default.html#default [default]
<<< @/examples/atoms/button-icons-default.html#disabled [disabled]
<<< @/examples/atoms/button-icons-default.html#image [image]
<<< @/examples/atoms/button-icons-default.html#rounded [rounded]
<<< @/examples/atoms/button-icons-default.html#circular [circular]
<<< @/examples/atoms/button-icons-default.html#image-rounded [image rounded]
<<< @/examples/atoms/button-icons-default.html#image-circular [image circular]
<<< @/examples/atoms/button-icons-default.html#pill [pill]
<<< @/examples/atoms/button-icons-default.html#flat [flat]
<<< @/examples/atoms/button-icons-default.html#plain [plain]
<<< @/examples/atoms/button-icons-default.html#plain-flat [plain & flat]
<<< @/examples/atoms/button-icons-default.html#elevated [elevated]
<<< @/examples/atoms/button-icons-default.html#outlined [outlined]
:::


## Social buttons
They are buttons but with the right colors they can be color coded

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/button-socials.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/button-socials.html#default [default]
<<< @/examples/atoms/button-socials.html#default [disabled]
<<< @/examples/atoms/button-socials.html#plain [plain]
<<< @/examples/atoms/button-socials.html#outlined [outlined]
<<< @/examples/atoms/button-socials.html#default-icon [default-icon]
<<< @/examples/atoms/button-socials.html#outlined-icon [outlined-icon]
<<< @/examples/atoms/button-socials.html#expressive-social [outlined+rollup]
:::


## Component CSS

::: code-group
<<< @/../src/components/atoms/button/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/button/index.scss [index.scss]
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
| `$color` | `--button-main-color` | :x: MAIN color | `color` | `transparent` |
| `$background` | — | :zap: :first_quarter_moon_with_face: Background color | `color` | `same as {$color}` |
| `$on-background` | `--button-on-main-color` | :zap: :first_quarter_moon_with_face: Text color | `color` | `same as {$on-color}` |
| `$shadow-color` | `--shadow-color` | :zap: :first_quarter_moon_with_face: Shadow color (on `var()` MUST be RGB) | `color` | `0,0,0 (#000)` |
| `$outlined-border-width` | `--button-outlined-border-width` | Border width | `size` | `2px` |
| `$outlined-on-background` | — | :zap: :first_quarter_moon_with_face: Text color of outlined mode | `color` | `same as {$color}` |
| `$border-color` | `--button-border-color` | :zap: :first_quarter_moon_with_face: Border color of outlined mode | `color` | `same as {$color}` |
| `$plain-color` | — | :zap: :first_quarter_moon_with_face: *TEXT* color of plain mode (BG is transparent) | `color` | `same as {$color}` |
| `$padding` | `--button-padding` | Padding | `size` | `8px` |
| `$duration` | `--button-duration` | Transition duration | `time` | `0.3s` |
| `$border-radius` | `--button-border-radius` | Border radius | `size` | `2px` |
<style lang="scss">
@use "../src/components/atoms/button/index.scss";
</style>
