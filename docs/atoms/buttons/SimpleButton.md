# Simple Button
<Badge type="tip">Atom</Badge> <Badge type="info">buttons</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/buttons/simple-button/index";
```

## Color

Apply a color context class to switch the component's color scheme. The library ships with `.color-primary`, `.color-secondary`, `.color-error`, and `.color-neutral` out of the box.

```html
<button class="simple-button color-primary">Primary</button>
<button class="simple-button color-secondary">Secondary</button>
<button class="simple-button color-error">Error</button>
```

You can also override individual CSS custom properties inline:
```html
<button class="simple-button" style="--color-background: #9c27b0; --color-on-background: #fff;">Custom</button>
```

## Default

::: raw
<div class="dev-section">
    <!--@include: ../../atoms/buttons/SimpleButton.html -->
</div>
:::

::: code-group
<<< @/atoms/buttons/SimpleButton.html#default [default]
<<< @/atoms/buttons/SimpleButton.html#disabled [disabled]
<<< @/atoms/buttons/SimpleButton.html#image [image]
<<< @/atoms/buttons/SimpleButton.html#rounded [rounded]
<<< @/atoms/buttons/SimpleButton.html#circular [circular]
<<< @/atoms/buttons/SimpleButton.html#pill [pill]
<<< @/atoms/buttons/SimpleButton.html#flat [flat]
<<< @/atoms/buttons/SimpleButton.html#plain [plain]
<<< @/atoms/buttons/SimpleButton.html#plain-flat [plain-flat]
<<< @/atoms/buttons/SimpleButton.html#elevated [elevated]
<<< @/atoms/buttons/SimpleButton.html#outlined [outlined]
:::

## Sizes

::: raw
<div class="dev-section">
    <!--@include: ../../atoms/buttons/SimpleButton-sizes.html -->
</div>
:::

::: code-group
<<< @/atoms/buttons/SimpleButton-sizes.html#xs [XS]
<<< @/atoms/buttons/SimpleButton-sizes.html#sm [SM]
<<< @/atoms/buttons/SimpleButton-sizes.html#md [default]
<<< @/atoms/buttons/SimpleButton-sizes.html#lg [LG]
<<< @/atoms/buttons/SimpleButton-sizes.html#xl [XL]
:::


::: raw
<div class="dev-section">
    <!--@include: ../../atoms/buttons/SimpleButton-sizes-icons.html -->
</div>
:::

::: code-group
<<< @/atoms/buttons/SimpleButton-sizes-icons.html#xs [XS]
<<< @/atoms/buttons/SimpleButton-sizes-icons.html#sm [SM]
<<< @/atoms/buttons/SimpleButton-sizes-icons.html#md [default]
<<< @/atoms/buttons/SimpleButton-sizes-icons.html#lg [LG]
<<< @/atoms/buttons/SimpleButton-sizes-icons.html#xl [XL]
:::

## Icons

::: raw
<div class="dev-section">
    <!--@include: ../../atoms/buttons/SimpleButton-icons.html -->
</div>
:::

::: code-group
<<< @/atoms/buttons/SimpleButton-icons.html#default [default]
<<< @/atoms/buttons/SimpleButton-icons.html#disabled [disabled]
<<< @/atoms/buttons/SimpleButton-icons.html#image [image]
<<< @/atoms/buttons/SimpleButton-icons.html#rounded [rounded]
<<< @/atoms/buttons/SimpleButton-icons.html#circular [circular]
<<< @/atoms/buttons/SimpleButton-icons.html#image-rounded [image rounded]
<<< @/atoms/buttons/SimpleButton-icons.html#image-circular [image circular]
<<< @/atoms/buttons/SimpleButton-icons.html#pill [pill]
<<< @/atoms/buttons/SimpleButton-icons.html#flat [flat]
<<< @/atoms/buttons/SimpleButton-icons.html#plain [plain]
<<< @/atoms/buttons/SimpleButton-icons.html#plain-flat [plain & flat]
<<< @/atoms/buttons/SimpleButton-icons.html#elevated [elevated]
<<< @/atoms/buttons/SimpleButton-icons.html#outlined [outlined]
:::

## Social buttons
They are simple buttons with appropriate color classes applied.

```html
<button class="simple-button color-primary">Primary</button>
<button class="simple-button color-secondary">Secondary</button>
```

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

| Variable                  | Description                | Accepted Values | Default |
|:--------------------------|:---------------------------|:----------------|:--------|
| `$padding`                | Padding                    | `size`          | `8px`   |
| `$duration`               | Transition duration        | `time`          | `0.3s`  |
| `$border-radius`          | Border radius              | `size`          | `2px`   |
| `$tonal-opacity`          | Tonal variant opacity      | `number`        | `0.9`   |
| `$outlined-border-width`  | Outlined border width      | `size`          | `2px`   |

::: tip Color customization
Colors are controlled by the `.color-*` utility classes (`.color-primary`, `.color-secondary`, etc.) or by overriding `--color-*` CSS custom properties directly on the element.
:::

<style lang="scss">
@use "../src/atoms/buttons/simple-button";
</style>
