# Progression Gear
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Loading</Badge>

## Use

```scss
@use "@guebbit/css-ui/atoms/progression-gear";
```



## Default

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/progression-gear-default.html -->
</div>
:::

```html
<div class="progression-gear animate-on-hover use-brand"></div>
<div class="progression-gear animate-active use-brand"></div>
```


## Component CSS

::: code-group
<<< @/../src/components/atoms/progression-gear/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/progression-gear/index.scss [index.scss]
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
| `--progression-gear-size` | `48px` |
| `--progression-gear-duration` | `4s` |


## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$size` | `--progression-gear-size` | Component size | `48px` |
| `$duration` | `--progression-gear-duration` | Animation duration | `4s` |

<style lang="scss">
@use "../src/components/atoms/progression-gear";
</style>
