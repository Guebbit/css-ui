# Effect Mirror Reflection
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Effect</Badge>

::: warning
 - *position:relative;* NEEDED
 - *overflow:hidden;* NEEDED
:::

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
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

<<< @/../src/atoms/animations/EffectMirrorReflection.scss

## Documentation CSS

```scss
@use "../../theme" as theme;
@use "../src/atoms/animations/EffectMirrorReflection" with (
    $color: theme.$primary-color,
);
```


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

| Variable               | Description                                                              | Accepted Values | Default               |
|:-----------------------|:-------------------------------------------------------------------------|:----------------|:----------------------|
| `$color`               | :zap: :first_quarter_moon_with_face: Main color (on `var()` MUST be RGB) | `color`         | `rgb of {$color}`     |
| `$duration`            | Duration of animation                                                    | `time`          | `0.3s`                |
| `$opacity`             | :zap: Opacity of element                                                 | `percentage`    | `0.1 `                |
| `$rotation`            | :zap: Rotation of element                                                | `degrees`       | `35deg`               |
| `$position-top`        | :zap: Position of element                                                | `size`          | `-70%`, `-40%`(:zap:) |

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/animations/EffectMirrorReflection" with (
    $color: theme.$primary-color,
);
</style>
