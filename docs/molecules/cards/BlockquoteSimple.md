# Simple Blockquote 
<Badge type="tip">Atom</Badge> <Badge type="info">Cards</Badge> <Badge type="info">Blockquote</Badge>


## Default

::: raw
<blockquote class="blockquote-simple">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>default</cite>
</blockquote>
:::

```html [Default]
<blockquote class="blockquote-simple">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>default</cite>
</blockquote>
```

## Cite tag

::: raw
<blockquote class="blockquote-simple cite-tag">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <br/><cite>default</cite>
</blockquote>
:::

```html [Cite tag]
<blockquote class="blockquote-simple cite-tag">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <br/><cite>default</cite>
</blockquote>
```

## Quote left

::: raw
<blockquote class="blockquote-simple quote-left">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>quote-left</cite>
</blockquote>
:::

```html [Quote left]
<blockquote class="blockquote-simple quote-left">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>quote-left</cite>
</blockquote>
```

## Quote right

::: raw
<blockquote class="blockquote-simple quote-right">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>quote-right</cite>
</blockquote>
:::

```html [Quote right]
<blockquote class="blockquote-simple quote-right">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>quote-right</cite>
</blockquote>
```

## Double quote

::: raw
<blockquote class="blockquote-simple quote-right quote-left">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>Side quotes</cite>
</blockquote>
:::

```html [Double quote]
<blockquote class="blockquote-simple quote-right quote-left">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>Side quotes</cite>
</blockquote>
```

## Double quote at sides

::: raw
<blockquote class="blockquote-simple quote-right quote-left quote-sides">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>Side quotes</cite>
</blockquote>
:::

```html [Double quote at sides]
<blockquote class="blockquote-simple quote-right quote-left quote-sides">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>Side quotes</cite>
</blockquote>
```

## Cite right

<div class="dev-divider"></div>

::: raw
<blockquote class="blockquote-simple cite-right">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>cite-right</cite>
</blockquote>
:::

```html [Right cite]
<blockquote class="blockquote-simple cite-right">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>cite-right</cite>
</blockquote>
```

## Cite center

::: raw
<blockquote class="blockquote-simple cite-center quote-left">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>cite-center</cite>
</blockquote>
:::

```html [Center cite]
<blockquote class="blockquote-simple cite-center quote-left">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>cite-center</cite>
</blockquote>
```

## Border - right and left

::: raw
<blockquote class="blockquote-simple border-right border-left">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>border-right border-left</cite>
</blockquote>
:::

```html [Right and left]
<blockquote class="blockquote-simple border-right border-left">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>border-right border-left</cite>
</blockquote>
```

## Border - top and bottom

::: raw
<blockquote class="blockquote-simple border-top border-bottom">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>border-top border-bottom</cite>
</blockquote>
:::

```html [Top and bottom]
<blockquote class="blockquote-simple border-top border-bottom">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>border-top border-bottom</cite>
</blockquote>
```

## Border - right and left

::: raw
<blockquote class="blockquote-simple border-right border-left border-top border-bottom">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>border-right border-left border-top border-bottom</cite>
</blockquote>
:::

```html [All around border]
<blockquote class="blockquote-simple border-right border-left border-top border-bottom">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>border-right border-left border-top border-bottom</cite>
</blockquote>
```

## Border - Left + background

::: raw
<blockquote class="blockquote-simple border-left" style="background-color: rgba(var(--primary-color), 0.1)">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>border-left with background</cite>
</blockquote>
:::

```html [Background]
<blockquote class="blockquote-simple border-left" style="background-color: rgba(var(--primary-color), 0.1)">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>border-left with background</cite>
</blockquote>
```

## Mixed - quotes and cite-tag

::: raw
<blockquote class="blockquote-simple cite-center center-quote cite-tag quote-left quote-right">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <br/><cite>cite-center center-quote double quote</cite>
</blockquote>
:::

```html [Mixed]
<blockquote class="blockquote-simple cite-center center-quote cite-tag quote-left quote-right">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <br/><cite>cite-center center-quote double quote</cite>
</blockquote>
```

## Mixed -  Border and quotes

::: raw
<blockquote class="blockquote-simple border-right border-left border-top border-bottom quote-right quote-left cite-tag">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <br/><cite>border-right border-left border-top border-bottom</cite>
</blockquote>
:::

```html [Mixed]
<blockquote class="blockquote-simple border-right border-left border-top border-bottom quote-right quote-left cite-tag">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <br/><cite>border-right border-left border-top border-bottom</cite>
</blockquote>
```

<div class="dev-divider"></div>

## Component CSS



<<< @/../components/molecules/cards/BlockquoteSimple.scss

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

| Variable                           | Description                                                       | Accepted Values | Default            |
|:-----------------------------------|:------------------------------------------------------------------|:----------------|:-------------------|
| `$blockquote-simple-color`         | Main color (NO CSS var)                                           | `color`         | `#000`             |
| `$blockquote-simple-cite-color`    | Color of cite                                                     | `color`         | `same as {$color}` |
| `$blockquote-simple-cite-on-color` | on {cite-tag} it's text color and {$cite-color} become background | `color`         | `same as {$color}` |
| `$blockquote-simple-border-color`  | Color of border                                                   | `color`         | `same as {$color}` |
| `$blockquote-simple-border-size`   | border size                                                       | `size`          | `6px`              |
| `$blockquote-simple-quote-left`    | ASCII left quote character (NO CSS var)                           | `text`          | `\201C`            |
| `$blockquote-simple-quote-right`   | ASCII right quote character (NO CSS var)                          | `text`          | `\201D`            |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/molecules/cards/BlockquoteSimple.scss" as * with (
    $blockquote-simple-color: theme.$primary-color,
    $blockquote-simple-cite-color: theme.$secondary-color,
);
</style>