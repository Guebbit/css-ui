# Blockquote
<Badge type="tip">Atom</Badge> <Badge type="info">Typography</Badge>

## Use

```scss
@use "@guebbit/css-ui/atoms/blockquote";
```

## Default

::: raw
<!--@include: ../../examples/atoms/blockquote-default.html -->
:::

```html [Default]
<blockquote class="blockquote animate-on-hover use-brand">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>default</cite>
</blockquote>
```

## Cite tag

::: raw
<!--@include: ../../examples/atoms/blockquote-cite-tag.html -->
:::

## Quote left

::: raw
<!--@include: ../../examples/atoms/blockquote-quote-left.html -->
:::

## Quote right

::: raw
<!--@include: ../../examples/atoms/blockquote-quote-right.html -->
:::

## Double quote

::: raw
<!--@include: ../../examples/atoms/blockquote-double-quote.html -->
:::

## Double quote at sides

::: raw
<!--@include: ../../examples/atoms/blockquote-double-quote-at-sides.html -->
:::

## Cite right

::: raw
<!--@include: ../../examples/atoms/blockquote-cite-right.html -->
:::

## Cite center

::: raw
<!--@include: ../../examples/atoms/blockquote-cite-center.html -->
:::

## Border right and left

::: raw
<!--@include: ../../examples/atoms/blockquote-border-right-and-left-2.html -->
:::

## Border top and bottom

::: raw
<!--@include: ../../examples/atoms/blockquote-border-top-and-bottom.html -->
:::

## Border all around

::: raw
<!--@include: ../../examples/atoms/blockquote-border-right-and-left.html -->
:::

## Border left + background

::: raw
<!--@include: ../../examples/atoms/blockquote-border-left-background.html -->
:::

## Mixed quotes and cite-tag

::: raw
<!--@include: ../../examples/atoms/blockquote-mixed-quotes-and-cite-tag.html -->
:::

## Mixed border and quotes

::: raw
<!--@include: ../../examples/atoms/blockquote-mixed-border-and-quotes.html -->
:::

## Component CSS

::: code-group
<<< @/../src/components/atoms/blockquote/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/blockquote/index.scss [index.scss]
:::

## Classes

| Class           | Description             |
|:----------------|:------------------------|
| `cite-right`    | Cite position: right    |
| `cite-center`   | Cite position: center   |
| `cite-tag`      | Cite as badge           |
| `quote-left`    | Left quote              |
| `quote-right`   | Right quote             |
| `quote-sides`   | Quotes at the sides     |
| `border-left`   | Border position: left   |
| `border-right`  | Border position: right  |
| `border-top`    | Border position: top    |
| `border-bottom` | Border position: bottom |

## SCSS variables

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `$border-size` | `--blockquote-border-size` | Border size | `size` | `6px` |
| `$padding` | `--blockquote-padding` | Padding | `size` | `24px` |
| `$duration` | `--blockquote-duration` | Transition duration | `time` | `0.2s` |
| `$quote-left` | — | Left quote character | `text` | `\201C` |
| `$quote-right` | — | Right quote character | `text` | `\201D` |

<style lang="scss">
@use "../src/components/atoms/blockquote";
</style>
