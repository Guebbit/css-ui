# Arrow Scroll Down (TODO)
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">scroll</Badge>
<Badge type="danger">TODO</Badge>

## Code

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/animations/ScrollDownMouse.html -->
</div>

::: code-group
<<< @/public/components-html/atoms/animations/ScrollDownMouse.html
<<< @/../components/atoms/animations/ScrollDownMouse.scss
:::


## SCSS variables

| Variable                    | Description    | Accepted Values | Default   |
|:----------------------------|:---------------|:----------------|:----------|
| `$arrow-scroll-down-color`  | Color          | `color`         | `#000000` |
| `$arrow-scroll-down-height` | Arrow size     | `size`          | `0.5em`   |
| `$arrow-scroll-down-width`  | Arrow size     | `size`          | `2em`     |
| `$arrow-scroll-down-speed`  | Arrow speed    | `color`         | `3s`      |


<style lang="scss">
@import "../../theme.scss";

$scroll-down-mouse-color: $primary-color;

@import "components/atoms/animations/ScrollDownMouse.scss";
</style>