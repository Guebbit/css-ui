# Scroll Down Arrow
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">scroll</Badge>

## Code

::: raw
<div class="dev-section">
    <div class="scroll-down-arrow">
        <div></div>
        <div></div>
        <div></div>
        <span class="scroll-down-text">Scroll down</span>
    </div>
</div>
:::

::: code-group
``` html
    <div class="scroll-down-arrow">
        <div></div>
        <div></div>
        <div></div>
        <span class="scroll-down-text">Scroll down</span>
    </div>
```
<<< @/../components/atoms/animations/ScrollDownArrow.scss
:::


## SCSS variables

| Variable                      | Description        | Accepted Values | Default   |
|:------------------------------|:-------------------|:----------------|:----------|
| `$arrow-scroll-down-color`    | Color              | `color`         | `#000000` |
| `$arrow-scroll-down-height`   | Arrow size         | `size`          | `0.5em`   |
| `$arrow-scroll-down-width`    | Arrow size         | `size`          | `2em`     |
| `$arrow-scroll-down-duration` | Animation duration | `color`         | `3s`      |


<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/ScrollDownArrow.scss" as * with (
    $arrow-scroll-down-color: theme.$primary-color
);
</style>