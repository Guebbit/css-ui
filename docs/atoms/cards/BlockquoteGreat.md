# Great Blockquote
<Badge type="tip">Atom</Badge> <Badge type="info">Cards</Badge> <Badge type="info">Blockquote</Badge>

## Code

<div class="dev-section">
    <blockquote class="blockquote-great">
        <p>
            Design is not just what it looks like and feels like.
            Design is how it works.
        </p>
        <cite>Steve Jobs</cite>
    </blockquote>
</div>

```html
    <blockquote class="blockquote-great">
        <p>
            Design is not just what it looks like and feels like.
            Design is how it works.
        </p>
        <cite>Steve Jobs</cite>
    </blockquote>
```

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
