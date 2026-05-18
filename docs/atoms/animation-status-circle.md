# Status Circle
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge>

## Use

```scss
@use "@guebbit/css-ui/atoms/animation-status-circle";
```



## Default

::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/animation-status-circle-default.html -->
</div>
:::

```html [html]
<span class="status-circle animate-on-hover"></span>
<span class="status-circle animate-active"></span>
```

## Component CSS

::: code-group
<<< @/../src/components/atoms/animation-status-circle/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/animation-status-circle/index.scss [index.scss]
:::


## Classes

| Class               | Description                  |
|:--------------------|:-----------------------------|
| `animate-active`    | Pulsing animation            |
| `animate-on-active` | Pulsing animation on .active |
| `animate-on-hover`  | Pulsing animation on hover   | 

## CSS Custom Properties

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--status-circle-duration` | `1s` |
| `--status-circle-opacity` | `0.5` |


## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$duration` | `--status-circle-duration` | Animation duration | `1s` |
| `$opacity` | `--status-circle-opacity` | Opacity | `0.5` |

<style lang="scss">
@use "../src/components/atoms/animation-status-circle";
</style>
