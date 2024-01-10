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

```html
<div class="scroll-down-arrow">
    <div></div>
    <div></div>
    <div></div>
    <span class="scroll-down-text">Scroll down</span>
</div>
```

## Component CSS

<<< @/../components/atoms/animations/ScrollDownArrow.scss

## Documentation CSS

```scss
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/ScrollDownArrow.scss" as * with (
    $color: theme.$primary-color
);
```

## SCSS variables

| Variable    | Description        | Accepted Values | Default   |
|:------------|:-------------------|:----------------|:----------|
| `$color`    | Color              | `color`         | `#000000` |
| `$size`     | Arrow size         | `size`          | `2em`     |
| `$duration` | Animation duration | `color`         | `3s`      |


<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/ScrollDownArrow.scss" as * with (
    $color: theme.$primary-color
);
</style>