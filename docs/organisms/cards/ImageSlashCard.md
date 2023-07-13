# Image Slash Card
<Badge type="tip">Atom</Badge> <Badge type="info">Cards</Badge>

## Code

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/organisms/cards/ImageSlashCard.html -->
</div>
:::

::: code-group
<<< @/public/components-html/organisms/cards/ImageSlashCard.html#default [default]
<<< @/public/components-html/organisms/cards/ImageSlashCard.html#right [right]
<<< @/../components/organisms/cards/ImageSlashCard.scss [CSS]
:::

## SCSS variables

| Variable                             | Description                                                                     | Accepted Values | Default                                     |
|:-------------------------------------|:--------------------------------------------------------------------------------|:----------------|:--------------------------------------------|
| `$image-slash-card-height`           | Height, necessary due to tecnical limits (border-width doesn't accept % values) | `size`          | `400px`                                     |
| `$image-slash-card-color`            | Main color of card (background)                                                 | `color`         | `#000`                                      |
| `$image-slash-card-on-color`         | Text color                                                                      | `color`         | `contrast of *-color`                       |
| `$image-slash-card-on-color-shadow`  | Shadow of text color                                                            | `color`         | `contrast and 0.3 opacity of of *-on-color` |
| `$image-slash-card-button-color`     | Button background color                                                         | `color`         | `contrast of *-color`                       |
| `$image-slash-card-button-on-color`  | Button text color                                                               | `color`         | `contrast of *-button-color`                |

<style lang="scss">
@import "docs/theme.scss";

$image-slash-card-color: $primary-color;
$image-slash-card-button-color: $secondary-color;
$image-slash-card-on-color: #fff;
$image-slash-card-button-on-color: #fff;

@import "components/organisms/cards/ImageSlashCard.scss";
</style>
