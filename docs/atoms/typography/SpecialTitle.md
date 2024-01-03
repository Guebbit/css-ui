# Special Title
<Badge type="tip">Atom</Badge> <Badge type="info">Typography</Badge>

## Code

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
``` html [characters]
<h2 class="special-title">
    <span class="special-title-enlarge special-title-color">--</span>
    <span><b>Lorem</b> Ipsum</span>
    <span class="special-title-enlarge special-title-color">/></span>
</h2>
```
``` html [characters-line]
<h2 class="special-title title-with-line">
    <span class="special-title-enlarge">--</span>
    <span><b class="special-title-highlight">Lorem</b> Ipsum</span>
    <span class="special-title-enlarge">/></span>
</h2>
```
``` html [shadow]
<h2 class="special-title title-with-shadow">Shadow</h2>
```
``` html [strong-shadow]
<h2 class="special-title title-with-strong-shadow">Strong Shadow</h2>
```
``` html [text-appear]
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
``` html [text-disappear]
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
    <h2 class="special-title title-with-full-line title-with-strong-shadow">Full Line</h2>
    <h2 class="special-title title-with-line-border">Line as Border</h2>
    <h2 class="special-title title-with-full-line title-with-strong-shadow title-with-line-border">Line + Border + Shadow</h2>
</div>
:::

::: code-group
``` html [line]
<h2 class="special-title title-with-line">Line</h2>
```
``` html [full-line]
<h2 class="special-title title-with-full-line">Full Line</h2>
```
``` html [strong-shadow-line]
<h2 class="special-title title-with-full-line title-with-strong-shadow">Full Line</h2>
```
``` html [line-border]
<h2 class="special-title title-with-line-border">Line as Border</h2>
```
``` html [line-border-shadow]
<h2 class="special-title title-with-full-line title-with-strong-shadow title-with-line-border">Line + Border + Shadow</h2>
```
:::

## CUSTOM

::: raw
<div class="dev-section without-restrictions">
    <h2 class="special-title title-with-line-border title-with-strong-shadow custom-css">Custom CSS</h2>
</div>
:::

::: code-group
``` html [html]
<h2 class="special-title title-with-line-border title-with-strong-shadow custom-css">Custom CSS</h2>
```
``` css [css]
.special-title {
  &.custom-css{
    --strong-shadow: 0px 0px 20px #fff, 0px 0px 20px #fff, 0px 0px 20px #fff;
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
        border-top-color: var(--on-color);
      }
    }
  }
}
```
:::


## CSS

::: code-group
<<< @/../components/atoms/typography/SpecialTitle.scss
:::


## Classes

| Class                               | Description                                                     |
|:------------------------------------|:----------------------------------------------------------------|
| `title-with-shadow`                 | Text with shadow                                                |
| `title-with-strong-shadow`          | Text with much stronger shadow                                  |
| `title-with-line`                   | Line behind text                                                |
| `title-with-full-line`              | Line behind text with 100% height, similar to regular highlight |
| `title-with-line-border`            | Line behind text is a border (with various styles)              |
| `special-title-enlarge`             | CHILD: text is larger (could need $special-title-adjust)        |
| `special-title-color`               | CHILD: Text color change to main color                          |
| `special-title-highlight`           | CHILD: Background color (and relative contrast color)           |
| `special-title-appear-on-active`    | CHILD: Text appear on active                                    |
| `special-title-disappear-on-active` | CHILD: Text disappear on active                                 |
| `animate-active`                    | Animation (some elements\modes) active                          |
| `animate-on-active`                 | Animation (some elements\modes) active on .active               |
| `animate-on-hover`                  | Animation (some elements\modes) active on hover                 |


## SCSS variables

| Variable                         | Description                                                          | Accepted Values | Default                           |
|:---------------------------------|:---------------------------------------------------------------------|:----------------|:----------------------------------|
| `$special-title-color`           | Title elements color                                                 | `color`         | `#000`                            |
| `$special-title-on-color`        | Text color                                                           | `color`         | `contrast of {$color}`            |
| `$special-title-adjust`          | May be needed to fix the position of some special characters         | `size`          | `0`                               |
| `$special-title-shadow-color`    | Shadow color                                                         | `color`         | `#000`                            |
| `$special-title-shadow`          | Box-shadow instruction                                               | `css`           | `box-shadow with {$shadow-color}` |
| `$special-title-strong-shadow`   | Stronger box-shadow instruction                                      | `css`           | `box-shadow with {$shadow-color}` |
| `$special-title-border-style`    | title-with-line-border only                                          | `border-style`  | `solid`                           |
| `$special-title-line-background` | title-with-line only: needed to hide line so it doesn't overlap text | `color`         | `#fff`                            |
| `$special-title-line-color`      | title-with-line only: line color                                     | `color`         | `same as {$color}`                |
| `$special-title-line-on-color`   | title-with-line only: text color (relative to line)                  | `color`         | `contrast of {$line-color}`       |
| `$special-title-line-height`     | title-with-line only: line height                                    | `size`          | `0.2em`                           |
| `$special-title-line-duration`   | Animation duration                                                   | `time`          | `0.2s`                            |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/typography/SpecialTitle.scss" as * with (
    $special-title-color: theme.$primary-color,
    $special-title-line-background: #1b1b1f,
    $special-title-adjust: -0.1em,
    $special-title-shadow-color: theme.$secondary-color,
    $special-title-line-on-color: theme.$secondary-color,
    $special-title-border-style: dashed,
);

.special-title{
  font-size: 3em;
  margin: 1em auto;
}

.special-title {
  &.custom-css{
    --strong-shadow: 0px 0px 20px #fff, 0px 0px 20px #fff, 0px 0px 20px #fff;
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
        border-top-color: var(--on-color);
      }
    }
  }
}
</style>