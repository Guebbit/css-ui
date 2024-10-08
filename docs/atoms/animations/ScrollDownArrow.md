# Scroll Down Arrow
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">scroll</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/animations/ScrollDownArrow" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/animations/ScrollDownArrow" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
```

## Default

::: raw
<div class="dev-section">
    <div class="scroll-down-arrow">
        <div></div>
        <div></div>
        <div></div>
        <span class="scroll-down-text">Scroll down</span>
    </div>
    <div class="scroll-down-arrow animate-active">
        <div></div>
        <div></div>
        <div></div>
        <span class="scroll-down-text">Scroll down</span>
    </div>
</div>
:::

```html
<div class="scroll-down-arrow">
    <div></div>
    <div></div>
    <div></div>
    <span class="scroll-down-text">Scroll down</span>
</div>
<div class="scroll-down-arrow animate-active">
    <div></div>
    <div></div>
    <div></div>
    <span class="scroll-down-text">Scroll down</span>
</div>
```

## Component CSS

<<< @/../src/atoms/animations/ScrollDownArrow.scss

## Documentation CSS

```scss
@use "../../theme" as theme;
@use "../src/atoms/animations/ScrollDownArrow" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color
);
```

## Classes

| Class                | Description                                 |
|:---------------------|:--------------------------------------------|
| `animate-active`     | Animation active                            |
| `animate-on-active`  | Animation active on .active                 |
| `animate-on-hover`   | Animation active on hover                   |


## SCSS variables

| Variable              | Description                                | Accepted Values | Default         |
|:----------------------|:-------------------------------------------|:----------------|:----------------|
| `$color`              | :zap: :first_quarter_moon_with_face: Color | `color`         | `#000` / `#fff` |
| `$size`               | Arrow size                                 | `size`          | `2em`           |
| `$animation-duration` | :zap: Animation duration                   | `time`          | `3s`            |
| `$duration`           | Transition duration                        | `time`          | `0.3s`          |


<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/animations/ScrollDownArrow" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
</style>