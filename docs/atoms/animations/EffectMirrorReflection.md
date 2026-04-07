# Effect Mirror Reflection
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Effect</Badge>

::: warning
 - *position:relative;* NEEDED
 - *overflow:hidden;* NEEDED
:::

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/effect-mirror-reflection/index";
```

Colors and design tokens are controlled via CSS custom properties:
```html
<div class="effect-mirror-reflection" style="--effect-mirror-reflection-color: #ff6b35;">
```

## Default

::: raw
<div class="dev-section with-restrictions">
    <div class="effect-mirror-reflection-animate-on-hover" style="position:relative; overflow:hidden;">
        <div class="effect-mirror-reflection"></div>
        <img class="card-background" alt="" src="https://placedog.net/1000/600"/>
    </div>
</div>
:::

```html
<div class="effect-mirror-reflection-animate-on-hover" style="position:relative; overflow:hidden;">
    <div class="effect-mirror-reflection"></div>
    <img class="card-background" alt="" src="https://placedog.net/1000/600" />
</div>
```


## Component CSS

<<< @/../src/atoms/animations/effect-mirror-reflection/index.scss


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

| Property                                            | Description                          | Default       |
|:----------------------------------------------------|:-------------------------------------|:--------------|
| `--effect-mirror-reflection-color`                  | Main reflection color                | `primary-500` |
| `--effect-mirror-reflection-active-color`           | Active/hover reflection color        | `primary-600` |
| `--effect-mirror-reflection-duration`               | Duration of animation                | `0.3s`        |
| `--effect-mirror-reflection-opacity`                | Opacity of element                   | `0.1`         |
| `--effect-mirror-reflection-rotation`               | Rotation of element                  | `35deg`       |
| `--effect-mirror-reflection-position-top`           | Position of element                  | `-70%`        |
| `--effect-mirror-reflection-active-opacity`         | Active/hover opacity                 | `0.2`         |
| `--effect-mirror-reflection-active-rotation`        | Active/hover rotation                | `35deg`       |
| `--effect-mirror-reflection-active-position-top`    | Active/hover position                | `-40%`        |

<style lang="scss">
@use "../src/atoms/animations/effect-mirror-reflection/index";
</style>
