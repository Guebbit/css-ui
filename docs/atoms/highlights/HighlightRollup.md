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

## Code

::: code-group
<<< @/atoms/highlights/HighlightRollup.html#down-to-up [down-to-up]
<<< @/atoms/highlights/HighlightRollup.html#right-to-left [right-to-left]
<<< @/atoms/highlights/HighlightRollup.html#up-to-down [up-to-down]
<<< @/atoms/highlights/HighlightRollup.html#left-to-right [left-to-right]
<<< @/atoms/highlights/HighlightRollup.html#skew-right-to-left [skew-right-to-left]
<<< @/atoms/highlights/HighlightRollup.html#skew-left-to-right [skew-left-to-right]
:::

## Component CSS

<<< @/../components/atoms/highlights/HighlightRollup.scss

## Documentation CSS

```scss
@use "docs/theme.scss" as theme;
@use "components/atoms/highlights/HighlightRollup.scss" as * with (
    $color: theme.$primary-color
    $active-color: theme.$secondary-color
);

.highlight-rollup {
    padding: 1em 2em;
}
```

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

| Variable         | Description                                           | Accepted Values | Default            |
|:-----------------|:------------------------------------------------------|:----------------|:-------------------|
| `$color`         | :zap: :first_quarter_moon_with_face: Background color | `color`         | `#000` / `#000`    |
| `$duration`      | Animation duration                                    | `time`          | `0.2s`             |
| `$active-color`  | Active background color                               | `color`         | `same as {$color}` |


<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/highlights/HighlightRollup.scss" as * with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color
);

.highlight-rollup {
    padding: 1em 2em;
}
</style>