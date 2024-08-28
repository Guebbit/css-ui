# Icon Showcase Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/animations/IconShowcaseLoad" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix,
    $size: 8em,
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/animations/IconShowcaseLoad" with (
    $color: theme.$primary-color,
    $background: theme.$background-color--light,
    $background--dark: theme.$background-color--dark,
    $size: 8em,
);
```

## Default

::: raw
<div class="dev-section">
    <div class="icon-showcase-load">
        <div>A</div>
        <img alt="" src="https://placedog.net/50/50" />
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </div>
</div>
:::

```html
<div class="icon-showcase-load">
    <div>A</div>
    <img alt="" src="https://placedog.net/50/50" />
    <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
</div>
```


## Component CSS

<<< @/../src/atoms/animations/IconShowcaseLoad.scss

## SCSS variables

| Variable           | Description                                                                    | Accepted Values | Default                |
|:-------------------|:-------------------------------------------------------------------------------|:----------------|:-----------------------|
| `$color`           | :first_quarter_moon_with_face: Color of text                                   | `color`         | `#fff`                 |
| `$border-color`    | :first_quarter_moon_with_face: Color of border                                 | `color`         | `same as {$color}`     |
| `$border-progress` | :first_quarter_moon_with_face: Slice of border                                 | `color`         | `same as {$color}`     |
| `$background`      | :first_quarter_moon_with_face: Background color (transparency not available)   | `size`          | `contrast of {$color}` |
| `$size`            | Size                                                                           | `size`          | `4em`                  |
| `$duration`        | :zap: Duration of animation                                                    | `time`          | `4s`                   |
| `$item-number`     | :zap: For optimization purposes                                                | `number`        | `3`                    |


<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/animations/IconShowcaseLoad" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix, 
    $size: 8em,
);
</style>