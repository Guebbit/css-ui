# Rotating Squares
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

## Use

```scss
@use "@guebbit/css-ui/atoms/animation-rotating-squares";
```



## Rotating Squares

::: raw
<div class="dev-section">
<!--@include: ../../../examples/atoms/animations/RotatingSquares-rotating-squares.html -->
</div>
:::

```html
<div class="rotating-squares rotating-squares">
    <div></div>
    <div></div>
</div>
```

# Commons

::: code-group
<<< @/../src/components/atoms/animation-rotating-squares/index.scss
:::

## CSS Custom Properties

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--rotating-squares-duration` | `2s` |
| `--rotating-squares-size` | `200px` |
| `--rotating-squares-border-size` | `5px` |


## Classes

| Class | Description |
|:------|:------------|
| `rotating-squares` | Component root |

## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$size` | `--rotating-squares-size` | Component size | `200px` |
| `$border-size` | `--rotating-squares-border-size` | Border size | `5px` |
| `$duration` | `--rotating-squares-duration` | Animation duration | `2s` |

<style lang="scss">
@use "../src/components/atoms/animation-rotating-squares";
</style>
