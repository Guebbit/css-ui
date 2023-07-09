# Image Hover Card
<Badge type="tip">Atom</Badge> <Badge type="info">Cards</Badge>

## Code

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/cards/ImageHoverCard.html -->
</div>
:::

::: code-group
<<< @/public/components-html/molecules/cards/ImageHoverCard.html
<<< @/../components/molecules/cards/ImageHoverCard.scss
:::

## Classes

| Class                  | Description                 |
|:-----------------------|:----------------------------|
| `animate-active`       | Animation active            |
| `animate-on-active`    | Animation active on .active |
| `animate-on-hover`     | Animation active on hover   |
| `animate-mobile`       | Active (show) on mobile     |

## SCSS variables

| Variable                                | Description        | Accepted Values | Default            |
|:----------------------------------------|:-------------------|:----------------|:-------------------|
| `$image-hover-card-mobile-threshold`    | Mobile threshold   | `size`          | `600px`            |
| `$image-hover-card-height`              | Color of cite      | `size`          | `600px`            |
| `$image-hover-card-height-mobile`       | Color of cite text | `size`          | `same as *-height` |
| `$image-hover-card-transition-duration` | Color of cite text | `time`          | `0.5s`             |

<style lang="scss">
@import "docs/theme.scss";

$simple-card-background: rgba($primary-color, 0.5);

@import "components/molecules/cards/SimpleCard.scss";
@import "components/molecules/cards/ImageHoverCard.scss";
</style>
