# Great Blockquote
<Badge type="tip">Atom</Badge> <Badge type="info">Cards</Badge> <Badge type="info">Blockquote</Badge>

## Code

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/cards/BlockquoteGreat.html -->
</div>

::: code-group
<<< @/public/components-html/atoms/cards/BlockquoteGreat.html
<<< @/../components/atoms/cards/BlockquoteGreat.scss
:::

## SCSS variables

| Variable                            | Description        | Accepted Values | Default         |
|:------------------------------------|:-------------------|:----------------|:----------------|
| `$blockquote-great-color`           | Color of text      | `color`         | `#000`          |
| `$blockquote-great-cite-color`      | Color of cite      | `color`         | `same as color` |
| `$blockquote-great-cite-text-color` | Color of cite text | `color`         | `#fff`          |

<style lang="scss">
@import "../../theme.scss";

$blockquote-great-color: $primary-color;
$blockquote-great-cite-color: $secondary-color;
$blockquote-great-cite-text-color: guebbit-contrast($blockquote-great-cite-color);

@import "components/atoms/cards/BlockquoteGreat.scss";
</style>
