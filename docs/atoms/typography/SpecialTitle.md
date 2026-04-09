# Special Title
<Badge type="tip">Atom</Badge> <Badge type="info">Typography</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/typography/special-title";
```

Color is now always applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color
- `.use-{role}` → "jolly" class: sets `--main-color` / `--on-main-color` / `--active-main-color` / `--active-on-main-color` for a full single-class semantic color override

```html
<div class="text-primary">...</div>
<button class="bg-primary">...</button>
<button class="border-primary text-primary">...</button>
<button class="use-primary">...</button>
```


## Default

::: raw
<div class="dev-section without-restrictions">
    <h2 class="special-title">
        <span class="special-title-enlarge special-title-color">--</span>
        <span><b>Lorem</b> Ipsum</span>
        <span class="special-title-enlarge special-title-color">/></span>
    </h2>
    <h2 class="special-title title-with-line">
        <span class="special-title-enlarge">--</span>
        <span><b class="special-title-highlight">Lorem</b> Ipsum</span>
        <span class="special-title-enlarge">/></span>
    </h2>
    <h2 class="special-title title-with-shadow">Shadow</h2>
    <h2 class="special-title title-with-strong-shadow">Strong Shadow</h2>
    <h2 class="special-title animate-on-hover">
        <span class="special-title-enlarge special-title-appear-on-active">{</span>
        Lorem Ipsum
        <span class="special-title-enlarge special-title-appear-on-active">}</span>
    </h2>
    <h2 class="special-title animate-on-hover">
        Text
        <span class="special-title-appear-on-active">appear</span>
        now
    </h2>
    <h2 class="special-title animate-on-hover">
        Text
        <span class="special-title-disappear-on-active">disappear</span>
        now
    </h2>
</div>
:::

::: code-group
```html [characters]
<h2 class="special-title">
    <span class="special-title-enlarge special-title-color">--</span>
    <span><b>Lorem</b> Ipsum</span>
    <span class="special-title-enlarge special-title-color">/></span>
</h2>
```
```html [characters-line]
<h2 class="special-title title-with-line">
    <span class="special-title-enlarge">--</span>
    <span><b class="special-title-highlight">Lorem</b> Ipsum</span>
    <span class="special-title-enlarge">/></span>
</h2>
```
```html [shadow]
<h2 class="special-title title-with-shadow">Shadow</h2>
```
```html [strong-shadow]
<h2 class="special-title title-with-strong-shadow">Strong Shadow</h2>
```
```html [text-appear]
<h2 class="special-title animate-on-hover">
    <span class="special-title-enlarge special-title-appear-on-active">{</span>
    Lorem Ipsum
    <span class="special-title-enlarge special-title-appear-on-active">}</span>
</h2>
<h2 class="special-title animate-on-hover">
    Text
    <span class="special-title-appear-on-active">appear</span>
    now
</h2>
```
```html [text-disappear]
<h2 class="special-title animate-on-hover">
    Text
    <span class="special-title-disappear-on-active">disappear</span>
    now
</h2>
```
:::

## Lines

::: raw
<div class="dev-section without-restrictions">
    <h2 class="special-title title-with-line">Line</h2>
    <h2 class="special-title title-with-full-line">Full Line</h2>
    <h2 class="special-title title-with-full-line title-with-strong-shadow" >Full Shadow Line</h2>
    <h2 class="special-title title-with-line-border"><span>Line as Border</span></h2>
    <h2 class="special-title title-with-full-line title-with-strong-shadow title-with-line-border"><span>Line + Border + Shadow</span></h2>
</div>
:::

::: code-group
```html [line]
<h2 class="special-title title-with-line">Line</h2>
```
```html [full-line]
<h2 class="special-title title-with-full-line">Full Line</h2>
```
```html [strong-shadow-line]
<h2 class="special-title title-with-full-line title-with-strong-shadow" >Full Shadow Line</h2>
```
```html [line-border]
<h2 class="special-title title-with-line-border"><span>Line as Border</span></h2>
```
```html [line-border-shadow]
<h2 class="special-title title-with-full-line title-with-strong-shadow title-with-line-border"><span>Line + Border + Shadow</span></h2>
```
:::

## CUSTOM

::: raw
<div class="dev-section without-restrictions">
    <h2 class="special-title title-with-line-border title-with-strong-shadow custom-css">Custom CSS</h2>
</div>
:::

::: code-group
```html [html]
<h2 class="special-title title-with-line-border title-with-strong-shadow custom-css">Custom CSS</h2>
```
``` css [css]
.special-title {
  &.custom-css{
    --line-height: 1.2em;

    &.title-with-line-border {
      &::after{
        width: 50%;
        border-top-style: solid;
      }
      &::before{
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        width: 50%;
        z-index: -1;
        border-top-style: dotted;
        border-top-width: var(--line-height);
        border-top-color: var(--css-ui-main-color, currentColor);
      }
    }
  }
}
```
:::


## Component CSS

<<< @/../src/atoms/typography/special-title/index.scss

## Classes

| Class                                | Description                                                     |
|:-------------------------------------|:----------------------------------------------------------------|
| `title-with-shadow`                  | Text with shadow                                                |
| `title-with-strong-shadow`           | Text with much stronger shadow                                  |
| `title-with-line`                    | Line behind text                                                |
| `title-with-full-line`               | Line behind text with 100% height, similar to regular highlight |
| `title-with-line-border`             | Line behind text is a border (with various styles)              |
| `special-title-enlarge`              | CHILD: text is larger (could need $adjust)                      |
| `special-title-color`                | CHILD: Text color change to main color                          |
| `special-title-highlight`            | CHILD: Background color (and relative contrast color)           |
| `special-title-appear-on-active`     | CHILD: Text appear on active                                    |
| `special-title-disappear-on-active`  | CHILD: Text disappear on active                                 |
| `animate-active`                     | Animation (some elements\modes) active                          |
| `animate-on-active`                  | Animation (some elements\modes) active on .active               |
| `animate-on-hover`                   | Animation (some elements\modes) active on hover                 |


## CSS Custom Properties

Component color is inherited from utility classes (`.bg-{role}`, `.text-{role}`, `.border-{role}`, `.use-{role}`).

| Property | Default |
|:---------|:--------|
| `--special-title-adjust` | `0` |
| `--special-title-border-style` | `solid` |
| `--special-title-line-height` | `0.2em` |
| `--special-title-line-duration` | `0.2s` |


<style lang="scss">
@use "../src/atoms/typography/special-title";

.special-title{
  font-size: 3em;
  margin: 1em auto;
}

.special-title {
  &.custom-css{
    --line-height: 1.2em;

    &.title-with-line-border {
      &::after{
        width: 50%;
        border-top-style: solid;
      }
      &::before{
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        width: 50%;
        z-index: -1;
        border-top-style: dotted;
        border-top-width: var(--line-height);
        border-top-color: var(--css-ui-main-color, currentColor);
      }
    }
  }
}
</style>
