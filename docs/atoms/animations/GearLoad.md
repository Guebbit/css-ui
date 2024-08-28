# Gear Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Loading</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/animations/GearLoad" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/animations/GearLoad" with (
    $first-gear: theme.$primary-color,
    $second-gear: theme.$secondary-color,
    $background: theme.$background-color--light,
    $first-gear--dark: theme.$primary-color,
    $second-gear--dark: theme.$secondary-color,
    $background--dark: theme.$background-color--dark,
);
```

## Default

<div class="dev-section">
    <div class="gear-load animate-on-hover"></div>
    <div class="gear-load animate-active"></div>
</div>

```html
<div class="gear-load animate-on-hover"></div>
<div class="gear-load animate-active"></div>
```


## Component CSS

<<< @/../src/atoms/animations/GearLoad.scss


## Classes

| Class                   | Description                    |
|:------------------------|:-------------------------------|
| `animate-active`        | Animation active               |
| `animate-on-active`     | Animation active on .active    |
| `animate-on-hover`      | Animation active on hover      |


## SCSS variables

| Variable        | Description                                                      | Accepted Values | Default         |
|:----------------|:-----------------------------------------------------------------|:----------------|:----------------|
| `$color`        | :x: Main color                                                   | `color          | `#000` / `#fff` |
| `$first-gear`   | :first_quarter_moon_with_face: First gear color                  | `color`         | `#000`          |
| `$second-gear`  | :first_quarter_moon_with_face: Second gear color                 | `color`         | `#fff`          |
| `$background`   | :first_quarter_moon_with_face: Background (center of gear) color | `color`         | `#fff`          |
| `$size`         | Load size                                                        | `time`          | `4s`            |
| `$duration`     | Animation duration                                               | `time`          | `4s`            |


<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/animations/GearLoad" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
</style>