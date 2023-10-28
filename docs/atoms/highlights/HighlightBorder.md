# Highlight Border

<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/highlights/HighlightBorder.html -->
</div>
:::

## Code

::: code-group
<<< @/public/components-html/atoms/highlights/HighlightBorder.html#top-bottom [top-bottom]
<<< @/public/components-html/atoms/highlights/HighlightBorder.html#left-right [left-right]
<<< @/public/components-html/atoms/highlights/HighlightBorder.html#corners [corners]
<<< @/public/components-html/atoms/highlights/HighlightBorder.html#spiral [spiral]
<<< @/public/components-html/atoms/highlights/HighlightBorder.html#reveal [reveal]
<<< @/public/components-html/atoms/highlights/HighlightBorder.html#special-background [special background]
<<< @/../components/atoms/highlights/HighlightBorder.scss [CSS]
```css [custom css for this MD file]
.highlight-border {
    padding: 1em 2em;
}
```
:::

## Custom

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/highlights/HighlightBorder-custom.html -->
</div>
:::

::: code-group
<<< @/public/components-html/atoms/highlights/HighlightBorder-custom.html#custom-active [custom-active]
<<< @/public/components-html/atoms/highlights/HighlightBorder-custom.html#custom-hover [custom-hover]
<<< @/public/components-html/atoms/highlights/HighlightBorder-custom.html#custom-hover-reveal [custom-hover-reveal]
```css [custom CSS]
.highlight-border {
    &.custom-animation{
        &.animate-on-hover:hover,
        &.animate-active{
            .highlight-border-top,
            .highlight-border-bottom,
            .highlight-border-left,
            .highlight-border-right {
                animation: highlight-border-custom-animation 2s infinite linear;
            }
        }
    }
}

@keyframes highlight-border-custom-animation {
    0%   { background: red; }
    25%  { background: blue; }
    50%  { background: green; }
    75%  { background: purple; }
}
```
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
    padding: 1em 2em;
}

.highlight-border {
    &.custom-animation{
        &.animate-on-hover:hover,
        &.animate-active{
            .highlight-border-top,
            .highlight-border-bottom,
            .highlight-border-left,
            .highlight-border-right {
                  animation: highlight-border-custom-animation 2s infinite linear;
            }
        }
    }
}

@keyframes highlight-border-custom-animation {
  0%   { background: red; }
  25%  { background: blue; }
  50%  { background: green; }
  75%  { background: purple; }
}

$highlight-border-color: $primary-color;

@import "components/atoms/highlights/HighlightBorder.scss";
</style>