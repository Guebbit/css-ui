# Highlight Rollup

<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

::: danger TODO
Some highlight-rollup-* missing
:::

::: raw
<div class="dev-section">
    <!--@include: ../../atoms/highlights/HighlightRollup.html -->
</div>
:::

## Use

```scss
@use "@guebbit/css-ui/src/atoms/highlights/highlight-rollup/index";
```

::: info Color customization
Apply a `.color-*` class to switch the rollup's color scheme:
```html
<div class="highlight-rollup color-primary animate-on-hover">Primary Rollup</div>
<div class="highlight-rollup color-secondary animate-on-hover">Secondary Rollup</div>
```
:::

## Default

::: code-group
<<< @/atoms/highlights/HighlightRollup.html#down-to-up [down-to-up]
<<< @/atoms/highlights/HighlightRollup.html#right-to-left [right-to-left]
<<< @/atoms/highlights/HighlightRollup.html#up-to-down [up-to-down]
<<< @/atoms/highlights/HighlightRollup.html#left-to-right [left-to-right]
<<< @/atoms/highlights/HighlightRollup.html#skew-right-to-left [skew-right-to-left]
<<< @/atoms/highlights/HighlightRollup.html#skew-left-to-right [skew-left-to-right]
:::

## Component CSS

<<< @/../src/atoms/highlights/highlight-rollup/index.scss

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

| Variable         | Description                          | Accepted Values | Default   |
|:-----------------|:-------------------------------------|:----------------|:----------|
| `$duration`      | Animation duration                   | `time`          | `0.3s`    |
| `$skew`          | Skew angle for the sliding plane     | `angle`         | `-45deg`  |
| `$skew-distance` | Offset distance for the skew variant | `size`          | `-20px`   |
| `$padding`       | Padding                              | `size`          | `1em 2em` |


<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/highlights/highlight-rollup/index" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
</style>