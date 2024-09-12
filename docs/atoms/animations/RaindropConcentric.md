# Raindrop Concentric
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/animations/RaindropConcentric" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/animations/RaindropConcentric" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
```

## Default

::: raw
<div class="dev-section" style="height: 500px">
    <div class="raindrop-concentric animate-active">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>
:::

```html
<div class="raindrop-concentric animate-active">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
```

## Component CSS

<<< @/../src/atoms/animations/RaindropConcentric.scss

## Classes

| Class            | Description                                          |
|:-----------------|:-----------------------------------------------------|
| `animate-active` | Animation active (needed for programmatic activation |
| `animate-once`   | Animation count becomes 1                            |

## SCSS variables

| Variable        | Description                                         | Accepted Values | Default            |
|:----------------|:----------------------------------------------------|:----------------|:-------------------|
| `$color`        | :first_quarter_moon_with_face: Primary color        | `color`         | `#000` / `#fff`    |
| `$active-color` | :first_quarter_moon_with_face: Color transformation | `color`         | `same as {$color}` |
| `$size`         | Main size                                           | `size`          | `150px`            |
| `$border-size`  | Border size                                         | `size`          | `10px`             |
| `$duration`     | Duration of animation (speed)                       | `time`          | `15s`              |
| `$number`       | For optimization purposes (NO CSS var)              | `number`        | `4`                | 

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/animations/RaindropConcentric" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
</style>