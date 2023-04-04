# Advancing Moon
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">reveal</Badge>

Use the SCSS or CSS variables to do what you want with this special fade-in or fade-out animation

## Code

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/animations/AdvancingMoon.html -->
</div>

::: code-group
<<< @/public/components-html/atoms/animations/AdvancingMoon.html
<<< @/../components/atoms/animations/AdvancingMoon.scss
:::

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/animations/AdvancingMoon-fade.html -->
</div>

<<< @/public/components-html/atoms/animations/AdvancingMoon-fade.html

## Classes

| Class      | Description                              |
|:-----------|:-----------------------------------------|
| `active`   | Animation is :hover or .active triggered |
| `fade-out` | fade-out  (reverse behaviour)            |
| `to-left`  | Left orientation                         |


## SCSS variables

:::tip
BONUS: CSS variables too
:::

| Variable                               | Description                | Accepted Values | Default   |
|:---------------------------------------|:---------------------------|:----------------|:----------|
| `$advancing-moon-reveal-speed`         | Speed of transition        | `color`         | `#000000` |
| `$advancing-moon-reveal-blur`          | Blur intensity             | `size`          | `0.5em`   |
| `$advancing-moon-reveal-opacity-start` | Starting opacity intensity | `size`          | `2em`     |
| `$advancing-moon-reveal-opacity-end`   | Starting opacity intensity | `size`          | `2em`     |
| `$advancing-moon-reveal-scale-start`   | Starting scale (g          | `color`         | `3s`      |
| `$advancing-moon-reveal-scale-end`     | Starting scale (g          | `color`         | `3s`      |
| `$advancing-moon-reveal-slide`         | Arrow speed                | `color`         | `3s`      |


<style lang="scss">
@import "docs/theme.scss";

@import "components/atoms/animations/AdvancingMoon.scss";
</style>