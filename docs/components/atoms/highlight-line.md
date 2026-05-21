# Highlight Line
<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

::: danger TODO
full-highlight missing in alternative modes
:::

## Use

```scss
@use "@guebbit/css-ui/atoms/highlight-line";
```



## Default

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/highlight-line.html -->
</div>
:::


::: code-group
<<< @/examples/atoms/highlight-line.html#full [full]
<<< @/examples/atoms/highlight-line.html#left [left]
<<< @/examples/atoms/highlight-line.html#right [right]
<<< @/examples/atoms/highlight-line.html#bottom [bottom]
<<< @/examples/atoms/highlight-line.html#top [top]
<<< @/examples/atoms/highlight-line.html#middle [middle]
<<< @/../src/components/atoms/highlight-line/index.scss [CSS]
:::

## Line starting from a single direction

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/highlight-line-start.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/highlight-line-start.html#full [full]
<<< @/examples/atoms/highlight-line-start.html#left [left]
<<< @/examples/atoms/highlight-line-start.html#right [right]
<<< @/examples/atoms/highlight-line-start.html#bottom [bottom]
<<< @/examples/atoms/highlight-line-start.html#top [top]
<<< @/examples/atoms/highlight-line-start.html#middle [middle]
:::

## Line coming from afar

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/highlight-line-afar.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/highlight-line-afar.html#full [full]
<<< @/examples/atoms/highlight-line-afar.html#left [left]
<<< @/examples/atoms/highlight-line-afar.html#right [right]
<<< @/examples/atoms/highlight-line-afar.html#bottom [bottom]
<<< @/examples/atoms/highlight-line-afar.html#top [top]
<<< @/examples/atoms/highlight-line-afar.html#middle [middle]
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

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `$color` | `--highlight-line-main-color` | :zap: :first_quarter_moon_with_face: Line color | `color` | `rgba(#000, 70%)` / `rgba(#fff, 70%)` |
| `$size` | `--highlight-line-size` | :zap: Line size | `size` | `3px` |
| `$length` | `--highlight-line-length` | :zap: Line length | `size` | `100%` |
| `$distance` | `--highlight-line-distance` | Distance from text | `size` | `-0.5em` |
| `$duration` | `--highlight-line-duration` | Animation duration | `time` | `0.3s` |
<style lang="scss">
@use "../src/components/atoms/highlight-line";

.highlight-line{
    font-size: 2em;
}
</style>
