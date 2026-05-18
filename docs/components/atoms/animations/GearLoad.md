# Gear Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Loading</Badge>

## Use

```scss
@use "@guebbit/css-ui/atoms/animation-gear-load";
```



## Default

::: raw
<div class="dev-section">
<!--@include: ../../../examples/atoms/animations/GearLoad-default.html -->
</div>
:::

```html
<div class="gear-load animate-on-hover"></div>
<div class="gear-load animate-active"></div>
```


## Component CSS

::: code-group
<<< @/../src/components/atoms/animation-gear-load/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/animation-gear-load/index.scss [index.scss]
:::


## Classes

| Class                   | Description                    |
|:------------------------|:-------------------------------|
| `animate-active`        | Animation active               |
| `animate-on-active`     | Animation active on .active    |
| `animate-on-hover`      | Animation active on hover      |


## CSS Custom Properties

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--gear-load-size` | `48px` |
| `--gear-load-duration` | `4s` |


## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$size` | `--gear-load-size` | Component size | `48px` |
| `$duration` | `--gear-load-duration` | Animation duration | `4s` |

<style lang="scss">
@use "../src/components/atoms/animation-gear-load";
</style>
