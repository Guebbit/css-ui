# Effect Mirror Reflection
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Effect</Badge>

::: warning
position:relative; needed
<br />
overflow:hidden; needed
:::

## Code

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/animations/EffectMirrorReflection.html -->
</div>

::: code-group
<<< @/public/components-html/atoms/animations/EffectMirrorReflection.html
<<< @/../components/atoms/animations/EffectMirrorReflection.scss
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

## SCSS variables

| Variable                                        | Description                | Accepted Values | Default                         |
|:------------------------------------------------|:---------------------------|:----------------|:--------------------------------|
| `$effect-mirror-reflection-color`               | Main color                 | `color`         | `#fff`                          |
| `$effect-mirror-reflection-color-1`             | Reflex color               | `color`         | `same as *-color`               |
| `$effect-mirror-reflection-color-2`             | Reflex color               | `color`         | `rgba 0.5 of *-color`           |
| `$effect-mirror-reflection-duration`            | Duration of animation      | `time`          | `0.2s`                          |
| `$effect-mirror-reflection-opacity`             | Opacity of element         | `percentage`    | `0.1 `                          |
| `$effect-mirror-reflection-rotation`            | Rotation of element        | `degrees`       | `35deg`                         |
| `$effect-mirror-reflection-position-top`        | Position of element        | `size`          | `-90%`                          |
| `$effect-mirror-reflection-active-opacity`      | ACTIVE opacity of element  | `percentage`    | `0.2`                           |
| `$effect-mirror-reflection-active-rotation`     | ACTIVE Rotation of element | `degrees`       | `10deg` (`25deg` for verticals) |
| `$effect-mirror-reflection-active-position-top` | ACTIVE Position of element | `size`          | `-40%`                          |

<style lang="scss">
@import "docs/theme.scss";

@import "components/atoms/animations/EffectMirrorReflection.scss";
</style>
