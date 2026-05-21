# Text
<Badge type="tip">Atom</Badge> <Badge type="info">Typography</Badge>

## Use

```scss
@use "@guebbit/css-ui/atoms/text";
```



## Default

<div class="dev-section">
<!--@include: ../../examples/atoms/Text.html -->
</div>

::: code-group
<<< @/examples/atoms/Text.html#icon-svg [icon-svg]
<<< @/examples/atoms/Text.html#icon-text [icon-text]
<<< @/examples/atoms/Text.html#icon-image [icon-image]
<<< @/examples/atoms/Text.html#long-icon-svg [long-icon-svg]
<<< @/examples/atoms/Text.html#long-icon-text [long-icon-text]
<<< @/examples/atoms/Text.html#long-icon-image [long-icon-image]
:::

## Column mode

<div class="dev-section">
<!--@include: ../../examples/atoms/Text-column.html -->
</div>

::: code-group
<<< @/examples/atoms/Text-column.html#icon-svg [icon-svg]
<<< @/examples/atoms/Text-column.html#icon-text [icon-text]
<<< @/examples/atoms/Text-column.html#icon-image [icon-image]
<<< @/examples/atoms/Text-column.html#long-icon-svg [long-icon-svg]
<<< @/examples/atoms/Text-column.html#long-icon-text [long-icon-text]
<<< @/examples/atoms/Text-column.html#long-icon-image [long-icon-image]
:::

## Component CSS

::: code-group
<<< @/../src/components/atoms/text/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/text/index.scss [index.scss]
:::

## Classes

| Class                | Description                         |
|:---------------------|:------------------------------------|
| `animate-active`     | Simple transition active            |
| `animate-on-active`  | Simple transition active on .active |
| `animate-on-hover`   | Simple transition active on hover   |
| `column-mode`        | Position of icon                    |


## CSS Custom Properties

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--text-rotate` | `0deg` |
| `--text-scale` | `1` |
| `--text-slide-x` | `0` |
| `--text-slide-y` | `0` |
| `--text-active-rotate` | `$rotate` |
| `--text-active-scale` | `$scale` |
| `--text-active-slide-x` | `$slide-x` |
| `--text-active-slide-y` | `$slide-y` |
| `--text-duration` | `0.3s` |


## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$rotate` | `--text-rotate` | Rotate | `0deg` |
| `$scale` | `--text-scale` | Scale | `1` |
| `$slide-x` | `--text-slide-x` | Slide x | `0` |
| `$slide-y` | `--text-slide-y` | Slide y | `0` |
| `$active-rotate` | `--text-active-rotate` | Active rotate | `$rotate` |
| `$active-scale` | `--text-active-scale` | Active scale | `$scale` |
| `$active-slide-x` | `--text-active-slide-x` | Active slide x | `$slide-x` |
| `$active-slide-y` | `--text-active-slide-y` | Active slide y | `$slide-y` |
| `$duration` | `--text-duration` | Animation duration | `0.3s` |

<style lang="scss">
@use "../src/components/atoms/text";
</style>
