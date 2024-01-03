# Highlight Rollup

<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

::: danger TODO
Some highlight-rollup-* missing
:::

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/highlights/HighlightRollup.html -->
</div>
:::

## Code

::: code-group
<<< @/public/components-html/atoms/highlights/HighlightRollup.html#down-to-up [down-to-up]
<<< @/public/components-html/atoms/highlights/HighlightRollup.html#right-to-left [right-to-left]
<<< @/public/components-html/atoms/highlights/HighlightRollup.html#up-to-down [up-to-down]
<<< @/public/components-html/atoms/highlights/HighlightRollup.html#left-to-right [left-to-right]
<<< @/public/components-html/atoms/highlights/HighlightRollup.html#skew-right-to-left [skew-right-to-left]
<<< @/public/components-html/atoms/highlights/HighlightRollup.html#skew-left-to-right [skew-left-to-right]
<<< @/../components/atoms/highlights/HighlightRollup.scss [CSS]
```css [custom css for this MD file]
.highlight-rollup {
    padding: 1em 2em;
}
```
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

| Variable                         | Description             | Accepted Values | Default       |
|:---------------------------------|:------------------------|:----------------|:--------------|
| `$highlight-rollup-duration`     | Animation duration      | `time`          | `0.2s`        |
| `$highlight-rollup-color`        | Background color        | `color`         | `#000`        |
| `$highlight-rollup-active-color` | Active background color | `color`         | `as {$color}` |


<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/highlights/HighlightRollup.scss" as * with (
    $highlight-rollup-color: theme.$primary-color
);

.highlight-rollup {
    padding: 1em 2em;
}
</style>