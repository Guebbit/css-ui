# Rotating Squares
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/rotating-squares";
```



## Rotating Squares

::: raw
    <div class="dev-section">
<!--@include: ../../examples/atoms/animations/RotatingSquares-rotating-squares.html -->
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
<<< @/../src/atoms/animations/rotating-squares/index.scss
:::

## CSS Custom Properties

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--rotating-squares-duration` | `2s` |
| `--rotating-squares-size` | `200px` |
| `--rotating-squares-border-size` | `5px` |


<style lang="scss">
@use "../src/atoms/animations/rotating-squares";
</style>
