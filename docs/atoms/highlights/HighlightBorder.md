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
```scss [custom css for this MD file]
.highlight-border {
    padding: 1em 2em;
}
```
:::

## Custom

::: raw
<div class="dev-section">
    <div class="highlight-border animate-active custom-animation" style="--size: 8px">
        <span class="highlight-border-top"></span>
        <span class="highlight-border-bottom highlight-border-reverse"></span>
        <span class="highlight-border-left highlight-border-reverse"></span>
        <span class="highlight-border-right"></span>
        Animated (active)
    </div>
    <div class="highlight-border animate-on-hover custom-animation" style="--size: 8px">
        <span class="highlight-border-top"></span>
        <span class="highlight-border-bottom highlight-border-reverse"></span>
        <span class="highlight-border-left highlight-border-reverse"></span>
        <span class="highlight-border-right"></span>
        Animated (hover)
    </div>
    <div class="highlight-border animate-on-hover custom-animation" style="--size: 8px">
        <span class="highlight-border-top highlight-border-reveal"></span>
        <span class="highlight-border-bottom highlight-border-reveal"></span>
        <span class="highlight-border-left highlight-border-reveal"></span>
        <span class="highlight-border-right highlight-border-reveal"></span>
        Animated (reveal)
    </div>
</div>
:::

::: code-group
```html [custom-active]
<div class="highlight-border animate-active custom-animation" style="--size: 8px">
    <span class="highlight-border-top"></span>
    <span class="highlight-border-bottom highlight-border-reverse"></span>
    <span class="highlight-border-left highlight-border-reverse"></span>
    <span class="highlight-border-right"></span>
    Animated (active)
</div>
```
```html [custom-hover]
<div class="highlight-border animate-on-hover custom-animation" style="--size: 8px">
    <span class="highlight-border-top"></span>
    <span class="highlight-border-bottom highlight-border-reverse"></span>
    <span class="highlight-border-left highlight-border-reverse"></span>
    <span class="highlight-border-right"></span>
    Animated (hover)
</div>
```
```html [custom-hover-reveal]
<div class="highlight-border animate-on-hover custom-animation" style="--size: 8px">
    <span class="highlight-border-top highlight-border-reveal"></span>
    <span class="highlight-border-bottom highlight-border-reveal"></span>
    <span class="highlight-border-left highlight-border-reveal"></span>
    <span class="highlight-border-right highlight-border-reveal"></span>
    Animated (reveal)
</div>
```
```scss [custom CSS]
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
@use "docs/theme.scss" as theme;
@use "components/atoms/highlights/HighlightBorder.scss" as * with (
    $highlight-border-color: theme.$primary-color,
);

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
</style>