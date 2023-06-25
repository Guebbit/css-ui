# Icon Showcase Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

## Code

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/animations/IconShowcaseLoad.html -->
</div>

::: code-group
<<< @/public/components-html/atoms/animations/IconShowcaseLoad.html
<<< @/../components/atoms/animations/IconShowcaseLoad.scss
:::

## SCSS variables

| Variable                          | Description              | Accepted Values | Default   |
|:----------------------------------|:-------------------------|:----------------|:----------|
| `$icon-showcase-load-color`       | Color of border and text | `color`         | `#ffffff` |
| `$icon-showcase-load-background`  | Primary/Background color | `size`          | `#000000` |
| `$icon-showcase-load-duration`    | Duration of animation    | `size`          | `4s`      |
| `$icon-showcase-load-size`        | Size                     | `size`          | `4em`     |
| `$icon-showcase-load-item-number` | Number of items          | `number`        | `3`       |


<style lang="scss">
@import "docs/theme.scss";

$icon-showcase-load-background: $primary-color;
$icon-showcase-load-size: 8em;

@import "components/atoms/animations/IconShowcaseLoad.scss";
</style>