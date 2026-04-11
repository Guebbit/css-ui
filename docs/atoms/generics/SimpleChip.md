# Simple Chip
<Badge type="tip">Atom</Badge> <Badge type="info">Generics</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/generics/simple-chip";
```

Color is applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color
- `.use-{role}` → "jolly" class: sets `--main-color` / `--on-main-color` / `--active-main-color` / `--active-on-main-color` for a full single-class semantic color override

```html
<span class="simple-chip use-primary">...</span>
<span class="simple-chip text-primary">...</span>
```


## Default

<div class="dev-section">
    <!--@include: ../../atoms/generics/SimpleChip.html -->
</div>

::: code-group
<<< @/atoms/generics/SimpleChip.html#icon-svg [icon-svg]
<<< @/atoms/generics/SimpleChip.html#icon-text [icon-text]
<<< @/atoms/generics/SimpleChip.html#rounded [rounded]
<<< @/atoms/generics/SimpleChip.html#chip-xs [chip-xs]
<<< @/atoms/generics/SimpleChip.html#chip-sm [chip-sm]
<<< @/atoms/generics/SimpleChip.html#chip-md [chip-md]
<<< @/atoms/generics/SimpleChip.html#chip-lg [chip-lg]
<<< @/atoms/generics/SimpleChip.html#chip-xl [chip-xl]
:::

## Column mode

<div class="dev-section">
    <!--@include: ../../atoms/generics/SimpleChip-column.html -->
</div>

::: code-group
<<< @/atoms/generics/SimpleChip-column.html#icon-svg [icon-svg]
<<< @/atoms/generics/SimpleChip-column.html#icon-text [icon-text]
<<< @/atoms/generics/SimpleChip-column.html#icon-image [icon-image]
<<< @/atoms/generics/SimpleChip-column.html#long-icon-svg [long-icon-svg]
:::

## Component CSS

<<< @/../src/atoms/generics/simple-chip/index.scss

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


<style lang="scss">
@use "../src/atoms/generics/simple-chip";
</style>
