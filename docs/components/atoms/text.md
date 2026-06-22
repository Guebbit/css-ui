# Text
<Badge type="tip">Atom</Badge> <Badge type="info">Typography</Badge>

## Use

```scss
@use "@guebbit/css-ui/atoms/text";
```



## Default

<div class="dev-section">
<!--@include: ../../examples/atoms/text.html -->
</div>

::: code-group
<<< @/examples/atoms/text.html#icon-svg [icon-svg]
<<< @/examples/atoms/text.html#icon-text [icon-text]
<<< @/examples/atoms/text.html#icon-image [icon-image]
<<< @/examples/atoms/text.html#long-icon-svg [long-icon-svg]
<<< @/examples/atoms/text.html#long-icon-text [long-icon-text]
<<< @/examples/atoms/text.html#long-icon-image [long-icon-image]
<<< @/examples/atoms/text.html#squeeze-text [squeeze-text]
<<< @/examples/atoms/text.html#squeeze-image [squeeze-image]
:::

## Column mode

<div class="dev-section">
<!--@include: ../../examples/atoms/text-column.html -->
</div>

::: code-group
<<< @/examples/atoms/text-column.html#icon-svg [icon-svg]
<<< @/examples/atoms/text-column.html#icon-text [icon-text]
<<< @/examples/atoms/text-column.html#icon-image [icon-image]
<<< @/examples/atoms/text-column.html#long-icon-svg [long-icon-svg]
<<< @/examples/atoms/text-column.html#long-icon-text [long-icon-text]
<<< @/examples/atoms/text-column.html#long-icon-image [long-icon-image]
:::

## Component CSS

::: code-group
<<< @/../src/components/atoms/text/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/text/index.scss [index.scss]
:::

## Classes

| Class               | Description                                                   |
|:--------------------|:--------------------------------------------------------------|
| `animate-active`    | Simple transition active                                      |
| `animate-on-active` | Simple transition active on .active                           |
| `animate-on-hover`  | Simple transition active on hover                             |
| `column-mode`       | Position of icon                                              |
| `squeeze-mode`      | The icon get "squeezed" instead of rotated with --rotate |


## CSS Custom Properties

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default    |
|:---------|:-----------|
| `--rotate` | `0deg`     |
| `--scale` | `1`        |
| `--slide-x` | `0`        |
| `--slide-y` | `0`        |
| `--active-rotate` | `40deg`    |
| `--active-scale` | `1.5`      |
| `--active-slide-x` | `$slide-x` |
| `--active-slide-y` | `$slide-y` |
| `--duration` | `0.3s`     |


## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$rotate` | `--rotate` | Rotate | `0deg` |
| `$scale` | `--scale` | Scale | `1` |
| `$slide-x` | `--slide-x` | Slide x | `0` |
| `$slide-y` | `--slide-y` | Slide y | `0` |
| `$active-rotate` | `--active-rotate` | Active rotate | `$rotate` |
| `$active-scale` | `--active-scale` | Active scale | `$scale` |
| `$active-slide-x` | `--active-slide-x` | Active slide x | `$slide-x` |
| `$active-slide-y` | `--active-slide-y` | Active slide y | `$slide-y` |
| `$duration` | `--duration` | Animation duration | `0.3s` |

<style lang="scss">
@use "../src/components/atoms/text";
</style>
