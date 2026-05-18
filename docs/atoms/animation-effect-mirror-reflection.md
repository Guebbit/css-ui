# Effect Mirror Reflection
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Effect</Badge>

::: warning
 - *position:relative;* NEEDED
 - *overflow:hidden;* NEEDED
:::

## Use

```scss
@use "@guebbit/css-ui/atoms/animation-effect-mirror-reflection";
```



## Default

::: raw
<!--@include: ../examples/atoms/animations/EffectMirrorReflection-default.html -->
:::

```html
<div class="effect-mirror-reflection-animate-on-hover" style="position:relative; overflow:hidden;">
    <div class="effect-mirror-reflection"></div>
    <img class="card-background" alt="" src="https://placedog.net/1000/600" />
</div>
```


## Component CSS

::: code-group
<<< @/../src/components/atoms/animation-effect-mirror-reflection/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/animation-effect-mirror-reflection/index.scss [index.scss]
:::


## Classes

| Class                                        | Description                            |
|:---------------------------------------------|:---------------------------------------|
| `animate-active`                             | Animation active                       |
| `animate-on-active`                          | Animation active on .active            |
| `animate-on-hover`                           | Animation active on hover              |
| `effect-mirror-reflection-animate-active`    | *EXTERNAL* animation active            |
| `effect-mirror-reflection-animate-on-active` | *EXTERNAL* animation active on .active |
| `effect-mirror-reflection-animate-on-hover`  | *EXTERNAL* animation active on hover   |

## CSS Custom Properties

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--effect-mirror-reflection-duration` | `0.3s` |
| `--effect-mirror-reflection-opacity` | `0.2` |
| `--effect-mirror-reflection-rotation` | `35deg` |
| `--effect-mirror-reflection-position-top` | `-70%` |
| `--effect-mirror-reflection-active-opacity` | `0.2` |
| `--effect-mirror-reflection-active-rotation` | `10deg` |
| `--effect-mirror-reflection-active-position-top` | `-40%` |


## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$opacity` | `--effect-mirror-reflection-opacity` | Opacity | `0.2` |
| `$rotation` | `--effect-mirror-reflection-rotation` | Rotation | `35deg` |
| `$position-top` | `--effect-mirror-reflection-position-top` | Position top | `-70%` |
| `$active-opacity` | `--effect-mirror-reflection-active-opacity` | Active opacity | `0.2` |
| `$active-rotation` | `--effect-mirror-reflection-active-rotation` | Active rotation | `10deg` |
| `$active-position-top` | `--effect-mirror-reflection-active-position-top` | Active position top | `-40%` |

<style lang="scss">
@use "../src/components/atoms/animation-effect-mirror-reflection";
</style>
