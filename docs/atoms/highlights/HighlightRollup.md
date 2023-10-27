# Highlight Rollup

<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>


https://guebbit.com/admin/view/423

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/highlights/HighlightRollup.html -->
</div>

## Code

::: code-group
<<< @/public/components-html/atoms/highlights/HighlightRollup.html
<<< @/../components/atoms/highlights/HighlightRollup.scss
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
    width: 130px;
    line-height: 40px;
    text-align: center;
}

$highlight-rollup-color: $primary-color;

@import "components/atoms/highlights/HighlightRollup.scss";
</style>