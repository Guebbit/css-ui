# Book Front Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

## Code

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/animations/BookFrontLoad.html -->
</div>

::: code-group
<<< @/public/components-html/atoms/animations/BookFrontLoad.html
<<< @/../components/atoms/animations/BookFrontLoad.scss
:::

## SCSS variables

| Variable                    | Description     | Accepted Values | Default |
|:----------------------------|:----------------|:----------------|:--------|
| `$book-front-load-size`     | Main color      | `color`         | `100px` |
| `$book-front-load-fill`     | Page color      | `color`         | `#fff`  |
| `$book-front-load-stroke`   | Border color    | `color`         | `#000`  |
| `$book-front-load-duration` | Animation speed | `time`          | `1.2s`  |

<style lang="scss">
@import "../../theme.scss";

$book-front-load-stroke: $primary-color;

@import "components/atoms/animations/BookFrontLoad.scss";
</style>