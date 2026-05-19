# Highlight Popup

<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

Popup/fill highlight effects supporting horizontal, vertical, explosion, fill, drop, bounce, and four skew corner variants.

## Use

```scss
@use "@guebbit/css-ui/atoms/highlight-popup";
```



## Regular

::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/highlights/HighlightPopup.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/highlights/HighlightPopup.html#no-effect 
<<< @/examples/atoms/highlights/HighlightPopup.html#horizontal 
<<< @/examples/atoms/highlights/HighlightPopup.html#vertical 
<<< @/examples/atoms/highlights/HighlightPopup.html#explosion 
<<< @/examples/atoms/highlights/HighlightPopup.html#fill 
<<< @/examples/atoms/highlights/HighlightPopup.html#drop 
<<< @/examples/atoms/highlights/HighlightPopup.html#bounce
:::

## With border (.highlight-border)

::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/highlights/HighlightPopup-border.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/highlights/HighlightPopup-border.html#no-effect
<<< @/examples/atoms/highlights/HighlightPopup-border.html#horizontal
<<< @/examples/atoms/highlights/HighlightPopup-border.html#vertical
<<< @/examples/atoms/highlights/HighlightPopup-border.html#explosion
<<< @/examples/atoms/highlights/HighlightPopup-border.html#fill
<<< @/examples/atoms/highlights/HighlightPopup-border.html#drop
<<< @/examples/atoms/highlights/HighlightPopup-border.html#bounce
:::

## Skew corners

Four variants that sweep a skewed (parallelogram) highlight in from one of the four corners. The parent gets `overflow: hidden` automatically.

::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/highlights/HighlightPopup-skew.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/highlights/HighlightPopup-skew.html#skew-top-left
<<< @/examples/atoms/highlights/HighlightPopup-skew.html#skew-top-right
<<< @/examples/atoms/highlights/HighlightPopup-skew.html#skew-bottom-left
<<< @/examples/atoms/highlights/HighlightPopup-skew.html#skew-bottom-right
:::

## With images (placedog)

All variants applied to small image cards.

::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/highlights/HighlightPopup-images.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/highlights/HighlightPopup-images.html#horizontal
<<< @/examples/atoms/highlights/HighlightPopup-images.html#vertical
<<< @/examples/atoms/highlights/HighlightPopup-images.html#explosion
<<< @/examples/atoms/highlights/HighlightPopup-images.html#fill
<<< @/examples/atoms/highlights/HighlightPopup-images.html#drop
<<< @/examples/atoms/highlights/HighlightPopup-images.html#bounce
<<< @/examples/atoms/highlights/HighlightPopup-images.html#skew-top-left
<<< @/examples/atoms/highlights/HighlightPopup-images.html#skew-top-right
<<< @/examples/atoms/highlights/HighlightPopup-images.html#skew-bottom-left
<<< @/examples/atoms/highlights/HighlightPopup-images.html#skew-bottom-right
:::

## Component CSS

::: code-group
<<< @/../src/components/atoms/highlight-popup/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/highlight-popup/index.scss [index.scss]
:::


## Classes

| Class                              | Description                                           |
|:-----------------------------------|:------------------------------------------------------|
| `animate-active`                   | Animation active                                      |
| `animate-on-active`                | Animation active on .active                           |
| `animate-on-hover`                 | Animation active on hover                             |
| `highlight-popup-horizontal`       | Horizontal toggle animation                           |
| `highlight-popup-vertical`         | Vertical toggle animation                             |
| `highlight-popup-explosion`        | Border implosion, then background explosion animation |
| `highlight-popup-fill`             | Fill from within animation                            |
| `highlight-popup-drop`             | Drop from above animation                             |
| `highlight-popup-bounce`           | Bounce fill animation                                 |
| `highlight-popup-skew-top-left`    | Skew sweep in from the top-left corner                |
| `highlight-popup-skew-top-right`   | Skew sweep in from the top-right corner               |
| `highlight-popup-skew-bottom-left` | Skew sweep in from the bottom-left corner             |
| `highlight-popup-skew-bottom-right` | Skew sweep in from the bottom-right corner            |


## SCSS variables

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `$color` | `--highlight-popup-main-color` | :zap: :first_quarter_moon_with_face: Background color | `color` | `#000` / `#fff` |
| `$width` | `--highlight-popup-width` | Width of border | `size` | `1px` |
| `$duration` | `--highlight-popup-duration` | Animation duration | `time` | `0.2s` |
| `$delay` | `--highlight-popup-delay` | Animation delay (necessary for highlight-popup-bounce) | `time` | `{$duration} * 0.9` |
| `$padding` | `--highlight-popup-padding` | Padding | `size` | `1em 2em` |
| `$skew` | `--highlight-popup-skew` | Skew angle for skew corner variants | `angle` | `-45deg` |
| `$skew-distance` | `--highlight-popup-skew-distance` | Horizontal offset applied with the skew transform | `size` | `-20px` |
<style lang="scss">
@use "../src/components/atoms/highlight-popup";
</style>
