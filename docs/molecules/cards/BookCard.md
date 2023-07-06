# Book Card
<Badge type="tip">Atom</Badge> <Badge type="info">Card</Badge>

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/cards/BookCard.html -->
</div>
:::

## Code

::: code-group
<<< @/public/components-html/molecules/cards/BookCard.html
<<< @/../components/molecules/cards/BookCard.scss
:::

## Classes

| Class               | Description             |
|:--------------------|:------------------------|
| `animate-active`    | Skew active             |
| `animate-on-active` | Skew active on .active  |
| `animate-on-hover`  | Skew active on hover    |

## SCSS variables

| Variable                     | Description      | Accepted Values | Default            |
|:-----------------------------|:-----------------|:----------------|:-------------------|
| `$book-card-color`           | Text color       | `color`         | `#000`             |
| `$book-card-rotation-tilt`   | Book tilt value  | `color`         | `3`                |
| `$book-card-spine-width`     | Spine width      | `color`         | `50px`             |
| `$book-card-overlay-color`   | Overlay color    | `color`         | `as {$color}`      |
| `$book-card-overlay-opacity` | Overlay opacity  | `percent`       | `0.5`              |
| `$book-card-overlay`         | Overlay CSS rule | `CSS`           | `background-color` |


<style lang="scss">
@import "docs/theme.scss";

$book-card-color: $primary-color;

@import "components/molecules/cards/BookCard.scss";
</style>