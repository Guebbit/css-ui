# Highlight Rollup

<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

https://guebbit.com/admin/view/423

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/highlights/HighlightRollup.html -->
</div>

## Code

::: code-group
<<< @/public/components-html/atoms/highlights/HighlightRollup.html#down-to-up [down-to-up]
<<< @/public/components-html/atoms/highlights/HighlightRollup.html#right-to-left [right-to-left]
<<< @/public/components-html/atoms/highlights/HighlightRollup.html#up-to-down [up-to-down]
<<< @/public/components-html/atoms/highlights/HighlightRollup.html#left-to-right [left-to-right]
<<< @/public/components-html/atoms/highlights/HighlightRollup.html#skew-up-to-down [skew-up-to-down]
<<< @/public/components-html/atoms/highlights/HighlightRollup.html#skew-down-to-up [skew-down-to-up]
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

| Variable                       | Description        | Accepted Values | Default   |
|:-------------------------------|:-------------------|:----------------|:----------|
| `$highlight-rollup-color`      | Background color   | `color`         | `#000000` |
| `$highlight-rollup-duration`   | Animation duration | `time`          | `0.2s`    |


<style lang="scss">
@import "docs/theme.scss";

.highlight-rollup {
    padding: 1em 2em;
}

$highlight-rollup-color: $primary-color;

@import "components/atoms/highlights/HighlightRollup.scss";
</style>