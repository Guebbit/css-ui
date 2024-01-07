# Highlight popup

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
<<< @/public/components-html/atoms/highlights/HighlightPopup.html#no-effect 
<<< @/public/components-html/atoms/highlights/HighlightPopup.html#horizontal 
<<< @/public/components-html/atoms/highlights/HighlightPopup.html#vertical 
<<< @/public/components-html/atoms/highlights/HighlightPopup.html#explosion 
<<< @/public/components-html/atoms/highlights/HighlightPopup.html#fill 
<<< @/public/components-html/atoms/highlights/HighlightPopup.html#drop 
<<< @/public/components-html/atoms/highlights/HighlightPopup.html#bounce
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
<<< @/public/components-html/atoms/highlights/HighlightPopup.html#no-effect
<<< @/public/components-html/atoms/highlights/HighlightPopup.html#horizontal
<<< @/public/components-html/atoms/highlights/HighlightPopup.html#vertical
<<< @/public/components-html/atoms/highlights/HighlightPopup.html#explosion
<<< @/public/components-html/atoms/highlights/HighlightPopup.html#fill
<<< @/public/components-html/atoms/highlights/HighlightPopup.html#drop
<<< @/public/components-html/atoms/highlights/HighlightPopup.html#bounce
```scss [custom css for this MD file]
.highlight-popup {
    padding: 1em 2em;
}
```
:::

## Component CSS

::: code-group
<<< @/../components/atoms/highlights/HighlightPopup.scss 
```scss [custom css for this MD file]
.highlight-popup {
    padding: 1em 2em;
}
```
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

| Variable                    | Description                                            | Accepted Values | Default             |
|:----------------------------|:-------------------------------------------------------|:----------------|:--------------------|
| `$highlight-popup-color`    | Background color                                       | `color`         | `#000000`           |
| `$highlight-popup-duration` | Animation duration                                     | `time`          | `0.2s`              |
| `$highlight-popup-delay`    | Animation delay (necessary for highlight-popup-bounce) | `time`          | `{$duration} * 0.9` |
| `$highlight-border-width`   | Width of border                                        | `time`          | `1px`               |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/highlights/HighlightPopup.scss" as * with (
    $highlight-popup-color: theme.$primary-color,
);

.highlight-popup {
    padding: 1em 2em;
}
</style>