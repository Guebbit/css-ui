# Highlight Rollup

<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/highlights/HighlightRollup.html -->
</div>
:::

## Use

```scss
@use "@guebbit/css-ui/atoms/highlight-rollup";
```



## Default

::: code-group
<<< @/examples/atoms/highlights/HighlightRollup.html#down-to-up [down-to-up]
<<< @/examples/atoms/highlights/HighlightRollup.html#right-to-left [right-to-left]
<<< @/examples/atoms/highlights/HighlightRollup.html#up-to-down [up-to-down]
<<< @/examples/atoms/highlights/HighlightRollup.html#left-to-right [left-to-right]
<<< @/examples/atoms/highlights/HighlightRollup.html#skew-top-left [skew-top-left]
<<< @/examples/atoms/highlights/HighlightRollup.html#skew-top-right [skew-top-right]
<<< @/examples/atoms/highlights/HighlightRollup.html#skew-bottom-left [skew-bottom-left]
<<< @/examples/atoms/highlights/HighlightRollup.html#skew-bottom-right [skew-bottom-right]
:::

## With images (placedog)

::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/highlights/HighlightRollup-images.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/highlights/HighlightRollup-images.html#down-to-up
<<< @/examples/atoms/highlights/HighlightRollup-images.html#right-to-left
<<< @/examples/atoms/highlights/HighlightRollup-images.html#up-to-down
<<< @/examples/atoms/highlights/HighlightRollup-images.html#left-to-right
<<< @/examples/atoms/highlights/HighlightRollup-images.html#skew-top-left
<<< @/examples/atoms/highlights/HighlightRollup-images.html#skew-top-right
<<< @/examples/atoms/highlights/HighlightRollup-images.html#skew-bottom-left
<<< @/examples/atoms/highlights/HighlightRollup-images.html#skew-bottom-right
:::

## Component CSS

::: code-group
<<< @/../src/components/atoms/highlight-rollup/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/highlight-rollup/index.scss [index.scss]
:::

## Classes

| Class                                   | Description                                         |
|:----------------------------------------|:----------------------------------------------------|
| `animate-active`                        | Animation active                                    |
| `animate-on-active`                     | Animation active on .active                         |
| `animate-on-hover`                      | Animation active on hover                           |
| `highlight-rollup-horizontal`           | Horizontal animation                                |
| `highlight-rollup-reverse`              | Animation reverse direction                         |
| `highlight-rollup-skew-top-left`        | Skew animation entering from the top-left corner    |
| `highlight-rollup-skew-top-right`       | Skew animation entering from the top-right corner   |
| `highlight-rollup-skew-bottom-left`     | Skew animation entering from the bottom-left corner |
| `highlight-rollup-skew-bottom-right`    | Skew animation entering from the bottom-right corner |


## SCSS variables

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `$color` | `--highlight-rollup-main-color` | :zap: :first_quarter_moon_with_face: Background color | `color` | `#000` / `#fff` |
| `$duration` | `--highlight-rollup-duration` | Animation duration | `time` | `0.2s` |
| `$active-color` | `--highlight-rollup-active-main-color` | Active background color | `color` | `same as {$color}` |
| `$padding` | `--highlight-rollup-padding` | Padding | `size` | `1em 2em` |
| `$skew` | `--highlight-rollup-skew` | Skew angle for skew corner variants | `angle` | `-45deg` |
| `$skew-distance` | `--highlight-rollup-skew-distance` | Horizontal offset applied with the skew transform | `size` | `-20px` |
<style lang="scss">
@use "../src/components/atoms/highlight-rollup";
</style>
