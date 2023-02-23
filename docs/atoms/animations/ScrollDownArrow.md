# Scroll Down Arrow
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">scroll</Badge>

## Code

<div class="dev-section">
    <div class="scroll-down-arrow">
        <div></div>
        <div></div>
        <div></div>
        <span class="text">Scroll down</span>
    </div>
</div>

```html
<div class="scroll-down-arrow">
    <div></div>
    <div></div>
    <div></div>
    <span class="text">Scroll down</span>
</div>
```

## SCSS variables

| Variable                    | Description    | Accepted Values | Default   |
|:----------------------------|:---------------|:----------------|:----------|
| `$arrow-scroll-down-color`  | Color          | `color`         | `#000000` |
| `$arrow-scroll-down-height` | Arrow size     | `size`          | `0.5em`   |
| `$arrow-scroll-down-width`  | Arrow size     | `size`          | `2em`     |
| `$arrow-scroll-down-speed`  | Arrow speed    | `color`         | `3s`      |


<style lang="scss">
@import "../../theme.scss";

$arrow-scroll-down-color: $primary-color;

@import "components/atoms/animations/ScrollDownArrow.scss";
</style>