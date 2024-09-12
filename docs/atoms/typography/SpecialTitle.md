# Special Title
<Badge type="tip">Atom</Badge> <Badge type="info">Typography</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/typography/SpecialTitle" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix,
    $adjust: -0.1em,
    $border-style: dashed,
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/typography/SpecialTitle" with (
    $color: theme.$primary-color,
    $line-background: theme.$background-color--light,
    $line-on-color: theme.$secondary-color,
    $shadow-color: theme.extract-colors(theme.$secondary-color),
    
    $color--dark: theme.$primary-color,
    $line-background--dark: theme.$background-color--dark,
    $line-on-color--dark: theme.$secondary-color,
    $shadow-color--dark: theme.extract-colors(theme.$secondary-color),

    $adjust: -0.1em,
    $border-style: dashed,
);
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
    <h2 class="special-title title-with-full-line title-with-strong-shadow" style="--shadow-color: var(--secondary-500)">Full Shadow Line</h2>
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
<h2 class="special-title title-with-full-line title-with-strong-shadow" style="--shadow-color: var(--secondary-500)">Full Shadow Line</h2>
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
    --shadow-color: 0 255 0;
    --line-on-color: red;

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


## Component CSS

<<< @/../src/atoms/typography/SpecialTitle.scss

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


## SCSS variables

| Variable            | Description                                                                                         | Accepted Values | Default                     |
|:--------------------|:----------------------------------------------------------------------------------------------------|:----------------|:----------------------------|
| `$color`            | :first_quarter_moon_with_face: Title elements color                                                 | `color`         | `transparent`               |
| `$on-color`         | :first_quarter_moon_with_face: Text color                                                           | `color`         | `contrast of {$color}`      |
| `$adjust`           | May be needed to fix the position of some special characters                                        | `size`          | `0`                         |
| `$shadow-color`     | Shadow color (on `var()` MUST be RGB)                                                               | `color`         | `0,0,0`                     |
| `$border-style`     | title-with-line-border only                                                                         | `border-style`  | `solid`                     |
| `$line-background`  | :first_quarter_moon_with_face: title-with-line only: needed to hide line so it doesn't overlap text | `color`         | `#fff`                      |
| `$line-color`       | :first_quarter_moon_with_face: title-with-line only: line color                                     | `color`         | `same as {$color}`          |
| `$line-on-color`    | :first_quarter_moon_with_face: title-with-line only: text color (relative to line)                  | `color`         | `contrast of {$line-color}` |
| `$line-height`      | title-with-line only: line height                                                                   | `size`          | `0.2em`                     |
| `$line-duration`    | Animation duration                                                                                  | `time`          | `0.2s`                      |

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/typography/SpecialTitle" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix,
    $adjust: -0.1em,
    $border-style: dashed,
);

.special-title{
  font-size: 3em;
  margin: 1em auto;
}

.special-title {
  &.custom-css{
    --line-height: 1.2em;
    --shadow-color: 0 255 0;
    --line-on-color: red;

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