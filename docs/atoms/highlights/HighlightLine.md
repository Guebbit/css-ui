# Hightlight Line
<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

::: danger TODO
full-highlight missing in alternative modes
:::

## Default

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/highlights/HighlightLine.html -->
</div>
:::


::: code-group
<<< @/public/components-html/atoms/highlights/HighlightLine.html#full [full]
<<< @/public/components-html/atoms/highlights/HighlightLine.html#left [left]
<<< @/public/components-html/atoms/highlights/HighlightLine.html#right [right]
<<< @/public/components-html/atoms/highlights/HighlightLine.html#bottom [bottom]
<<< @/public/components-html/atoms/highlights/HighlightLine.html#top [top]
<<< @/public/components-html/atoms/highlights/HighlightLine.html#middle [middle]
<<< @/../components/atoms/highlights/HighlightLine.scss [CSS]
:::

## Line starting from a single direction

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/highlights/HighlightLine-start.html -->
</div>
:::

::: code-group
<<< @/public/components-html/atoms/highlights/HighlightLine-start.html#full [full]
<<< @/public/components-html/atoms/highlights/HighlightLine-start.html#left [left]
<<< @/public/components-html/atoms/highlights/HighlightLine-start.html#right [right]
<<< @/public/components-html/atoms/highlights/HighlightLine-start.html#bottom [bottom]
<<< @/public/components-html/atoms/highlights/HighlightLine-start.html#top [top]
<<< @/public/components-html/atoms/highlights/HighlightLine-start.html#middle [middle]
:::

## Line coming from afar

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/highlights/HighlightLine-afar.html -->
</div>
:::

::: code-group
<<< @/public/components-html/atoms/highlights/HighlightLine-afar.html#full [full]
<<< @/public/components-html/atoms/highlights/HighlightLine-afar.html#left [left]
<<< @/public/components-html/atoms/highlights/HighlightLine-afar.html#right [right]
<<< @/public/components-html/atoms/highlights/HighlightLine-afar.html#bottom [bottom]
<<< @/public/components-html/atoms/highlights/HighlightLine-afar.html#top [top]
<<< @/public/components-html/atoms/highlights/HighlightLine-afar.html#middle [middle]
:::


## Classes

| Class                      | Description              |
|:---------------------------|:-------------------------|
| `left-highlight`           | Left highlight           |
| `right-highlight`          | Right highlight          |
| `top-highlight`            | Top highlight            |
| `bottom-highlight`         | Bottom highlight         |
| `highlight-line-active`    | Active effect            |
| `highlight-line-on-active` | Active effect on .active |
| `highlight-line-on-hover`  | Active effect on hover   |

## SCSS variables

| Variable         | Description                                     | Accepted Values | Default                               |
|:-----------------|:------------------------------------------------|:----------------|:--------------------------------------|
| `$color`         | :zap: :first_quarter_moon_with_face: Line color | `color`         | `rgba(#000, 70%)` / `rgba(#fff, 70%)` |
| `$size`          | :zap: Line size                                 | `size`          | `3px`                                 |
| `$length`        | :zap: Line length                               | `size`          | `100%`                                |
| `$distance`      | Distance from text                              | `size`          | `-0.5em`                              |
| `$duration`      | Time                                            | `time`          | `0.3s`                                |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/highlights/HighlightLine.scss" as * with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
</style>
