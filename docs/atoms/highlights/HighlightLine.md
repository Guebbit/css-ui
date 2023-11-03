# Hightlight Line
<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

## Default

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/highlights/HighlightLine.html -->
</div>
:::


::: code-group
<<< @/public/components-html/atoms/highlights/HighlightLine.html#default [default]
<<< @/public/components-html/atoms/highlights/HighlightLine.html#right [right]
<<< @/public/components-html/atoms/highlights/HighlightLine.html#bottom [bottom]
<<< @/public/components-html/atoms/highlights/HighlightLine.html#top [top]
<<< @/public/components-html/atoms/highlights/HighlightLine.html#middle [middle]
<<< @/../components/atoms/highlights/HighlightLine.scss [CSS]
:::

## Changed CSS variables in parent

::: raw
<div class="dev-section" style="--highlight-line-length: 50%; --highlight-line-active-length: 150%; --highlight-line-active-size: 8px;">
    <!--@include: ../../public/components-html/atoms/highlights/HighlightLine.html -->
</div>
:::

```scss 
// or parent container
:root {
  --highlight-line-length: 50%; 
  --highlight-line-active-length: 150%; 
  --highlight-line-active-size: 8px;
}
```

## Line starting from a single direction

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/highlights/HighlightLine-start.html -->
</div>
:::

::: code-group
<<< @/public/components-html/atoms/highlights/HighlightLine-start.html#default [default]
<<< @/public/components-html/atoms/highlights/HighlightLine-start.html#right [right]
<<< @/public/components-html/atoms/highlights/HighlightLine-start.html#bottom [bottom]
<<< @/public/components-html/atoms/highlights/HighlightLine-start.html#top [top]
<<< @/public/components-html/atoms/highlights/HighlightLine-start.html#middle [middle]
:::

## Line coming from afar (default: "end" direction)

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/highlights/HighlightLine-afar.html -->
</div>
:::

::: code-group
<<< @/public/components-html/atoms/highlights/HighlightLine-afar.html#default [default]
<<< @/public/components-html/atoms/highlights/HighlightLine-afar.html#right [right]
<<< @/public/components-html/atoms/highlights/HighlightLine-afar.html#bottom [bottom]
<<< @/public/components-html/atoms/highlights/HighlightLine-afar.html#top [top]
<<< @/public/components-html/atoms/highlights/HighlightLine-afar.html#middle [middle]
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

| Variable                        | Description        | Accepted Values | Default             |
|:--------------------------------|:-------------------|:----------------|:--------------------|
| `$highlight-line-color`         | Line color         | `color`         | `rgba(#fff, 70%)`   |
| `$highlight-line-size`          | Line size          | `size`          | `3px`               |
| `$highlight-line-length`        | Line length        | `size`          | `100%`              |
| `$highlight-line-distance`      | Distance from text | `size`          | `-0.5em`            |
| `$highlight-line-duration`      | Time               | `time`          | `0.3s`              |
| `$highlight-line-active-color`  | Active line size   | `size`          | `same as {$color}`  |
| `$highlight-line-active-size`   | Active line color  | `color`         | `same as {$size}`   |
| `$highlight-line-active-length` | Line length        | `size`          | `same as {$length}` |

<style lang="scss">
@import "docs/theme.scss";

$highlight-line-color: $primary-color;
$highlight-line-active-color: $secondary-color;

@import "components/atoms/highlights/HighlightLine.scss";
</style>
