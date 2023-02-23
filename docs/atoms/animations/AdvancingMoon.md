# Advancing Moon
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">reveal</Badge>

Use the SCSS or CSS variables to do what you want with this special fade-in or fade-out animation

## Code

<div class="dev-section">
    <img 
        class="advancing-moon-reveal"
        src="http://placekitten.com/400/400"
        style="--advancing-moon-reveal-opacity-start: 1; --advancing-moon-reveal-scale-end: 1.5"
    />
    <img class="advancing-moon-reveal to-left" src="http://placekitten.com/400/400"/>
</div>

```html
    <img
        class="advancing-moon-reveal"
        src="http://placekitten.com/400/400"
        style="--advancing-moon-reveal-opacity-start: 1; --advancing-moon-reveal-scale-end: 1.5"
    />
    <img class="advancing-moon-reveal to-left" src="http://placekitten.com/400/400"/>
```

<div class="dev-section">
    <img class="advancing-moon-reveal fade-out" src="http://placekitten.com/400/400" />
    <img class="advancing-moon-reveal fade-out to-left" src="http://placekitten.com/400/400"/>
</div>

```html
    <img class="advancing-moon-reveal fade-out" src="http://placekitten.com/400/400" />
    <img class="advancing-moon-reveal fade-out to-left" src="http://placekitten.com/400/400"/>
```

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
@import "../../theme.scss";

@import "components/atoms/animations/AdvancingMoon.scss";
</style>