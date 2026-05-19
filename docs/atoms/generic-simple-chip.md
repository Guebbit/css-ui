# Generic Simple Chip
<Badge type="tip">Atom</Badge> <Badge type="info">Generics</Badge>

## Use

```scss
@use "@guebbit/css-ui/atoms/generic-simple-chip";
```

Color is applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color
- `.use-{role}` → "jolly" class: sets `--main-color` / `--on-main-color` / `--active-main-color` / `--active-on-main-color` for a full single-class semantic color override

```html
<span class="simple-chip use-brand">...</span>
<span class="simple-chip text-primary">...</span>
```


## Default

<div class="dev-section">
<!--@include: ../examples/atoms/SimpleChip.html -->
</div>

::: code-group
<<< @/examples/atoms/SimpleChip.html#icon-svg [icon-svg]
<<< @/examples/atoms/SimpleChip.html#icon-text [icon-text]
<<< @/examples/atoms/SimpleChip.html#rounded [rounded]
<<< @/examples/atoms/SimpleChip.html#chip-xs [chip-xs]
<<< @/examples/atoms/SimpleChip.html#chip-sm [chip-sm]
<<< @/examples/atoms/SimpleChip.html#chip-md [chip-md]
<<< @/examples/atoms/SimpleChip.html#chip-lg [chip-lg]
<<< @/examples/atoms/SimpleChip.html#chip-xl [chip-xl]
:::

## Column mode

<div class="dev-section">
<!--@include: ../examples/atoms/SimpleChip-column.html -->
</div>

::: code-group
<<< @/examples/atoms/SimpleChip-column.html#icon-svg [icon-svg]
<<< @/examples/atoms/SimpleChip-column.html#icon-text [icon-text]
<<< @/examples/atoms/SimpleChip-column.html#icon-image [icon-image]
<<< @/examples/atoms/SimpleChip-column.html#long-icon-svg [long-icon-svg]
:::

## Component CSS

::: code-group
<<< @/../src/components/atoms/generic-simple-chip/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/generic-simple-chip/index.scss [index.scss]
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
| `--simple-chip-padding` | `4px` |
| `--simple-chip-border-radius` | `4px` |
| `--simple-chip-rounded-border-radius` | `9999px` |
| `--simple-chip-rotate` | `0deg` |
| `--simple-chip-scale` | `1` |
| `--simple-chip-slide-x` | `0` |
| `--simple-chip-slide-y` | `0` |
| `--simple-chip-active-rotate` | `$rotate` |
| `--simple-chip-active-scale` | `$scale` |
| `--simple-chip-active-slide-x` | `$slide-x` |
| `--simple-chip-active-slide-y` | `$slide-y` |
| `--simple-chip-duration` | `0.3s` |


## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$padding` | `--simple-chip-padding` | Inner spacing | `4px` |
| `$border-radius` | `--simple-chip-border-radius` | Border radius | `4px` |
| `$rounded-border-radius` | `--simple-chip-rounded-border-radius` | Rounded border radius | `9999px` |
| `$rotate` | `--simple-chip-rotate` | Rotate | `0deg` |
| `$scale` | `--simple-chip-scale` | Scale | `1` |
| `$slide-x` | `--simple-chip-slide-x` | Slide x | `0` |
| `$slide-y` | `--simple-chip-slide-y` | Slide y | `0` |
| `$active-rotate` | `--simple-chip-active-rotate` | Active rotate | `$rotate` |
| `$active-scale` | `--simple-chip-active-scale` | Active scale | `$scale` |
| `$active-slide-x` | `--simple-chip-active-slide-x` | Active slide x | `$slide-x` |
| `$active-slide-y` | `--simple-chip-active-slide-y` | Active slide y | `$slide-y` |

<style lang="scss">
@use "../src/components/atoms/generic-simple-chip";
</style>
