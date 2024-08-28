# Highlight Border

<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

::: raw
<div class="dev-section">
    <!--@include: ../../atoms/highlights/HighlightBorder.html -->
</div>
:::

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
```

## Default

::: code-group
<<< @/atoms/highlights/HighlightBorder.html#top-bottom [top-bottom]
<<< @/atoms/highlights/HighlightBorder.html#left-right [left-right]
<<< @/atoms/highlights/HighlightBorder.html#corners [corners]
<<< @/atoms/highlights/HighlightBorder.html#spiral [spiral]
<<< @/atoms/highlights/HighlightBorder.html#reveal [reveal]
<<< @/atoms/highlights/HighlightBorder.html#special-background [special background]
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


## Component CSS

<<< @/../src/atoms/highlights/HighlightBorder.scss

## Documentation CSS

```scss
@use "../../theme" as theme;
@use "../src/atoms/highlights/HighlightBorder" with (
    $color: theme.$primary-color,
);

.highlight-border {
  padding: 1em 2em;
}
```

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

| Variable      | Description                                 | Accepted Values | Default         |
|:--------------|:--------------------------------------------|:----------------|:----------------|
| `$color`      | :first_quarter_moon_with_face: Border color | `color`         | `#000` \ `#fff` |
| `$size`       | Border size                                 | `color`         | `2px`           |
| `$duration`   | Animation duration                          | `time`          | `0.2s`          |


<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/highlights/HighlightBorder" with (
    $color: theme.$primary-color,
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