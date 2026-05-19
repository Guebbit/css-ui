# Progression Book Front
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

## Use

```scss
@use "@guebbit/css-ui/atoms/progression-book-front";
```



## Default

::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/BookFrontLoad-default.html -->
</div>
:::

```html
<div class="progression-book-front">
    <span></span>
    <span></span>
    <span></span>
</div>
```

## Component CSS

::: code-group
<<< @/../src/components/atoms/progression-book-front/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/progression-book-front/index.scss [index.scss]
:::

## CSS Custom Properties

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--progression-book-front-size` | `100px` |
| `--progression-book-front-duration` | `1s` |


## Classes

| Class | Description |
|:------|:------------|
| `progression-book-front` | Component root |

## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$size` | `--progression-book-front-size` | Component size | `100px` |
| `$duration` | `--progression-book-front-duration` | Animation duration | `1s` |

<style lang="scss">
@use "../src/components/atoms/progression-book-front";
</style>
