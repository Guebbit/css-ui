# Highlight Rollup

<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/highlights/HighlightRollup.html -->
</div>
:::

## Use

```scss
@use "@guebbit/css-ui/src/atoms/highlights/highlight-rollup";
```



## Default

::: code-group
<<< @/examples/atoms/highlights/HighlightRollup.html#down-to-up [down-to-up]
<<< @/examples/atoms/highlights/HighlightRollup.html#right-to-left [right-to-left]
<<< @/examples/atoms/highlights/HighlightRollup.html#up-to-down [up-to-down]
<<< @/examples/atoms/highlights/HighlightRollup.html#left-to-right [left-to-right]
<<< @/examples/atoms/highlights/HighlightRollup.html#skew-right-to-left [skew-right-to-left]
<<< @/examples/atoms/highlights/HighlightRollup.html#skew-left-to-right [skew-left-to-right]
:::

## Component CSS

::: code-group
<<< @/../src/atoms/highlights/highlight-rollup/_architecture.scss [_architecture.scss]
<<< @/../src/atoms/highlights/highlight-rollup/index.scss [index.scss]
:::

## Classes

| Class                         | Description                 |
|:------------------------------|:----------------------------|
| `animate-active`              | Animation active            |
| `animate-on-active`           | Animation active on .active |
| `animate-on-hover`            | Animation active on hover   |
| `highlight-rollup-horizontal` | Horizontal animation        |
| `highlight-rollup-reverse`    | Animation reverse direction |
| `highlight-rollup-skew`       | Skew animation              |


## SCSS variables

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `$color` | `--highlight-rollup-main-color` | :zap: :first_quarter_moon_with_face: Background color | `color` | `#000` / `#fff` |
| `$duration` | `--highlight-rollup-duration` | Animation duration | `time` | `0.2s` |
| `$active-color` | `--highlight-rollup-active-main-color` | Active background color | `color` | `same as {$color}` |
| `$padding` | `--highlight-rollup-padding` | Padding | `size` | `1em 2em` |
<style lang="scss">
@use "../src/atoms/highlights/highlight-rollup";
</style>
