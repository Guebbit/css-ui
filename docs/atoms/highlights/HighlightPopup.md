# Highlight Popup

<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/highlights/highlight-popup/index";
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


## Theming

Use theme utility classes (`.bg-{role}`, `.text-{role}`, `.border-{role}`) to apply colors.

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/highlights/highlight-popup/index";
</style>