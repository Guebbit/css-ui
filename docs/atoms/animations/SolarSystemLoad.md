# Solar System Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Loading</Badge>

## Use

```scss
@use "@guebbit/css-ui/atoms/animation-solar-system-load";
```



## Default

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/animations/SolarSystemLoad-default.html -->
</div>
:::

::: code-group
```html
<div class="solar-system-load">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
```
:::

## Component CSS

::: code-group
<<< @/../src/components/atoms/animation-solar-system-load/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/animation-solar-system-load/index.scss [index.scss]
:::


## CSS Custom Properties

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--solar-system-load-size` | `24px` |


## Classes

| Class | Description |
|:------|:------------|
| `solar-system-load` | Component root |

## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$size` | `--solar-system-load-size` | Component size | `24px` |
| `$duration` | `--solar-system-load-duration` | Animation duration | `1s` |
| `$multiplier` | `--solar-system-load-multiplier` | Multiplier | `1` |
| `$number` | `--solar-system-load-number` | Number | `4` |

<style lang="scss">
@use "../src/components/atoms/animation-solar-system-load";
</style>
