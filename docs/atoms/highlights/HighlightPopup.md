# Highlight Popup

<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

Popup/fill highlight effects supporting horizontal, vertical, explosion, fill, drop, and bounce variants.

## Use

```scss
@use "@guebbit/css-ui/src/atoms/highlights/highlight-popup";
```



## Regular

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/highlights/HighlightPopup.html -->
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
<!--@include: ../../examples/atoms/highlights/HighlightPopup-border.html -->
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

## Component CSS

<<< @/../src/atoms/highlights/highlight-popup/index.scss


## Classes

| Class                        | Description                                           |
|:-----------------------------|:------------------------------------------------------|
| `animate-active`             | Animation active                                      |
| `animate-on-active`          | Animation active on .active                           |
| `animate-on-hover`           | Animation active on hover                             |
| `highlight-popup-horizontal` | Horizontal toggle animation                           |
| `highlight-popup-vertical`   | Vertical toggle animation                             |
| `highlight-popup-explosion`  | Border implosion, then background explosion animation |
| `highlight-popup-fill`       | Fill from within animation                            |
| `highlight-popup-drop`       | Drop from above animation                             |
| `highlight-popup-bounce`     | Bounce fill animation                                 |


## SCSS variables

| Variable    | Description                                            | Accepted Values | Default             |
|:------------|:-------------------------------------------------------|:----------------|:--------------------|
| `$color`    | :zap: :first_quarter_moon_with_face: Background color  | `color`         | `#000` / `#fff`     |
| `$width`    | Width of border                                        | `size`          | `1px`               |
| `$duration` | Animation duration                                     | `time`          | `0.2s`              |
| `$delay`    | Animation delay (necessary for highlight-popup-bounce) | `time`          | `{$duration} * 0.9` |
| `$padding`  | Padding                                                | `size`          | `1em 2em`           |

<style lang="scss">
@use "../src/atoms/highlights/highlight-popup";
</style>
