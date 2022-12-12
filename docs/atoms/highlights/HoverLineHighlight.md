# Hover Line Hightlight 
<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

## Code

<div class="dev-section">
    <div class="hover-line-highlight">Default</div>
    <div class="hover-line-highlight active">Active</div>
    <div class="hover-line-highlight right-highlight">Right</div>
    <div class="hover-line-highlight bottom-highlight">Bottom</div>
    <div class="hover-line-highlight top-highlight">Top</div>
</div>

```html
    <div class="hover-line-highlight">Default</div>

    <div class="hover-line-highlight active">Active</div>

    <div class="hover-line-highlight right-highlight">Right</div>

    <div class="hover-line-highlight bottom-highlight">Bottom</div>

    <div class="hover-line-highlight top-highlight">Top</div>
```

## Classes

| Class               | Description      |
|:--------------------|:-----------------|
| `right-highlight`   | Right highlight  |
| `top-highlight`     | Top highlight    |
| `bottom-highlight`  | Bottom highlight |


## SCSS variables

| Variable                       | Description | Accepted Values | Default           |
|:-------------------------------|:------------|:----------------|:------------------|
| `$hover-line-highlight-color`  | Main color  | `color`         | `rgba(#fff, 70%)` |
| `$hover-line-highlight-size`   | Size        | `size`          | `3px`             |

<style lang="scss">
@import "../../theme.scss";

$hover-line-highlight-color: $primary-color;

@import "components/atoms/highlights/HoverLineHighlight.scss";
</style>
