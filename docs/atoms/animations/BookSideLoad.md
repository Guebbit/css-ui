# Book Side Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

::: danger
Can't change $book-side-load-size, must be 32px, need to be fixed
:::

## Code

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/animations/BookSideLoad.html -->
</div>

::: code-group
<<< @/public/components-html/atoms/animations/BookSideLoad.html
<<< @/../components/atoms/animations/BookSideLoad.scss
:::

## SCSS variables

| Variable                   | Description     | Accepted Values | Default |
|:---------------------------|:----------------|:----------------|:--------|
| `$book-side-load-color`    | Main color      | `color`         | `#000`  |
| `$book-side-load-size`     | Page color      | `time`          | `32px`  |
| `$book-side-load-duration` | Animation speed | `time`          | `7s`    |

<style lang="scss">
@import "../../theme.scss";

$book-side-load-color: $primary-color;

@import "components/atoms/animations/BookSideLoad.scss";
</style>