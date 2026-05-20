# Animation Rotating Squares
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

## Use

```scss
@use "@guebbit/css-ui/atoms/animation-rotating-squares";
```



## Rotating Squares

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/RotatingSquares-rotating-squares.html -->
</div>
:::

```html
<div class="animation-rotating-squares use-brand">
    <div></div>
    <div></div>
</div>
```

The inner square fill defaults to `--background` (page canvas). Keep using `.use-*`
roles for border/text color, and optionally point the fill to surface tokens:

```html
<div class="use-surface">
  <div
    class="animation-rotating-squares use-brand"
    style="--animation-rotating-squares-background: var(--surface)"
  >
    <div></div>
    <div></div>
  </div>
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
| `--animation-rotating-squares-duration` | `2s` |
| `--animation-rotating-squares-size` | `200px` |
| `--animation-rotating-squares-border-size` | `5px` |
| `--animation-rotating-squares-background` | `var(--background)` |
| `--animation-rotating-squares-background-opacity` | `1` |


## Classes

| Class | Description |
|:------|:------------|
| `animation-rotating-squares` | Component root |

## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$size` | `--animation-rotating-squares-size` | Component size | `200px` |
| `$border-size` | `--animation-rotating-squares-border-size` | Border size | `5px` |
| `$duration` | `--animation-rotating-squares-duration` | Animation duration | `2s` |

<style lang="scss">
@use "../src/components/atoms/animation-rotating-squares";
</style>
