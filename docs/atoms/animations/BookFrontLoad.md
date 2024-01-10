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

::: code-group
```html
<div class="book-front-load">
    <span></span>
    <span></span>
    <span></span>
</div>
```
<<< @/../components/atoms/animations/BookFrontLoad.scss
:::

## SCSS variables

| Variable      | Description                            | Accepted Values | Default                |
|:--------------|:---------------------------------------|:----------------|:-----------------------|
| `$color`      | Main color (NO CSS var)                | `color`         | `#000`                 |
| `$border`     | Border color                           | `color`         | `same as {$color}`     |
| `$background` | Page color                             | `color`         | `contrast of {$color}` |
| `$shadow`     | Shadow of folding page                 | `color`         | `#000`                 |
| `$size`       | Size                                   | `size`          | `100px`                |
| `$duration`   | Animation duration (NO CSS var)        | `time`          | `1s`                   |
| `$multiplier` | Loop multiplier (NO CSS var)           | `number`        | `1.2`                  |
| `$number`     | For optimization purposes (NO CSS var) | `number`        | `3`                    |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/BookFrontLoad" as * with (
    $border: theme.$primary-color,
    $background: #fff,
);
</style>