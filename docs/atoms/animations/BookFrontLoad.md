# Book Front Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

## Code

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

<<< @/../components/atoms/animations/BookFrontLoad.scss

## Documentation CSS

```scss
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/BookFrontLoad" as * with (
    $color: theme.$primary-color,
    $background: #fff,
    $background--dark: #fff,
);
```

## SCSS variables

| Variable      | Description                                           | Accepted Values | Default                |
|:--------------|:------------------------------------------------------|:----------------|:-----------------------|
| `$color`      | :x: Main color                                        | `color`         | `#000` / `#fff`        |
| `$border`     | :first_quarter_moon_with_face: Border color           | `color`         | `same as {$color}`     |
| `$background` | :first_quarter_moon_with_face: Page color             | `color`         | `contrast of {$color}` |
| `$shadow`     | :first_quarter_moon_with_face: Shadow of folding page | `color`         | `#000`                 |
| `$size`       | Size                                                  | `size`          | `100px`                |
| `$duration`   | :x: Animation duration                                | `time`          | `1s`                   |
| `$multiplier` | :x: Loop multiplier                                   | `number`        | `1.2`                  |
| `$number`     | :x: For optimization purposes                         | `number`        | `3`                    |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/BookFrontLoad" as * with (
    $color: theme.$primary-color,
    $background: #fff,
    $background--dark: #fff,
);
</style>