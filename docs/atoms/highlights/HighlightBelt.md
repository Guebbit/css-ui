# Hightlight Belt
<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

## Code

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/highlights/HighlightBelt.html -->
</div>
:::

::: code-group
<<< @/public/components-html/atoms/highlights/HighlightBelt.html
<<< @/../components/atoms/highlights/HighlightBelt.scss
:::

## Classes

| Class               | Description              |
|:--------------------|:-------------------------|
| `bend-top`          | Right & left TOP bend    |
| `bend-bottom`       | Right & left BOTTOM bend |
| `bend-top-left`     | Left TOP bend            |
| `bend-bottom-left`  | Left BOTTOM bend         |
| `bend-top-right`    | Right TOP bend           |
| `bend-bottom-right` | Right BOTTOM bend        |

## SCSS variables

| Variable                          | Description            | Accepted Values | Default  |
|:----------------------------------|:-----------------------|:----------------|:---------|
| `$highlight-belt-size`            | Belt size (min-height) | `size`          | `2em`    |
| `$highlight-belt-border-width`    | Border size            | `size`          | `15px`   |
| `$highlight-belt-border-radius`   | Border radius          | `size`          | `6px`    |
| `$highlight-belt-shadow`          | Shadow color           | `color`         | `#000`   |
| `$highlight-belt-color`           | Main color             | `color`         | `#fff`   |

<style lang="scss">
@import "docs/theme.scss"

#highlight-test-container{
  width: 100%;
  height: 600px;
  padding: 10% 0;
  background-color: #eee;
}

$highlight-belt-color: $primary-color;

@import "components/atoms/highlights/HighlightBelt.scss";
</style>
