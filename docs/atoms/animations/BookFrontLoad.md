# Book Front Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/book-front-load";
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

<<< @/../src/atoms/animations/book-front-load/index.scss

## CSS Custom Properties

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--book-front-load-size` | `100px` |
| `--book-front-load-duration` | `1s` |


<style lang="scss">
@use "../src/atoms/animations/book-front-load";
</style>
