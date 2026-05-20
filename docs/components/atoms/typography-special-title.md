# Typography Special Title
<Badge type="tip">Atom</Badge> <Badge type="info">Typography</Badge>

## Use

```scss
@use "@guebbit/css-ui/atoms/typography-special-title";
```



## Default

::: raw
<!--@include: ../../examples/atoms/SpecialTitle-default.html -->
:::

::: code-group
```html [characters]
<h2 class="special-title use-brand">
    <span class="special-title-enlarge special-title-color">--</span>
    <span><b>Lorem</b> Ipsum</span>
    <span class="special-title-enlarge special-title-color">/></span>
</h2>
```
```html [characters-line]
<h2 class="special-title title-with-line use-brand">
    <span class="special-title-enlarge">--</span>
    <span><b class="special-title-highlight">Lorem</b> Ipsum</span>
    <span class="special-title-enlarge">/></span>
</h2>
```
```html [shadow]
<h2 class="special-title title-with-shadow use-brand">Shadow</h2>
```
```html [strong-shadow]
<h2 class="special-title title-with-strong-shadow use-brand">Strong Shadow</h2>
```
```html [text-appear]
<h2 class="special-title animate-on-hover use-brand">
    <span class="special-title-enlarge special-title-appear-on-active">{</span>
    Lorem Ipsum
    <span class="special-title-enlarge special-title-appear-on-active">}</span>
</h2>
<h2 class="special-title animate-on-hover use-brand">
    Text
    <span class="special-title-appear-on-active">appear</span>
    now
</h2>
```
```html [text-disappear]
<h2 class="special-title animate-on-hover use-brand">
    Text
    <span class="special-title-disappear-on-active">disappear</span>
    now
</h2>
```
:::

## Lines

::: raw
<!--@include: ../../examples/atoms/SpecialTitle-lines.html -->
:::

::: code-group
```html [line]
<h2 class="special-title title-with-line use-brand">Line</h2>
```
```html [full-line]
<h2 class="special-title title-with-full-line use-brand">Full Line</h2>
```
```html [strong-shadow-line]
<h2 class="special-title title-with-full-line title-with-strong-shadow use-brand" >Full Shadow Line</h2>
```
```html [line-border]
<h2 class="special-title title-with-line-border use-brand"><span>Line as Border</span></h2>
```
```html [line-border-shadow]
<h2 class="special-title title-with-full-line title-with-strong-shadow title-with-line-border use-brand"><span>Line + Border + Shadow</span></h2>
```
:::

## CUSTOM

::: raw
<!--@include: ../../examples/atoms/SpecialTitle-custom.html -->
:::

::: code-group
```html [html]
<h2 class="special-title title-with-line-border title-with-strong-shadow custom-css use-brand">Custom CSS</h2>
```
``` css [css]
.special-title {
  &.custom-css{
    --special-title-line-height: 1.2em;

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
        border-top-width: var(--special-title-line-height);
        border-top-color: var(--css-ui-main-color, currentColor);
      }
    }
  }
}
```
:::


## Component CSS

::: code-group
<<< @/../src/components/atoms/typography-special-title/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/typography-special-title/index.scss [index.scss]
:::

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

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--special-title-adjust` | `0` |
| `--special-title-border-style` | `solid` |
| `--special-title-line-height` | `0.2em` |
| `--special-title-line-duration` | `0.2s` |


## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$adjust` | `--special-title-adjust` | Adjust | `0` |
| `$border-style` | `--special-title-border-style` | Border style | `solid` |
| `$line-height` | `--special-title-line-height` | Line height | `0.2em` |
| `$line-duration` | `--special-title-line-duration` | Line duration | `0.2s` |

<style lang="scss">
@use "../src/components/atoms/typography-special-title";

.special-title{
  font-size: 3em;
  margin: 1em auto;
}

.special-title {
  &.custom-css{
    --special-title-line-height: 1.2em;

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
        border-top-width: var(--special-title-line-height);
        border-top-color: var(--css-ui-main-color, currentColor);
      }
    }
  }
}
</style>
