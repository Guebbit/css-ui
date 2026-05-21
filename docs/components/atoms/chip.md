# Chip
<Badge type="tip">Atom</Badge> <Badge type="info">Generics</Badge>

## Use

```scss
@use "@guebbit/css-ui/atoms/chip";
```

Color is applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color
- `.use-{role}` → "jolly" class: sets `--main-color` / `--on-main-color` / `--active-main-color` / `--active-on-main-color` for a full single-class semantic color override

```html
<span class="chip use-brand">...</span>
<span class="chip text-primary">...</span>
```


## Default

<div class="dev-section">
<!--@include: ../../examples/atoms/Chip.html -->
</div>

::: code-group
<<< @/examples/atoms/Chip.html#icon-svg [icon-svg]
<<< @/examples/atoms/Chip.html#icon-text [icon-text]
<<< @/examples/atoms/Chip.html#rounded [rounded]
<<< @/examples/atoms/Chip.html#chip-xs [chip-xs]
<<< @/examples/atoms/Chip.html#chip-sm [chip-sm]
<<< @/examples/atoms/Chip.html#chip-md [chip-md]
<<< @/examples/atoms/Chip.html#chip-lg [chip-lg]
<<< @/examples/atoms/Chip.html#chip-xl [chip-xl]
:::

## Column mode

<div class="dev-section">
<!--@include: ../../examples/atoms/Chip-column.html -->
</div>

::: code-group
<<< @/examples/atoms/Chip-column.html#icon-svg [icon-svg]
<<< @/examples/atoms/Chip-column.html#icon-text [icon-text]
<<< @/examples/atoms/Chip-column.html#icon-image [icon-image]
<<< @/examples/atoms/Chip-column.html#long-icon-svg [long-icon-svg]
:::

## Component CSS

::: code-group
<<< @/../src/components/atoms/chip/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/chip/index.scss [index.scss]
:::

## Classes

| Class                | Description                                  |
|:---------------------|:---------------------------------------------|
| `animate-active`     | Transition active                            |
| `animate-on-active`  | Transition active on `.active`               |
| `animate-on-hover`   | Transition active on hover                   |
| `column-mode`        | Stack icon above text (vertical layout)      |
| `chip-xs`            | Extra small size (`0.4em` base font)         |
| `chip-sm`            | Small size (`0.6em` base font)               |
| `chip-lg`            | Large size (`1em` base font)                 |
| `chip-xl`            | Extra large size (`1.4em` base font)         |
| `chip-rounded`       | Fully rounded pill shape                     |


## CSS Custom Properties

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--chip-padding` | `4px` |
| `--chip-border-radius` | `4px` |
| `--chip-rounded-border-radius` | `9999px` |
| `--chip-rotate` | `0deg` |
| `--chip-scale` | `1` |
| `--chip-slide-x` | `0` |
| `--chip-slide-y` | `0` |
| `--chip-active-rotate` | `$rotate` |
| `--chip-active-scale` | `$scale` |
| `--chip-active-slide-x` | `$slide-x` |
| `--chip-active-slide-y` | `$slide-y` |
| `--chip-duration` | `0.3s` |


## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$padding` | `--chip-padding` | Inner spacing | `4px` |
| `$border-radius` | `--chip-border-radius` | Border radius | `4px` |
| `$rounded-border-radius` | `--chip-rounded-border-radius` | Rounded border radius | `9999px` |
| `$rotate` | `--chip-rotate` | Rotate | `0deg` |
| `$scale` | `--chip-scale` | Scale | `1` |
| `$slide-x` | `--chip-slide-x` | Slide x | `0` |
| `$slide-y` | `--chip-slide-y` | Slide y | `0` |
| `$active-rotate` | `--chip-active-rotate` | Active rotate | `$rotate` |
| `$active-scale` | `--chip-active-scale` | Active scale | `$scale` |
| `$active-slide-x` | `--chip-active-slide-x` | Active slide x | `$slide-x` |
| `$active-slide-y` | `--chip-active-slide-y` | Active slide y | `$slide-y` |

<style lang="scss">
@use "../src/components/atoms/chip";
</style>
