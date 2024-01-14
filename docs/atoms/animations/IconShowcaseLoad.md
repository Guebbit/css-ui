# Icon Showcase Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

## Code

::: raw
<div class="dev-section">
    <div class="icon-showcase-load">
        <div>A</div>
        <img alt="" src="https://placekitten.com/50/50" />
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </div>
</div>
:::

```html
<div class="icon-showcase-load">
    <div>A</div>
    <img alt="" src="https://placekitten.com/50/50" />
    <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
</div>
```


## Component CSS

<<< @/../components/atoms/animations/IconShowcaseLoad.scss

## Documentation CSS

```scss
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/IconShowcaseLoad.scss" as * with (
    $color: theme.$primary-color,
    $background: theme.$background-color--light,
    $background--dark: theme.$background-color--dark,
    $size: 8em,
);
```

## SCSS variables

| Variable             | Description                                     | Accepted Values | Default                |
|:---------------------|:------------------------------------------------|:----------------|:-----------------------|
| `$color`             | :first_quarter_moon_with_face: Color of text    | `color`         | `#fff`                 |
| `$border`            | :first_quarter_moon_with_face: Color of border  | `color`         | `same as {$color}`     |
| `$border-progress`   | :first_quarter_moon_with_face: Slice of border  | `color`         | `same as {$color}`     |
| `$background`        | :first_quarter_moon_with_face: Background color | `size`          | `contrast of {$color}` |
| `$size`              | Size                                            | `size`          | `4em`                  |
| `$duration`          | :zap: Duration of animation                     | `time`          | `4s`                   |
| `$item-number`       | :zap: For optimization purposes                 | `number`        | `3`                    |


<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/IconShowcaseLoad.scss" as * with (
    $color: theme.$primary-color,
    $background: theme.$background-color--light,
    $background--dark: theme.$background-color--dark,
    $size: 8em,
);
</style>