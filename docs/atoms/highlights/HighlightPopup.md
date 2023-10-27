# Highlight popup

<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/highlights/HighlightPopup.html -->
</div>

## Code

::: code-group
<<< @/public/components-html/atoms/highlights/HighlightPopup.html
<<< @/../components/atoms/highlights/HighlightPopup.scss
:::

## Classes

| Class                         | Description                   |
|:------------------------------|:------------------------------|
| `animate-active`              | Animation active              |
| `animate-on-active`           | Animation active on .active   |
| `animate-on-hover`            | Animation active on hover     |
| `highlight-popup-horizontal`  | Horizontal animation          |
| `highlight-popup-reverse`     | Animation reverse direction   |
| `highlight-popup-skew`        | Skew animation                |


## SCSS variables

| Variable                       | Description        | Accepted Values | Default   |
|:-------------------------------|:-------------------|:----------------|:----------|
| `$highlight-popup-color`       | Background color   | `color`         | `#000000` |
| `$highlight-popup-duration`    | Animation duration | `time`          | `0.2s`    |


<style lang="scss">
@import "docs/theme.scss";

.highlight-popup {
    width: 130px;
    line-height: 40px;
    text-align: center;
}

$highlight-popup-color: $primary-color;

@import "components/atoms/highlights/HighlightPopup.scss";
</style>