# Solar System Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Loading</Badge>

## Code

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

<<< @/../components/atoms/animations/SolarSystemLoad.scss

## Documentation CSS

```scss
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/SolarSystemLoad.scss" as * with (
    $central-color: theme.$secondary-color,
    $satellite-color: theme.$primary-color,
    $central-color--dark: theme.$secondary-color,
    $satellite-color--dark: theme.$primary-color,
);
```

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
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/SolarSystemLoad.scss" as * with (
    $central-color: theme.$secondary-color,
    $satellite-color: theme.$primary-color,
    $central-color--dark: theme.$secondary-color,
    $satellite-color--dark: theme.$primary-color,
);
</style>