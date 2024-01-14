# Gear Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Loading</Badge>

## Code

<div class="dev-section">
    <div class="gear-load animate-on-hover"></div>
    <div class="gear-load animate-active"></div>
</div>

```html
<div class="gear-load animate-on-hover"></div>
<div class="gear-load animate-active"></div>
```


## Component CSS

<<< @/../components/atoms/animations/GearLoad.scss

## Documentation CSS

```scss
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/GearLoad.scss" as * with (
    $first-color: theme.$primary-color,
    $second-color: theme.$secondary-color,
    $background: theme.$background-color--light,
    $first-color--dark: theme.$primary-color,
    $second-color--dark: theme.$secondary-color,
    $background--dark: theme.$background-color--dark,
);
```


## Classes

| Class                   | Description                    |
|:------------------------|:-------------------------------|
| `animate-active`        | Animation active               |
| `animate-on-active`     | Animation active on .active    |
| `animate-on-hover`      | Animation active on hover      |


## SCSS variables

| Variable           | Description                                                      | Accepted Values | Default |
|:-------------------|:-----------------------------------------------------------------|:----------------|:--------|
| `$color`           | :x: Gear's color                                                 | `color`         | `#000`  |
| `$first-color`     | :first_quarter_moon_with_face: First gear color                  | `color`         | `#000`  |
| `$second-color`    | :first_quarter_moon_with_face: Second gear color                 | `color`         | `#fff`  |
| `$background`      | :first_quarter_moon_with_face: Background (center of gear) color | `color`         | `#fff`  |
| `$size`            | Load size                                                        | `time`          | `4s`    |
| `$duration`        | Animation duration                                               | `time`          | `4s`    |


<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/GearLoad.scss" as * with (
    $first-color: theme.$primary-color,
    $second-color: theme.$secondary-color,
    $background: theme.$background-color--light,
    $first-color--dark: theme.$primary-color,
    $second-color--dark: theme.$secondary-color,
    $background--dark: theme.$background-color--dark,
);
</style>