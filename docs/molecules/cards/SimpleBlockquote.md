# Simple Blockquote 
<Badge type="tip">Atom</Badge> <Badge type="info">Cards</Badge> <Badge type="info">Blockquote</Badge>


## Default

::: raw
<blockquote class="blockquote-simple animate-on-hover">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>default</cite>
</blockquote>
:::

```html [Default]
<blockquote class="blockquote-simple animate-on-hover">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>default</cite>
</blockquote>
```

## Cite tag

::: raw
<blockquote class="blockquote-simple animate-on-hover cite-tag">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <br/><cite>default</cite>
</blockquote>
:::

```html [Cite tag]
<blockquote class="blockquote-simple animate-on-hover cite-tag">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <br/><cite>default</cite>
</blockquote>
```

## Quote left

::: raw
<blockquote class="blockquote-simple animate-on-hover quote-left">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>quote-left</cite>
</blockquote>
:::

```html [Quote left]
<blockquote class="blockquote-simple animate-on-hover quote-left">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>quote-left</cite>
</blockquote>
```

## Quote right

::: raw
<blockquote class="blockquote-simple animate-on-hover quote-right">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>quote-right</cite>
</blockquote>
:::

```html [Quote right]
<blockquote class="blockquote-simple animate-on-hover quote-right">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>quote-right</cite>
</blockquote>
```

## Double quote

::: raw
<blockquote class="blockquote-simple animate-on-hover quote-right quote-left">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>Side quotes</cite>
</blockquote>
:::

```html [Double quote]
<blockquote class="blockquote-simple animate-on-hover quote-right quote-left">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>Side quotes</cite>
</blockquote>
```

## Double quote at sides

::: raw
<blockquote class="blockquote-simple animate-on-hover quote-right quote-left quote-sides">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>Side quotes</cite>
</blockquote>
:::

```html [Double quote at sides]
<blockquote class="blockquote-simple animate-on-hover quote-right quote-left quote-sides">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>Side quotes</cite>
</blockquote>
```

## Cite right

::: raw
<blockquote class="blockquote-simple animate-on-hover cite-right">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>cite-right</cite>
</blockquote>
:::

```html [Right cite]
<blockquote class="blockquote-simple animate-on-hover cite-right">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>cite-right</cite>
</blockquote>
```

## Cite center

::: raw
<blockquote class="blockquote-simple animate-on-hover cite-center quote-left">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>cite-center</cite>
</blockquote>
:::

```html [Center cite]
<blockquote class="blockquote-simple animate-on-hover cite-center quote-left">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>cite-center</cite>
</blockquote>
```

## Border - right and left

::: raw
<blockquote class="blockquote-simple animate-on-hover border-right border-left">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>border-right border-left</cite>
</blockquote>
:::

```html [Right and left]
<blockquote class="blockquote-simple animate-on-hover border-right border-left">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>border-right border-left</cite>
</blockquote>
```

## Border - top and bottom

::: raw
<blockquote class="blockquote-simple animate-on-hover border-top border-bottom">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>border-top border-bottom</cite>
</blockquote>
:::

```html [Top and bottom]
<blockquote class="blockquote-simple animate-on-hover border-top border-bottom">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>border-top border-bottom</cite>
</blockquote>
```

## Border - right and left

::: raw
<blockquote class="blockquote-simple animate-on-hover border-right border-left border-top border-bottom">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>border-right border-left border-top border-bottom</cite>
</blockquote>
:::

```html [All around border]
<blockquote class="blockquote-simple animate-on-hover border-right border-left border-top border-bottom">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>border-right border-left border-top border-bottom</cite>
</blockquote>
```

## Border - Left + background

::: raw
<blockquote class="blockquote-simple animate-on-hover border-left" style="background-color: rgba(var(--primary-color), 0.1)">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>border-left with background</cite>
</blockquote>
:::

```html [Background]
<blockquote class="blockquote-simple animate-on-hover border-left" style="background-color: rgba(var(--primary-color), 0.1)">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>border-left with background</cite>
</blockquote>
```

## Mixed - quotes and cite-tag

::: raw
<blockquote class="blockquote-simple animate-on-hover cite-center center-quote cite-tag quote-left quote-right">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <br/><cite>cite-center center-quote double quote</cite>
</blockquote>
:::

```html [Mixed]
<blockquote class="blockquote-simple animate-on-hover cite-center center-quote cite-tag quote-left quote-right">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <br/><cite>cite-center center-quote double quote</cite>
</blockquote>
```

## Mixed -  Border and quotes

::: raw
<blockquote class="blockquote-simple animate-on-hover border-right border-left border-top border-bottom quote-right quote-left cite-tag">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <br/><cite>border-right border-left border-top border-bottom</cite>
</blockquote>
:::

```html [Mixed]
<blockquote class="blockquote-simple animate-on-hover border-right border-left border-top border-bottom quote-right quote-left cite-tag">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <br/><cite>border-right border-left border-top border-bottom</cite>
</blockquote>
```

## Component CSS

<<< @/../src/molecules/cards/SimpleBlockquote.scss

## Documentation CSS

```scss
@use "docs/theme.scss" as theme;
@use "../../../src/molecules/cards/SimpleBlockquote.scss" as * with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
```

## Classes

| Class           | Description             |
|:----------------|:------------------------|
| `cite-right`    | Quote position: right   |
| `cite-center`   | Quote position: center  |
| `cite-tag`      | Cite button-like        |
| `quote-left`    | Left quote              |
| `quote-right`   | Right quote             |
| `quote-sides`   | Quotes at the sides     |
| `border-left`   | Border position: left   |
| `border-right`  | Border position: right  |
| `border-top`    | Border position: top    |
| `border-bottom` | Border position: bottom |


## SCSS variables

| Variable         | Description                                                                                      | Accepted Values | Default                     |
|:-----------------|:-------------------------------------------------------------------------------------------------|:----------------|:----------------------------|
| `$color`         | :x: :first_quarter_moon_with_face: :zap: MAIN color                                              | `color`         | `#000 / #fff`               |
| `$background`    | :first_quarter_moon_with_face: :zap: Background color                                            | `color`         | `transparent`               |
| `$on-background` | :first_quarter_moon_with_face: :zap: Text color                                                  | `color`         | `contrast of {$background}` |
| `$cite`          | :first_quarter_moon_with_face: :zap: Color of cite                                               | `color`         | `same as {$color}`          |
| `$on-cite`       | :first_quarter_moon_with_face: :zap: on {cite-tag} it's text color and {$cite} become background | `color`         | `contrast of {$cite}`       |
| `$border-color`  | :first_quarter_moon_with_face: :zap: Color of border                                             | `color`         | `same as {$color}`          |
| `$border-size`   | Border size                                                                                      | `size`          | `6px`                       |
| `$padding`       | Padding                                                                                          | `size`          | `24px`                      |
| `$duration`      | Transition duration                                                                              | `time`          | `0.3s`                      |
| `$quote-left`    | :x: ASCII left quote character (not working on CSS var for some reason)                          | `text`          | `\201C`                     |
| `$quote-right`   | :x: ASCII right quote character (not working on CSS var for some reason)                         | `text`          | `\201D`                     |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "../../../src/molecules/cards/SimpleBlockquote" as * with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
</style>