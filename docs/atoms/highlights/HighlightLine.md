# Hightlight Line
<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

::: danger TODO
full-highlight missing in alternative modes
:::

## Use

```scss
@use "@guebbit/css-ui/src/atoms/highlights/highlight-line/index";
```

Color is now always applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color

```html
<div class="text-primary">...</div>
<button class="bg-primary">...</button>
<button class="border-primary text-primary">...</button>
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
<<< @/../src/atoms/highlights/highlight-line/index.scss [CSS]
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

## Theming

Use theme utility classes (`.bg-{role}`, `.text-{role}`, `.border-{role}`) to apply colors.

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/highlights/highlight-line/index";

.highlight-line{
    font-size: 2em;
}
</style>
