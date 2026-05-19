# Highlight Popup

<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

Popup/fill highlight effects supporting horizontal, vertical, explosion, fill, drop, and bounce animations.

## Use

```scss
@use "@guebbit/css-ui/atoms/highlight-popup";
```



## Regular

::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/HighlightPopup.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/HighlightPopup.html#no-effect [no-effect]
<<< @/examples/atoms/HighlightPopup.html#horizontal [horizontal]
<<< @/examples/atoms/HighlightPopup.html#vertical [vertical]
<<< @/examples/atoms/HighlightPopup.html#explosion [explosion]
<<< @/examples/atoms/HighlightPopup.html#fill [fill]
<<< @/examples/atoms/HighlightPopup.html#drop [drop]
<<< @/examples/atoms/HighlightPopup.html#bounce [bounce]
<<< @/examples/atoms/HighlightPopup.html#slide [slide]
:::

## With border (.highlight-border)

::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/HighlightPopup-border.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/HighlightPopup-border.html#no-effect [no-effect]
<<< @/examples/atoms/HighlightPopup-border.html#horizontal [horizontal]
<<< @/examples/atoms/HighlightPopup-border.html#vertical [vertical]
<<< @/examples/atoms/HighlightPopup-border.html#explosion [explosion]
<<< @/examples/atoms/HighlightPopup-border.html#fill [fill]
<<< @/examples/atoms/HighlightPopup-border.html#drop [drop]
<<< @/examples/atoms/HighlightPopup-border.html#bounce [bounce]
<<< @/examples/atoms/HighlightPopup-border.html#slide [slide]
:::

## With images

All variants applied to small image cards.

::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/HighlightPopup-images.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/HighlightPopup-images.html#horizontal [horizontal]
<<< @/examples/atoms/HighlightPopup-images.html#vertical [vertical]
<<< @/examples/atoms/HighlightPopup-images.html#explosion [explosion]
<<< @/examples/atoms/HighlightPopup-images.html#fill [fill]
<<< @/examples/atoms/HighlightPopup-images.html#drop [drop]
<<< @/examples/atoms/HighlightPopup-images.html#bounce [bounce]
<<< @/examples/atoms/HighlightPopup-images.html#slide [slide]
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
| `highlight-popup-slide`            | Slide in from bottom-left corner animation            |


## SCSS variables

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `$color` | `--highlight-popup-main-color` | :zap: :first_quarter_moon_with_face: Background color | `color` | `#000` / `#fff` |
| `$width` | `--highlight-popup-width` | Width of border | `size` | `1px` |
| `$duration` | `--highlight-popup-duration` | Animation duration | `time` | `0.2s` |
| `$delay` | `--highlight-popup-delay` | Animation delay (necessary for highlight-popup-bounce) | `time` | `{$duration} * 0.9` |
| `$padding` | `--highlight-popup-padding` | Padding | `size` | `1em 2em` |
| `$slide-easing` | `--highlight-popup-slide-easing` | Bounce-overshoot easing for the slide variant | `easing` | `cubic-bezier(0.31, -0.105, 0.43, 1.59)` |
<style lang="scss">
@use "../src/components/atoms/highlight-popup";
</style>
