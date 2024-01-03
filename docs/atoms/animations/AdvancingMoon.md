# Advancing Moon
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">reveal</Badge>

Use the SCSS or CSS variables to do what you want with this special fade-in or fade-out animation

## Code

::: raw
<div class="dev-section">
    <img class="advancing-moon-reveal animate-on-hover animate-to-left" src="https://placekitten.com/400/400"/>
    <img
        class="advancing-moon-reveal animate-on-hover"
        src="https://placekitten.com/400/400"
        style="--advancing-moon-reveal-opacity-start: 1; --advancing-moon-reveal-scale-end: 1.5"
    />
</div>
:::

``` html
<img class="advancing-moon-reveal animate-on-hover animate-to-left" src="https://placekitten.com/400/400"/>
<img
    class="advancing-moon-reveal animate-on-hover"
    src="https://placekitten.com/400/400"
    style="--advancing-moon-reveal-opacity-start: 1; --advancing-moon-reveal-scale-end: 1.5"
/>
```

::: raw
<div class="dev-section">
    <img class="advancing-moon-reveal animate-on-hover animate-fade-out" src="https://placekitten.com/400/400" />
    <img class="advancing-moon-reveal animate-on-hover animate-fade-out to-left" src="https://placekitten.com/400/400"/>
</div>
:::


``` html
<img class="advancing-moon-reveal animate-on-hover animate-fade-out" src="https://placekitten.com/400/400" />
<img class="advancing-moon-reveal animate-on-hover animate-fade-out animate-to-left" src="https://placekitten.com/400/400"/>
```

## Common CSS

<<< @/../components/atoms/animations/AdvancingMoon.scss

## Classes

| Class               | Description                              |
|:--------------------|:-----------------------------------------|
| `animate-active`    | Animation active                         |
| `animate-on-active` | Animation active on .active              |
| `animate-on-hover`  | Animation active on hover                |
| `animate-fade-out`  | fade-out  (reverse behaviour)            |
| `animate-to-left`   | Left orientation                         |


## SCSS variables

| Variable                               | Description                    | Accepted Values | Default |
|:---------------------------------------|:-------------------------------|:----------------|:--------|
| `$advancing-moon-reveal-speed`         | Speed of transition            | `time`          | `1s`    |
| `$advancing-moon-reveal-blur`          | Blur intensity                 | `size`          | `10px`  |
| `$advancing-moon-reveal-opacity-start` | Opacity intensity at the start | `size`          | `0.5`   |
| `$advancing-moon-reveal-opacity-end`   | Opacity intensity at the end   | `size`          | `1`     |
| `$advancing-moon-reveal-scale-start`   | Scale at the start             | `number`        | `0.6`   |
| `$advancing-moon-reveal-scale-end`     | Scale at the end               | `number`        | `1`     |
| `$advancing-moon-reveal-slide`         | Animation duration             | `percentage`    | `40%`   |


<style lang="scss">
@use "docs/theme.scss";
@use "components/atoms/animations/AdvancingMoon.scss";
</style>