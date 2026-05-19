# Highlight Popup

<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

Popup/fill highlight effects supporting horizontal, vertical, explosion, fill, drop, bounce, slide, and `testname` (icon-box) animations.

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
<<< @/examples/atoms/HighlightPopup.html#no-effect 
<<< @/examples/atoms/HighlightPopup.html#horizontal 
<<< @/examples/atoms/HighlightPopup.html#vertical 
<<< @/examples/atoms/HighlightPopup.html#explosion 
<<< @/examples/atoms/HighlightPopup.html#fill 
<<< @/examples/atoms/HighlightPopup.html#drop 
<<< @/examples/atoms/HighlightPopup.html#bounce
<<< @/examples/atoms/HighlightPopup.html#slide
:::

## With border (.highlight-border)

::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/HighlightPopup-border.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/HighlightPopup-border.html#no-effect
<<< @/examples/atoms/HighlightPopup-border.html#horizontal
<<< @/examples/atoms/HighlightPopup-border.html#vertical
<<< @/examples/atoms/HighlightPopup-border.html#explosion
<<< @/examples/atoms/HighlightPopup-border.html#fill
<<< @/examples/atoms/HighlightPopup-border.html#drop
<<< @/examples/atoms/HighlightPopup-border.html#bounce
<<< @/examples/atoms/HighlightPopup-border.html#slide
:::

## With images

All variants applied to small image cards.

::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/HighlightPopup-images.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/HighlightPopup-images.html#horizontal
<<< @/examples/atoms/HighlightPopup-images.html#vertical
<<< @/examples/atoms/HighlightPopup-images.html#explosion
<<< @/examples/atoms/HighlightPopup-images.html#fill
<<< @/examples/atoms/HighlightPopup-images.html#drop
<<< @/examples/atoms/HighlightPopup-images.html#bounce
<<< @/examples/atoms/HighlightPopup-images.html#slide
:::

## Icon-box (`testname` variant)

Sized icon container with a slide-in coloured background plane and centred `.button-icon` / `.button-image` children. Merged in from the former `button-large-icon` atom; supports `button-circular`, `button-rounded`, and `button-small` shape/size modifiers scoped to this variant.

::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/HighlightPopup-testname.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/HighlightPopup-testname.html#default
<<< @/examples/atoms/HighlightPopup-testname.html#image
<<< @/examples/atoms/HighlightPopup-testname.html#small
<<< @/examples/atoms/HighlightPopup-testname.html#rounded
<<< @/examples/atoms/HighlightPopup-testname.html#circular
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
| `highlight-popup-testname`         | Icon-box variant (sized container + slide-in plane + centred icon/image children) |


## SCSS variables

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `$color` | `--highlight-popup-main-color` | :zap: :first_quarter_moon_with_face: Background color | `color` | `#000` / `#fff` |
| `$width` | `--highlight-popup-width` | Width of border | `size` | `1px` |
| `$duration` | `--highlight-popup-duration` | Animation duration | `time` | `0.2s` |
| `$delay` | `--highlight-popup-delay` | Animation delay (necessary for highlight-popup-bounce) | `time` | `{$duration} * 0.9` |
| `$padding` | `--highlight-popup-padding` | Padding | `size` | `1em 2em` |
| `$slide-easing` | `--highlight-popup-slide-easing` | Bounce-overshoot easing for the slide variant | `easing` | `cubic-bezier(0.31, -0.105, 0.43, 1.59)` |
| `$icon-size` | `--highlight-popup-icon-size` | Container size for the `testname` icon-box variant | `size` | `90px` |
<style lang="scss">
@use "../src/components/atoms/highlight-popup";
</style>
