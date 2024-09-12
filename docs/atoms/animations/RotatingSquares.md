# Rotating Squares
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/animations/RotatingSquares" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/animations/RotatingSquares" with (
    $color: theme.$primary-color,
    $background--light: theme.$background-color--light,
    $background--dark: theme.$background-color--dark
);
```

## Rotating Squares

::: raw
<div class="dev-section">
    <div class="rotating-squares rotating-squares">
        <div></div>
        <div></div>
    </div>
</div>
:::

```html
<div class="rotating-squares rotating-squares">
    <div></div>
    <div></div>
</div>
```

# Commons

::: code-group
<<< @/../src/atoms/animations/RotatingSquares.scss
:::

## SCSS variables

| Variable                | Description                                                                    | Accepted Values | Default                             |
|:------------------------|:-------------------------------------------------------------------------------|:----------------|:------------------------------------|
| `$color`                | :x: Main color (on `var()` MUST be RGB)                                        | `color`         | `0,0,0` / `255,255,255`             |
| `$secondary`            | :first_quarter_moon_with_face: Secondary color                                 | `color`         | `#000`                              |
| `$background`           | :first_quarter_moon_with_face: Background of body (transparency not available) | `color`         | `#fff`                              |
| `$size`                 | Main size                                                                      | `size`          | `200px`                             |
| `$border-size`          | Border size                                                                    | `size`          | `5px`                               |
| `$duration`             | Animation duration                                                             | `time`          | `2s`                                |


<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/animations/RotatingSquares" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix,
);
</style>