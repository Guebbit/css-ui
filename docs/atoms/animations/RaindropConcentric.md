# Raindrop Concentric
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge>

## Code

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/animations/RaindropConcentric.html -->
</div>

::: code-group
<<< @/public/components-html/atoms/animations/RaindropConcentric.html
<<< @/../components/atoms/animations/RaindropConcentric.scss
:::

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/animations/RaindropConcentric-change.html -->
</div>

<<< @/public/components-html/atoms/animations/RaindropConcentric-change.html

## Classes

| Class          | Description                                                            |
|:---------------|:-----------------------------------------------------------------------|
| `only-once`    | Animation count becomes 1                                              |
| `color-change` | Change color with `$raindrop-concentric-color-change` during animation |

## SCSS variables

| Variable                              | Description                      | Accepted Values | Default   |
|:--------------------------------------|:---------------------------------|:----------------|:----------|
| `$raindrop-concentric-color`          | Primary color                    | `color`         | `#000000` |
| `$raindrop-concentric-color-change`   | Color transformation             | `color`         | `#000000` |
| `$raindrop-concentric-size`           | Main size                        | `size`          | `150px`   |
| `$raindrop-concentric-width`          | Border size                      | `size`          | `12px`    |
| `$raindrop-concentric-duration`       | Duration of animation (speed)    | `time`          | `#3ff9dc` |
| `$raindrop-concentric-circle-number`  | Number of divs (change HTML too) | `number`        | `3`       |

<style lang="scss">
@import "docs/theme.scss"

.dev-section {
    overflow: hidden;
    height: 400px;
}

$raindrop-concentric-color: $primary-color;
$raindrop-concentric-color-change: $secondary-color;

@import "components/atoms/animations/RaindropConcentric.scss";
</style>