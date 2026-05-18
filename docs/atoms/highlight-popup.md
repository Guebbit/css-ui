# Highlight Popup

<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

Popup/fill highlight effects supporting horizontal, vertical, explosion, fill, drop, and bounce variants.

## Use

```scss
@use "@guebbit/css-ui/atoms/highlight-popup";
```



## Regular

::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/highlight-popup.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/highlight-popup.html#no-effect 
<<< @/examples/atoms/highlight-popup.html#horizontal 
<<< @/examples/atoms/highlight-popup.html#vertical 
<<< @/examples/atoms/highlight-popup.html#explosion 
<<< @/examples/atoms/highlight-popup.html#fill 
<<< @/examples/atoms/highlight-popup.html#drop 
<<< @/examples/atoms/highlight-popup.html#bounce
:::

## With border (.highlight-border)

::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/highlight-popup-border.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/highlight-popup-border.html#no-effect
<<< @/examples/atoms/highlight-popup-border.html#horizontal
<<< @/examples/atoms/highlight-popup-border.html#vertical
<<< @/examples/atoms/highlight-popup-border.html#explosion
<<< @/examples/atoms/highlight-popup-border.html#fill
<<< @/examples/atoms/highlight-popup-border.html#drop
<<< @/examples/atoms/highlight-popup-border.html#bounce
:::

## Component CSS

::: code-group
<<< @/../src/components/atoms/highlight-popup/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/highlight-popup/index.scss [index.scss]
:::


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

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `$color` | `--highlight-popup-main-color` | :zap: :first_quarter_moon_with_face: Background color | `color` | `#000` / `#fff` |
| `$width` | `--highlight-popup-width` | Width of border | `size` | `1px` |
| `$duration` | `--highlight-popup-duration` | Animation duration | `time` | `0.2s` |
| `$delay` | `--highlight-popup-delay` | Animation delay (necessary for highlight-popup-bounce) | `time` | `{$duration} * 0.9` |
| `$padding` | `--highlight-popup-padding` | Padding | `size` | `1em 2em` |
<style lang="scss">
@use "../src/components/atoms/highlight-popup";
</style>
