# Simple Card
<Badge type="tip">Atom</Badge> <Badge type="info">Card</Badge>

## Code

<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/cards/SimpleCard.html -->
</div>

::: code-group
<<< @/public/components-html/molecules/cards/SimpleCard.html
<<< @/../components/molecules/cards/SimpleCard.scss
:::

## SCSS variables

| Variable                     | Description        | Accepted Values | Default                 |
|:-----------------------------|:-------------------|:----------------|:------------------------|
| `$simple-card-background`    | Background color   | `color`         | `transparent`           |
| `$simple-card-color`         | Primary color      | `color`         | `#000000`               |
| `$simple-card-text-color`    | Text color         | `color`         | `#212121`               |
| `$simple-card-shadow-color`  | Shadow color       | `color`         | `#000000`               |
| `$simple-card-icon-color`    | Icon color         | `color`         | `as $simple-card-color` |
| `$$simple-card-border-color` | Border color       | `color`         | `as $simple-card-color` |
| `$simple-card-border-width`  | Border width       | `size`          | `6px`                   |
| `$simple-card-padding`       | Padding of content | `size`          | `24px`                  |




<style lang="scss">
@import "../../theme.scss";

$simple-card-color: $primary-color;

@import "components/molecules/cards/SimpleCard.scss";
</style>