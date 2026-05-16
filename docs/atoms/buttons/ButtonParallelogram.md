# Button Parallelogram
<Badge type="tip">Atom</Badge> <Badge type="info">Button</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/buttons/button-parallelogram";
```



## Default

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/buttons/ButtonParallelogram-default.html -->
</div>
:::

::: code-group
```html
<button class="button-parallelogram animate-on-hover">
    Lorem Ipsum
</button>
```
```html [focus]
<button class="button-parallelogram animate-on-hover focus-on-hover">
    Focus
</button>
```
:::

## Component CSS

::: code-group
<<< @/../src/atoms/buttons/button-parallelogram/_architecture.scss [_architecture.scss]
<<< @/../src/atoms/buttons/button-parallelogram/index.scss [index.scss]
:::

## Classes

| Class               | Description                 |
|:--------------------|:----------------------------|
| `animate-active`    | Animation active            |
| `animate-on-active` | Animation active on `.active` |
| `animate-on-hover`  | Animation active on hover   |
| `focus-active`      | Focus side borders active   |
| `focus-on-active`   | Focus side borders on `.active` |
| `focus-on-hover`    | Focus side borders on hover |

## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$tilt` | `--button-parallelogram-tilt` | Default tilt | `10deg` |
| `$active-tilt` | `--button-parallelogram-active-tilt` | Active tilt | `-10deg` |
| `$duration` | `--button-parallelogram-duration` | Animation duration | `0.3s` |
| `$padding` | `--button-parallelogram-padding` | Inner spacing | `8px` |

<style lang="scss">
@use "../src/atoms/buttons/button-parallelogram";
</style>
