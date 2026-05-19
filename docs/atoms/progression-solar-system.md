# Solar System Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Loading</Badge>

## Use

```scss
@use "@guebbit/css-ui/atoms/progression-solar-system";
```



## Default

::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/SolarSystemLoad-default.html -->
</div>
:::

::: code-group
```html
<div class="progression-solar-system">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
```
:::

## Component CSS

::: code-group
<<< @/../src/components/atoms/progression-solar-system/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/progression-solar-system/index.scss [index.scss]
:::


## CSS Custom Properties

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--progression-solar-system-size` | `24px` |


## Classes

| Class | Description |
|:------|:------------|
| `progression-solar-system` | Component root |

## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$size` | `--progression-solar-system-size` | Component size | `24px` |
| `$duration` | `--progression-solar-system-duration` | Animation duration | `1s` |
| `$multiplier` | `--progression-solar-system-multiplier` | Multiplier | `1` |
| `$number` | `--progression-solar-system-number` | Number | `4` |

<style lang="scss">
@use "../src/components/atoms/progression-solar-system";
</style>
