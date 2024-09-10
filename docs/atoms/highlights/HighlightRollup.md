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
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/highlights/HighlightRollup" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/highlights/HighlightRollup" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
```

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

<<< @/../src/atoms/highlights/HighlightRollup.scss

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

| Variable        | Description                                           | Accepted Values | Default            |
|:----------------|:------------------------------------------------------|:----------------|:-------------------|
| `$color`        | :zap: :first_quarter_moon_with_face: Background color | `color`         | `#000` / `#000`    |
| `$duration`     | Animation duration                                    | `time`          | `0.2s`             |
| `$active-color` | Active background color                               | `color`         | `same as {$color}` |
| `$padding`      | Padding                                               | `size`          | `1em 2em`          |


<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/highlights/HighlightRollup" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
</style>