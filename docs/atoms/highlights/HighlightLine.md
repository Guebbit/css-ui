# Hightlight Line
<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

::: danger TODO
full-highlight missing in alternative modes
:::

## Use

```scss
@use "@guebbit/css-ui/src/atoms/highlights/highlight-line";
```

Color is now always applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color
- `.use-{role}` → "jolly" class: sets `--main-color` / `--on-main-color` / `--active-main-color` / `--active-on-main-color` for a full single-class semantic color override

```html
<div class="text-primary">...</div>
<button class="use-primary">...</button>
<button class="border-primary text-primary">...</button>
<button class="use-primary">...</button>
```


## Default

::: raw
<div class="dev-section">
    <!--@include: ../../examples/atoms/highlights/HighlightLine.html -->
</div>
:::


::: code-group
<<< @/examples/atoms/highlights/HighlightLine.html#full [full]
<<< @/examples/atoms/highlights/HighlightLine.html#left [left]
<<< @/examples/atoms/highlights/HighlightLine.html#right [right]
<<< @/examples/atoms/highlights/HighlightLine.html#bottom [bottom]
<<< @/examples/atoms/highlights/HighlightLine.html#top [top]
<<< @/examples/atoms/highlights/HighlightLine.html#middle [middle]
<<< @/../src/atoms/highlights/highlight-line/index.scss [CSS]
:::

## Line starting from a single direction

::: raw
<div class="dev-section">
    <!--@include: ../../examples/atoms/highlights/HighlightLine-start.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/highlights/HighlightLine-start.html#full [full]
<<< @/examples/atoms/highlights/HighlightLine-start.html#left [left]
<<< @/examples/atoms/highlights/HighlightLine-start.html#right [right]
<<< @/examples/atoms/highlights/HighlightLine-start.html#bottom [bottom]
<<< @/examples/atoms/highlights/HighlightLine-start.html#top [top]
<<< @/examples/atoms/highlights/HighlightLine-start.html#middle [middle]
:::

## Line coming from afar

::: raw
<div class="dev-section">
    <!--@include: ../../examples/atoms/highlights/HighlightLine-afar.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/highlights/HighlightLine-afar.html#full [full]
<<< @/examples/atoms/highlights/HighlightLine-afar.html#left [left]
<<< @/examples/atoms/highlights/HighlightLine-afar.html#right [right]
<<< @/examples/atoms/highlights/HighlightLine-afar.html#bottom [bottom]
<<< @/examples/atoms/highlights/HighlightLine-afar.html#top [top]
<<< @/examples/atoms/highlights/HighlightLine-afar.html#middle [middle]
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
| `$duration`      | Animation duration                              | `time`          | `0.3s`                                |

## Theming

Use theme utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`) to apply colors.

For a full single-class semantic color override, use the **"jolly"** `.use-{role}` class (e.g., `.use-primary`, `.use-success`):

```html
<div class="component use-primary">...</div>
```

<style lang="scss">
@use "../src/atoms/highlights/highlight-line";

.highlight-line{
    font-size: 2em;
}
</style>
