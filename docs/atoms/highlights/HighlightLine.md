# Hightlight Line
<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

## Code

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/highlights/HighlightLine.html -->
</div>
:::

::: code-group
<<< @/public/components-html/atoms/highlights/HighlightLine.html
<<< @/../components/atoms/highlights/HighlightLine.scss
:::

## Classes

| Class                      | Description              |
|:---------------------------|:-------------------------|
| `right-highlight`          | Right highlight          |
| `top-highlight`            | Top highlight            |
| `bottom-highlight`         | Bottom highlight         |
| `highlight-line-active`    | Active effect            |
| `highlight-line-on-active` | Active effect on .active |
| `highlight-line-on-hover`  | Active effect on hover   |

## SCSS variables

| Variable                  | Description | Accepted Values | Default           |
|:--------------------------|:------------|:----------------|:------------------|
| `$highlight-line-color`   | Main color  | `color`         | `rgba(#fff, 70%)` |
| `$highlight-line-size`    | Size        | `size`          | `3px`             |

<style lang="scss">
@import "../../theme.scss";

$highlight-line-color: $primary-color;

@import "components/atoms/highlights/HighlightLine.scss";
</style>
