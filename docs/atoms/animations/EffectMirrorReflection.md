# Effect Mirror Reflection
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Effect</Badge>

::: warning
 - *position:relative;* NEEDED
 - *overflow:hidden;* NEEDED
:::

## Code

::: raw
<div class="dev-section with-restrictions">
    <div class="effect-mirror-reflection-animate-on-hover" style="position:relative; overflow:hidden;">
        <div class="effect-mirror-reflection"></div>
        <img class="card-background" alt="" src="https://placekitten.com/1000/600"/>
    </div>
</div>
:::

::: code-group
```html
<div class="effect-mirror-reflection-animate-on-hover" style="position:relative; overflow:hidden;">
    <div class="effect-mirror-reflection"></div>
    <img class="card-background" alt="" src="https://placekitten.com/1000/600" />
</div>
```
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

| Variable                                        | Description                          | Accepted Values | Default                         |
|:------------------------------------------------|:-------------------------------------|:----------------|:--------------------------------|
| `$effect-mirror-reflection-color`               | Main color                           | `color`         | `#fff`                          |
| `$effect-mirror-reflection-reflection`          | Main color (on `var()` MUST be RGB)  | `color`         | `rgb of {$color}`               |
| `$effect-mirror-reflection-duration`            | Duration of animation                | `time`          | `0.2s`                          |
| `$effect-mirror-reflection-opacity`             | Opacity of element                   | `percentage`    | `0.1 `                          |
| `$effect-mirror-reflection-rotation`            | Rotation of element                  | `degrees`       | `35deg`                         |
| `$effect-mirror-reflection-position-top`        | Position of element                  | `size`          | `-90%`                          |
| `$effect-mirror-reflection-active-opacity`      | ACTIVE opacity of element            | `percentage`    | `0.2`                           |
| `$effect-mirror-reflection-active-rotation`     | ACTIVE Rotation of element           | `degrees`       | `10deg` (`25deg` for verticals) |
| `$effect-mirror-reflection-active-position-top` | ACTIVE Position of element           | `size`          | `-40%`                          |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/EffectMirrorReflection.scss" as * with (
    $effect-mirror-reflection-color: theme.$primary-color,
);
</style>
