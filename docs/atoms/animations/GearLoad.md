# Gear Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Loading</Badge>

## Code

<div class="dev-section">
    <div class="gear-load animate-on-hover"></div>
    <div class="gear-load animate-active"></div>
</div>

::: code-group
```html
<div class="gear-load animate-on-hover"></div>
<div class="gear-load animate-active"></div>
```
<<< @/../components/atoms/animations/GearLoad.scss
:::

## Classes

| Class                   | Description                    |
|:------------------------|:-------------------------------|
| `animate-active`        | Animation active               |
| `animate-on-active`     | Animation active on .active    |
| `animate-on-hover`      | Animation active on hover      |


## SCSS variables

| Variable                   | Description                       | Accepted Values | Default |
|:---------------------------|:----------------------------------|:----------------|:--------|
| `$gear-load-color`         | Gear's color (NO CSS var)         | `color`         | `#000`  |
| `$gear-load-first-color`   | First gear color                  | `color`         | `#000`  |
| `$gear-load-second-color`  | Second gear color                 | `color`         | `#fff`  |
| `$gear-load-background`    | Background (center of gear) color | `color`         | `#fff`  |
| `$gear-load-size`          | Load size                         | `time`          | `4s`    |
| `$gear-load-duration`      | Animation duration                | `time`          | `4s`    |


<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/GearLoad.scss" as * with (
    $gear-load-first-color: theme.$primary-color,
    $gear-load-second-color: theme.$secondary-color,
    $gear-load-background: theme.$background-color
);
</style>