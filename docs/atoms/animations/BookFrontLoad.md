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

| Variable                       | Description                            | Accepted Values | Default |
|:-------------------------------|:---------------------------------------|:----------------|:--------|
| `$book-front-load-background`  | Page color                             | `color`         | `#fff`  |
| `$book-front-load-border`      | Border color                           | `color`         | `#000`  |
| `$book-front-load-shadow`      | Shadow of folding page                 | `color`         | `#000`  |
| `$book-front-load-size`        | Size                                   | `size`          | `100px` |
| `$book-front-load-duration`    | Animation duration (NO CSS var)        | `time`          | `1s`    |
| `$book-front-load-multiplier`  | Loop multiplier (NO CSS var)           | `number`        | `1.2`   |
| `$book-front-load-number`      | For optimization purposes (NO CSS var) | `number`        | `3`     |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/BookFrontLoad" as * with (
    $book-front-load-border: theme.$primary-color,
);
</style>