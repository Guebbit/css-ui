# Effect Color Popup
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Effect</Badge>

::: warning
- *position:relative;* NEEDED
- *overflow:hidden;* NEEDED
:::

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/animations/EffectColorPopup" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/animations/EffectColorPopup" with (
    $color: theme.$primary-color,
);
```

## Default

::: raw
<div class="dev-section with-restrictions">
    <div class="effect-color-popup-animate-on-hover" style="position:relative; overflow:hidden;">
        <div class="effect-color-popup"></div>
        <img alt="" src="https://placedog.net/1000/600" style="opacity: 0.5"/>
    </div>
</div>
:::

```html
<div class="effect-color-popup-animate-on-hover" style="position:relative; overflow:hidden;">
    <div class="effect-color-popup"></div>
    <img alt="" src="https://placedog.net/1000/600" style="opacity: 0.5"/>
</div>
```

## Buttons
::: tip INCLUDED here
- [SimpleButton](/atoms/buttons/SimpleButton.md)
:::


::: raw
<div class="dev-section">
    <div class="simple-button button-transparent effect-color-popup-animate-on-hover animate-on-hover button-xs" style="overflow:hidden;">
        <div class="effect-color-popup"></div>
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        EXTRA SMALL
    </div>
    <div class="simple-button button-transparent effect-color-popup-animate-on-hover animate-on-hover button-xl" style="overflow:hidden;">
        <div class="effect-color-popup"></div>
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        EXTRA LARGE
    </div>
    <div class="simple-button button-transparent effect-color-popup-animate-on-hover animate-on-hover button-xs button-icon-only" style="overflow:hidden;">
        <div class="effect-color-popup"></div>
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </div>
    <div class="simple-button button-transparent effect-color-popup-animate-on-hover animate-on-hover button-xl button-icon-only" style="overflow:hidden;">
        <div class="effect-color-popup"></div>
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </div>
</div>
:::

```html
<div class="simple-button button-transparent effect-color-popup-animate-on-hover animate-on-hover button-xs" style="overflow:hidden;">
    <div class="effect-color-popup"></div>
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    EXTRA SMALL
</div>
<div class="simple-button button-transparent effect-color-popup-animate-on-hover animate-on-hover button-xl" style="overflow:hidden;">
    <div class="effect-color-popup"></div>
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    EXTRA LARGE
</div>
<div class="simple-button button-transparent effect-color-popup-animate-on-hover animate-on-hover button-xs button-icon-only" style="overflow:hidden;">
    <div class="effect-color-popup"></div>
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
</div>
<div class="simple-button button-transparent effect-color-popup-animate-on-hover animate-on-hover button-xl button-icon-only" style="overflow:hidden;">
    <div class="effect-color-popup"></div>
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
</div>
```

## Component CSS

<<< @/../src/atoms/animations/EffectColorPopup.scss


## Classes

| Class                                    | Description                            |
|:-----------------------------------------|:---------------------------------------|
| `animate-active`                         | Animation active                       |
| `animate-on-active`                      | Animation active on .active            |
| `animate-on-hover`                       | Animation active on hover              |
| `effect-color-popup-animate-active`      | *EXTERNAL* animation active            |
| `effect-color-popup-animate-on-active`   | *EXTERNAL* animation active on .active |
| `effect-color-popup-animate-on-hover`    | *EXTERNAL* animation active on hover   |

## SCSS variables

| Variable               | Description                                                              | Accepted Values | Default               |
|:-----------------------|:-------------------------------------------------------------------------|:----------------|:----------------------|
| `$color`               | :zap: :first_quarter_moon_with_face: Main color (on `var()` MUST be RGB) | `color`         | `rgb of {$color}`     |
| `$duration`            | Duration of animation                                                    | `time`          | `0.3s`                |
| `$opacity`             | :zap: Opacity of element                                                 | `percentage`    | `0.1 `                |

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/buttons/SimpleButton";
@use "../src/atoms/animations/EffectColorPopup" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
</style>
