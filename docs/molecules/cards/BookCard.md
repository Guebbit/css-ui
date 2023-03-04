# Book Card
<Badge type="tip">Atom</Badge> <Badge type="info">Card</Badge>

<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/cards/BookCard.html -->
</div>

::: code-group
<<< @/public/components-html/molecules/cards/BookCard.html
<<< @/../components/molecules/cards/BookCard.scss
:::

## Classes

| Class          | Description                 |
|:---------------|:----------------------------|
| `active`       | As if it's focused or hover |
| `is-hoverable` | Same as `active` on hover   |

## SCSS variables

| Variable                 | Description      | Accepted Values | Default       |
|:-------------------------|:-----------------|:----------------|:--------------|
| `$book-card-color`       | Text color       | `color`         | `#000000`     |
| `$book-card-rotation`    | Title color      | `color`         | `#000000`     |
| `$book-card-spine-width` | Background color | `color`         | `transparent` |


<style lang="scss">
@import "../../theme.scss";

$book-card-color: $primary-color;

@import "components/molecules/cards/BookCard.scss";
</style>