# Progression Book Side
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

::: danger
Can't change $size, must be 32px, need to be fixed
:::

## Use

```scss
@use "@guebbit/css-ui/atoms/progression-book-side";
```



## Default

::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/BookSideLoad-default.html -->
</div>
:::

```html
<div class="progression-book-side animate-active">
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
<<< @/../src/components/atoms/progression-book-side/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/progression-book-side/index.scss [index.scss]
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
| `--progression-book-side-size` | `32px` |
| `--progression-book-side-duration` | `7s` |


## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$size` | `--progression-book-side-size` | Component size | `32px` |
| `$duration` | `--progression-book-side-duration` | Animation duration | `7s` |

<style lang="scss">
@use "../src/components/atoms/progression-book-side";
</style>
