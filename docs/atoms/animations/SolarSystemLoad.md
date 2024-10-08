# Solar System Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Loading</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/animations/SolarSystemLoad" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/animations/SolarSystemLoad" with (
    $central-color: theme.$secondary-color,
    $satellite-color: theme.$primary-color,
    $central-color--dark: theme.$secondary-color,
    $satellite-color--dark: theme.$primary-color,
);
```

## Default

::: raw
<div class="dev-section">
    <div class="solar-system-load">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>
:::

::: code-group
```html
<div class="solar-system-load">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
```
:::

## Component CSS

<<< @/../src/atoms/animations/SolarSystemLoad.scss


## SCSS variables

| Variable           | Description                                    | Accepted Values | Default                  |
|:-------------------|:-----------------------------------------------|:----------------|:-------------------------|
| `$color`           | :x: MAIN color                                 | `color`         | `#000`                   |
| `$central-color`   | :first_quarter_moon_with_face: Center color    | `color`         | `same as {$color}`       |
| `$satellite-color` | :first_quarter_moon_with_face: Satellite color | `color`         | `complement of {$color}` |
| `$size`            | Size                                           | `size`          | `24px`                   |
| `$duration`        | Animation duration (NO CSS var)                | `time`          | `1s`                     |
| `$multiplier`      | Speed and distance loop multipler (NO CSS var) | `number`        | `1`                      |
| `$number`          | For optimization purposes (NO CSS var)         | `number`        | `4`                      |


<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/animations/SolarSystemLoad" with (
   $css-ui-root-prefix: theme.$css-ui-root-prefix
);
</style>