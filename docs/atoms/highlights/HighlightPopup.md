# Highlight Popup

<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

## Regular

::: raw
<div class="dev-section">
    <div class="highlight-popup">
        No effect
    </div>
    <div class="highlight-popup animate-on-hover highlight-popup-horizontal">
        Horizontal
    </div>
    <div class="highlight-popup animate-on-hover highlight-popup-vertical">
        Vertical
    </div>
    <div class="highlight-popup animate-on-hover highlight-popup-explosion">
        Explosion
    </div>
    <div class="highlight-popup animate-on-hover highlight-popup-fill">
        Fill
    </div>
    <div class="highlight-popup animate-on-hover highlight-popup-drop">
        Drop
    </div>
    <div class="highlight-popup animate-on-hover highlight-popup-bounce">
        Bounce
    </div>
</div>
:::

::: code-group
```html [no-effect]
<div class="highlight-popup">
    No effect
</div>
```
```html [horizontal]
<div class="highlight-popup animate-on-hover highlight-popup-horizontal">
    Horizontal
</div>
```
```html [vertical]
<div class="highlight-popup animate-on-hover highlight-popup-vertical">
    Vertical
</div>
```
```html [explosion]
<div class="highlight-popup animate-on-hover highlight-popup-explosion">
    Explosion
</div>
```
```html [fill]
<div class="highlight-popup animate-on-hover highlight-popup-fill">
    Fill
</div>
```
```html [drop]
<div class="highlight-popup animate-on-hover highlight-popup-drop">
    Drop
</div>
```
```html [bounce]
<div class="highlight-popup animate-on-hover highlight-popup-bounce">
    Bounce
</div>
```
<<< @/atoms/highlights/HighlightPopup.html#no-effect 
<<< @/atoms/highlights/HighlightPopup.html#horizontal 
<<< @/atoms/highlights/HighlightPopup.html#vertical 
<<< @/atoms/highlights/HighlightPopup.html#explosion 
<<< @/atoms/highlights/HighlightPopup.html#fill 
<<< @/atoms/highlights/HighlightPopup.html#drop 
<<< @/atoms/highlights/HighlightPopup.html#bounce
:::

## With border (.highlight-border)

::: raw
<div class="dev-section">
    <div class="highlight-popup highlight-border highlight-border">
        No effect
    </div>
    <div class="highlight-popup highlight-border animate-on-hover highlight-popup-horizontal">
        Horizontal
    </div>
    <div class="highlight-popup highlight-border animate-on-hover highlight-popup-vertical">
        Vertical
    </div>
    <div class="highlight-popup highlight-border animate-on-hover highlight-popup-explosion">
        Explosion
    </div>
    <div class="highlight-popup highlight-border animate-on-hover highlight-popup-fill">
        Fill
    </div>
    <div class="highlight-popup highlight-border animate-on-hover highlight-popup-drop">
        Drop
    </div>
    <div class="highlight-popup highlight-border animate-on-hover highlight-popup-bounce">
        Bounce
    </div>
</div>
:::

::: code-group
```html [no-effect]
<div class="highlight-popup highlight-border">
    No effect
</div>
```
```html [horizontal]
<div class="highlight-popup highlight-border animate-on-hover highlight-popup-horizontal">
    Horizontal
</div>
```
```html [vertical]
<div class="highlight-popup highlight-border animate-on-hover highlight-popup-vertical">
    Vertical
</div>
```
```html [explosion]
<div class="highlight-popup highlight-border animate-on-hover highlight-popup-explosion">
    Explosion
</div>
```
```html [fill]
<div class="highlight-popup highlight-border animate-on-hover highlight-popup-fill">
    Fill
</div>
```
```html [drop]
<div class="highlight-popup highlight-border animate-on-hover highlight-popup-drop">
    Drop
</div>
```
```html [bounce]
<div class="highlight-popup highlight-border animate-on-hover highlight-popup-bounce">
    Bounce
</div>
```
<<< @/atoms/highlights/HighlightPopup.html#no-effect
<<< @/atoms/highlights/HighlightPopup.html#horizontal
<<< @/atoms/highlights/HighlightPopup.html#vertical
<<< @/atoms/highlights/HighlightPopup.html#explosion
<<< @/atoms/highlights/HighlightPopup.html#fill
<<< @/atoms/highlights/HighlightPopup.html#drop
<<< @/atoms/highlights/HighlightPopup.html#bounce
:::

## Component CSS

<<< @/../src/atoms/highlights/HighlightPopup.scss

## Documentation CSS

```scss
@use "../../theme" as theme;
@use "../src/atoms/highlights/HighlightPopup" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);

.highlight-popup {
  padding: 1em 2em;
}
```

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

| Variable    | Description                                              | Accepted Values | Default             |
|:------------|:---------------------------------------------------------|:----------------|:--------------------|
| `$color`    | :zap: :first_quarter_moon_with_face: Background color    | `color`         | `#000` \ `#fff`     |
| `$width`    | Width of border                                          | `time`          | `1px`               |
| `$duration` | Animation duration                                       | `time`          | `0.2s`              |
| `$delay`    | Animation delay (necessary for highlight-popup-bounce)   | `time`          | `{$duration} * 0.9` |

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/highlights/HighlightPopup" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);

.highlight-popup {
    padding: 1em 2em;
}
</style>