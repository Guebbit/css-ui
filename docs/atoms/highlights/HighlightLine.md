# Hightlight Line
<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

::: danger TODO
full-highlight missing in alternative modes
:::

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/highlights/HighlightLine" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/highlights/HighlightLine" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
```

## Default

::: raw
<div class="dev-section">
    <!--@include: ../../atoms/highlights/HighlightLine.html -->
</div>
:::


::: code-group
<<< @/atoms/highlights/HighlightLine.html#full [full]
<<< @/atoms/highlights/HighlightLine.html#left [left]
<<< @/atoms/highlights/HighlightLine.html#right [right]
<<< @/atoms/highlights/HighlightLine.html#bottom [bottom]
<<< @/atoms/highlights/HighlightLine.html#top [top]
<<< @/atoms/highlights/HighlightLine.html#middle [middle]
<<< @/../src/atoms/highlights/HighlightLine.scss [CSS]
:::

## Line starting from a single direction

::: raw
<div class="dev-section">
    <!--@include: ../../atoms/highlights/HighlightLine-start.html -->
</div>
:::

::: code-group
<<< @/atoms/highlights/HighlightLine-start.html#full [full]
<<< @/atoms/highlights/HighlightLine-start.html#left [left]
<<< @/atoms/highlights/HighlightLine-start.html#right [right]
<<< @/atoms/highlights/HighlightLine-start.html#bottom [bottom]
<<< @/atoms/highlights/HighlightLine-start.html#top [top]
<<< @/atoms/highlights/HighlightLine-start.html#middle [middle]
:::

## Line coming from afar

::: raw
<div class="dev-section">
    <!--@include: ../../atoms/highlights/HighlightLine-afar.html -->
</div>
:::

::: code-group
<<< @/atoms/highlights/HighlightLine-afar.html#full [full]
<<< @/atoms/highlights/HighlightLine-afar.html#left [left]
<<< @/atoms/highlights/HighlightLine-afar.html#right [right]
<<< @/atoms/highlights/HighlightLine-afar.html#bottom [bottom]
<<< @/atoms/highlights/HighlightLine-afar.html#top [top]
<<< @/atoms/highlights/HighlightLine-afar.html#middle [middle]
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
| `$color`         | :zap: :first_quarter_moon_with_face: Line color | `color`         | `rgba(0 0 0 / 70%)` / `rgba(#fff, 70%)` |
| `$size`          | :zap: Line size                                 | `size`          | `3px`                                 |
| `$length`        | :zap: Line length                               | `size`          | `100%`                                |
| `$distance`      | Distance from text                              | `size`          | `-0.5em`                              |
| `$duration`      | Time                                            | `time`          | `0.3s`                                |

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/highlights/HighlightLine" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);

.highlight-line{
    font-size: 2em;
}
</style>
