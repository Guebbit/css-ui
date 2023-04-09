# Highlight Border

<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/highlights/HighlightBorder.html -->
</div>

## Code

::: code-group
<<< @/public/components-html/atoms/highlights/HighlightBorder.html
<<< @/../components/atoms/highlights/HighlightBorder.scss
:::

## Classes

| Class                      | Description                 |
|:---------------------------|:----------------------------|
| `animate-active`           | Animation active            |
| `animate-on-active`        | Animation active on .active |
| `animate-on-hover`         | Animation active on hover   |
| `highlight-border-top`     | Border placed top           |
| `highlight-border-bottom`  | Border placed bottom        |
| `highlight-border-left`    | Border placed left          |
| `highlight-border-right`   | Border placed right         |
| `highlight-border-reverse` | Animation reverse direction |


## SCSS variables

| Variable                       | Description         | Accepted Values | Default   |
|:-------------------------------|:--------------------|:----------------|:----------|
| `$highlight-border-color`      | Border color        | `color`         | `#000000` |
| `$highlight-border-size`       | Border size         | `color`         | `2px`     |
| `$highlight-border-duration`   | Animation duration  | `time`          | `0.2s`    |


<style lang="scss">
@import "docs/theme.scss";

.highlight-border {
    width: 130px;
    line-height: 40px;
    text-align: center;
}

$highlight-border-color: $primary-color;

@import "components/atoms/highlights/HighlightBorder.scss";
</style>