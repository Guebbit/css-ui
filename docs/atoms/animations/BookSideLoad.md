# Book Side Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

::: danger
Can't change $size, must be 32px, need to be fixed
:::

## Use

```scss
@use "@guebbit/css-ui/atoms/animation-book-side-load";
```



## Default

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/animations/BookSideLoad-default.html -->
</div>
:::

```html
<div class="book-side-load animate-active">
    <div class="book">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <ul class="pages">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>
```

## Component CSS

::: code-group
<<< @/../src/components/atoms/animation-book-side-load/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/animation-book-side-load/index.scss [index.scss]
:::

## Classes

| Class               | Description          |
|:--------------------|:---------------------|
| `animate-active`    | Animation active     |
| `animate-on-active` | Animation on .active |
| `animate-on-hover`  | Animation on hover   | 

## CSS Custom Properties

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--book-side-load-size` | `32px` |
| `--book-side-load-duration` | `7s` |


## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$size` | `--book-side-load-size` | Component size | `32px` |
| `$duration` | `--book-side-load-duration` | Animation duration | `7s` |

<style lang="scss">
@use "../src/components/atoms/animation-book-side-load";
</style>
