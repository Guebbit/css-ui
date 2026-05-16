# Book Front Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/components/atoms/animations/book-front-load";
```



## Default

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/animations/BookFrontLoad-default.html -->
</div>
:::

```html
<div class="book-front-load">
    <span></span>
    <span></span>
    <span></span>
</div>
```

## Component CSS

::: code-group
<<< @/../src/components/atoms/animations/book-front-load/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/animations/book-front-load/index.scss [index.scss]
:::

## CSS Custom Properties

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--book-front-load-size` | `100px` |
| `--book-front-load-duration` | `1s` |


## Classes

| Class | Description |
|:------|:------------|
| `book-front-load` | Component root |

## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$size` | `--book-front-load-size` | Component size | `100px` |
| `$duration` | `--book-front-load-duration` | Animation duration | `1s` |

<style lang="scss">
@use "../src/components/atoms/animations/book-front-load";
</style>
