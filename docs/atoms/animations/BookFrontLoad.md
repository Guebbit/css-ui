# Book Front Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/animations/BookFrontLoad" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/animations/BookFrontLoad" with (
    $background: theme.$primary-color,
    $border-color: theme.$secondary-color,
    $background--dark: theme.$primary-color--dark,
    $border-color--dark: theme.$secondary-color--dark,
);
```

## Default

::: raw
<div class="dev-section">
    <div class="book-front-load">
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>
:::

```html
<div class="book-front-load">
    <span></span>
    <span></span>
    <span></span>
</div>
```

## Component CSS

<<< @/../src/atoms/animations/BookFrontLoad.scss

## SCSS variables

| Variable        | Description                                           | Accepted Values | Default                |
|:----------------|:------------------------------------------------------|:----------------|:-----------------------|
| `$color`        | :x: Main color                                        | `color`         | `#000` / `#fff`        |
| `$border-color` | :first_quarter_moon_with_face: Border color           | `color`         | `same as {$color}`     |
| `$background`   | :first_quarter_moon_with_face: Page color             | `color`         | `contrast of {$color}` |
| `$shadow`       | :first_quarter_moon_with_face: Shadow of folding page | `color`         | `#000`                 |
| `$size`         | Size                                                  | `size`          | `100px`                |
| `$duration`     | :x: Animation duration                                | `time`          | `1s`                   |
| `$multiplier`   | :x: Loop multiplier                                   | `number`        | `1.2`                  |
| `$number`       | :x: For optimization purposes                         | `number`        | `3`                    |

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/animations/BookFrontLoad" with (
    $background: theme.$primary-color,
    $border-color: theme.$secondary-color,
    $background--dark: theme.$primary-color--dark,
    $border-color--dark: theme.$secondary-color--dark,
);
</style>