# Highlight Rollup

<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/highlight-rollup.html -->
</div>
:::

## Use

```scss
@use "@guebbit/css-ui/atoms/highlight-rollup";
```



## Default

::: code-group
<<< @/examples/atoms/highlight-rollup.html#down-to-up [down-to-up]
<<< @/examples/atoms/highlight-rollup.html#right-to-left [right-to-left]
<<< @/examples/atoms/highlight-rollup.html#up-to-down [up-to-down]
<<< @/examples/atoms/highlight-rollup.html#left-to-right [left-to-right]
<<< @/examples/atoms/highlight-rollup.html#skew-top-left [skew-top-left]
<<< @/examples/atoms/highlight-rollup.html#skew-top-right [skew-top-right]
<<< @/examples/atoms/highlight-rollup.html#skew-bottom-left [skew-bottom-left]
<<< @/examples/atoms/highlight-rollup.html#skew-bottom-right [skew-bottom-right]
:::

## With images (placedog)

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/highlight-rollup-images.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/highlight-rollup-images.html#down-to-up [down-to-up]
<<< @/examples/atoms/highlight-rollup-images.html#right-to-left [right-to-left]
<<< @/examples/atoms/highlight-rollup-images.html#up-to-down [up-to-down]
<<< @/examples/atoms/highlight-rollup-images.html#left-to-right [left-to-right]
<<< @/examples/atoms/highlight-rollup-images.html#skew-top-left [skew-top-left]
<<< @/examples/atoms/highlight-rollup-images.html#skew-top-right [skew-top-right]
<<< @/examples/atoms/highlight-rollup-images.html#skew-bottom-left [skew-bottom-left]
<<< @/examples/atoms/highlight-rollup-images.html#skew-bottom-right [skew-bottom-right]
:::

## Doors variant

Merged from the former `animation-panel-askew-doors` atom. Adds a pair of
tilted panels (using `::before` + `::after`) that act like askew doors over
the host. Combine with `highlight-rollup-doors-open-on-hover` (or the
`-active` / `-on-active` triggers) to open them; add
`highlight-rollup-doors-vertical` to open vertically.

::: raw
<!--@include: ../../examples/atoms/highlight-rollup-doors.html -->
:::

::: code-group
<<< @/examples/atoms/highlight-rollup-doors.html#doors-default [closed]
<<< @/examples/atoms/highlight-rollup-doors.html#doors-open [open]
<<< @/examples/atoms/highlight-rollup-doors.html#doors-open-vertical [open vertical]
<<< @/examples/atoms/highlight-rollup-doors.html#doors-primary [primary]
:::

## Mirror variant

Merged from the former `animation-effect-mirror-reflection` atom. Adds a
diagonal gradient sweep via `::before` to mimic a glossy reflection. The
host already provides the required `position: relative` and
`overflow: hidden`, so no extra wrapper is needed.

::: raw
<!--@include: ../../examples/atoms/highlight-rollup-mirror.html -->
:::

::: code-group
<<< @/examples/atoms/highlight-rollup-mirror.html#mirror-default [default]
<<< @/examples/atoms/highlight-rollup-mirror.html#mirror-primary [primary]
:::

::: warning
The `highlight-rollup-doors` and `highlight-rollup-mirror` variants both
customise pseudo-elements on the host and are intended to be used
independently of each other.
:::

## Component CSS

::: code-group
<<< @/../src/components/atoms/highlight-rollup/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/highlight-rollup/index.scss [index.scss]
:::

## Classes

| Class                         | Description                              |
|:------------------------------|:-----------------------------------------|
| `animate-active`              | Animation active                         |
| `animate-on-active`           | Animation active on .active              |
| `animate-on-hover`            | Animation active on hover                |
| `highlight-rollup-horizontal` | Horizontal animation                     |
| `highlight-rollup-reverse`    | Animation reverse direction              |
| `highlight-rollup-skew-top-left`        | Skew animation entering from the top-left corner    |
| `highlight-rollup-skew-top-right`       | Skew animation entering from the top-right corner   |
| `highlight-rollup-skew-bottom-left`     | Skew animation entering from the bottom-left corner |
| `highlight-rollup-skew-bottom-right`    | Skew animation entering from the bottom-right corner |
| `highlight-rollup-doors`             | Askew doors variant (merged from `panel-askew-doors`) |
| `highlight-rollup-doors-vertical`    | Doors open vertically                                 |
| `highlight-rollup-doors-open-active` | Doors permanently open                                |
| `highlight-rollup-doors-open-on-active` | Doors open while host has `.active`                |
| `highlight-rollup-doors-open-on-hover`  | Doors open on hover                                |
| `highlight-rollup-mirror`            | Glossy reflection variant (merged from `effect-mirror-reflection`) |

## SCSS variables

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `$color` | `--highlight-rollup-main-color` | :zap: :first_quarter_moon_with_face: Background color | `color` | `#000` / `#fff` |
| `$duration` | `--highlight-rollup-duration` | Animation duration | `time` | `0.2s` |
| `$active-color` | `--highlight-rollup-active-main-color` | Active background color | `color` | `same as {$color}` |
| `$padding` | `--highlight-rollup-padding` | Padding | `size` | `1em 2em` |
| `$skew` | `--highlight-rollup-skew` | Skew angle for skew corner variants | `angle` | `-45deg` |
| `$skew-distance` | `--highlight-rollup-skew-distance` | Horizontal offset applied with the skew transform | `size` | `-20px` |
| `$tilt` | `--highlight-rollup-tilt` | Doors tilt angle | `angle` | `15deg` |
| `$opacity` | `--highlight-rollup-opacity` | Mirror rest opacity | `number` | `0.2` |
| `$rotation` | `--highlight-rollup-rotation` | Mirror rest rotation | `angle` | `35deg` |
| `$position-top` | `--highlight-rollup-position-top` | Mirror rest top offset | `length` | `-70%` |
| `$active-opacity` | `--highlight-rollup-active-opacity` | Mirror active opacity | `number` | `0.2` |
| `$active-rotation` | `--highlight-rollup-active-rotation` | Mirror active rotation | `angle` | `10deg` |
| `$active-position-top` | `--highlight-rollup-active-position-top` | Mirror active top offset | `length` | `-40%` |

<style lang="scss">
@use "../src/components/atoms/highlight-rollup";
</style>
