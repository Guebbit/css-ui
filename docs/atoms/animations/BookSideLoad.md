# Book Side Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

::: danger
Can't change $book-side-load-size, must be 32px, need to be fixed
:::

## Code

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/animations/BookSideLoad.html -->
</div>
:::

::: code-group
<<< @/public/components-html/atoms/animations/BookSideLoad.html
<<< @/../components/atoms/animations/BookSideLoad.scss
:::

## Classes

| Class                                        | Description                            |
|:---------------------------------------------|:---------------------------------------|
| `animate-active`                             | Animation active                       |

## SCSS variables

| Variable                     | Description                            | Accepted Values | Default |
|:-----------------------------|:---------------------------------------|:----------------|:--------|
| `$book-side-load-color`      | Main color                             | `color`         | `#000`  |
| `$book-side-load-size`       | Page color                             | `time`          | `32px`  |
| `$book-side-load-duration`   | Animation speed                        | `time`          | `7s`    |
| `$book-side-load-multiplier` | Loop multiplier (NO CSS var)           | `number`        | `1.2`   |
| `$book-side-load-number`     | For optimization purposes (NO CSS var) | `number`        | `18`    |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/BookSideLoad.scss" as * with (
    $book-side-load-color: theme.$primary-color,
);
</style>